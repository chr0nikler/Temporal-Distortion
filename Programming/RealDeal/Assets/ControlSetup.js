var backImage : Texture2D;
var buttonPressed : String;
var playerControlSelected : int = 0;
var controlSelected : int = 0;
var selectedButton : KeyCode;
var selectedButtonName : String;
var p1ControlsImage : Texture2D;
var p2ControlsImage : Texture2D;
var p3ControlsImage : Texture2D;
var p4ControlsImage : Texture2D;
var restoreDefaults : Texture2D;

//Player 1
static var acceptButton: KeyCode = KeyCode.O; //Original KeyCode for this.
acceptButton = PlayerPrefs.GetInt("Accept", parseInt(acceptButton)); //Allows KeyCode to be changed over saves
var defaultAcceptButton: KeyCode = KeyCode.O; //Maintains a default KeyCode.
var acceptButtonName : String = "O"; //Original name for the key chosen.
acceptButtonName = PlayerPrefs.GetString("Accept Name"); //Allows name to be changed over saves
var defaultAcceptButtonName : String = "O"; //Default Name for this.
//---------------
static var backButton : KeyCode = KeyCode.Backspace;
backButton = PlayerPrefs.GetInt("Back", parseInt(backButton));
var defaultBackButton : KeyCode = KeyCode.Backspace;
var backButtonName : String = "Backspace";
backButtonName = PlayerPrefs.GetString("Back Name");
var defaultBackButtonName : String = "Backspace";
//---------------
static var pauseButton : KeyCode = KeyCode.Return; 
pauseButton = PlayerPrefs.GetInt("Pause", parseInt(pauseButton)); 
var defaultPauseButton : KeyCode = KeyCode.Return; 
var pauseButtonName : String = "Return"; 
pauseButtonName = PlayerPrefs.GetString("Pause Name");
var defaultPauseButtonName : String = "Return";
//---------------
static var leftButton : KeyCode = KeyCode.A;
leftButton = PlayerPrefs.GetInt("Left", parseInt(leftButton));
var defaultLeftButton : KeyCode = KeyCode.A;
var leftButtonName : String = "A";
leftButtonName = PlayerPrefs.GetString("Left Name");
var defaultLeftButtonName : String = "A";
//---------------
static var rightButton : KeyCode = KeyCode.D; 
rightButton = PlayerPrefs.GetInt("Right", parseInt(rightButton));
var defaultRightButton : KeyCode = KeyCode.D;
var rightButtonName : String = "D";
rightButtonName = PlayerPrefs.GetString("Right Name");
var defaultRightButtonName : String = "D";
//---------------
static var upButton : KeyCode = KeyCode.W;
upButton = PlayerPrefs.GetInt("Up", parseInt(upButton));
var defaultUpButton : KeyCode = KeyCode.W;
var upButtonName : String = "W";
upButtonName = PlayerPrefs.GetString("Up Name");
var defaultUpButtonName : String = "W";
//---------------
static var downButton : KeyCode = KeyCode.S;
downButton = PlayerPrefs.GetInt("Down", parseInt(downButton));
var defaultDownButton : KeyCode = KeyCode.S;
var downButtonName : String = "S";
downButtonName = PlayerPrefs.GetString("Down Name");
var defaultDownButtonName : String = "S";
//---------------
static var attackButton : KeyCode = KeyCode.O;
attackButton = PlayerPrefs.GetInt("Attack", parseInt(attackButton));
var defaultAttackButton : KeyCode = KeyCode.O;
var attackButtonName : String = "O";
attackButtonName = PlayerPrefs.GetString("Attack Name");
var defaultAttackButtonName : String = "O";
//---------------
static var specialButton : KeyCode = KeyCode.P;
specialButton = PlayerPrefs.GetInt("Special", parseInt(specialButton));
var defaultSpecialButton : KeyCode = KeyCode.P;
var specialButtonName : String = "P";
specialButtonName = PlayerPrefs.GetString("Special Name");
var defaultSpecialButtonName : String = "P";
//---------------
static var grabButton : KeyCode = KeyCode.I;
grabButton = PlayerPrefs.GetInt("Grab", parseInt(grabButton));
var defaultGrabButton : KeyCode = KeyCode.I;
var grabButtonName : String = "I";
grabButtonName = PlayerPrefs.GetString("Grab Name");
var defaultGrabButtonName : String = "I";
//---------------
static var shieldButton : KeyCode = KeyCode.LeftBracket;
shieldButton = PlayerPrefs.GetInt("Shield", parseInt(shieldButton));
var defaultShieldButton : KeyCode = KeyCode.LeftBracket;
var shieldButtonName : String = "[";
shieldButtonName = PlayerPrefs.GetString("Shield Name");
var defaultShieldButtonName : String = "[";
//---------------
static var jumpButton : KeyCode = KeyCode.W;
jumpButton = PlayerPrefs.GetInt("Jump", parseInt(jumpButton));
var defaultJumpButton : KeyCode = KeyCode.W;
var jumpButtonName : String = "W";
jumpButtonName = PlayerPrefs.GetString("Jump Name");
var defaultJumpButtonName : String = "W";
//---------------
static var taunt1Button : KeyCode = KeyCode.Alpha1;
taunt1Button = PlayerPrefs.GetInt("Taunt 1", parseInt(taunt1Button));
var defaultTaunt1Button : KeyCode = KeyCode.Alpha1;
var taunt1ButtonName : String = "1";
taunt1ButtonName = PlayerPrefs.GetString("Taunt 1 Name");
var defaultTaunt1ButtonName : String = "1";
//---------------
static var taunt2Button : KeyCode = KeyCode.Alpha2;
taunt2Button = PlayerPrefs.GetInt("Taunt 2", parseInt(taunt2Button));
var defaultTaunt2Button : KeyCode = KeyCode.Alpha2;
var taunt2ButtonName : String = "2";
taunt2ButtonName = PlayerPrefs.GetString("Taunt 2 Name");
var defaultTaunt2ButtonName : String = "2";
//---------------
static var taunt3Button : KeyCode = KeyCode.Alpha3;
taunt3Button = PlayerPrefs.GetInt("Taunt 3", parseInt(taunt3Button));
var defaultTaunt3Button : KeyCode = KeyCode.Alpha3;
var taunt3ButtonName : String = "3";
taunt3ButtonName = PlayerPrefs.GetString("Taunt 3 Name");
var defaultTaunt3ButtonName : String = "3";

