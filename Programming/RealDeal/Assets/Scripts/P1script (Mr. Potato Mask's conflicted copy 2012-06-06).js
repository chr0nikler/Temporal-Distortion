var playernum:int=1;
animation["jump"].layer=1;
animation["midjump"].layer=1;
animation["injured"].layer=2;
animation["slash1"].speed = 2.0;
animation["slash2"].speed = 1.3;
animation["flip_kick"].speed = 2.5;
animation["jump"].speed = 20.0;

var walkSpeed:float=6.0;
var runSpeed:float=9.0;
var jumpSpeed:float=15.0;
var weight:float=1.0;
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
static var percent:int=0;
var charge : float = 0.0;
var comboCount : int = 0;
var timer : float = 0;
var stock:int=SelectCharacter.stockAmount;


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
} else {
	KOs[1]++;
}
percent = 0;
if (stock == 0)
{
	Gui_StatDisplay.player1stock = 0;
	Destroy (gameObject);
}
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
	
	if (stock == 0)
	{
		Gui_StatDisplay.player1stock=stock;
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
		if (Input.GetKeyDown(ControlSetup.jumpButton) && upwait >= 3){
			if (jumpstate != 2)
			{
				moveDirection.y=jumpSpeed;
				jumpstate = 2;
				animation.CrossFadeQueued("midjump", 0.3, QueueMode.PlayNow);
				animation.CrossFadeQueued("falling", 0.3, QueueMode.PlayNow);
			}
		}
	}
	if(grounded){
			if (Input.GetKeyDown(ControlSetup.attackButton) && upcheck ==  1 && grounded)
			{
				animation.CrossFadeQueued("up_tilt",0.3,QueueMode.PlayNow);
				Debug.Log("Up Tilt");
			}
			else if(Input.GetKeyDown(ControlSetup.attackButton) && downcheck ==  1 && grounded)
			{
				animation.CrossFadeQueued("down_tilt",0.3,QueueMode.PlayNow);
				Debug.Log("Down Tilt");
			}
			else if(Input.GetKeyDown(ControlSetup.attackButton) && (lastxkey ==  "Right" || lastxkey == "Left") && keywait == 1 && grounded)
			{
				Debug.Log("Side Tilt");
			}
			else if(Input.GetKeyDown(ControlSetup.attackButton))
			{
				animation.CrossFadeQueued("slash1",0.3,QueueMode.PlayNow);
				Debug.Log("slash");
			}
			jumpstate = 0;
			if (Input.GetKey(ControlSetup.jumpButton) && upwait >= 3){
			moveDirection.y=jumpSpeed;
			jumpstate = 1;
			animation.CrossFadeQueued("jump", 0.3, QueueMode.PlayNow);
		} else {
			moveDirection.y = 0;
			animation.CrossFadeQueued("sprint", 0.3, QueueMode.CompleteOthers);
		}
	}
	
	if (Input.GetKeyDown(ControlSetup.specialButton))
	{
		print("special activated!");
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
	
	
		/*if (grounded)
		{
			if (upcheck == 1)
			{
				animation.CrossFadeQueued("up_tilt",0.3,QueueMode.PlayNow);
				Debug.Log("Up Tilt");
			} else {
			if (downcheck == 1)
			{
				animation.CrossFadeQueued("down_tilt",0.3,QueueMode.PlayNow);
				Debug.Log("Down Tilt");
			} else {
			if (lastxkey == "Right")
			{
				if (keywait == 1)
				{
					Debug.Log("Side Tilt");
				} else {
				A_Combo();
				Debug.Log("Neutral 1");
				}
			} else {
			if (lastxkey == "Left")
			{
				if (keywait == 1)
				{
					Debug.Log("Side Tilt");
				} else {
				A_Combo();
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
		}*/

    if (Input.GetKeyDown(ControlSetup.shieldButton))
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
	
	if (Input.GetKey(ControlSetup.downButton))
	{
		downcheck = 1;
	} else {
		downcheck = 0;
	}
	
	if (Input.GetKey(ControlSetup.jumpButton))
	{
		upcheck = 1;
		upwait = 0;
	} else {
		upcheck = 0;
		upwait++;
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
		} else if (grounded) {
			animation.CrossFadeQueued("idle", 0.3, QueueMode.CompleteOthers);
		}
	}
	
	keywait ++;
}

@script RequireComponent(CharacterController)

function A_Combo(){
	
    if (comboCount == 0)
    {
    	timer = Time.time;
        Debug.Log("I served a punch!");
        //Do something awesome to deliver a punch!
        
        animation.CrossFadeQueued("slash1", 0.3, QueueMode.PlayNow);
        comboCount ++;
        
    }
    else
    {
    	if (comboCount == 1 && (Time.time - timer < 1)) {
    		timer = Time.time;
        	comboCount = 1;
        	Debug.Log("I did a combo!");                
        	//Do something awesome for the combo!
        	
       		animation.CrossFadeQueued("slash2",0.3,QueueMode.PlayNow);
        	comboCount ++;
    	}
    	else
    	{
    		if(comboCount == 2 && (Time.time - timer < 0.7))
   			{
    			comboCount = 0;
        		Debug.Log("I kicked!");                
        		//Do something awesome for the combo!
        		
        		animation.CrossFadeQueued("flip_kick",0.3,QueueMode.PlayNow);
        	}
        	else
        	{
        		timer = Time.time;
        		comboCount = 1;
        		Debug.Log("Restart Combo");
        		animation.Stop();
        		animation.CrossFadeQueued("slash1",0.3,QueueMode.CompleteOthers);
        	}
        		
        }
    }
}