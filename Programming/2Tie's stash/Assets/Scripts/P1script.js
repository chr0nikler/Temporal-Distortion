var playernum:int=1;
animation["jump"].layer=1;
animation["midjump"].layer=1;
animation["injured"].layer=2;
animation["punch"].layer=2;

var walkSpeed:float=6.0;
var runSpeed:float=9.0;
var jumpSpeed:float=15.0;
var weight:float=0.75;
private var moveDirection:Vector3=Vector3.zero;
static var grounded:boolean=false;
private var controller:CharacterController;
private var flags:CollisionFlags;
static var jumpstate:int=0;
static var upcheck:int=0;
var upwait:int=0;
var downcheck:int=0;
var keywait:int=0;
var lastxkey:String="Null";
var lasthit:String="Self";
var KOs:int[] = new int[3];
var dashing:int=0;
var shielding:int=0;
var shieldobject:Transform;
var helplessleft:int=0;
var percent:int=0;
var stock:int=3;

function Start() {
	gameObject.tag = "Player";
	var tempshield : GameObject;
	stock = CharDataHolder.stocknum;
}

/*function OnGUI() {
	var e : Event = Event.current;
	if (e.isKey) 
	{
		Debug.Log("Detected key code: " + e.keyCode);
	}
}*/
function OnDeath () {
stock--;
if (lasthit == "Self")
{
	KOs[2]++;
} else {
	KOs[1]++;
}
percent = 0;

transform.position = GameObject.Find("P1Spawn").transform.position;
}
function LastHit (lasthittemp:String)
{
	lasthit = lasthittemp;
}
function Damage (damagetaketemp:int){
if (lasthit != "Player1")
{
	percent+=damagetaketemp;
}
}
function Knockback (Kbtemp:Vector4)
{
if (lasthit != "Player1")
{
	if (jumpstate == 2)
	{
		jumpstate = 1;
	}
	if (Kbtemp.z < transform.position.x)
	{
	moveDirection.x = 0.3*(1+percent)*Kbtemp.x;
	}else
	{
	moveDirection.x = -0.3*(1+percent)*Kbtemp.x;
	}
	moveDirection.y = 0.3*(1+percent)*Kbtemp.y;
	helplessleft = Kbtemp.w;
	
}
}
function Update () {
	moveDirection.y -= weight;
	if (grounded)
	{
		helplessleft = 0;
	}
	if (helplessleft == 0)
	{
		Keyupdate();
	}else
	{
		helplessleft--;
		animation.CrossFade("injured");
	}
	if (percent>999)
	{
		percent=999;
	}
	if (percent<0)
	{
		percent=0;
	}
	Gui_StatDisplay.player1percent=percent;
	Gui_StatDisplay.player1stock=stock;
	Gui_StatDisplay.player1kos=KOs;
	CharDataHolder.p1KOS=KOs;
	playernum = CharDataHolder.p1Char;
	
	if (stock == 0)
	{
		Destroy (gameObject);
	}
	
	controller=GetComponent(CharacterController);
	flags=controller.Move(moveDirection*Time.deltaTime);	
	grounded=(flags & CollisionFlags.CollidedBelow) !=0;	
}
function Keyupdate() 
{
	moveDirection.x=Input.GetAxis("P1Horizontal")*(((1-dashing)*walkSpeed)+(dashing*runSpeed));
	if(!grounded){
		if (Input.GetButtonDown("P1Jump") && upwait == 1){
			if (jumpstate != 2)
			{
				moveDirection.y=jumpSpeed;
				jumpstate = 2;
				animation.CrossFade("midjump");
			}
		}
	}
	if(grounded){
			jumpstate = 0;
			if (Input.GetButtonDown("P1Jump")){
			moveDirection.y=jumpSpeed;
			jumpstate = 1;
			animation.CrossFade("jump");
		} else {
			moveDirection.y = 0;
			animation.CrossFade("walk");
		}
	}
	
	if (Input.GetButtonDown("P1Special"))
	{
		if (upcheck == 1)
		{
		Debug.Log("Up Special");
		} else {
		if (downcheck == 1)
		{
		Debug.Log("Down Special");
		} else {
		if (lastxkey == "Right")
		{
			if (keywait == 1)
			{
			Debug.Log("Side Special");
			} else {
		Debug.Log("Neutral Special");
		}
		} else {
		if (lastxkey == "Left")
		{
			if (keywait == 1)
			{
			Debug.Log("Side Special");
			} else {
		Debug.Log("Neutral Special");
		}
		}
		}
		}
		}
	}
	
	if (Input.GetButtonDown("P1Standard"))
	{
		animation.CrossFade("punch");
		if (grounded)
		{
			if (upcheck == 1)
			{
				Debug.Log("Up Tilt");
			} else {
			if (downcheck == 1)
			{
				Debug.Log("Down Tilt");
			} else {
			if (lastxkey == "Right")
			{
				if (keywait == 1)
				{
					Debug.Log("Side Tilt");
				} else {
				Debug.Log("Neutral 1");
				}
			} else {
			if (lastxkey == "Left")
			{
				if (keywait == 1)
				{
					Debug.Log("Side Tilt");
				} else {
				Debug.Log("Neutral 1");
				}
			}
			}
			}
			}
		} else {
		if (upcheck == 1)
		{
		Debug.Log("Up Aerial");
		} else {
		if (downcheck == 1)
		{
		Debug.Log("Down Aerial");
		} else {
		if (lastxkey == "Right")
		{
			if (keywait == 1)
			{
			Debug.Log("Side Aerial");
			} else {
		Debug.Log("Neutral Aerial");
		}
		} else {
		if (lastxkey == "Left")
		{
			if (keywait == 1)
			{
			Debug.Log("Side Aerial");
			} else {
			Debug.Log("Neutral Aerial");
		}
		}
		}
		}
		}
		}
	}

    if (Input.GetButtonDown("P1Shield"))
    {
//        if (!tempshield)
//        {
//            tempshield = (GameObject)Instantiate(shieldobject,transform.position, transform.rotation);
//        }
    }
    else
    {
//        if (tempshield)
//        {
//            Destroy(tempshield);
//        }
    }
	
	if (Input.GetButton("P1Crouch"))
	{
		downcheck = 1;
	} else {
		downcheck = 0;
	}
	
	if (Input.GetButton("P1Jump"))
	{
		upcheck = 1;
		upwait = 0;
	} else {
		upcheck = 0;
		upwait = 1;
	}
	
	if (Input.GetAxis("P1Horizontal") > 0)
	{
		if ((keywait > 1) && (keywait < 25) && (lastxkey == "Right") && grounded)
		{
			dashing = 1;
		}
		if (dashing && lastxkey == "Left")
		{
			dashing = 0;
		}
		if (lastxkey == "Left")
		{
				transform.Rotate(0,180,0);
		}
		if (lastxkey == "Null")
		{
			transform.Rotate(0,90,0);
		}
		lastxkey = "Right";
		keywait = 0;
	} else {
		if (Input.GetAxis("P1Horizontal") < 0)
		{
			if ((keywait > 1) && (keywait < 25) && (lastxkey == "Left") && grounded)
			{
				dashing = 1;
			}
			if (dashing && lastxkey == "Right")
			{
				dashing = 0;
			}
			if (lastxkey == "Right")
			{
					transform.Rotate(0,180,0);
			}
			if (lastxkey == "Null")
			{
				transform.Rotate(0,-90,0);
			}
			lastxkey = "Left";
			keywait = 0;
		} else {
			animation.CrossFade("idle");
		}
	}
	
	keywait ++;
}

@script RequireComponent(CharacterController)