//Player 2
static var acceptButtonP2 : KeyCode = KeyCode.Keypad5;
acceptButtonP2 = PlayerPrefs.GetInt("Accept P2", parseInt(acceptButtonP2));
var defaultAcceptButtonP2 : KeyCode = KeyCode.Keypad5;
var acceptButtonP2Name : String = "Keypad 5";
acceptButtonP2Name = PlayerPrefs.GetString("Accept P2 Name");
var defaultAcceptButtonP2Name : String = "Keypad 5";
//---------------
static var backButtonP2 : KeyCode = KeyCode.KeypadMinus;
backButtonP2 = PlayerPrefs.GetInt("Back P2", parseInt(backButtonP2));
var defaultBackButtonP2 : KeyCode = KeyCode.KeypadMinus;
var backButtonP2Name : String = "Keypad -";
backButtonP2Name = PlayerPrefs.GetString("Back P2 Name");
var defaultBackButtonP2Name : String = "Keypad -";
//---------------
static var pauseButtonP2 : KeyCode = KeyCode.KeypadEnter;
pauseButtonP2 = PlayerPrefs.GetInt("Pause P2", parseInt(pauseButtonP2));
var defaultPauseButtonP2 : KeyCode = KeyCode.KeypadEnter;
var pauseButtonP2Name : String = "Keypad Enter";
pauseButtonP2Name = PlayerPrefs.GetString("Pause P2 Name");
var defaultPauseButtonP2Name : String = "Keypad Enter";
//---------------
static var leftButtonP2 : KeyCode = KeyCode.LeftArrow;
leftButtonP2 = PlayerPrefs.GetInt("Left P2", parseInt(leftButtonP2));
var defaultLeftButtonP2 : KeyCode = KeyCode.LeftArrow;
var leftButtonP2Name : String = "Left Arrow"; 
leftButtonP2Name = PlayerPrefs.GetString("Left P2 Name");
var defaultLeftButtonP2Name : String = "Left Arrow"; 
//---------------
static var rightButtonP2 : KeyCode = KeyCode.RightArrow;
rightButtonP2 = PlayerPrefs.GetInt("Right P2", parseInt(rightButtonP2));
var defaultRightButtonP2 : KeyCode = KeyCode.RightArrow;
var rightButtonP2Name : String = "Right Arrow";
rightButtonP2Name = PlayerPrefs.GetString("Right P2 Name");
var defaultRightButtonP2Name : String = "Right Arrow";
//---------------
static var upButtonP2 : KeyCode = KeyCode.UpArrow;
upButtonP2 = PlayerPrefs.GetInt("Up P2", parseInt(upButtonP2));
var defaultUpButtonP2 : KeyCode = KeyCode.UpArrow;
var upButtonP2Name : String = "Up Arrow";
upButtonP2Name = PlayerPrefs.GetString("Up P2 Name");
var defaultUpButtonP2Name : String = "Up Arrow";
//---------------
static var downButtonP2 : KeyCode = KeyCode.DownArrow;
downButtonP2 = PlayerPrefs.GetInt("Down P2", parseInt(downButtonP2));
var defaultDownButtonP2 : KeyCode = KeyCode.DownArrow;
var downButtonP2Name : String = "Down Arrow";
downButtonP2Name = PlayerPrefs.GetString("Down P2 Name");
var defaultDownButtonP2Name : String = "Down Arrow";
//---------------
static var attackButtonP2 : KeyCode = KeyCode.Keypad5;
attackButtonP2 = PlayerPrefs.GetInt("Attack P2", parseInt(attackButtonP2));
var defaultAttackButtonP2 : KeyCode = KeyCode.Keypad5;
var attackButtonP2Name : String = "Keypad 5";
attackButtonP2Name = PlayerPrefs.GetString("Attack P2 Name");
var defaultAttackButtonP2Name : String = "Keypad 5";
//---------------
static var specialButtonP2 : KeyCode = KeyCode.Keypad6;
specialButtonP2 = PlayerPrefs.GetInt("Special P2", parseInt(specialButtonP2));
var defaultSpecialButtonP2 : KeyCode = KeyCode.Keypad6;
var specialButtonP2Name : String = "Keypad 6";
specialButtonP2Name = PlayerPrefs.GetString("Special P2 Name");
var defaultSpecialButtonP2Name : String = "Keypad 6";
//---------------
static var grabButtonP2 : KeyCode = KeyCode.Keypad4;
grabButtonP2 = PlayerPrefs.GetInt("Grab P2", parseInt(grabButtonP2));
var defaultGrabButtonP2 : KeyCode = KeyCode.Keypad4;
var grabButtonP2Name : String = "Keypad 4";
grabButtonP2Name = PlayerPrefs.GetString("Grab P2 Name");
var defaultGrabButtonP2Name : String = "Keypad 4";
//---------------
static var shieldButtonP2 : KeyCode = KeyCode.KeypadPlus;
shieldButtonP2 = PlayerPrefs.GetInt("Shield P2", parseInt(shieldButtonP2));
var defaultShieldButtonP2 : KeyCode = KeyCode.KeypadPlus;
var shieldButtonP2Name : String = "Keypad +";
shieldButtonP2Name = PlayerPrefs.GetString("Shield P2 Name");
var defaultShieldButtonP2Name : String = "Keypad +";
//---------------
static var jumpButtonP2 : KeyCode = KeyCode.UpArrow;
jumpButtonP2 = PlayerPrefs.GetInt("Jump P2", parseInt(jumpButtonP2));
var defaultJumpButtonP2 : KeyCode = KeyCode.UpArrow;
var jumpButtonP2Name : String = "Up Arrow";
jumpButtonP2Name = PlayerPrefs.GetString("Jump P2 Name");
var defaultJumpButtonP2Name : String = "Up Arrow";
//---------------
static var taunt1ButtonP2 : KeyCode = KeyCode.Keypad7;
taunt1ButtonP2 = PlayerPrefs.GetInt("Taunt 1 P2", parseInt(taunt1ButtonP2));
var defaultTaunt1ButtonP2 : KeyCode = KeyCode.Keypad7;
var taunt1ButtonP2Name : String = "Keypad 7";
taunt1ButtonP2Name = PlayerPrefs.GetString("Taunt 2 P2 Name");
var defaultTaunt1ButtonP2Name : String = "Keypad 7";
//---------------
static var taunt2ButtonP2 : KeyCode = KeyCode.Keypad8;
taunt2ButtonP2 = PlayerPrefs.GetInt("Taunt 2 P2", parseInt(taunt2ButtonP2));
var defaultTaunt2ButtonP2 : KeyCode = KeyCode.Keypad8;
var taunt2ButtonP2Name : String = "Keypad 8";
taunt2ButtonP2Name = PlayerPrefs.GetString("Taunt 2 P2 Name");
var defaultTaunt2ButtonP2Name : String = "Keypad 8";
//---------------
static var taunt3ButtonP2 : KeyCode = KeyCode.Keypad9;
taunt3ButtonP2 = PlayerPrefs.GetInt("Taunt 3 P2", parseInt(taunt3ButtonP2));
var defaultTaunt3ButtonP2 : KeyCode = KeyCode.Keypad9;
var taunt3ButtonP2Name : String = "Keypad 9";
taunt3ButtonP2Name = PlayerPrefs.GetString("Taunt 3 P2 Name");
var defaultTaunt3ButtonP2Name : String = "Keypad 9";

//Player 3
static var acceptButtonP3 : KeyCode;
acceptButtonP3 = PlayerPrefs.GetInt("Accept P3", parseInt(acceptButtonP3));
var defaultAcceptButtonP3 : KeyCode;
var acceptButtonP3Name : String;
acceptButtonP3Name = PlayerPrefs.GetString("Accept P3 Name");
var defaultAcceptButtonP3Name : String;
//---------------
static var backButtonP3 : KeyCode;
backButtonP3 = PlayerPrefs.GetInt("Back P3", parseInt(backButtonP3));
var defaultBackButtonP3 : KeyCode;
var backButtonP3Name : String;
backButtonP3Name = PlayerPrefs.GetString("Back P3 Name");
var defaultBackButtonP3Name : String;
//---------------
static var pauseButtonP3 : KeyCode;
pauseButtonP3 = PlayerPrefs.GetInt("Pause P3", parseInt(pauseButtonP3));
var defaultPauseButtonP3 : KeyCode;
var pauseButtonP3Name : String;
pauseButtonP3Name = PlayerPrefs.GetString("Pause P3 Name");
var defaultPauseButtonP3Name : String;
//---------------
static var leftButtonP3 : KeyCode;
leftButtonP3 = PlayerPrefs.GetInt("Left P3", parseInt(leftButtonP3));
var defaultLeftButtonP3 : KeyCode;
var leftButtonP3Name : String; 
leftButtonP3Name = PlayerPrefs.GetString("Left P3 Name");
var defaultLeftButtonP3Name : String; 
//---------------
static var rightButtonP3 : KeyCode;
rightButtonP3 = PlayerPrefs.GetInt("Right P3", parseInt(rightButtonP3));
var defaultRightButtonP3 : KeyCode;
var rightButtonP3Name : String;
rightButtonP3Name = PlayerPrefs.GetString("Right P3 Name");
var defaultRightButtonP3Name : String;
//---------------
static var upButtonP3 : KeyCode;
upButtonP3 = PlayerPrefs.GetInt("Up P3", parseInt(upButtonP3));
var defaultUpButtonP3 : KeyCode;
var upButtonP3Name : String;
upButtonP3Name = PlayerPrefs.GetString("Up P3 Name");
var defaultUpButtonP3Name : String;
//---------------
static var downButtonP3 : KeyCode;
downButtonP3 = PlayerPrefs.GetInt("Down P3", parseInt(downButtonP3));
var defaultDownButtonP3 : KeyCode;
var downButtonP3Name : String;
downButtonP3Name = PlayerPrefs.GetString("Down P3 Name");
var defaultDownButtonP3Name : String;
//---------------
static var attackButtonP3 : KeyCode;
attackButtonP3 = PlayerPrefs.GetInt("Attack P3", parseInt(attackButtonP3));
var defaultAttackButtonP3 : KeyCode;
var attackButtonP3Name : String;
attackButtonP3Name = PlayerPrefs.GetString("Attack P3 Name");
var defaultAttackButtonP3Name : String;
//---------------
static var specialButtonP3 : KeyCode;
specialButton = PlayerPrefs.GetInt("Special P3", parseInt(specialButtonP3));
var defaultSpecialButtonP3 : KeyCode;
var specialButtonP3Name : String;
specialButtonP3Name = PlayerPrefs.GetString("Special P3 Name");
var defaultSpecialButtonP3Name : String;
//---------------
static var grabButtonP3 : KeyCode;
grabButtonP3 = PlayerPrefs.GetInt("Grab P3", parseInt(grabButtonP3));
var defaultGrabButtonP3 : KeyCode;
var grabButtonP3Name : String;
grabButtonP3Name = PlayerPrefs.GetString("Grab P3 Name");
var defaultGrabButtonP3Name : String;
//---------------
static var shieldButtonP3 : KeyCode;
shieldButtonP3 = PlayerPrefs.GetInt("Shield P3", parseInt(shieldButtonP3));
var defaultShieldButtonP3 : KeyCode;
var shieldButtonP3Name : String;
shieldButtonP3Name = PlayerPrefs.GetString("Shield P3 Name");
var defaultShieldButtonP3Name : String;
//---------------
static var jumpButtonP3 : KeyCode;
jumpButtonP3 = PlayerPrefs.GetInt("Jump P3", parseInt(jumpButtonP3));
var defaultJumpButtonP3 : KeyCode;
var jumpButtonP3Name : String;
jumpButtonP3Name = PlayerPrefs.GetString("Jump P3 Name");
var defaultJumpButtonP3Name : String;
//---------------
static var taunt1ButtonP3 : KeyCode;
taunt1ButtonP3 = PlayerPrefs.GetInt("Taunt 1 P3", parseInt(taunt1ButtonP3));
var defaultTaunt1ButtonP3 : KeyCode;
var taunt1ButtonP3Name : String;
taunt1ButtonP3Name = PlayerPrefs.GetString("Taunt 1 P3 Name");
var defaultTaunt1ButtonP3Name : String;
//---------------
static var taunt2ButtonP3 : KeyCode;
taunt2ButtonP3 = PlayerPrefs.GetInt("Taunt 2 P3", parseInt(taunt2ButtonP3));
var defaultTaunt2ButtonP3 : KeyCode;
var taunt2ButtonP3Name : String;
taunt2ButtonP3Name = PlayerPrefs.GetString("Taunt 2 P3 Name");
var defaultTaunt2ButtonP3Name : String;
//---------------
static var taunt3ButtonP3 : KeyCode;
taunt3ButtonP3 = PlayerPrefs.GetInt("Taunt 3 P3", parseInt(taunt3ButtonP3));
var defaultTaunt3ButtonP3 : KeyCode;
var taunt3ButtonP3Name : String;
taunt3ButtonP3Name = PlayerPrefs.GetString("Taunt 3 P3 Name");
var defaultTaunt3ButtonP3Name : String;

