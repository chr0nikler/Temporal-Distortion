@script RequireComponent(CharacterController);

var playernum:int=1;
animation["jump"].layer=1;
animation["midjump"].layer=1;
animation["injured"].layer=2;
animation["slash1"].layer=2;
animation["down_tilt"].layer=2;

static var walkSpeed:float=6.0;
static var runSpeed:float=9.0;
static var jumpSpeed:float=15.0;
static var weight:float=1.0;
static var moveDirection:Vector3=Vector3.zero;
static var grounded:boolean=false;
static var controller:CharacterController;
static var flags:CollisionFlags;
static var jumpstate:int=0;
static var upcheck:int=0;
static var upwait:int=0;
static var upAttack:int=0;
static var downcheck:int=0;
static var keywait:int=0;
static var lastxkey:String="Null";
static var lasthit:String="Self";
static var KOs:int[] = new int[3];
static var dashing:int=0;
static var shielding:int=0;
static var shieldobject:Transform;
static var helplessleft:int=0;
static var percent:int=0;

static var charging :int = 0;
static var charged : boolean = false;
static var attack : int = 0;
static var stock:int=SelectCharacter.stockAmount;
static var now : float;
static var dead : float;
static var characterScript : String;

function checkChar() {
	if (SelectCharacter.player1Character == 1) {
		characterScript = "tahuScript";
	}
}
function Start() {
	checkChar();
	gameObject.AddComponent(tahuScript);
	gameObject.tag = "Player";
	var tempshield : GameObject;
	now = Time.time;
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
		dead = Time.time - now;
		Debug.Log("" + dead);
	} 
	transform.position = GameObject.Find("P1Spawn").transform.position;
}
function LastHit (lasthittemp:String)
{
	lasthit = lasthittemp;
}
function Damage (damagetaketemp:int){
	if (lasthit !="Player1")
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
		gameObject.GetComponent(characterScript).midJumping(playernum);
		gameObject.GetComponent(characterScript).forwardAerial(playernum);
	}
	if(grounded){
		if(attackCheck() && attack < 10)
		{
		}
		else
		{
			
			gameObject.GetComponent(characterScript).groundAttack(playernum);
			if(charging > 0)
			{
				attack = 10;
			}
			else
			{
				attack = 0;
			}
		}
		jumpstate = 0;
		gameObject.GetComponent(characterScript).idleSprint(playernum);
	}
	
	gameObject.GetComponent(characterScript).specialAttack(playernum);
	
	
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
	
	if(Input.GetKey(ControlSetup.upButton))
	{
		upAttack = 1;
	} else {
		upAttack = 0;
	}
	
	if (Input.GetAxis("P1Horizontal") > 0 && !Input.GetKeyDown(ControlSetup.attackButton))
	{
		if ((keywait > 1) && (keywait < 10) && (lastxkey == "Right") && grounded)
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
	} else if (Input.GetAxis("P1Horizontal") < 0 && !Input.GetKeyDown(ControlSetup.attackButton))
		{
			if ((keywait > 1) && (keywait < 10) && (lastxkey == "Left") && grounded)
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
		
	keywait ++;
	
}



function attackCheck(): boolean
{
	if(Input.GetKey(ControlSetup.attackButton))
	{
		attack++;
		if(attack > 11)
		{
			attack = 11;
			return(false);
		}
		return(true);
	}
	else
	{
		return(false);
	}
}

function charge()
{
	if(Input.GetKey(ControlSetup.attackButton))
	{
		charging++;
		if(charging > 40)
		{
			charging = 40;
		}
	}
}

