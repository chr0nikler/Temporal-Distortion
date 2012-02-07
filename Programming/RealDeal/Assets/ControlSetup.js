var backImage : Texture2D;
var buttonPressed : String;
var playerControlSelected : int = 0;
var controlSelected : int = 0;
var selectedButton : KeyCode;
var selectedButtonName : String;

static var acceptButton: KeyCode = KeyCode.O;
var acceptButtonName : String = "O";
static var backButton : KeyCode = KeyCode.Backspace;
var backButtonName : String = "Backspace";
static var pauseButton : KeyCode = KeyCode.Return;
var pauseButtonName : String = "Return";
static var leftButton : KeyCode = KeyCode.A;
var leftButtonName : String = "A";
static var rightButton : KeyCode = KeyCode.D;
var rightButtonName : String = "D";
static var upButton : KeyCode = KeyCode.W;
var upButtonName : String = "W";
static var downButton : KeyCode = KeyCode.S;
var downButtonName : String = "S";
static var attackButton : KeyCode = KeyCode.O;
var attackButtonName : String = "O";
static var specialButton : KeyCode = KeyCode.P;
var specialButtonName : String = "P";
static var grabButton : KeyCode = KeyCode.I;
var grabButtonName : String = "I";
static var shieldButton : KeyCode = KeyCode.LeftBracket;
var shieldButtonName : String = "[";
static var jumpButton : KeyCode = KeyCode.W;
var jumpButtonName : String = "W";
static var taunt1Button : KeyCode = KeyCode.Alpha1;
var taunt1ButtonName : String = "1";
static var taunt2Button : KeyCode = KeyCode.Alpha2;
var taunt2ButtonName : String = "2";
static var taunt3Button : KeyCode = KeyCode.Alpha3;
var taunt3ButtonName : String = "3";

static var acceptButtonP2 : KeyCode = KeyCode.Keypad5;
var acceptButtonP2Name : String = "Keypad 5";
static var backButtonP2 : KeyCode = KeyCode.KeypadMinus;
var backButtonP2Name : String = "Keypad -";
static var pauseButtonP2 : KeyCode = KeyCode.KeypadEnter;
var pauseButtonP2Name : String = "Keypad Enter";
static var leftButtonP2 : KeyCode = KeyCode.LeftArrow;
var leftButtonP2Name : String = "Left Arrow"; 
static var rightButtonP2 : KeyCode = KeyCode.RightArrow;
var rightButtonP2Name : String = "Right Arrow";
static var upButtonP2 : KeyCode = KeyCode.UpArrow;
var upButtonP2Name : String = "Up Arrow";
static var downButtonP2 : KeyCode = KeyCode.DownArrow;
var downButtonP2Name : String = "Down Arrow";
static var attackButtonP2 : KeyCode = KeyCode.Keypad5;
var attackButtonP2Name : String = "Keypad 5";
static var specialButtonP2 : KeyCode = KeyCode.Keypad6;
var specialButtonP2Name : String = "Keypad 6";
static var grabButtonP2 : KeyCode = KeyCode.Keypad4;
var grabButtonP2Name : String = "Keypad 4";
static var shieldButtonP2 : KeyCode = KeyCode.KeypadPlus;
var shieldButtonP2Name : String = "Keypad +";
static var jumpButtonP2 : KeyCode = KeyCode.UpArrow;
var jumpButtonP2Name : String = "Up Arrow";
static var taunt1ButtonP2 : KeyCode = KeyCode.Keypad7;
var taunt1ButtonP2Name : String = "Keypad 7";
static var taunt2ButtonP2 : KeyCode = KeyCode.Keypad8;
var taunt2ButtonP2Name : String = "Keypad 8";
static var taunt3ButtonP2 : KeyCode = KeyCode.Keypad9;
var taunt3ButtonP2Name : String = "Keypad 9";

static var acceptButtonP3 : KeyCode;
var acceptButtonP3Name : String;
static var backButtonP3 : KeyCode;
var backButtonP3Name : String;
static var pauseButtonP3 : KeyCode;
var pauseButtonP3Name : String;
static var leftButtonP3 : KeyCode;
var leftButtonP3Name : String; 
static var rightButtonP3 : KeyCode;
var rightButtonP3Name : String;
static var upButtonP3 : KeyCode;
var upButtonP3Name : String;
static var downButtonP3 : KeyCode;
var downButtonP3Name : String;
static var attackButtonP3 : KeyCode;
var attackButtonP3Name : String;
static var specialButtonP3 : KeyCode;
var specialButtonP3Name : String;
static var grabButtonP3 : KeyCode;
var grabButtonP3Name : String;
static var shieldButtonP3 : KeyCode;
var shieldButtonP3Name : String;
static var jumpButtonP3 : KeyCode;
var jumpButtonP3Name : String;
static var taunt1ButtonP3 : KeyCode;
var taunt1ButtonP3Name : String;
static var taunt2ButtonP3 : KeyCode;
var taunt2ButtonP3Name : String;
static var taunt3ButtonP3 : KeyCode;
var taunt3ButtonP3Name : String;

static var acceptButtonP4 : KeyCode;
var acceptButtonP4Name : String;
static var backButtonP4 : KeyCode;
var backButtonP4Name : String;
static var pauseButtonP4 : KeyCode;
var pauseButtonP4Name : String;
static var leftButtonP4 : KeyCode;
var leftButtonP4Name : String; 
static var rightButtonP4 : KeyCode;
var rightButtonP4Name : String;
static var upButtonP4 : KeyCode;
var upButtonP4Name : String;
static var downButtonP4 : KeyCode;
var downButtonP4Name : String;
static var attackButtonP4 : KeyCode;
var attackButtonP4Name : String;
static var specialButtonP4 : KeyCode;
var specialButtonP4Name : String;
static var grabButtonP4 : KeyCode;
var grabButtonP4Name : String;
static var shieldButtonP4 : KeyCode;
var shieldButtonP4Name : String;
static var jumpButtonP4 : KeyCode;
var jumpButtonP4Name : String;
static var taunt1ButtonP4 : KeyCode;
var taunt1ButtonP4Name : String;
static var taunt2ButtonP4 : KeyCode;
var taunt2ButtonP4Name : String;
static var taunt3ButtonP4 : KeyCode;
var taunt3ButtonP4Name : String;