//Player 4
static var acceptButtonP4 : KeyCode;
acceptButtonP4 = PlayerPrefs.GetInt("Accept P4", parseInt(acceptButtonP4));
var defaultAcceptButtonP4 : KeyCode;
var acceptButtonP4Name : String;
acceptButtonP4Name = PlayerPrefs.GetString("Accept P4 Name");
var defaultAcceptButtonP4Name : String;
//---------------
static var backButtonP4 : KeyCode;
backButtonP4 = PlayerPrefs.GetInt("Back P4", parseInt(backButtonP4));
var defaultBackButtonP4 : KeyCode;
var backButtonP4Name : String;
backButtonP4Name = PlayerPrefs.GetString("Back P4 Name");
var defaultBackButtonP4Name : String;
//---------------
static var pauseButtonP4 : KeyCode;
pauseButtonP4 = PlayerPrefs.GetInt("Pause P4", parseInt(pauseButtonP4));
var defaultPauseButtonP4 : KeyCode;
var pauseButtonP4Name : String;
pauseButtonP4Name = PlayerPrefs.GetString("Pause P4 Name");
var defaultPauseButtonP4Name : String;
//---------------
static var leftButtonP4 : KeyCode;
leftButtonP4 = PlayerPrefs.GetInt("Left P4", parseInt(leftButtonP4));
var defaultLeftButtonP4 : KeyCode;
var leftButtonP4Name : String; 
leftButtonP4Name = PlayerPrefs.GetString("Left P4 Name");
var defaultLeftButtonP4Name : String; 
//---------------
static var rightButtonP4 : KeyCode;
rightButtonP4 = PlayerPrefs.GetInt("Right P4", parseInt(rightButtonP4));
var defaultRightButtonP4 : KeyCode;
var rightButtonP4Name : String;
rightButtonP4Name = PlayerPrefs.GetString("Right P4 Name");
var defaultRightButtonP4Name : String;
//---------------
static var upButtonP4 : KeyCode;
upButtonP4 = PlayerPrefs.GetInt("Up P4", parseInt(upButtonP4));
var defaultUpButtonP4 : KeyCode;
var upButtonP4Name : String;
upButtonP4Name = PlayerPrefs.GetString("Up P4 Name");
var defaultUpButtonP4Name : String;
//---------------
static var downButtonP4 : KeyCode;
downButtonP4 = PlayerPrefs.GetInt("Down P4", parseInt(downButtonP4));
var defaultDownButtonP4 : KeyCode;
var downButtonP4Name : String;
downuButtonP4Name = PlayerPrefs.GetString("Down P4 Name");
var defaultDownButtonP4Name : String;
//---------------
static var attackButtonP4 : KeyCode;
attackButtonP4 = PlayerPrefs.GetInt("Attack P4", parseInt(attackButtonP4));
var defaultAttackButtonP4 : KeyCode;
var attackButtonP4Name : String;
attackButtonP4Name = PlayerPrefs.GetString("Attack P4 Name");
var defaultAttackButtonP4Name : String;
//---------------
static var specialButtonP4 : KeyCode;
specialButtonP4 = PlayerPrefs.GetInt("Special P4", parseInt(specialButtonP4));
var defaultSpecialButtonP4 : KeyCode;
var specialButtonP4Name : String;
specialButtonP4Name = PlayerPrefs.GetString("Special P4 Name");
var defaultSpecialButtonP4Name : String;
//---------------
static var grabButtonP4 : KeyCode;
grabButtonP4 = PlayerPrefs.GetInt("Grab P4", parseInt(grabButtonP4));
var defaultGrabButtonP4 : KeyCode;
var grabButtonP4Name : String;
grabButtonP4Name = PlayerPrefs.GetString("Grab P4 Name");
var defaultGrabButtonP4Name : String;
//---------------
static var shieldButtonP4 : KeyCode;
shieldButtonP4 = PlayerPrefs.GetInt("Shield P4", parseInt(shieldButtonP4));
var defaultShieldButtonP4 : KeyCode;
var shieldButtonP4Name : String;
shieldButtonP4Name = PlayerPrefs.GetString("Shield P4 Name");
var defaultShieldButtonP4Name : String;
//---------------
static var jumpButtonP4 : KeyCode;
jumpButtonP4 = PlayerPrefs.GetInt("Jump P4", parseInt(jumpButtonP4));
var defaultJumpButtonP4 : KeyCode;
var jumpButtonP4Name : String;
jumpButtonP4Name = PlayerPrefs.GetString("Jump P4 Name");
var defaultJumpButtonP4Name : String;
//---------------
static var taunt1ButtonP4 : KeyCode;
taunt1ButtonP4 = PlayerPrefs.GetInt("Taunt 1 P4", parseInt(taunt1ButtonP4));
var defaultTaunt1ButtonP4 : KeyCode;
var taunt1ButtonP4Name : String;
taunt1ButtonP4Name = PlayerPrefs.GetString("Taunt 1 P4 Name");
var defaultTaunt1ButtonP4Name : String;
//---------------
static var taunt2ButtonP4 : KeyCode;
taunt2ButtonP4 = PlayerPrefs.GetInt("Taunt 2 P4", parseInt(taunt2ButtonP4));
var defaultTaunt2ButtonP4 : KeyCode;
var taunt2ButtonP4Name : String;
taunt2ButtonP4Name = PlayerPrefs.GetString("Taunt 2 P4 Name");
var defaultTaunt2ButtonP4Name : String;
//---------------
static var taunt3ButtonP4 : KeyCode;
taunt3ButtonP4 = PlayerPrefs.GetInt("Taunt 3 P4", parseInt(taunt3ButtonP4));
var defaultTaunt3ButtonP4 : KeyCode;
var taunt3ButtonP4Name : String;
taunt3ButtonP4Name = PlayerPrefs.GetString("Taunt 3 P4 Name");
var defaultTaunt3ButtonP4Name : String;

