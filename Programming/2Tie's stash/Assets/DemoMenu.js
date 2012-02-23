var pressStart : Texture2D;
var multiPlayerImage : Texture2D;
var trainingImage : Texture2D;
var optionsImage : Texture2D;
var backImage : Texture2D;
var musicImage : Texture2D;
var soundImage : Texture2D;
var mainMenuTheme: AudioClip;
static var menu : int = 0;
var leftMouseCheck : int = 0;
static var musicVolume : float = 1;
static var soundVolume : float = 1;

function OnGUI () {
	
//Start Menu
if (menu == 0)
	{
	(GUI.Label (Rect(0,0,Screen.width,Screen.height),pressStart));	
	if (Input.GetButtonDown("Fire1"))
		{
			menu = 1;
		}
	if (Input.GetKeyDown(KeyCode.Return))
		{
			menu = 1;
		}
	}
	
//Main Menu
if (menu == 1)
	{
	if (GUI.Button (Rect (Screen.width*.05,Screen.height/4,Screen.width*.4,Screen.height/2), "Fight!"))
		{
			print ("Fight!");
		}
	if (GUI.Button (Rect (Screen.width*.55,Screen.height/4,Screen.width*.4,Screen.height/2), "Training"))
		{
			print ("Training");
		}
	if (GUI.Button (Rect (Screen.width*.6,Screen.height*.8125,Screen.width*.3,Screen.height/8), "Options"))
		{
			menu = 2;
		}

	}
	
//Options Menu
if (menu == 2)
	{
	if (GUI.Button (Rect (10,10,Screen.width/10,Screen.height/15),backImage))
		{
			menu = 1;
		}
	musicVolume = GUI.HorizontalSlider(Rect(Screen.width*.25, Screen.height*.2, Screen.width*.5,Screen.height*.05), musicVolume, 0,1);
	soundVolume = GUI.HorizontalSlider(Rect(Screen.width*.25, Screen.height*.35, Screen.width*.5,Screen.height*.05), soundVolume, 0,1);
	GUI.Box (Rect(Screen.width*.05, Screen.height*.15, Screen.width*.15, Screen.height*.1),"Music %" + ((Mathf.Round(musicVolume*100))));
	GUI.Box (Rect(Screen.width*.05, Screen.height*.3, Screen.width*.15, Screen.height*.1),"Sound %" + ((Mathf.Round(soundVolume*100))));
	if (GUI.Button(Rect(Screen.width*.25,Screen.height*.5,Screen.width*.5,Screen.height*.45), "Controls"))
		{
			menu = 3;
		}
	}
}

function Update () {
	
	
	
	audio.volume = musicVolume;
}

function Start () {
	audio.loop = true;
	audio.clip = mainMenuTheme;
	audio.Play ();
	
}

