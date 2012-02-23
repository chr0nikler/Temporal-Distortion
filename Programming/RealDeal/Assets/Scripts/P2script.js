var playernum:int=2;


var walkSpeed:float=6.0;
var runSpeed:float=9.0;
var jumpSpeed:float=10.0;
var weight:float=1.0;
private var moveDirection:Vector3=Vector3.zero;
static var grounded:boolean=false;
private var controller:CharacterController;
private var flags:CollisionFlags;
static var jumpstate:int=0;
static var upcheck:int=0;
var keywait:int=0;
var lastxkey:String="Null";
var lasthit:String="Self";
var KOs:int[] = new int[3]; //Kills, Deaths, SDs.
var dashing:int=0;
var shielding:int=0;
var shieldobject:Transform;
var helplessleft:int=0;
static var percent:int=0;
var stock:int=1;

function Start() {
	gameObject.tag = "Player";
	var tempshield : GameObject;
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
}
percent = 0;
if (stock == 0)
{
	Destroy (gameObject);
}
transform.position = GameObject.Find("P2Spawn").transform.position;
}
function LastHit (lasthittemp:String)
{
	lasthit = lasthittemp;
}
function Damage (damagetaketemp:int){
if (lasthit != "Player2")
{
	percent+=damagetaketemp;
}
}
function Knockback (Kbtemp:Vector4)
{
if (lasthit != "Player2")
{
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
	}
	if (percent>999)
	{
		percent=999;
	}
	if (percent<0)
	{
		percent=0;
	}
	Gui_StatDisplay.player2percent=percent;
	Gui_StatDisplay.player2stock=stock;
	
	
	
	controller=GetComponent(CharacterController);
	flags=controller.Move(moveDirection*Time.deltaTime);	
	grounded=(flags & CollisionFlags.CollidedBelow) !=0;
}
function Keyupdate(){
	moveDirection.x=Input.GetAxis("P2Horizontal")*(((1-dashing)*walkSpeed)+(dashing*runSpeed));
	if(grounded){
			jumpstate = 0;
			if (Input.GetButton("P2Jump") && upcheck == 0){
			moveDirection.y=jumpSpeed;
			jumpstate = 1;
		} else {
			moveDirection.y = 0;
		}
	} else {
		if (Input.GetButton("P2Jump") && upcheck == 0){
			if (jumpstate != 2)
			{
				moveDirection.y=jumpSpeed;
				jumpstate = 2;
			}
		}
	}

    if (Input.GetButtonDown("P2Shield"))
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


	if (Input.GetButton("P2Jump"))
	{
		upcheck = 1;
	} else {
		upcheck = 0;
	}
	
	if (Input.GetAxis("P2Horizontal") > 0)
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
		if (Input.GetAxis("P2Horizontal") < 0)
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
		}
	}
	
	keywait ++;
}

@script RequireComponent(CharacterController)