function OnGUI () {
if (DemoMenu.menu == 3)
	{
	if (GUI.Button(Rect(10,10,Screen.width*.1,Screen.height/15),backImage))
	{
		DemoMenu.menu = 2;
	}
	if (GUI.Button(Rect(Screen.width*.1,Screen.height*.1,Screen.width*.35,Screen.height*.35), p1ControlsImage))
	{
		DemoMenu.menu = 4;
		playerControlSelected = 1;
	}
	if (GUI.Button(Rect(Screen.width*.55,Screen.height*.1,Screen.width*.35,Screen.height*.35), p2ControlsImage))
	{
		DemoMenu.menu = 4;
		playerControlSelected = 2;
	}
	if (GUI.Button(Rect(Screen.width*.1,Screen.height*.55,Screen.width*.35,Screen.height*.35), p3ControlsImage))
	{
		DemoMenu.menu = 4;
		playerControlSelected = 3;
	}
	if (GUI.Button(Rect(Screen.width*.55,Screen.height*.55,Screen.width*.35,Screen.height*.35), p4ControlsImage))
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
	if (GUI.Button(Rect(Screen.width*.05,Screen.height*.1,Screen.width*.1875,Screen.height*.1375), restoreDefaults)) //Add this in later. Will allow for Restoring Control Defaults.
	{
		PlayerPrefs.DeleteKey("Accept");
		PlayerPrefs.DeleteKey("Back");
		PlayerPrefs.DeleteKey("Pause");
		PlayerPrefs.DeleteKey("Left");
		PlayerPrefs.DeleteKey("Right");
		PlayerPrefs.DeleteKey("Up");
		PlayerPrefs.DeleteKey("Down");
		PlayerPrefs.DeleteKey("Attack");
		PlayerPrefs.DeleteKey("Special");
		PlayerPrefs.DeleteKey("Grab");
		PlayerPrefs.DeleteKey("Shield");
		PlayerPrefs.DeleteKey("Jump");
		PlayerPrefs.DeleteKey("Taunt 1");
		PlayerPrefs.DeleteKey("Taunt 2");
		PlayerPrefs.DeleteKey("Taunt 3");
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
	PlayerPrefs.SetInt("Accept", acceptButton);
	PlayerPrefs.SetString("Accept Name", acceptButtonName);
	}
   
//Back Button Select (Player 1)
if (controlSelected == 2)
	{
	(GUI.Box(Rect (Screen.width*.525,Screen.height*.05,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect(); 
	backButton = selectedButton;
	backButtonName = selectedButtonName;
	PlayerPrefs.SetInt("Back", backButton);
	PlayerPrefs.SetString("Back Name", backButtonName);
    }

//Jump Button Select (Player 1)
if (controlSelected == 3)
	{
	(GUI.Box(Rect(Screen.width*.7625,Screen.height*.05,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	pauseButton = selectedButton;
	pauseButtonName = selectedButtonName;
	PlayerPrefs.SetInt("Pause", pauseButton);
	PlayerPrefs.SetString("Pause Name", pauseButtonName);
	}

//Left Button Select (Player 1)
if (controlSelected == 4)
	{
	(GUI.Box(Rect(Screen.width*.05,Screen.height*.2875,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	leftButton = selectedButton;
	leftButtonName = selectedButtonName;
	PlayerPrefs.SetInt("Left", leftButton);
	PlayerPrefs.SetString("Left Name", leftButtonName);
	}
	
//Right Button Select (Player 1)
if (controlSelected == 5)
	{
	(GUI.Box(Rect(Screen.width*.2875,Screen.height*.2875,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	rightButton = selectedButton;
	rightButtonName = selectedButtonName;
	PlayerPrefs.SetInt("Right", rightButton);
	PlayerPrefs.SetString("Right Name", rightButtonName);
	}

//Up Button Select (Player 1)
if (controlSelected == 6)
	{
	(GUI.Box(Rect(Screen.width*.525,Screen.height*.2875,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	upButton = selectedButton;
	upButtonName = selectedButtonName;
	PlayerPrefs.SetInt("Up", upButton);
	PlayerPrefs.SetString("Up Name", upButtonName);
	}

//Down Button Select (Player 1)
if (controlSelected == 7)
	{
	(GUI.Box(Rect(Screen.width*.7625,Screen.height*.2875,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	downButton = selectedButton;
	downButtonName = selectedButtonName;
	PlayerPrefs.SetInt("Down", downButton);
	PlayerPrefs.SetString("Down Name", downButtonName);
	}

//Attack Button Select (Player 1)
if (controlSelected == 8)
	{
	(GUI.Box(Rect(Screen.width*.05,Screen.height*.525,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	attackButton = selectedButton;
	attackButtonName = selectedButtonName;
	PlayerPrefs.SetInt("Attack", attackButton);
	PlayerPrefs.SetString("Attack Name", attackButtonName);
	}

//Special Button Select (Player 1)
if (controlSelected == 9)
	{
	(GUI.Box(Rect(Screen.width*.2875,Screen.height*.525,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	specialButton = selectedButton;
	specialButtonName = selectedButtonName;
	PlayerPrefs.SetInt("Special", specialButton);
	PlayerPrefs.SetString("Special Name", specialButtonName);
	}

//Grab Button Select (Player 1)
if (controlSelected == 10)
	{
	(GUI.Box(Rect(Screen.width*.525,Screen.height*.525,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	grabButton = selectedButton;
	grabButtonName = selectedButtonName;
	PlayerPrefs.SetInt("Grab", grabButton);
	PlayerPrefs.SetString("Grab Name", grabButtonName);
	}

//Shield Button Select (Player 1)
if (controlSelected == 11)
	{
	(GUI.Box(Rect(Screen.width*.7625,Screen.height*.525,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	shieldButton = selectedButton;
	shieldButtonName = selectedButtonName;
	PlayerPrefs.SetInt("Shield", shieldButton);
	PlayerPrefs.SetString("Shield Name", shieldButtonName);
	}

//Jump Button Select (Player 1)
if (controlSelected == 12)
	{
	(GUI.Box(Rect(Screen.width*.05,Screen.height*.7625,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	jumpButton = selectedButton;
	jumpButtonName = selectedButtonName;
	PlayerPrefs.SetInt("Jump", jumpButton);
	PlayerPrefs.SetString("Jump Name", jumpButtonName);
	}

//Taunt 1 Button Select (Player 1)
if (controlSelected == 13)
	{
	(GUI.Box(Rect(Screen.width*.2875,Screen.height*.7625,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	taunt1Button = selectedButton;
	taunt1ButtonName = selectedButtonName;
	PlayerPrefs.SetInt("Taunt 1", taunt1Button);
	PlayerPrefs.SetString("Taunt 1 Name", taunt1ButtonName);
	}

//Taunt 2 Button Select (Player 1)
if (controlSelected == 14)
	{
	(GUI.Box(Rect(Screen.width*.525,Screen.height*.7625,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	taunt2Button = selectedButton;
	taunt2ButtonName = selectedButtonName;
	PlayerPrefs.SetInt("Taunt 2", taunt2Button);
	PlayerPrefs.SetString("Taunt 2 Name", taunt2ButtonName);
	}


//Taunt 3 Button Select (Player 1)
if (controlSelected == 15)
	{
	(GUI.Box(Rect(Screen.width*.7625,Screen.height*.7625,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	taunt3Button = selectedButton;
	taunt3ButtonName = selectedButtonName;
	PlayerPrefs.SetInt("Taunt 3", taunt3Button);
	PlayerPrefs.SetString("Taunt 3 Name", taunt3ButtonName);
	}
}





//Player 2 Control Menu
if (playerControlSelected == 2)
	{
	if (GUI.Button(Rect(Screen.width*.05,Screen.height*.1,Screen.width*.1875,Screen.height*.1375), restoreDefaults)) //Add this in later. Will allow for Restoring Control Defaults.
	{
		PlayerPrefs.DeleteKey("Accept P2");
		PlayerPrefs.DeleteKey("Back P2");
		PlayerPrefs.DeleteKey("Pause P2");
		PlayerPrefs.DeleteKey("Left P2");
		PlayerPrefs.DeleteKey("Right P2");
		PlayerPrefs.DeleteKey("Up P2");
		PlayerPrefs.DeleteKey("Down P2");
		PlayerPrefs.DeleteKey("Attack P2");
		PlayerPrefs.DeleteKey("Special P2");
		PlayerPrefs.DeleteKey("Grab P2");
		PlayerPrefs.DeleteKey("Shield P2");
		PlayerPrefs.DeleteKey("Jump P2");
		PlayerPrefs.DeleteKey("Taunt 1 P2");
		PlayerPrefs.DeleteKey("Taunt 2 P2");
		PlayerPrefs.DeleteKey("Taunt 3 P2");
	}
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
	PlayerPrefs.SetInt("Accept P2", acceptButtonP2);
	PlayerPrefs.SetString("Accept P2 Name", acceptButtonP2Name);
	}
   
//Back Button Select (Player 2)
if (controlSelected == 2)
	{
	(GUI.Box(Rect (Screen.width*.525,Screen.height*.05,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect(); 
	backButtonP2 = selectedButton;
	backButtonP2Name = selectedButtonName;
	PlayerPrefs.SetInt("Back P2", backButtonP2);
	PlayerPrefs.SetString("Back P2 Name", backButtonP2Name);
    }

//Jump Button Select (Player 2)
if (controlSelected == 3)
	{
	(GUI.Box(Rect(Screen.width*.7625,Screen.height*.05,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	pauseButtonP2 = selectedButton;
	pauseButtonP2Name = selectedButtonName;
	PlayerPrefs.SetInt("Pause P2", pauseButtonP2);
	PlayerPrefs.SetString("Pause P2 Name", pauseButtonP2Name);
	}

//Left Button Select (Player 2)
if (controlSelected == 4)
	{
	(GUI.Box(Rect(Screen.width*.05,Screen.height*.2875,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	leftButtonP2 = selectedButton;
	leftButtonP2Name = selectedButtonName;
	PlayerPrefs.SetInt("Left P2", leftButtonP2);
	PlayerPrefs.SetString("Left P2 Name", leftButtonP2Name);
	}
	
//Right Button Select (Player 2)
if (controlSelected == 5)
	{
	(GUI.Box(Rect(Screen.width*.2875,Screen.height*.2875,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	rightButtonP2 = selectedButton;
	rightButtonP2Name = selectedButtonName;
	PlayerPrefs.SetInt("Right P2", rightButtonP2);
	PlayerPrefs.SetString("Right P2 Name", rightButtonP2Name);
	}

//Up Button Select (Player 2)
if (controlSelected == 6)
	{
	(GUI.Box(Rect(Screen.width*.525,Screen.height*.2875,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	upButtonP2 = selectedButton;
	upButtonP2Name = selectedButtonName;
	PlayerPrefs.SetInt("Up P2", upButtonP2);
	PlayerPrefs.SetString("Up P2 Name", upButtonP2Name);
	}

//Down Button Select (Player 2)
if (controlSelected == 7)
	{
	(GUI.Box(Rect(Screen.width*.7625,Screen.height*.2875,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	downButtonP2 = selectedButton;
	downButtonP2Name = selectedButtonName;
	PlayerPrefs.SetInt("Down P2", downButtonP2);
	PlayerPrefs.SetString("Down P2 Name", downButtonP2Name);
	}

//Attack Button Select (Player 2)
if (controlSelected == 8)
	{
	(GUI.Box(Rect(Screen.width*.05,Screen.height*.525,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	attackButtonP2 = selectedButton;
	attackButtonP2Name = selectedButtonName;
	PlayerPrefs.SetInt("Attack P2", attackButtonP2);
	PlayerPrefs.SetString("Attack P2 Name", attackButtonP2Name);
	}

//Special Button Select (Player 2)
if (controlSelected == 9)
	{
	(GUI.Box(Rect(Screen.width*.2875,Screen.height*.525,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	specialButtonP2 = selectedButton;
	specialButtonP2Name = selectedButtonName;
	PlayerPrefs.SetInt("Special P2", specialButtonP2);
	PlayerPrefs.SetString("Special P2 Name", specialButtonP2Name);
	}

//Grab Button Select (Player 2)
if (controlSelected == 10)
	{
	(GUI.Box(Rect(Screen.width*.525,Screen.height*.525,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	grabButtonP2 = selectedButton;
	grabButtonP2Name = selectedButtonName;
	PlayerPrefs.SetInt("Grab P2", grabButtonP2);
	PlayerPrefs.SetString("Grab P2 Name", grabButtonP2Name);
	}

//Shield Button Select (Player 2)
if (controlSelected == 11)
	{
	(GUI.Box(Rect(Screen.width*.7625,Screen.height*.525,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	shieldButtonP2 = selectedButton;
	shieldButtonP2Name = selectedButtonName;
	PlayerPrefs.SetInt("Shield P2", shieldButtonP2);
	PlayerPrefs.SetString("Shield P2 Name", shieldButtonP2Name);
	}

//Jump Button Select (Player 2)
if (controlSelected == 12)
	{
	(GUI.Box(Rect(Screen.width*.05,Screen.height*.7625,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	jumpButtonP2 = selectedButton;
	jumpButtonP2Name = selectedButtonName;
	PlayerPrefs.SetInt("Jump P2", jumpButtonP2);
	PlayerPrefs.SetString("Jump P2 Name", jumpButtonP2Name);
	}

//Taunt 1 Button Select (Player 2)
if (controlSelected == 13)
	{
	(GUI.Box(Rect(Screen.width*.2875,Screen.height*.7625,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	taunt1ButtonP2 = selectedButton;
	taunt1ButtonP2Name = selectedButtonName;
	PlayerPrefs.SetInt("Taunt 1 P2", taunt1ButtonP2);
	PlayerPrefs.SetString("Taunt 1 P2 Name", taunt1ButtonP2Name);
	}

//Taunt 2 Button Select (Player 2)
if (controlSelected == 14)
	{
	(GUI.Box(Rect(Screen.width*.525,Screen.height*.7625,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	taunt2ButtonP2 = selectedButton;
	taunt2ButtonP2Name = selectedButtonName;
	PlayerPrefs.SetInt("Taunt 2 P2", taunt2ButtonP2);
	PlayerPrefs.SetString("Taunt 2 P2 Name", taunt2ButtonP2Name);
	}


//Taunt 3 Button Select (Player 2)
if (controlSelected == 15)
	{
	(GUI.Box(Rect(Screen.width*.7625,Screen.height*.7625,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	taunt3ButtonP2 = selectedButton;
	taunt3ButtonP2Name = selectedButtonName;
	PlayerPrefs.SetInt("Taunt 3 P2", taunt3ButtonP2);
	PlayerPrefs.SetString("Taunt 3 P2 Name", taunt3ButtonP2Name);
	}
}





//Player 3 Control Menu
if (playerControlSelected == 3)
	{
	if (GUI.Button(Rect(Screen.width*.05,Screen.height*.1,Screen.width*.1875,Screen.height*.1375), restoreDefaults)) //Add this in later. Will allow for Restoring Control Defaults.
	{
		PlayerPrefs.DeleteKey("Accept P3");
		PlayerPrefs.DeleteKey("Back P3");
		PlayerPrefs.DeleteKey("Pause P3");
		PlayerPrefs.DeleteKey("Left P3");
		PlayerPrefs.DeleteKey("Right P3");
		PlayerPrefs.DeleteKey("Up P3");
		PlayerPrefs.DeleteKey("Down P3");
		PlayerPrefs.DeleteKey("Attack P3");
		PlayerPrefs.DeleteKey("Special P3");
		PlayerPrefs.DeleteKey("Grab P3");
		PlayerPrefs.DeleteKey("Shield P3");
		PlayerPrefs.DeleteKey("Jump P3");
		PlayerPrefs.DeleteKey("Taunt 1 P3");
		PlayerPrefs.DeleteKey("Taunt 2 P3");
		PlayerPrefs.DeleteKey("Taunt 3 P3");
	}
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
	PlayerPrefs.SetInt("Accept P3", acceptButtonP3);
	PlayerPrefs.SetString("Accept P3 Name", acceptButtonP3Name);
	}
   
//Back Button Select (Player 3)
if (controlSelected == 2)
	{
	(GUI.Box(Rect (Screen.width*.525,Screen.height*.05,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect(); 
	backButtonP3 = selectedButton;
	backButtonP3Name = selectedButtonName;
	PlayerPrefs.SetInt("Back P3", backButtonP3);
	PlayerPrefs.SetString("Back P3 Name", backButtonP3Name);
    }

//Jump Button Select (Player 3)
if (controlSelected == 3)
	{
	(GUI.Box(Rect(Screen.width*.7625,Screen.height*.05,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	pauseButtonP3 = selectedButton;
	pauseButtonP3Name = selectedButtonName;
	PlayerPrefs.SetInt("Pause P3", pauseButtonP3);
	PlayerPrefs.SetString("Pause P3 Name", pauseButtonP3Name);
	}

//Left Button Select (Player 3)
if (controlSelected == 4)
	{
	(GUI.Box(Rect(Screen.width*.05,Screen.height*.2875,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	leftButtonP3 = selectedButton;
	leftButtonP3Name = selectedButtonName;
	PlayerPrefs.SetInt("Left P3", leftButtonP3);
	PlayerPrefs.SetString("Left P3 Name", leftButtonP3Name);
	}
	
//Right Button Select (Player 3)
if (controlSelected == 5)
	{
	(GUI.Box(Rect(Screen.width*.2875,Screen.height*.2875,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	rightButtonP3 = selectedButton;
	rightButtonP3Name = selectedButtonName;
	PlayerPrefs.SetInt("Right P3", rightButtonP3);
	PlayerPrefs.SetString("Right P3 Name", rightButtonP3Name);
	}

//Up Button Select (Player 3)
if (controlSelected == 6)
	{
	(GUI.Box(Rect(Screen.width*.525,Screen.height*.2875,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	upButtonP3 = selectedButton;
	upButtonP3Name = selectedButtonName;
	PlayerPrefs.SetInt("Up P3", upButtonP3);
	PlayerPrefs.SetString("Up P3 Name", upButtonP3Name);
	}

//Down Button Select (Player 3)
if (controlSelected == 7)
	{
	(GUI.Box(Rect(Screen.width*.7625,Screen.height*.2875,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	downButtonP3 = selectedButton;
	downButtonP3Name = selectedButtonName;
	PlayerPrefs.SetInt("Down P3", downButtonP3);
	PlayerPrefs.SetString("Down P3 Name", downButtonP3Name);
	}

//Attack Button Select (Player 3)
if (controlSelected == 8)
	{
	(GUI.Box(Rect(Screen.width*.05,Screen.height*.525,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	attackButtonP3 = selectedButton;
	attackButtonP3Name = selectedButtonName;
	PlayerPrefs.SetInt("Attack P3", attackButtonP3);
	PlayerPrefs.SetString("Attack P3 Name", attackButtonP3Name);
	}

//Special Button Select (Player 3)
if (controlSelected == 9)
	{
	(GUI.Box(Rect(Screen.width*.2875,Screen.height*.525,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	specialButtonP3 = selectedButton;
	specialButtonP3Name = selectedButtonName;
	PlayerPrefs.SetInt("Special P3", specialButtonP3);
	PlayerPrefs.SetString("Special P3 Name", specialButtonP3Name);
	}

//Grab Button Select (Player 3)
if (controlSelected == 10)
	{
	(GUI.Box(Rect(Screen.width*.525,Screen.height*.525,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	grabButtonP3 = selectedButton;
	grabButtonP3Name = selectedButtonName;
	PlayerPrefs.SetInt("Grab P3", grabButtonP3);
	PlayerPrefs.SetString("Grab P3 Name", grabButtonP3Name);
	}

//Shield Button Select (Player 3)
if (controlSelected == 11)
	{
	(GUI.Box(Rect(Screen.width*.7625,Screen.height*.525,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	shieldButtonP3 = selectedButton;
	shieldButtonP3Name = selectedButtonName;
	PlayerPrefs.SetInt("Shield P3", shieldButtonP3);
	PlayerPrefs.SetString("Shield P3 Name", shieldButtonP3Name);
	}

//Jump Button Select (Player 3)
if (controlSelected == 12)
	{
	(GUI.Box(Rect(Screen.width*.05,Screen.height*.7625,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	jumpButtonP3 = selectedButton;
	jumpButtonP3Name = selectedButtonName;
	PlayerPrefs.SetInt("Jump P3", jumpButtonP3);
	PlayerPrefs.SetString("Jump P3 Name", jumpButtonP3Name);
	}

//Taunt 1 Button Select (Player 3)
if (controlSelected == 13)
	{
	(GUI.Box(Rect(Screen.width*.2875,Screen.height*.7625,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	taunt1ButtonP3 = selectedButton;
	taunt1ButtonP3Name = selectedButtonName;
	PlayerPrefs.SetInt("Taunt 1 P3", taunt1ButtonP3);
	PlayerPrefs.SetString("Taunt 1 P3 Name", taunt1ButtonP3Name);
	}

//Taunt 2 Button Select (Player 3)
if (controlSelected == 14)
	{
	(GUI.Box(Rect(Screen.width*.525,Screen.height*.7625,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	taunt2ButtonP3 = selectedButton;
	taunt2ButtonP3Name = selectedButtonName;
	PlayerPrefs.SetInt("Taunt 2 P3", taunt2ButtonP3);
	PlayerPrefs.SetString("Taunt 2 P3 Name", taunt2ButtonP3Name);
	}


//Taunt 3 Button Select (Player 3)
if (controlSelected == 15)
	{
	(GUI.Box(Rect(Screen.width*.7625,Screen.height*.7625,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	taunt3ButtonP3 = selectedButton;
	taunt3ButtonP3Name = selectedButtonName;
	PlayerPrefs.SetInt("Taunt 3 P3", taunt3ButtonP3);
	PlayerPrefs.SetString("Taunt 3 P3 Name", taunt3ButtonP3Name);
	}
}





//Player 4 Control Menu
if (playerControlSelected == 4)
	{
	if (GUI.Button(Rect(Screen.width*.05,Screen.height*.1,Screen.width*.1875,Screen.height*.1375), restoreDefaults)) //Add this in later. Will allow for Restoring Control Defaults.
	{
		PlayerPrefs.DeleteKey("Accept P4");
		PlayerPrefs.DeleteKey("Back P4");
		PlayerPrefs.DeleteKey("Pause P4");
		PlayerPrefs.DeleteKey("Left P4");
		PlayerPrefs.DeleteKey("Right P4");
		PlayerPrefs.DeleteKey("Up P4");
		PlayerPrefs.DeleteKey("Down P4");
		PlayerPrefs.DeleteKey("Attack P4");
		PlayerPrefs.DeleteKey("Special P4");
		PlayerPrefs.DeleteKey("Grab P4");
		PlayerPrefs.DeleteKey("Shield P4");
		PlayerPrefs.DeleteKey("Jump P4");
		PlayerPrefs.DeleteKey("Taunt 1 P4");
		PlayerPrefs.DeleteKey("Taunt 2 P4");
		PlayerPrefs.DeleteKey("Taunt 3 P4");
	}
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
	PlayerPrefs.SetInt("Accept P4", acceptButtonP4);
	PlayerPrefs.SetString("Accept P4 Name", acceptButtonP4Name);
	}
   
//Back Button Select (Player 4)
if (controlSelected == 2)
	{
	(GUI.Box(Rect (Screen.width*.525,Screen.height*.05,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect(); 
	backButtonP4 = selectedButton;
	backButtonP4Name = selectedButtonName;
	PlayerPrefs.SetInt("Back P4", backButtonP4);
	PlayerPrefs.SetString("Back P4 Name", backButtonP4Name);
    }

//Jump Button Select (Player 4)
if (controlSelected == 3)
	{
	(GUI.Box(Rect(Screen.width*.7625,Screen.height*.05,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	pauseButtonP4 = selectedButton;
	pauseButtonP4Name = selectedButtonName;
	PlayerPrefs.SetInt("Pause P4", pauseButtonP4);
	PlayerPrefs.SetString("Pause P4 Name", pauseButtonP4Name);
	}

//Left Button Select (Player 4)
if (controlSelected == 4)
	{
	(GUI.Box(Rect(Screen.width*.05,Screen.height*.2875,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	leftButtonP4 = selectedButton;
	leftButtonP4Name = selectedButtonName;
	PlayerPrefs.SetInt("Left P4", leftButtonP4);
	PlayerPrefs.SetString("Left P4 Name", leftButtonP4Name);
	}
	
//Right Button Select (Player 4)
if (controlSelected == 5)
	{
	(GUI.Box(Rect(Screen.width*.2875,Screen.height*.2875,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	rightButtonP4 = selectedButton;
	rightButtonP4Name = selectedButtonName;
	PlayerPrefs.SetInt("Right P4", rightButtonP4);
	PlayerPrefs.SetString("Right P4 Name", rightButtonP4Name);
	}

//Up Button Select (Player 4)
if (controlSelected == 6)
	{
	(GUI.Box(Rect(Screen.width*.525,Screen.height*.2875,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	upButtonP4 = selectedButton;
	upButtonP4Name = selectedButtonName;
	PlayerPrefs.SetInt("Up P4", upButtonP4);
	PlayerPrefs.SetString("Up P4 Name", upButtonP4Name);
	}

//Down Button Select (Player 4)
if (controlSelected == 7)
	{
	(GUI.Box(Rect(Screen.width*.7625,Screen.height*.2875,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	downButtonP4 = selectedButton;
	downButtonP4Name = selectedButtonName;
	PlayerPrefs.SetInt("Down P4", downButtonP4);
	PlayerPrefs.SetString("Down P4 Name", downButtonP4Name);
	}

//Attack Button Select (Player 4)
if (controlSelected == 8)
	{
	(GUI.Box(Rect(Screen.width*.05,Screen.height*.525,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	attackButtonP4 = selectedButton;
	attackButtonP4Name = selectedButtonName;
	PlayerPrefs.SetInt("Attack P4", attackButtonP4);
	PlayerPrefs.SetString("Attack P4 Name", attackButtonP4Name);
	}

//Special Button Select (Player 4)
if (controlSelected == 9)
	{
	(GUI.Box(Rect(Screen.width*.2875,Screen.height*.525,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	specialButtonP4 = selectedButton;
	specialButtonP4Name = selectedButtonName;
	PlayerPrefs.SetInt("Special P4", specialButtonP4);
	PlayerPrefs.SetString("Specia P4 Name", specialButtonP4Name);
	}

//Grab Button Select (Player 4)
if (controlSelected == 10)
	{
	(GUI.Box(Rect(Screen.width*.525,Screen.height*.525,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	grabButtonP4 = selectedButton;
	grabButtonP4Name = selectedButtonName;
	PlayerPrefs.SetInt("Grab P4", grabButtonP4);
	PlayerPrefs.SetString("Grab P4 Name", grabButtonP4Name);
	}

//Shield Button Select (Player 4)
if (controlSelected == 11)
	{
	(GUI.Box(Rect(Screen.width*.7625,Screen.height*.525,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	shieldButtonP4 = selectedButton;
	shieldButtonP4Name = selectedButtonName;
	PlayerPrefs.SetInt("Shield P4", shieldButtonP4);
	PlayerPrefs.SetString("Shield P4 Name", shieldButtonP4Name);
	}

//Jump Button Select (Player 4)
if (controlSelected == 12)
	{
	(GUI.Box(Rect(Screen.width*.05,Screen.height*.7625,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	jumpButtonP4 = selectedButton;
	jumpButtonP4Name = selectedButtonName;
	PlayerPrefs.SetInt("Jump P4", jumpButtonP4);
	PlayerPrefs.SetString("Jump P4 Name", jumpButtonP4Name);
	}

//Taunt 1 Button Select (Player 4)
if (controlSelected == 13)
	{
	(GUI.Box(Rect(Screen.width*.2875,Screen.height*.7625,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	taunt1ButtonP4 = selectedButton;
	taunt1ButtonP4Name = selectedButtonName;
	PlayerPrefs.SetInt("Taunt 1 P4", taunt1ButtonP4);
	PlayerPrefs.SetString("Taunt 1 P4 Name", taunt1ButtonP4Name);
	}

//Taunt 2 Button Select (Player 4)
if (controlSelected == 14)
	{
	(GUI.Box(Rect(Screen.width*.525,Screen.height*.7625,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	taunt2ButtonP4 = selectedButton;
	taunt2ButtonP4Name = selectedButtonName;
	PlayerPrefs.SetInt("Taunt 2 P4", taunt2ButtonP4);
	PlayerPrefs.SetString("Taunt 2 P4 Name", taunt2ButtonP4Name);
	}


//Taunt 3 Button Select (Player 4)
if (controlSelected == 15)
	{
	(GUI.Box(Rect(Screen.width*.7625,Screen.height*.7625,Screen.width*.1875,Screen.height*.1875),"Choose the button you want to use"));
	ControlSelect();
	taunt3ButtonP4 = selectedButton;
	taunt3ButtonP4Name = selectedButtonName;
	PlayerPrefs.SetInt("Taunt 3 P4", taunt3ButtonP4);
	PlayerPrefs.SetString("Taunt 3 P4 Name", taunt3ButtonP4Name);
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
		
	//Sets that if a key doesn't have a PlayerPref set, it will be the default key instead
	
	//Player 1
	if (!PlayerPrefs.HasKey("Accept"))
	{
		acceptButton = defaultAcceptButton;
		acceptButtonName = defaultAcceptButtonName;
	}
	if (!PlayerPrefs.HasKey("Back"))
	{
		backButton = defaultBackButton;
		backButtonName = defaultBackButtonName;
	}
	if (!PlayerPrefs.HasKey("Pause"))
	{
		pauseButton = defaultPauseButton;
		pauseButtonName = defaultPauseButtonName;
	}
	if (!PlayerPrefs.HasKey("Left"))
	{
		leftButton = defaultLeftButton;
		leftButtonName = defaultLeftButtonName;
	}
	if (!PlayerPrefs.HasKey("Right"))
	{
		rightButton = defaultRightButton;
		rightButtonName = defaultRightButtonName;
	}
	if (!PlayerPrefs.HasKey("Up"))
	{
		upButton = defaultUpButton;
		upButtonName = defaultUpButtonName;
	}
	if (!PlayerPrefs.HasKey("Down"))
	{
		downButton = defaultDownButton;
		downButtonName = defaultDownButtonName;
	}
	if (!PlayerPrefs.HasKey("Attack"))
	{
		attackButton = defaultAttackButton;
		attackButtonName = defaultAttackButtonName;
	}
	if (!PlayerPrefs.HasKey("Special"))
	{
		specialButton = defaultSpecialButton;
		specialButtonName = defaultSpecialButtonName;
	}
	if (!PlayerPrefs.HasKey("Grab"))
	{
		grabButton = defaultGrabButton;
		grabButtonName = defaultGrabButtonName;
	}
	if (!PlayerPrefs.HasKey("Shield"))
	{
		shieldButton = defaultShieldButton;
		shieldButtonName = defaultShieldButtonName;
	}
	if (!PlayerPrefs.HasKey("Jump"))
	{
		jumpButton = defaultJumpButton;
		jumpButtonName = defaultJumpButtonName;
	}
	if (!PlayerPrefs.HasKey("Taunt 1"))
	{
		taunt1Button = defaultTaunt1Button;
		taunt1ButtonName = defaultTaunt1ButtonName;
	}
	if (!PlayerPrefs.HasKey("Taunt 2"))
	{
		taunt2Button = defaultTaunt2Button;
		taunt2ButtonName = defaultTaunt2ButtonName;
	}
	if (!PlayerPrefs.HasKey("Taunt 3"))
	{
		taunt3Button = defaultTaunt3Button;
		taunt3ButtonName = defaultTaunt3ButtonName;
	}
	
	//Player 2
	if (!PlayerPrefs.HasKey("Accept P2"))
	{
		acceptButtonP2 = defaultAcceptButtonP2;
		acceptButtonP2Name = defaultAcceptButtonP2Name;
	}
	if (!PlayerPrefs.HasKey("Back P2"))
	{
		backButtonP2 = defaultBackButtonP2;
		backButtonP2Name = defaultBackButtonP2Name;
	}
	if (!PlayerPrefs.HasKey("Pause P2"))
	{
		pauseButtonP2 = defaultPauseButtonP2;
		pauseButtonP2Name = defaultPauseButtonP2Name;
	}
	if (!PlayerPrefs.HasKey("Left P2"))
	{
		leftButtonP2 = defaultLeftButtonP2;
		leftButtonP2Name = defaultLeftButtonP2Name;
	}
	if (!PlayerPrefs.HasKey("Right P2"))
	{
		rightButtonP2 = defaultRightButtonP2;
		rightButtonP2Name = defaultRightButtonP2Name;
	}
	if (!PlayerPrefs.HasKey("Up P2"))
	{
		upButtonP2 = defaultUpButtonP2;
		upButtonP2Name = defaultUpButtonP2Name;
	}
	if (!PlayerPrefs.HasKey("Down P2"))
	{
		downButtonP2 = defaultDownButtonP2;
		downButtonP2Name = defaultDownButtonP2Name;
	}
	if (!PlayerPrefs.HasKey("Attack P2"))
	{
		attackButtonP2 = defaultAttackButtonP2;
		attackButtonP2Name = defaultAttackButtonP2Name;
	}
	if (!PlayerPrefs.HasKey("Special P2"))
	{
		specialButtonP2 = defaultSpecialButtonP2;
		specialButtonP2Name = defaultSpecialButtonP2Name;
	}
	if (!PlayerPrefs.HasKey("Grab P2"))
	{
		grabButtonP2 = defaultGrabButtonP2;
		grabButtonP2Name = defaultGrabButtonP2Name;
	}
	if (!PlayerPrefs.HasKey("Shield P2"))
	{
		shieldButtonP2 = defaultShieldButtonP2;
		shieldButtonP2Name = defaultShieldButtonP2Name;
	}
	if (!PlayerPrefs.HasKey("Jump P2"))
	{
		jumpButtonP2 = defaultJumpButtonP2;
		jumpButtonP2Name = defaultJumpButtonP2Name;
	}
	if (!PlayerPrefs.HasKey("Taunt 1 P2"))
	{
		taunt1ButtonP2 = defaultTaunt1ButtonP2;
		taunt1ButtonP2Name = defaultTaunt1ButtonP2Name;
	}
	if (!PlayerPrefs.HasKey("Taunt 2 P2"))
	{
		taunt2ButtonP2 = defaultTaunt2ButtonP2;
		taunt2ButtonP2Name = defaultTaunt2ButtonP2Name;
	}
	if (!PlayerPrefs.HasKey("Taunt 3 P2"))
	{
		taunt3ButtonP2 = defaultTaunt3ButtonP2;
		taunt3ButtonP2Name = defaultTaunt3ButtonP2Name;
	}
	
	//Player 3
	if (!PlayerPrefs.HasKey("Accept P3"))
	{
		acceptButtonP3 = defaultAcceptButtonP3;
		acceptButtonP3Name = defaultAcceptButtonP3Name;
	}
	if (!PlayerPrefs.HasKey("Back P3"))
	{
		backButtonP3 = defaultBackButtonP3;
		backButtonP3Name = defaultBackButtonP3Name;
	}
	if (!PlayerPrefs.HasKey("Pause P3"))
	{
		pauseButtonP3 = defaultPauseButtonP3;
		pauseButtonP3Name = defaultPauseButtonP3Name;
	}
	if (!PlayerPrefs.HasKey("Left P3"))
	{
		leftButtonP3 = defaultLeftButtonP3;
		leftButtonP3Name = defaultLeftButtonP3Name;
	}
	if (!PlayerPrefs.HasKey("Right P3"))
	{
		rightButtonP3 = defaultRightButtonP3;
		rightButtonP3Name = defaultRightButtonP3Name;
	}
	if (!PlayerPrefs.HasKey("Up P3"))
	{
		upButtonP3 = defaultUpButtonP3;
		upButtonP3Name = defaultUpButtonP3Name;
	}
	if (!PlayerPrefs.HasKey("Down P3"))
	{
		downButtonP3 = defaultDownButtonP3;
		downButtonP3Name = defaultDownButtonP3Name;
	}
	if (!PlayerPrefs.HasKey("Attack P3"))
	{
		attackButtonP3 = defaultAttackButtonP3;
		attackButtonP3Name = defaultAttackButtonP3Name;
	}
	if (!PlayerPrefs.HasKey("Special P3"))
	{
		specialButtonP3 = defaultSpecialButtonP3;
		specialButtonP3Name = defaultSpecialButtonP3Name;
	}
	if (!PlayerPrefs.HasKey("Grab P3"))
	{
		grabButtonP3 = defaultGrabButtonP3;
		grabButtonP3Name = defaultGrabButtonP3Name;
	}
	if (!PlayerPrefs.HasKey("Shield P3"))
	{
		shieldButtonP3 = defaultShieldButtonP3;
		shieldButtonP3Name = defaultShieldButtonP3Name;
	}
	if (!PlayerPrefs.HasKey("Jump P3"))
	{
		jumpButtonP3 = defaultJumpButtonP3;
		jumpButtonP3Name = defaultJumpButtonP3Name;
	}
	if (!PlayerPrefs.HasKey("Taunt 1 P3"))
	{
		taunt1ButtonP3 = defaultTaunt1ButtonP3;
		taunt1ButtonP3Name = defaultTaunt1ButtonP3Name;
	}
	if (!PlayerPrefs.HasKey("Taunt 2 P3"))
	{
		taunt2ButtonP3 = defaultTaunt2ButtonP3;
		taunt2ButtonP3Name = defaultTaunt2ButtonP3Name;
	}
	if (!PlayerPrefs.HasKey("Taunt 3 P3"))
	{
		taunt3ButtonP3 = defaultTaunt3ButtonP3;
		taunt3ButtonP3Name = defaultTaunt3ButtonP3Name;
	}
	
	//Player 4
	if (!PlayerPrefs.HasKey("Accept P4"))
	{
		acceptButtonP4 = defaultAcceptButtonP4;
		acceptButtonP4Name = defaultAcceptButtonP4Name;
	}
	if (!PlayerPrefs.HasKey("Back P4"))
	{
		backButtonP4 = defaultBackButtonP4;
		backButtonP4Name = defaultBackButtonP4Name;
	}
	if (!PlayerPrefs.HasKey("Pause P4"))
	{
		pauseButtonP4 = defaultPauseButtonP4;
		pauseButtonP4Name = defaultPauseButtonP4Name;
	}
	if (!PlayerPrefs.HasKey("Left P4"))
	{
		leftButtonP4 = defaultLeftButtonP4;
		leftButtonP4Name = defaultLeftButtonP4Name;
	}
	if (!PlayerPrefs.HasKey("Right P4"))
	{
		rightButtonP4 = defaultRightButtonP4;
		rightButtonP4Name = defaultRightButtonP4Name;
	}
	if (!PlayerPrefs.HasKey("Up P4"))
	{
		upButtonP4 = defaultUpButtonP4;
		upButtonP4Name = defaultUpButtonP4Name;
	}
	if (!PlayerPrefs.HasKey("Down P4"))
	{
		downButtonP4 = defaultDownButtonP4;
		downButtonP4Name = defaultDownButtonP4Name;
	}
	if (!PlayerPrefs.HasKey("Attack P4"))
	{
		attackButtonP4 = defaultAttackButtonP4;
		attackButtonP4Name = defaultAttackButtonP4Name;
	}
	if (!PlayerPrefs.HasKey("Special P4"))
	{
		specialButtonP4 = defaultSpecialButtonP4;
		specialButtonP4Name = defaultSpecialButtonP4Name;
	}
	if (!PlayerPrefs.HasKey("Grab P4"))
	{
		grabButtonP4 = defaultGrabButtonP4;
		grabButtonP4Name = defaultGrabButtonP4Name;
	}
	if (!PlayerPrefs.HasKey("Shield P4"))
	{
		shieldButtonP4 = defaultShieldButtonP4;
		shieldButtonP4Name = defaultShieldButtonP4Name;
	}
	if (!PlayerPrefs.HasKey("Jump P4"))
	{
		jumpButtonP4 = defaultJumpButtonP4;
		jumpButtonP4Name = defaultJumpButtonP4Name;
	}
	if (!PlayerPrefs.HasKey("Taunt 1 P4"))
	{
		taunt1ButtonP4 = defaultTaunt1ButtonP4;
		taunt1ButtonP4Name = defaultTaunt1ButtonP4Name;
	}
	if (!PlayerPrefs.HasKey("Taunt 2 P4"))
	{
		taunt2ButtonP4 = defaultTaunt2ButtonP4;
		taunt2ButtonP4Name = defaultTaunt2ButtonP4Name;
	}
	if (!PlayerPrefs.HasKey("Taunt 3 P4"))
	{
		taunt3ButtonP4 = defaultTaunt3ButtonP4;
		taunt3ButtonP4Name = defaultTaunt3ButtonP4Name;
	}
	
	
}


/* To-Do List:

1. Add "Restore Defaults" to all of the four control menus, as well as one master restore.
2. Add "Delete All Settings" to Options Menu, possibly in a secondary menu. Make sure it cannot be hit by mistake.
3. Figure out how to set up control preferences for Names, as well as set up a Names menu/section.

*/