function OnGUI () {
if (DemoMenu.menu == 3)
	{
	if (GUI.Button(Rect(10,10,Screen.width*.1,Screen.height/15),backImage))
	{
		DemoMenu.menu = 2;
	}
	if (GUI.Button(Rect(Screen.width*.1,Screen.height*.1,Screen.width*.35,Screen.height*.35),"Player 1"))
	{
		DemoMenu.menu = 4;
		playerControlSelected = 1;
	}
	if (GUI.Button(Rect(Screen.width*.55,Screen.height*.1,Screen.width*.35,Screen.height*.35),"Player 2"))
	{
		DemoMenu.menu = 4;
		playerControlSelected = 2;
	}
	if (GUI.Button(Rect(Screen.width*.1,Screen.height*.55,Screen.width*.35,Screen.height*.35),"Player 3"))
	{
		DemoMenu.menu = 4;
		playerControlSelected = 3;
	}
	if (GUI.Button(Rect(Screen.width*.55,Screen.height*.55,Screen.width*.35,Screen.height*.35),"Player 4"))
	{
		DemoMenu.menu = 4;
		playerControlSelected = 4;
	}
}

if (DemoMenu.menu == 4)
{

//Player 1 Control Menu
if (playerControlSelected == 1)
	{
	if (GUI.Button(Rect(10,10,Screen.width*.1,Screen.height/15),backImage))
	{
		DemoMenu.menu = 3;
	}
	if (GUI.Button(Rect(Screen.width*.2875,Screen.height*.05,Screen.width*.1875,Screen.height*.1875),"Accept = " + acceptButtonName))
	{
		controlSelected = 1;
	}
	if (GUI.Button(Rect(Screen.width*.525,Screen.height*.05,Screen.width*.1875,Screen.height*.1875),"Back = " + backButtonName))
	{
		controlSelected = 2;
	}
	if (GUI.Button(Rect(Screen.width*.7625,Screen.height*.05,Screen.width*.1875,Screen.height*.1875),"Pause = " + pauseButtonName))
	{
		controlSelected = 3;
	}
	if (GUI.Button(Rect(Screen.width*.05,Screen.height*.2875,Screen.width*.1875,Screen.height*.1875),"Left = " + leftButtonName))
	{
		controlSelected = 4;
	}
	if (GUI.Button(Rect(Screen.width*.2875,Screen.height*.2875,Screen.width*.1875,Screen.height*.1875),"Right = " + rightButtonName))
	{
		controlSelected = 5;
	}
	if (GUI.Button(Rect(Screen.width*.525,Screen.height*.2875,Screen.width*.1875,Screen.height*.1875),"Up = " + upButtonName))
	{
		controlSelected = 6;
	}
	if (GUI.Button(Rect(Screen.width*.7625,Screen.height*.2875,Screen.width*.1875,Screen.height*.1875),"Down = " + downButtonName))
	{
		controlSelected = 7;
	}
	if (GUI.Button(Rect(Screen.width*.05,Screen.height*.525,Screen.width*.1875,Screen.height*.1875),"Attack = " + attackButtonName))
	{
		controlSelected = 8;
	}
	if (GUI.Button(Rect(Screen.width*.2875,Screen.height*.525,Screen.width*.1875,Screen.height*.1875),"Special = " + specialButtonName))
	{
		controlSelected = 9;
	}
	if (GUI.Button(Rect(Screen.width*.525,Screen.height*.525,Screen.width*.1875,Screen.height*.1875),"Grab = " + grabButtonName))
	{
		controlSelected = 10;
	}
	if (GUI.Button(Rect(Screen.width*.7625,Screen.height*.525,Screen.width*.1875,Screen.height*.1875),"Shield = " + shieldButtonName))
	{
		controlSelected = 11;
	}
	if (GUI.Button(Rect(Screen.width*.05,Screen.height*.7625,Screen.width*.1875,Screen.height*.1875),"Jump = " + jumpButtonName))
	{
		controlSelected = 12;
	}
	if (GUI.Button(Rect(Screen.width*.2875,Screen.height*.7625,Screen.width*.1875,Screen.height*.1875),"Taunt 1 = " + taunt1ButtonName))
	{
		controlSelected = 13;
	}
	if (GUI.Button(Rect(Screen.width*.525,Screen.height*.7625,Screen.width*.1875,Screen.height*.1875),"Taunt 2 = " + taunt2ButtonName))
	{
		controlSelected = 14;
	}
	if (GUI.Button(Rect(Screen.width*.7625,Screen.height*.7625,Screen.width*.1875,Screen.height*.1875),"Taunt 3 = " + taunt3ButtonName))
	{
		controlSelected = 15;
	}


//Accept Button Select (Player 1)
if (controlSelected == 1)
	{
	(GUI.Box(Rect (Screen.width*.2875,Screen.height*.05,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	acceptButton = selectedButton;
	acceptButtonName = selectedButtonName;
	}
   
//Back Button Select (Player 1)
if (controlSelected == 2)
	{
	(GUI.Box(Rect (Screen.width*.525,Screen.height*.05,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect(); 
	backButton = selectedButton;
	backButtonName = selectedButtonName;
    }

//Jump Button Select (Player 1)
if (controlSelected == 3)
	{
	(GUI.Box(Rect(Screen.width*.7625,Screen.height*.05,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	pauseButton = selectedButton;
	pauseButtonName = selectedButtonName;
	}

//Left Button Select (Player 1)
if (controlSelected == 4)
	{
	(GUI.Box(Rect(Screen.width*.05,Screen.height*.2875,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	leftButton = selectedButton;
	leftButtonName = selectedButtonName;
	}
	
//Right Button Select (Player 1)
if (controlSelected == 5)
	{
	(GUI.Box(Rect(Screen.width*.2875,Screen.height*.2875,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	rightButton = selectedButton;
	rightButtonName = selectedButtonName;
	}

//Up Button Select (Player 1)
if (controlSelected == 6)
	{
	(GUI.Box(Rect(Screen.width*.525,Screen.height*.2875,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	upButton = selectedButton;
	upButtonName = selectedButtonName;
	}

//Down Button Select (Player 1)
if (controlSelected == 7)
	{
	(GUI.Box(Rect(Screen.width*.7625,Screen.height*.2875,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	downButton = selectedButton;
	downButtonName = selectedButtonName;
	}

//Attack Button Select (Player 1)
if (controlSelected == 8)
	{
	(GUI.Box(Rect(Screen.width*.05,Screen.height*.525,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	attackButton = selectedButton;
	attackButtonName = selectedButtonName;
	}

//Special Button Select (Player 1)
if (controlSelected == 9)
	{
	(GUI.Box(Rect(Screen.width*.2875,Screen.height*.525,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	specialButton = selectedButton;
	specialButtonName = selectedButtonName;
	}

//Grab Button Select (Player 1)
if (controlSelected == 10)
	{
	(GUI.Box(Rect(Screen.width*.525,Screen.height*.525,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	grabButton = selectedButton;
	grabButtonName = selectedButtonName;
	}

//Shield Button Select (Player 1)
if (controlSelected == 11)
	{
	(GUI.Box(Rect(Screen.width*.7625,Screen.height*.525,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	shieldButton = selectedButton;
	shieldButtonName = selectedButtonName;
	}

//Jump Button Select (Player 1)
if (controlSelected == 12)
	{
	(GUI.Box(Rect(Screen.width*.05,Screen.height*.7625,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	jumpButton = selectedButton;
	jumpButtonName = selectedButtonName;
	}

//Taunt 1 Button Select (Player 1)
if (controlSelected == 13)
	{
	(GUI.Box(Rect(Screen.width*.2875,Screen.height*.7625,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	taunt1Button = selectedButton;
	taunt1ButtonName = selectedButtonName;
	}

//Taunt 2 Button Select (Player 1)
if (controlSelected == 14)
	{
	(GUI.Box(Rect(Screen.width*.525,Screen.height*.7625,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	taunt2Button = selectedButton;
	taunt2ButtonName = selectedButtonName;
	}


//Taunt 3 Button Select (Player 1)
if (controlSelected == 15)
	{
	(GUI.Box(Rect(Screen.width*.7625,Screen.height*.7625,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	taunt3Button = selectedButton;
	taunt3ButtonName = selectedButtonName;
	}
}





//Player 2 Control Menu
if (playerControlSelected == 2)
	{
	if (GUI.Button(Rect(10,10,Screen.width*.1,Screen.height/15),backImage))
	{
		DemoMenu.menu = 3;
	}
	if (GUI.Button(Rect(Screen.width*.2875,Screen.height*.05,Screen.width*.1875,Screen.height*.1875),"Accept = " + acceptButtonP2Name))
	{
		controlSelected = 1;
	}
	if (GUI.Button(Rect(Screen.width*.525,Screen.height*.05,Screen.width*.1875,Screen.height*.1875),"Back = " + backButtonP2Name))
	{
		controlSelected = 2;
	}
	if (GUI.Button(Rect(Screen.width*.7625,Screen.height*.05,Screen.width*.1875,Screen.height*.1875),"Pause = " + pauseButtonP2Name))
	{
		controlSelected = 3;
	}
	if (GUI.Button(Rect(Screen.width*.05,Screen.height*.2875,Screen.width*.1875,Screen.height*.1875),"Left = " + leftButtonP2Name))
	{
		controlSelected = 4;
	}
	if (GUI.Button(Rect(Screen.width*.2875,Screen.height*.2875,Screen.width*.1875,Screen.height*.1875),"Right = " + rightButtonP2Name))
	{
		controlSelected = 5;
	}
	if (GUI.Button(Rect(Screen.width*.525,Screen.height*.2875,Screen.width*.1875,Screen.height*.1875),"Up = " + upButtonP2Name))
	{
		controlSelected = 6;
	}
	if (GUI.Button(Rect(Screen.width*.7625,Screen.height*.2875,Screen.width*.1875,Screen.height*.1875),"Down = " + downButtonP2Name))
	{
		controlSelected = 7;
	}
	if (GUI.Button(Rect(Screen.width*.05,Screen.height*.525,Screen.width*.1875,Screen.height*.1875),"Attack = " + attackButtonP2Name))
	{
		controlSelected = 8;
	}
	if (GUI.Button(Rect(Screen.width*.2875,Screen.height*.525,Screen.width*.1875,Screen.height*.1875),"Special = " + specialButtonP2Name))
	{
		controlSelected = 9;
	}
	if (GUI.Button(Rect(Screen.width*.525,Screen.height*.525,Screen.width*.1875,Screen.height*.1875),"Grab = " + grabButtonP2Name))
	{
		controlSelected = 10;
	}
	if (GUI.Button(Rect(Screen.width*.7625,Screen.height*.525,Screen.width*.1875,Screen.height*.1875),"Shield = " + shieldButtonP2Name))
	{
		controlSelected = 11;
	}
	if (GUI.Button(Rect(Screen.width*.05,Screen.height*.7625,Screen.width*.1875,Screen.height*.1875),"Jump = " + jumpButtonP2Name))
	{
		controlSelected = 12;
	}
	if (GUI.Button(Rect(Screen.width*.2875,Screen.height*.7625,Screen.width*.1875,Screen.height*.1875),"Taunt 1 = " + taunt1ButtonP2Name))
	{
		controlSelected = 13;
	}
	if (GUI.Button(Rect(Screen.width*.525,Screen.height*.7625,Screen.width*.1875,Screen.height*.1875),"Taunt 2 = " + taunt2ButtonP2Name))
	{
		controlSelected = 14;
	}
	if (GUI.Button(Rect(Screen.width*.7625,Screen.height*.7625,Screen.width*.1875,Screen.height*.1875),"Taunt 3 = " + taunt3ButtonP2Name))
	{
		controlSelected = 15;
	}

//Accept Button Select (Player 2)
if (controlSelected == 1)
	{
	(GUI.Box(Rect (Screen.width*.2875,Screen.height*.05,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	acceptButtonP2 = selectedButton;
	acceptButtonP2Name = selectedButtonName;
	}
   
//Back Button Select (Player 2)
if (controlSelected == 2)
	{
	(GUI.Box(Rect (Screen.width*.525,Screen.height*.05,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect(); 
	backButtonP2 = selectedButton;
	backButtonP2Name = selectedButtonName;
    }

//Jump Button Select (Player 2)
if (controlSelected == 3)
	{
	(GUI.Box(Rect(Screen.width*.7625,Screen.height*.05,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	pauseButtonP2 = selectedButton;
	pauseButtonP2Name = selectedButtonName;
	}

//Left Button Select (Player 2)
if (controlSelected == 4)
	{
	(GUI.Box(Rect(Screen.width*.05,Screen.height*.2875,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	leftButtonP2 = selectedButton;
	leftButtonP2Name = selectedButtonName;
	}
	
//Right Button Select (Player 2)
if (controlSelected == 5)
	{
	(GUI.Box(Rect(Screen.width*.2875,Screen.height*.2875,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	rightButtonP2 = selectedButton;
	rightButtonP2Name = selectedButtonName;
	}

//Up Button Select (Player 2)
if (controlSelected == 6)
	{
	(GUI.Box(Rect(Screen.width*.525,Screen.height*.2875,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	upButtonP2 = selectedButton;
	upButtonP2Name = selectedButtonName;
	}

//Down Button Select (Player 2)
if (controlSelected == 7)
	{
	(GUI.Box(Rect(Screen.width*.7625,Screen.height*.2875,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	downButtonP2 = selectedButton;
	downButtonP2Name = selectedButtonName;
	}

//Attack Button Select (Player 2)
if (controlSelected == 8)
	{
	(GUI.Box(Rect(Screen.width*.05,Screen.height*.525,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	attackButtonP2 = selectedButton;
	attackButtonP2Name = selectedButtonName;
	}

//Special Button Select (Player 2)
if (controlSelected == 9)
	{
	(GUI.Box(Rect(Screen.width*.2875,Screen.height*.525,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	specialButtonP2 = selectedButton;
	specialButtonP2Name = selectedButtonName;
	}

//Grab Button Select (Player 2)
if (controlSelected == 10)
	{
	(GUI.Box(Rect(Screen.width*.525,Screen.height*.525,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	grabButtonP2 = selectedButton;
	grabButtonP2Name = selectedButtonName;
	}

//Shield Button Select (Player 2)
if (controlSelected == 11)
	{
	(GUI.Box(Rect(Screen.width*.7625,Screen.height*.525,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	shieldButtonP2 = selectedButton;
	shieldButtonP2Name = selectedButtonName;
	}

//Jump Button Select (Player 2)
if (controlSelected == 12)
	{
	(GUI.Box(Rect(Screen.width*.05,Screen.height*.7625,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	jumpButtonP2 = selectedButton;
	jumpButtonP2Name = selectedButtonName;
	}

//Taunt 1 Button Select (Player 2)
if (controlSelected == 13)
	{
	(GUI.Box(Rect(Screen.width*.2875,Screen.height*.7625,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	taunt1ButtonP2 = selectedButton;
	taunt1ButtonP2Name = selectedButtonName;
	}

//Taunt 2 Button Select (Player 2)
if (controlSelected == 14)
	{
	(GUI.Box(Rect(Screen.width*.525,Screen.height*.7625,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	taunt2ButtonP2 = selectedButton;
	taunt2ButtonP2Name = selectedButtonName;
	}


//Taunt 3 Button Select (Player 2)
if (controlSelected == 15)
	{
	(GUI.Box(Rect(Screen.width*.7625,Screen.height*.7625,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	taunt3ButtonP2 = selectedButton;
	taunt3ButtonP2Name = selectedButtonName;
	}
}





//Player 3 Control Menu
if (playerControlSelected == 3)
	{
	if (GUI.Button(Rect(10,10,Screen.width*.1,Screen.height/15),backImage))
	{
		DemoMenu.menu = 3;
	}
	if (GUI.Button(Rect(Screen.width*.2875,Screen.height*.05,Screen.width*.1875,Screen.height*.1875),"Accept = " + acceptButtonP3Name))
	{
		controlSelected = 1;
	}
	if (GUI.Button(Rect(Screen.width*.525,Screen.height*.05,Screen.width*.1875,Screen.height*.1875),"Back = " + backButtonP3Name))
	{
		controlSelected = 2;
	}
	if (GUI.Button(Rect(Screen.width*.7625,Screen.height*.05,Screen.width*.1875,Screen.height*.1875),"Pause = " + pauseButtonP3Name))
	{
		controlSelected = 3;
	}
	if (GUI.Button(Rect(Screen.width*.05,Screen.height*.2875,Screen.width*.1875,Screen.height*.1875),"Left = " + leftButtonP3Name))
	{
		controlSelected = 4;
	}
	if (GUI.Button(Rect(Screen.width*.2875,Screen.height*.2875,Screen.width*.1875,Screen.height*.1875),"Right = " + rightButtonP3Name))
	{
		controlSelected = 5;
	}
	if (GUI.Button(Rect(Screen.width*.525,Screen.height*.2875,Screen.width*.1875,Screen.height*.1875),"Up = " + upButtonP3Name))
	{
		controlSelected = 6;
	}
	if (GUI.Button(Rect(Screen.width*.7625,Screen.height*.2875,Screen.width*.1875,Screen.height*.1875),"Down = " + downButtonP3Name))
	{
		controlSelected = 7;
	}
	if (GUI.Button(Rect(Screen.width*.05,Screen.height*.525,Screen.width*.1875,Screen.height*.1875),"Attack = " + attackButtonP3Name))
	{
		controlSelected = 8;
	}
	if (GUI.Button(Rect(Screen.width*.2875,Screen.height*.525,Screen.width*.1875,Screen.height*.1875),"Special = " + specialButtonP3Name))
	{
		controlSelected = 9;
	}
	if (GUI.Button(Rect(Screen.width*.525,Screen.height*.525,Screen.width*.1875,Screen.height*.1875),"Grab = " + grabButtonP3Name))
	{
		controlSelected = 10;
	}
	if (GUI.Button(Rect(Screen.width*.7625,Screen.height*.525,Screen.width*.1875,Screen.height*.1875),"Shield = " + shieldButtonP3Name))
	{
		controlSelected = 11;
	}
	if (GUI.Button(Rect(Screen.width*.05,Screen.height*.7625,Screen.width*.1875,Screen.height*.1875),"Jump = " + jumpButtonP3Name))
	{
		controlSelected = 12;
	}
	if (GUI.Button(Rect(Screen.width*.2875,Screen.height*.7625,Screen.width*.1875,Screen.height*.1875),"Taunt 1 = " + taunt1ButtonP3Name))
	{
		controlSelected = 13;
	}
	if (GUI.Button(Rect(Screen.width*.525,Screen.height*.7625,Screen.width*.1875,Screen.height*.1875),"Taunt 2 = " + taunt2ButtonP3Name))
	{
		controlSelected = 14;
	}
	if (GUI.Button(Rect(Screen.width*.7625,Screen.height*.7625,Screen.width*.1875,Screen.height*.1875),"Taunt 3 = " + taunt3ButtonP3Name))
	{
		controlSelected = 15;
	}

//Accept Button Select (Player 3)
if (controlSelected == 1)
	{
	(GUI.Box(Rect (Screen.width*.2875,Screen.height*.05,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	acceptButtonP3 = selectedButton;
	acceptButtonP3Name = selectedButtonName;
	}
   
//Back Button Select (Player 3)
if (controlSelected == 2)
	{
	(GUI.Box(Rect (Screen.width*.525,Screen.height*.05,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect(); 
	backButtonP3 = selectedButton;
	backButtonP3Name = selectedButtonName;
    }

//Jump Button Select (Player 3)
if (controlSelected == 3)
	{
	(GUI.Box(Rect(Screen.width*.7625,Screen.height*.05,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	pauseButtonP3 = selectedButton;
	pauseButtonP3Name = selectedButtonName;
	}

//Left Button Select (Player 3)
if (controlSelected == 4)
	{
	(GUI.Box(Rect(Screen.width*.05,Screen.height*.2875,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	leftButtonP3 = selectedButton;
	leftButtonP3Name = selectedButtonName;
	}
	
//Right Button Select (Player 3)
if (controlSelected == 5)
	{
	(GUI.Box(Rect(Screen.width*.2875,Screen.height*.2875,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	rightButtonP3 = selectedButton;
	rightButtonP3Name = selectedButtonName;
	}

//Up Button Select (Player 3)
if (controlSelected == 6)
	{
	(GUI.Box(Rect(Screen.width*.525,Screen.height*.2875,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	upButtonP3 = selectedButton;
	upButtonP3Name = selectedButtonName;
	}

//Down Button Select (Player 3)
if (controlSelected == 7)
	{
	(GUI.Box(Rect(Screen.width*.7625,Screen.height*.2875,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	downButtonP3 = selectedButton;
	downButtonP3Name = selectedButtonName;
	}

//Attack Button Select (Player 3)
if (controlSelected == 8)
	{
	(GUI.Box(Rect(Screen.width*.05,Screen.height*.525,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	attackButtonP3 = selectedButton;
	attackButtonP3Name = selectedButtonName;
	}

//Special Button Select (Player 3)
if (controlSelected == 9)
	{
	(GUI.Box(Rect(Screen.width*.2875,Screen.height*.525,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	specialButtonP3 = selectedButton;
	specialButtonP3Name = selectedButtonName;
	}

//Grab Button Select (Player 3)
if (controlSelected == 10)
	{
	(GUI.Box(Rect(Screen.width*.525,Screen.height*.525,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	grabButtonP3 = selectedButton;
	grabButtonP3Name = selectedButtonName;
	}

//Shield Button Select (Player 3)
if (controlSelected == 11)
	{
	(GUI.Box(Rect(Screen.width*.7625,Screen.height*.525,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	shieldButtonP3 = selectedButton;
	shieldButtonP3Name = selectedButtonName;
	}

//Jump Button Select (Player 3)
if (controlSelected == 12)
	{
	(GUI.Box(Rect(Screen.width*.05,Screen.height*.7625,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	jumpButtonP3 = selectedButton;
	jumpButtonP3Name = selectedButtonName;
	}

//Taunt 1 Button Select (Player 3)
if (controlSelected == 13)
	{
	(GUI.Box(Rect(Screen.width*.2875,Screen.height*.7625,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	taunt1ButtonP3 = selectedButton;
	taunt1ButtonP3Name = selectedButtonName;
	}

//Taunt 2 Button Select (Player 3)
if (controlSelected == 14)
	{
	(GUI.Box(Rect(Screen.width*.525,Screen.height*.7625,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	taunt2ButtonP3 = selectedButton;
	taunt2ButtonP3Name = selectedButtonName;
	}


//Taunt 3 Button Select (Player 3)
if (controlSelected == 15)
	{
	(GUI.Box(Rect(Screen.width*.7625,Screen.height*.7625,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	taunt3ButtonP3 = selectedButton;
	taunt3ButtonP3Name = selectedButtonName;
	}
}





//Player 4 Control Menu
if (playerControlSelected == 4)
	{
	if (GUI.Button(Rect(10,10,Screen.width*.1,Screen.height/15),backImage))
	{
		DemoMenu.menu = 3;
	}
	if (GUI.Button(Rect(Screen.width*.2875,Screen.height*.05,Screen.width*.1875,Screen.height*.1875),"Accept = " + acceptButtonP4Name))
	{
		controlSelected = 1;
	}
	if (GUI.Button(Rect(Screen.width*.525,Screen.height*.05,Screen.width*.1875,Screen.height*.1875),"Back = " + backButtonP4Name))
	{
		controlSelected = 2;
	}
	if (GUI.Button(Rect(Screen.width*.7625,Screen.height*.05,Screen.width*.1875,Screen.height*.1875),"Pause = " + pauseButtonP4Name))
	{
		controlSelected = 3;
	}
	if (GUI.Button(Rect(Screen.width*.05,Screen.height*.2875,Screen.width*.1875,Screen.height*.1875),"Left = " + leftButtonP4Name))
	{
		controlSelected = 4;
	}
	if (GUI.Button(Rect(Screen.width*.2875,Screen.height*.2875,Screen.width*.1875,Screen.height*.1875),"Right = " + rightButtonP4Name))
	{
		controlSelected = 5;
	}
	if (GUI.Button(Rect(Screen.width*.525,Screen.height*.2875,Screen.width*.1875,Screen.height*.1875),"Up = " + upButtonP4Name))
	{
		controlSelected = 6;
	}
	if (GUI.Button(Rect(Screen.width*.7625,Screen.height*.2875,Screen.width*.1875,Screen.height*.1875),"Down = " + downButtonP4Name))
	{
		controlSelected = 7;
	}
	if (GUI.Button(Rect(Screen.width*.05,Screen.height*.525,Screen.width*.1875,Screen.height*.1875),"Attack = " + attackButtonP4Name))
	{
		controlSelected = 8;
	}
	if (GUI.Button(Rect(Screen.width*.2875,Screen.height*.525,Screen.width*.1875,Screen.height*.1875),"Special = " + specialButtonP4Name))
	{
		controlSelected = 9;
	}
	if (GUI.Button(Rect(Screen.width*.525,Screen.height*.525,Screen.width*.1875,Screen.height*.1875),"Grab = " + grabButtonP4Name))
	{
		controlSelected = 10;
	}
	if (GUI.Button(Rect(Screen.width*.7625,Screen.height*.525,Screen.width*.1875,Screen.height*.1875),"Shield = " + shieldButtonP4Name))
	{
		controlSelected = 11;
	}
	if (GUI.Button(Rect(Screen.width*.05,Screen.height*.7625,Screen.width*.1875,Screen.height*.1875),"Jump = " + jumpButtonP4Name))
	{
		controlSelected = 12;
	}
	if (GUI.Button(Rect(Screen.width*.2875,Screen.height*.7625,Screen.width*.1875,Screen.height*.1875),"Taunt 1 = " + taunt1ButtonP4Name))
	{
		controlSelected = 13;
	}
	if (GUI.Button(Rect(Screen.width*.525,Screen.height*.7625,Screen.width*.1875,Screen.height*.1875),"Taunt 2 = " + taunt2ButtonP4Name))
	{
		controlSelected = 14;
	}
	if (GUI.Button(Rect(Screen.width*.7625,Screen.height*.7625,Screen.width*.1875,Screen.height*.1875),"Taunt 3 = " + taunt3ButtonP4Name))
	{
		controlSelected = 15;
	}

//Accept Button Select (Player 4)
if (controlSelected == 1)
	{
	(GUI.Box(Rect (Screen.width*.2875,Screen.height*.05,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	acceptButtonP4 = selectedButton;
	acceptButtonP4Name = selectedButtonName;
	}
   
//Back Button Select (Player 4)
if (controlSelected == 2)
	{
	(GUI.Box(Rect (Screen.width*.525,Screen.height*.05,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect(); 
	backButtonP4 = selectedButton;
	backButtonP4Name = selectedButtonName;
    }

//Jump Button Select (Player 4)
if (controlSelected == 3)
	{
	(GUI.Box(Rect(Screen.width*.7625,Screen.height*.05,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	pauseButtonP4 = selectedButton;
	pauseButtonP4Name = selectedButtonName;
	}

//Left Button Select (Player 4)
if (controlSelected == 4)
	{
	(GUI.Box(Rect(Screen.width*.05,Screen.height*.2875,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	leftButtonP4 = selectedButton;
	leftButtonP4Name = selectedButtonName;
	}
	
//Right Button Select (Player 4)
if (controlSelected == 5)
	{
	(GUI.Box(Rect(Screen.width*.2875,Screen.height*.2875,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	rightButtonP4 = selectedButton;
	rightButtonP4Name = selectedButtonName;
	}

//Up Button Select (Player 4)
if (controlSelected == 6)
	{
	(GUI.Box(Rect(Screen.width*.525,Screen.height*.2875,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	upButtonP4 = selectedButton;
	upButtonP4Name = selectedButtonName;
	}

//Down Button Select (Player 4)
if (controlSelected == 7)
	{
	(GUI.Box(Rect(Screen.width*.7625,Screen.height*.2875,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	downButtonP4 = selectedButton;
	downButtonP4Name = selectedButtonName;
	}

//Attack Button Select (Player 4)
if (controlSelected == 8)
	{
	(GUI.Box(Rect(Screen.width*.05,Screen.height*.525,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	attackButtonP4 = selectedButton;
	attackButtonP4Name = selectedButtonName;
	}

//Special Button Select (Player 4)
if (controlSelected == 9)
	{
	(GUI.Box(Rect(Screen.width*.2875,Screen.height*.525,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	specialButtonP4 = selectedButton;
	specialButtonP4Name = selectedButtonName;
	}

//Grab Button Select (Player 4)
if (controlSelected == 10)
	{
	(GUI.Box(Rect(Screen.width*.525,Screen.height*.525,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	grabButtonP4 = selectedButton;
	grabButtonP4Name = selectedButtonName;
	}

//Shield Button Select (Player 4)
if (controlSelected == 11)
	{
	(GUI.Box(Rect(Screen.width*.7625,Screen.height*.525,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	shieldButtonP4 = selectedButton;
	shieldButtonP4Name = selectedButtonName;
	}

//Jump Button Select (Player 4)
if (controlSelected == 12)
	{
	(GUI.Box(Rect(Screen.width*.05,Screen.height*.7625,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	jumpButtonP4 = selectedButton;
	jumpButtonP4Name = selectedButtonName;
	}

//Taunt 1 Button Select (Player 4)
if (controlSelected == 13)
	{
	(GUI.Box(Rect(Screen.width*.2875,Screen.height*.7625,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	taunt1ButtonP4 = selectedButton;
	taunt1ButtonP4Name = selectedButtonName;
	}

//Taunt 2 Button Select (Player 4)
if (controlSelected == 14)
	{
	(GUI.Box(Rect(Screen.width*.525,Screen.height*.7625,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	taunt2ButtonP4 = selectedButton;
	taunt2ButtonP4Name = selectedButtonName;
	}


//Taunt 3 Button Select (Player 4)
if (controlSelected == 15)
	{
	(GUI.Box(Rect(Screen.width*.7625,Screen.height*.7625,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	taunt3ButtonP4 = selectedButton;
	taunt3ButtonP4Name = selectedButtonName;
	}
}








}
}



function ControlSelect () {
		
    if (Input.GetKeyDown(KeyCode.Backspace))
		{
		selectedButton = KeyCode.Backspace;
		selectedButtonName = "Backspace";
		}
	if (Input.GetKeyDown(KeyCode.Delete))
		{
		selectedButton = KeyCode.Delete;
		selectedButtonName = "Delete";
		}
	if (Input.GetKeyDown(KeyCode.Tab))
		{
		selectedButton = KeyCode.Tab;
		selectedButtonName = "Tab";
		}
	if (Input.GetKeyDown(KeyCode.Clear))
		{
		selectedButton = KeyCode.Clear;
		selectedButtonName = "Clear";
		}
	if (Input.GetKeyDown(KeyCode.Return))
		{
		selectedButton = KeyCode.Return;
		selectedButtonName = "Return";
		}
	if (Input.GetKeyDown(KeyCode.Escape))
		{
		selectedButton = KeyCode.Escape;
		selectedButtonName = "Escape";
		}
	if (Input.GetKeyDown(KeyCode.Space))
		{
		selectedButton = KeyCode.Space;
		selectedButtonName = "Space";
		}
	if (Input.GetKeyDown(KeyCode.Keypad0))
		{
		selectedButton = KeyCode.Keypad0;
		selectedButtonName = "Keypad 0";
		}
	if (Input.GetKeyDown(KeyCode.Keypad1))
		{
		selectedButton = KeyCode.Keypad1;
		selectedButtonName = "Keypad 1";
		}
	if (Input.GetKeyDown(KeyCode.Keypad2))
		{
		selectedButton = KeyCode.Keypad2;
		selectedButtonName = "Keypad 2";
		}
	if (Input.GetKeyDown(KeyCode.Keypad3))
		{
		selectedButton = KeyCode.Keypad3;
		selectedButtonName = "Keypad 3";
		}
	if (Input.GetKeyDown(KeyCode.Keypad4))
		{
		selectedButton = KeyCode.Keypad4;
		selectedButtonName = "Keypad 4";
		}
	if (Input.GetKeyDown(KeyCode.Keypad5))
		{
		selectedButton = KeyCode.Keypad5;
		selectedButtonName = "Keypad 5";
		}
	if (Input.GetKeyDown(KeyCode.Keypad6))
		{
		selectedButton = KeyCode.Keypad6;
		selectedButtonName = "Keypad 6";
		}
	if (Input.GetKeyDown(KeyCode.Keypad7))
		{
		selectedButton = KeyCode.Keypad7;
		selectedButtonName = "Keypad 7";
		}
	if (Input.GetKeyDown(KeyCode.Keypad8))
		{
		selectedButton = KeyCode.Keypad8;
		selectedButtonName = "Keypad 8";
		}
	if (Input.GetKeyDown(KeyCode.Keypad9))
		{
		selectedButton = KeyCode.Keypad9;
		selectedButtonName = "Keypad 9";
		}
	if (Input.GetKeyDown(KeyCode.KeypadPeriod))
		{
		selectedButton = KeyCode.KeypadPeriod;
		selectedButtonName = "Keypad .";
		}
	if (Input.GetKeyDown(KeyCode.KeypadDivide))
		{
		selectedButton = KeyCode.KeypadDivide;
		selectedButtonName = "Keypad /";
		}
	if (Input.GetKeyDown(KeyCode.KeypadMultiply))
		{
		selectedButton = KeyCode.KeypadMultiply;
		selectedButtonName = "Keypad *";
		}
	if (Input.GetKeyDown(KeyCode.KeypadMinus))
		{
		selectedButton = KeyCode.KeypadMinus;
		selectedButtonName = "Keypad -";
		}
	if (Input.GetKeyDown(KeyCode.KeypadPlus))
		{
		selectedButton = KeyCode.KeypadPlus;
		selectedButtonName = "Keypad +";
		}
	if (Input.GetKeyDown(KeyCode.KeypadEnter))
		{
		selectedButton = KeyCode.KeypadEnter;
		selectedButtonName = "Keypad Enter";
		}
	if (Input.GetKeyDown(KeyCode.KeypadEquals))
		{
		selectedButton = KeyCode.KeypadEquals;
		selectedButtonName = "Keypad =";
		}
	if (Input.GetKeyDown(KeyCode.UpArrow))
		{
		selectedButton = KeyCode.UpArrow;
		selectedButtonName = "Up Arrow";
		}
	if (Input.GetKeyDown(KeyCode.DownArrow))
		{
		selectedButton = KeyCode.DownArrow;
		selectedButtonName = "Down Arrow";
		}
	if (Input.GetKeyDown(KeyCode.RightArrow))
		{
		selectedButton = KeyCode.RightArrow;
		selectedButtonName = "Right Arrow";
		}
	if (Input.GetKeyDown(KeyCode.LeftArrow))
		{
		selectedButton = KeyCode.LeftArrow;
		selectedButtonName = "Left Arrow";
		}
	if (Input.GetKeyDown(KeyCode.Insert))
		{
		selectedButton = KeyCode.Insert;
		selectedButtonName = "Insert";
		}
	if (Input.GetKeyDown(KeyCode.Home))
		{
		selectedButton = KeyCode.Home;
		selectedButtonName = "Home";
		}
	if (Input.GetKeyDown(KeyCode.End))
		{
		selectedButton = KeyCode.End;
		selectedButtonName = "End";
		}
	if (Input.GetKeyDown(KeyCode.PageUp))
		{
		selectedButton = KeyCode.PageUp;
		selectedButtonName = "Page Up";
		}
	if (Input.GetKeyDown(KeyCode.PageDown))
		{
		selectedButton = KeyCode.PageDown;
		selectedButtonName = "Page Down";
		}
	if (Input.GetKeyDown(KeyCode.Alpha0))
		{
		selectedButton = KeyCode.Alpha0;
		selectedButtonName = "0";
		}
	if (Input.GetKeyDown(KeyCode.Alpha1))
		{
		selectedButton = KeyCode.Alpha1;
		selectedButtonName = "1";
		}
	if (Input.GetKeyDown(KeyCode.Alpha2))
		{
		selectedButton = KeyCode.Alpha2;
		selectedButtonName = "2";
		}
	if (Input.GetKeyDown(KeyCode.Alpha3))
		{
		selectedButton = KeyCode.Alpha3;
		selectedButtonName = "3";
		}
	if (Input.GetKeyDown(KeyCode.Alpha4))
		{
		selectedButton = KeyCode.Alpha4;
		selectedButtonName = "4";
		}
	if (Input.GetKeyDown(KeyCode.Alpha5))
		{
		selectedButton = KeyCode.Alpha5;
		selectedButtonName = "5";
		}
	if (Input.GetKeyDown(KeyCode.Alpha6))
		{
		selectedButton = KeyCode.Alpha6;
		selectedButtonName = "6";
		}
	if (Input.GetKeyDown(KeyCode.Alpha7))
		{
		selectedButton = KeyCode.Alpha7;
		selectedButtonName = "7";
		}
	if (Input.GetKeyDown(KeyCode.Alpha8))
		{
		selectedButton = KeyCode.Alpha8;
		selectedButtonName = "8";
		}
	if (Input.GetKeyDown(KeyCode.Alpha9))
		{
		selectedButton = KeyCode.Alpha9;
		selectedButtonName = "9";
		}
	if (Input.GetKeyDown(KeyCode.Exclaim))
		{
		selectedButton = KeyCode.Exclaim;
		selectedButtonName = "!";
		}
	if (Input.GetKeyDown(KeyCode.DoubleQuote))
		{
		selectedButton = KeyCode.DoubleQuote;
		selectedButtonName = "Double Quote";
		}
	if (Input.GetKeyDown(KeyCode.Hash))
		{
		selectedButton = KeyCode.Hash;
		selectedButtonName = "#";
		}
	if (Input.GetKeyDown(KeyCode.Dollar))
		{
		selectedButton = KeyCode.Dollar;
		selectedButtonName = "$";
		}
	if (Input.GetKeyDown(KeyCode.Ampersand))
		{
		selectedButton = KeyCode.Ampersand;
		selectedButtonName = "&";
		}
	if (Input.GetKeyDown(KeyCode.Quote))
		{
		selectedButton = KeyCode.Quote;
		selectedButtonName = "Single Quote";
		}
	if (Input.GetKeyDown(KeyCode.LeftParen))
		{
		selectedButton = KeyCode.LeftParen;
		selectedButtonName = "Left Parent";
		}
	if (Input.GetKeyDown(KeyCode.RightParen))
		{
		selectedButton = KeyCode.RightParen;
		selectedButtonName = "Right Parent";
		}
	if (Input.GetKeyDown(KeyCode.Asterisk))
		{
		selectedButton = KeyCode.Asterisk;
		selectedButtonName = "*";
		}
	if (Input.GetKeyDown(KeyCode.Plus))
		{
		selectedButton = KeyCode.Plus;
		selectedButtonName = "+";
		}
	if (Input.GetKeyDown(KeyCode.Comma))
		{
		selectedButton = KeyCode.Comma;
		selectedButtonName = ",";
		}
	if (Input.GetKeyDown(KeyCode.Minus))
		{
		selectedButton = KeyCode.Minus;
		selectedButtonName = "-";
		}
	if (Input.GetKeyDown(KeyCode.Period))
		{
		selectedButton = KeyCode.Period;
		selectedButtonName = ".";
		}
	if (Input.GetKeyDown(KeyCode.Slash))
		{
		selectedButton = KeyCode.Slash;
		selectedButtonName = "/";
		}
	if (Input.GetKeyDown(KeyCode.Colon))
		{
		selectedButton = KeyCode.Colon;
		selectedButtonName = ":";
		}
	if (Input.GetKeyDown(KeyCode.Semicolon))
		{
		selectedButton = KeyCode.Semicolon;
		selectedButtonName = ";";
		}
	if (Input.GetKeyDown(KeyCode.Less))
		{
		selectedButton = KeyCode.Less;
		selectedButtonName = "<";
		}
	if (Input.GetKeyDown(KeyCode.Equals))
		{
		selectedButton = KeyCode.Equals;
		selectedButtonName = "=";
		}
	if (Input.GetKeyDown(KeyCode.Greater))
		{
		selectedButton = KeyCode.Greater;
		selectedButtonName = ">";
		}
	if (Input.GetKeyDown(KeyCode.Question))
		{
		selectedButton = KeyCode.Question;
		selectedButtonName = "?";
		}
	if (Input.GetKeyDown(KeyCode.At))
		{
		selectedButton = KeyCode.At;
		selectedButtonName = "@";
		}
	if (Input.GetKeyDown(KeyCode.LeftBracket))
		{
		selectedButton = KeyCode.LeftBracket;
		selectedButtonName = "[";
		}
	if (Input.GetKeyDown(KeyCode.Backslash))
		{
		selectedButton = KeyCode.Backslash;
		selectedButtonName = "Backslash";
		}
	if (Input.GetKeyDown(KeyCode.RightBracket))
		{
		selectedButton = KeyCode.RightBracket;
		selectedButtonName = "]";
		}
	if (Input.GetKeyDown(KeyCode.Caret))
		{
		selectedButton = KeyCode.Caret;
		selectedButtonName = "^";
		}
	if (Input.GetKeyDown(KeyCode.Underscore))
		{
		selectedButton = KeyCode.Underscore;
		selectedButtonName = "_";
		}
	if (Input.GetKeyDown(KeyCode.BackQuote))
		{
		selectedButton = KeyCode.BackQuote;
		selectedButtonName = "Back Quote";
		}
	if (Input.GetKeyDown(KeyCode.A))
		{
		selectedButton = KeyCode.A;
		selectedButtonName = "A";
		}
	if (Input.GetKeyDown(KeyCode.B))
		{
		selectedButton = KeyCode.B;
		selectedButtonName = "B";
		}
	if (Input.GetKeyDown(KeyCode.C))
		{
		selectedButton = KeyCode.C;
		selectedButtonName = "C";
		}
	if (Input.GetKeyDown(KeyCode.D))
		{
		selectedButton = KeyCode.D;
		selectedButtonName = "D";
		}
	if (Input.GetKeyDown(KeyCode.E))
		{
		selectedButton = KeyCode.E;
		selectedButtonName = "E";
		}
	if (Input.GetKeyDown(KeyCode.F))
		{
		selectedButton = KeyCode.F;
		selectedButtonName = "F";
		}
	if (Input.GetKeyDown(KeyCode.G))
		{
		selectedButton = KeyCode.G;
		selectedButtonName = "G";
		}
	if (Input.GetKeyDown(KeyCode.H))
		{
		selectedButton = KeyCode.H;
		selectedButtonName = "H";
		}
	if (Input.GetKeyDown(KeyCode.I))
		{
		selectedButton = KeyCode.I;
		selectedButtonName = "I";
		}
	if (Input.GetKeyDown(KeyCode.J))
		{
		selectedButton = KeyCode.J;
		selectedButtonName = "J";
		}
	if (Input.GetKeyDown(KeyCode.K))
		{
		selectedButton = KeyCode.K;
		selectedButtonName = "K";
		}
	if (Input.GetKeyDown(KeyCode.L))
		{
		selectedButton = KeyCode.L;
		selectedButtonName = "L";
		}
	if (Input.GetKeyDown(KeyCode.M))
		{
		selectedButton = KeyCode.M;
		selectedButtonName = "M";
		}
	if (Input.GetKeyDown(KeyCode.N))
		{
		selectedButton = KeyCode.N;
		selectedButtonName = "N";
		}
	if (Input.GetKeyDown(KeyCode.O))
		{
		selectedButton = KeyCode.O;
		selectedButtonName = "O";
		}
	if (Input.GetKeyDown(KeyCode.P))
		{
		selectedButton = KeyCode.P;
		selectedButtonName = "P";
		}
	if (Input.GetKeyDown(KeyCode.Q))
		{
		selectedButton = KeyCode.Q;
		selectedButtonName = "Q";
		}
	if (Input.GetKeyDown(KeyCode.R))
		{
		selectedButton = KeyCode.R;
		selectedButtonName = "R";
		}
	if (Input.GetKeyDown(KeyCode.S))
		{
		selectedButton = KeyCode.S;
		selectedButtonName = "S";
		}
	if (Input.GetKeyDown(KeyCode.T))
		{
		selectedButton = KeyCode.T;
		selectedButtonName = "T";
		}
	if (Input.GetKeyDown(KeyCode.U))
		{
		selectedButton = KeyCode.U;
		selectedButtonName = "U";
		}
	if (Input.GetKeyDown(KeyCode.V))
		{
		selectedButton = KeyCode.V;
		selectedButtonName = "V";
		}
	if (Input.GetKeyDown(KeyCode.W))
		{
		selectedButton = KeyCode.W;
		selectedButtonName = "W";
		}
	if (Input.GetKeyDown(KeyCode.X))
		{
		selectedButton = KeyCode.X;
		selectedButtonName = "X";
		}
	if (Input.GetKeyDown(KeyCode.Y))
		{
		selectedButton = KeyCode.Y;
		selectedButtonName = "Y";
		}
	if (Input.GetKeyDown(KeyCode.Z))
		{
		selectedButton = KeyCode.Z;
		selectedButtonName = "Z";
		}
	if (Input.GetKeyDown(KeyCode.RightShift))
		{
		selectedButton = KeyCode.RightShift;
		selectedButtonName = "Right Shift";
		}
	if (Input.GetKeyDown(KeyCode.LeftShift))
		{
		selectedButton = KeyCode.LeftShift;
		selectedButtonName = "Left Shift";
		}
	if (Input.GetKeyDown(KeyCode.RightControl))
		{
		selectedButton = KeyCode.RightControl;
		selectedButtonName = "Right Control";
		}
	if (Input.GetKeyDown(KeyCode.LeftControl))
		{
		selectedButton = KeyCode.LeftControl;
		selectedButtonName = "Left Control";
		}
	if (Input.GetKeyDown(KeyCode.RightAlt))
		{
		selectedButton = KeyCode.RightAlt;
		selectedButtonName = "Right Alt";
		}
	if (Input.GetKeyDown(KeyCode.LeftAlt))
		{
		selectedButton = KeyCode.LeftAlt;
		selectedButtonName = "Left Alt";
		}
	if (Input.GetKeyDown(KeyCode.AltGr))
		{
		selectedButton = KeyCode.AltGr;
		selectedButtonName = "Alt Gr";
		}
	if (Input.GetKeyDown(KeyCode.Mouse0))
		{
		selectedButton = KeyCode.Mouse0;
		selectedButtonName = "Mouse 0";
		}
	if (Input.GetKeyDown(KeyCode.Mouse1))
		{
		selectedButton = KeyCode.Mouse1;
		selectedButtonName = "Mouse 1";
		}
	if (Input.GetKeyDown(KeyCode.Mouse2))
		{
		selectedButton = KeyCode.Mouse2;
		selectedButtonName = "Mouse 2";
		}
	if (Input.GetKeyDown(KeyCode.Mouse3))
		{
		selectedButton = KeyCode.Mouse3;
		selectedButtonName = "Mouse 3";
		}
	if (Input.GetKeyDown(KeyCode.Mouse4))
		{
		selectedButton = KeyCode.Mouse4;
		selectedButtonName = "Mouse 4";
		}
	if (Input.GetKeyDown(KeyCode.Mouse5))
		{
		selectedButton = KeyCode.Mouse5;
		selectedButtonName = "Mouse 5";
		}
	if (Input.GetKeyDown(KeyCode.Mouse6))
		{
		selectedButton = KeyCode.Mouse6;
		selectedButtonName = "Mouse 6";
		}
	if (Input.GetKeyDown(KeyCode.JoystickButton0))
		{
		selectedButton = KeyCode.JoystickButton0;
		selectedButtonName = "Any Joystick 0";
		}
	if (Input.GetKeyDown(KeyCode.JoystickButton1))
		{
		selectedButton = KeyCode.JoystickButton1;
		selectedButtonName = "Any Joystick 1";
		}
	if (Input.GetKeyDown(KeyCode.JoystickButton2))
		{
		selectedButton = KeyCode.JoystickButton2;
		selectedButtonName = "Any Joystick 2";
		}
	if (Input.GetKeyDown(KeyCode.JoystickButton3))
		{
		selectedButton = KeyCode.JoystickButton3;
		selectedButtonName = "Any Joystick 3";
		}
	if (Input.GetKeyDown(KeyCode.JoystickButton4))
		{
		selectedButton = KeyCode.JoystickButton4;
		selectedButtonName = "Any Joystick 4";
		}
	if (Input.GetKeyDown(KeyCode.JoystickButton5))
		{
		selectedButton = KeyCode.JoystickButton5;
		selectedButtonName = "Any Joystick 5";
		}
	if (Input.GetKeyDown(KeyCode.JoystickButton6))
		{
		selectedButton = KeyCode.JoystickButton6;
		selectedButtonName = "Any Joystick 6";
		}
	if (Input.GetKeyDown(KeyCode.JoystickButton7))
		{
		selectedButton = KeyCode.JoystickButton7;
		selectedButtonName = "Any Joystick 7";
		}
	if (Input.GetKeyDown(KeyCode.JoystickButton8))
		{
		selectedButton = KeyCode.JoystickButton8;
		selectedButtonName = "Any Joystick 8";
		}
	if (Input.GetKeyDown(KeyCode.JoystickButton9))
		{
		selectedButton = KeyCode.JoystickButton9;
		selectedButtonName = "Any Joystick 9";
		}
	if (Input.GetKeyDown(KeyCode.JoystickButton10))
		{
		selectedButton = KeyCode.JoystickButton10;
		selectedButtonName = "Any Joystick 10";
		}
	if (Input.GetKeyDown(KeyCode.JoystickButton11))
		{
		selectedButton = KeyCode.JoystickButton11;
		selectedButtonName = "Any Joystick 11";
		}
	if (Input.GetKeyDown(KeyCode.JoystickButton12))
		{
		selectedButton = KeyCode.JoystickButton12;
		selectedButtonName = "Any Joystick 12";
		}
	if (Input.GetKeyDown(KeyCode.JoystickButton13))
		{
		selectedButton = KeyCode.JoystickButton13;
		selectedButtonName = "Any Joystick 13";
		}
	if (Input.GetKeyDown(KeyCode.JoystickButton14))
		{
		selectedButton = KeyCode.JoystickButton14;
		selectedButtonName = "Any Joystick 14";
		}
	if (Input.GetKeyDown(KeyCode.JoystickButton15))
		{
		selectedButton = KeyCode.JoystickButton15;
		selectedButtonName = "Any Joystick 15";
		}
	if (Input.GetKeyDown(KeyCode.JoystickButton16))
		{
		selectedButton = KeyCode.JoystickButton16;
		selectedButtonName = "Any Joystick 16";
		}
	if (Input.GetKeyDown(KeyCode.JoystickButton17))
		{
		selectedButton = KeyCode.JoystickButton17;
		selectedButtonName = "Any Joystick 17";
		}
	if (Input.GetKeyDown(KeyCode.JoystickButton18))
		{
		selectedButton = KeyCode.JoystickButton18;
		selectedButtonName = "Any Joystick 18";
		}
	if (Input.GetKeyDown(KeyCode.JoystickButton19))
		{
		selectedButton = KeyCode.JoystickButton19;
		selectedButtonName = "Any Joystick 19";
		}
	if (Input.GetKeyDown(KeyCode.Joystick1Button0))
		{
		selectedButton = KeyCode.Joystick1Button0;
		selectedButtonName = "First Joystick 0";
		}
	if (Input.GetKeyDown(KeyCode.Joystick1Button1))
		{
		selectedButton = KeyCode.Joystick1Button1;
		selectedButtonName = "First Joystick 1";
		}
	if (Input.GetKeyDown(KeyCode.Joystick1Button2))
		{
		selectedButton = KeyCode.Joystick1Button2;
		selectedButtonName = "First Joystick 2";
		}
	if (Input.GetKeyDown(KeyCode.Joystick1Button3))
		{
		selectedButton = KeyCode.Joystick1Button3;
		selectedButtonName = "First Joystick 3";
		}
	if (Input.GetKeyDown(KeyCode.Joystick1Button4))
		{
		selectedButton = KeyCode.Joystick1Button4;
		selectedButtonName = "First Joystick 4";
		}
	if (Input.GetKeyDown(KeyCode.Joystick1Button5))
		{
		selectedButton = KeyCode.Joystick1Button5;
		selectedButtonName = "First Joystick 5";
		}
	if (Input.GetKeyDown(KeyCode.Joystick1Button6))
		{
		selectedButton = KeyCode.Joystick1Button6;
		selectedButtonName = "First Joystick 6";
		}
	if (Input.GetKeyDown(KeyCode.Joystick1Button7))
		{
		selectedButton = KeyCode.Joystick1Button7;
		selectedButtonName = "First Joystick 7";
		}
	if (Input.GetKeyDown(KeyCode.Joystick1Button8))
		{
		selectedButton = KeyCode.Joystick1Button8;
		selectedButtonName = "First Joystick 8";
		}
	if (Input.GetKeyDown(KeyCode.Joystick1Button9))
		{
		selectedButton = KeyCode.Joystick1Button9;
		selectedButtonName = "First Joystick 9";
		}
	if (Input.GetKeyDown(KeyCode.Joystick1Button10))
		{
		selectedButton = KeyCode.Joystick1Button10;
		selectedButtonName = "First Joystick 10";
		}
	if (Input.GetKeyDown(KeyCode.Joystick1Button11))
		{
		selectedButton = KeyCode.Joystick1Button11;
		selectedButtonName = "First Joystick 11";
		}
	if (Input.GetKeyDown(KeyCode.Joystick1Button12))
		{
		selectedButton = KeyCode.Joystick1Button12;
		selectedButtonName = "First Joystick 12";
		}
	if (Input.GetKeyDown(KeyCode.Joystick1Button13))
		{
		selectedButton = KeyCode.Joystick1Button13;
		selectedButtonName = "First Joystick 13";
		}
	if (Input.GetKeyDown(KeyCode.Joystick1Button14))
		{
		selectedButton = KeyCode.Joystick1Button14;
		selectedButtonName = "First Joystick 14";
		}
	if (Input.GetKeyDown(KeyCode.Joystick1Button15))
		{
		selectedButton = KeyCode.Joystick1Button15;
		selectedButtonName = "First Joystick 15";
		}
	if (Input.GetKeyDown(KeyCode.Joystick1Button16))
		{
		selectedButton = KeyCode.Joystick1Button16;
		selectedButtonName = "First Joystick 16";
		}
	if (Input.GetKeyDown(KeyCode.Joystick1Button17))
		{
		selectedButton = KeyCode.Joystick1Button17;
		selectedButtonName = "First Joystick 17";
		}
	if (Input.GetKeyDown(KeyCode.Joystick1Button18))
		{
		selectedButton = KeyCode.Joystick1Button18;
		selectedButtonName = "First Joystick 18";
		}
	if (Input.GetKeyDown(KeyCode.Joystick1Button19))
		{
		selectedButton = KeyCode.Joystick1Button19;
		selectedButtonName = "First Joystick 19";
		}
	if (Input.GetKeyDown(KeyCode.Joystick2Button0))
		{
		selectedButton = KeyCode.Joystick2Button0;
		selectedButtonName = "Second Joystick 0";
		}
	if (Input.GetKeyDown(KeyCode.Joystick2Button1))
		{
		selectedButton = KeyCode.Joystick2Button1;
		selectedButtonName = "Second Joystick 1";
		}
	if (Input.GetKeyDown(KeyCode.Joystick2Button2))
		{
		selectedButton = KeyCode.Joystick2Button2;
		selectedButtonName = "Second Joystick 2";
		}
	if (Input.GetKeyDown(KeyCode.Joystick2Button3))
		{
		selectedButton = KeyCode.Joystick2Button3;
		selectedButtonName = "Second Joystick 3";
		}
	if (Input.GetKeyDown(KeyCode.Joystick2Button4))
		{
		selectedButton = KeyCode.Joystick2Button4;
		selectedButtonName = "Second Joystick 4";
		}
	if (Input.GetKeyDown(KeyCode.Joystick2Button5))
		{
		selectedButton = KeyCode.Joystick2Button5;
		selectedButtonName = "Second Joystick 5";
		}
	if (Input.GetKeyDown(KeyCode.Joystick2Button6))
		{
		selectedButton = KeyCode.Joystick2Button6;
		selectedButtonName = "Second Joystick 6";
		}
	if (Input.GetKeyDown(KeyCode.Joystick2Button7))
		{
		selectedButton = KeyCode.Joystick2Button7;
		selectedButtonName = "Second Joystick 7";
		}
	if (Input.GetKeyDown(KeyCode.Joystick2Button8))
		{
		selectedButton = KeyCode.Joystick2Button8;
		selectedButtonName = "Second Joystick 8";
		}
	if (Input.GetKeyDown(KeyCode.Joystick2Button9))
		{
		selectedButton = KeyCode.Joystick2Button9;
		selectedButtonName = "Second Joystick 9";
		}
	if (Input.GetKeyDown(KeyCode.Joystick2Button10))
		{
		selectedButton = KeyCode.Joystick2Button10;
		selectedButtonName = "Second Joystick 10";
		}
	if (Input.GetKeyDown(KeyCode.Joystick2Button11))
		{
		selectedButton = KeyCode.Joystick2Button11;
		selectedButtonName = "Second Joystick 11";
		}
	if (Input.GetKeyDown(KeyCode.Joystick2Button12))
		{
		selectedButton = KeyCode.Joystick2Button12;
		selectedButtonName = "Second Joystick 12";
		}
	if (Input.GetKeyDown(KeyCode.Joystick2Button13))
		{
		selectedButton = KeyCode.Joystick2Button13;
		selectedButtonName = "Second Joystick 13";
		}
	if (Input.GetKeyDown(KeyCode.Joystick2Button14))
		{
		selectedButton = KeyCode.Joystick2Button14;
		selectedButtonName = "Second Joystick 14";
		}
	if (Input.GetKeyDown(KeyCode.Joystick2Button15))
		{
		selectedButton = KeyCode.Joystick2Button15;
		selectedButtonName = "Second Joystick 15";
		}
	if (Input.GetKeyDown(KeyCode.Joystick2Button16))
		{
		selectedButton = KeyCode.Joystick2Button16;
		selectedButtonName = "Second Joystick 16";
		}
	if (Input.GetKeyDown(KeyCode.Joystick2Button17))
		{
		selectedButton = KeyCode.Joystick2Button17;
		selectedButtonName = "Second Joystick 17";
		}
	if (Input.GetKeyDown(KeyCode.Joystick2Button18))
		{
		selectedButton = KeyCode.Joystick2Button18;
		selectedButtonName = "Second Joystick 18";
		}
	if (Input.GetKeyDown(KeyCode.Joystick2Button19))
		{
		selectedButton = KeyCode.Joystick2Button19;
		selectedButtonName = "Second Joystick 19";
		}
	if (Input.GetKeyDown(KeyCode.Joystick3Button0))
		{
		selectedButton = KeyCode.Joystick3Button0;
		selectedButtonName = "Third Joystick 0";
		}
	if (Input.GetKeyDown(KeyCode.Joystick3Button1))
		{
		selectedButton = KeyCode.Joystick3Button1;
		selectedButtonName = "Third Joystick 1";
		}
	if (Input.GetKeyDown(KeyCode.Joystick3Button2))
		{
		selectedButton = KeyCode.Joystick3Button2;
		selectedButtonName = "Third Joystick 2";
		}
	if (Input.GetKeyDown(KeyCode.Joystick3Button3))
		{
		selectedButton = KeyCode.Joystick3Button3;
		selectedButtonName = "Third Joystick 3";
		}
	if (Input.GetKeyDown(KeyCode.Joystick3Button4))
		{
		selectedButton = KeyCode.Joystick3Button4;
		selectedButtonName = "Third Joystick 4";
		}
	if (Input.GetKeyDown(KeyCode.Joystick3Button5))
		{
		selectedButton = KeyCode.Joystick3Button5;
		selectedButtonName = "Third Joystick 5";
		}
	if (Input.GetKeyDown(KeyCode.Joystick3Button6))
		{
		selectedButton = KeyCode.Joystick3Button6;
		selectedButtonName = "Third Joystick 6";
		}
	if (Input.GetKeyDown(KeyCode.Joystick3Button7))
		{
		selectedButton = KeyCode.Joystick3Button7;
		selectedButtonName = "Third Joystick 7";
		}
	if (Input.GetKeyDown(KeyCode.Joystick3Button8))
		{
		selectedButton = KeyCode.Joystick3Button8;
		selectedButtonName = "Third Joystick 8";
		}
	if (Input.GetKeyDown(KeyCode.Joystick3Button9))
		{
		selectedButton = KeyCode.Joystick3Button9;
		selectedButtonName = "Third Joystick 9";
		}
	if (Input.GetKeyDown(KeyCode.Joystick3Button10))
		{
		selectedButton = KeyCode.Joystick3Button10;
		selectedButtonName = "Third Joystick 10";
		}
	if (Input.GetKeyDown(KeyCode.Joystick3Button11))
		{
		selectedButton = KeyCode.Joystick3Button11;
		selectedButtonName = "Third Joystick 11";
		}
	if (Input.GetKeyDown(KeyCode.Joystick3Button12))
		{
		selectedButton = KeyCode.Joystick3Button12;
		selectedButtonName = "Third Joystick 12";
		}
	if (Input.GetKeyDown(KeyCode.Joystick3Button13))
		{
		selectedButton = KeyCode.Joystick3Button13;
		selectedButtonName = "Third Joystick 13";
		}
	if (Input.GetKeyDown(KeyCode.Joystick3Button14))
		{
		selectedButton = KeyCode.Joystick3Button14;
		selectedButtonName = "Third Joystick 14";
		}
	if (Input.GetKeyDown(KeyCode.Joystick3Button15))
		{
		selectedButton = KeyCode.Joystick3Button15;
		selectedButtonName = "Third Joystick 15";
		}
	if (Input.GetKeyDown(KeyCode.Joystick3Button16))
		{
		selectedButton = KeyCode.Joystick3Button16;
		selectedButtonName = "Third Joystick 16";
		}
	if (Input.GetKeyDown(KeyCode.Joystick3Button17))
		{
		selectedButton = KeyCode.Joystick3Button17;
		selectedButtonName = "Third Joystick 17";
		}
	if (Input.GetKeyDown(KeyCode.Joystick3Button18))
		{
		selectedButton = KeyCode.Joystick3Button18;
		selectedButtonName = "Third Joystick 18";
		}
	if (Input.GetKeyDown(KeyCode.Joystick3Button19))
		{
		selectedButton = KeyCode.Joystick3Button19;
		selectedButtonName = "Third Joystick 19";
		}

		
}



function Update () {
	if (DemoMenu.menu == 1)
		{
		if (Input.GetKeyDown(backButton))
			{
				DemoMenu.menu = 0;
			}
		}
	if (DemoMenu.menu == 2)
		{
		if (Input.GetKeyDown(backButton))
			{
				DemoMenu.menu = 1;
			}
		}
	
	if (DemoMenu.menu == 3)
		{
		if (Input.GetKeyDown(backButton))
			{
				DemoMenu.menu = 2;
			}
		}
	if (DemoMenu.menu == 4)
		{
		if (controlSelected == 0)
			{
			if (Input.GetKeyDown(backButton))
				{
					DemoMenu.menu = 3;
				}
			}
		}	

	if (controlSelected > 0)
		{
		if (Input.GetKeyDown(selectedButton))
			{
				controlSelected = 0;
				selectedButton = KeyCode.None;
				selectedButtonName = "";
			}
		}
		
	if (DemoMenu.menu == 5)
		{
		if (Input.GetKeyDown(backButton))
			{
				DemoMenu.menu = 1;
			}
	
		}
	
	if (DemoMenu.menu == 6)
		{
		if (Input.GetKeyDown(backButton))
			{
				DemoMenu.menu = 5;
			}
			
		}
	
	
}