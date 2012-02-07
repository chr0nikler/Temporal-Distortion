var pressStart : Texture2D;
var multiPlayerImage : Texture2D;
var trainingImage : Texture2D;
var optionsImage : Texture2D;
var extrasImage : Texture2D;
var backImage : Texture2D;
var musicImage : Texture2D;
var soundImage : Texture2D;
var mainMenuTheme: AudioClip;
var showdownLogo : Texture2D;
var achievementTemplate : Texture2D;
var locationColor : Color;
static var menu : int = 0;
var leftMouseCheck : int = 0;
static var musicVolume : float = 1;
static var soundVolume : float = 1;
static var extrasMenu : int = 0;
var widgetsEarned : int = 0;
var widgetsSpent : int = 0;
var widgetsRemaining : int = (widgetsEarned - widgetsSpent);

function OnGUI () {
	
//Start Menu
if (menu == 0)
	{
	if(GUI.Button (Rect(0,0,Screen.width,Screen.height),pressStart, "label"))	
		{
			menu = 1;
		}
	if (Input.GetKeyDown(ControlSetup.acceptButton))
		{
			menu = 1;
		}
	}
	
//Main Menu
if (menu == 1)
	{
	GUI.Label (Rect (Screen.width*.05,Screen.height*.15,Screen.width*.425,Screen.height*.375), multiPlayerImage);
		
	GUI.Label (Rect (Screen.width*.525,Screen.height*.15,Screen.width*.425,Screen.height*.375), trainingImage);

	GUI.Label (Rect (Screen.width*.05,Screen.height*.575,Screen.width*.425,Screen.height*.375), extrasImage);		
						
	GUI.Label (Rect (Screen.width*.525,Screen.height*.575,Screen.width*.425,Screen.height*.375), optionsImage);
		
	
	GUI.Label (Rect (Screen.width*.4,0,Screen.width*.2,Screen.height*.15), showdownLogo);
	
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

//Extras Menu
if (menu == 5)
	{
	if (GUI.Button(Rect(10,10,Screen.width*.1,Screen.height/15),backImage))
		{
			menu = 1;
		}
	if (GUI.Button(Rect(Screen.width*.05,Screen.height*.1,Screen.width*.425,Screen.height*.175), "Achievements"))
		{
			menu = 6;
			extrasMenu = 1;
		}
	if (GUI.Button(Rect(Screen.width*.05,Screen.height*.325,Screen.width*.425,Screen.height*.175), "Challenges"))
		{
			menu = 6;
			extrasMenu = 2;
		}
	if (GUI.Button(Rect(Screen.width*.05,Screen.height*.55,Screen.width*.425,Screen.height*.175), "Exhibits"))
		{
			menu = 6;
			extrasMenu = 3;
		}
	if (GUI.Button(Rect(Screen.width*.05,Screen.height*.775,Screen.width*.425,Screen.height*.175), "Notifications"))
		{
			menu = 6;
			extrasMenu = 4;
		}
	if (GUI.Button(Rect(Screen.width*.525,Screen.height*.1,Screen.width*.425,Screen.height*.175), "Gallery"))
		{
			menu = 6;
			extrasMenu = 5;
		}
	if (GUI.Button(Rect(Screen.width*.525,Screen.height*.325,Screen.width*.425,Screen.height*.175), "Sound Test"))
		{
			menu = 6;
			extrasMenu = 6;
		}
	if (GUI.Button(Rect(Screen.width*.525,Screen.height*.55,Screen.width*.425,Screen.height*.175), "Meet the Makers"))
		{
			menu = 6;
			extrasMenu = 7;
		}
	if (GUI.Button(Rect(Screen.width*.525,Screen.height*.775,Screen.width*.425,Screen.height*.175), "Credits"))
		{
			menu = 6;
			extrasMenu = 8;
			Achievements.achieve[20] = 1;
			widgetsEarned = widgetsEarned + 5;
		}
}

if (menu == 6)
{

//Achievements Menu
if (extrasMenu == 1)
	{
	if (GUI.Button(Rect(10,10,Screen.width*.1,Screen.height/15),backImage))
		{
			menu = 5;
			extrasMenu = 0;
		}
	
	GUI.Label(Rect(Screen.width*.15,10,Screen.width*.175,Screen.height/15),"Unlocked: " + Achievements.achieveComplete);
	GUI.Label(Rect(Screen.width*.325,10,Screen.width*.175,Screen.height/15),"Percentage: " + (Mathf.Round(Achievements.achievePercent*100)));
	GUI.Label(Rect(Screen.width*.5,10,Screen.width*.175,Screen.height/15),"Widgets Earned: " + widgetsEarned);
	GUI.Label(Rect(Screen.width*.675,10,Screen.width*.175,Screen.height/15),"Widgets Remaining: " + widgetsRemaining);
	
	//Locked
	if (Achievements.achieve[1] == 0)
		{
			GUI.Button(Rect(Screen.width*.05,Screen.height*.1,Screen.width*.225,Screen.height*.17),achievementTemplate);
		}
	if (Achievements.achieve[2] == 0)
		{
			GUI.Button(Rect(Screen.width*.275,Screen.height*.1,Screen.width*.225,Screen.height*.17),"Boot Camp");
		}
	if (Achievements.achieve[3] == 0)
		{
			GUI.Button(Rect(Screen.width*.5,Screen.height*.1,Screen.width*.225,Screen.height*.17),"Basic Brawler");
		}
	if (Achievements.achieve[4] == 0)
		{
			GUI.Button(Rect(Screen.width*.725,Screen.height*.1,Screen.width*.225,Screen.height*.17),"Specialized Fighter");
		}
	if (Achievements.achieve[5] == 0)
		{
			GUI.Button(Rect(Screen.width*.05,Screen.height*.27,Screen.width*.225,Screen.height*.17),"Handsy");
		}
	if (Achievements.achieve[6] == 0)
		{
			GUI.Button(Rect(Screen.width*.275,Screen.height*.27,Screen.width*.225,Screen.height*.17),"Splintered Shields");
		}
	if (Achievements.achieve[7] == 0)
		{
			GUI.Button(Rect(Screen.width*.5,Screen.height*.27,Screen.width*.225,Screen.height*.17),"KO King: Tahu");
		}
	if (Achievements.achieve[8] == 0)
		{
			GUI.Button(Rect(Screen.width*.725,Screen.height*.27,Screen.width*.225,Screen.height*.17),"KO King: Kopaka");
		}
	if (Achievements.achieve[9] == 0)
		{
			GUI.Button(Rect(Screen.width*.05,Screen.height*.44,Screen.width*.225,Screen.height*.17),"KO Master: Tahu");
		}
	if (Achievements.achieve[10] == 0)
		{
			GUI.Button(Rect(Screen.width*.275,Screen.height*.44,Screen.width*.225,Screen.height*.17),"KO Master: Kopaka");
		}
	if (Achievements.achieve[11] == 0)
		{
			GUI.Button(Rect(Screen.width*.5,Screen.height*.44,Screen.width*.225,Screen.height*.17),"Fire and Ice");
		}
	if (Achievements.achieve[12] == 0)
		{
			GUI.Button(Rect(Screen.width*.725,Screen.height*.44,Screen.width*.225,Screen.height*.17),"Bragging Rights");
		}
	if (Achievements.achieve[13] == 0)
		{
			GUI.Button(Rect(Screen.width*.05,Screen.height*.61,Screen.width*.225,Screen.height*.17),"Heart Attack");
		}
	if (Achievements.achieve[14] == 0)
		{
			GUI.Button(Rect(Screen.width*.275,Screen.height*.61,Screen.width*.225,Screen.height*.17),"Reconciliation");
		}
	if (Achievements.achieve[15] == 0)
		{
			GUI.Button(Rect(Screen.width*.5,Screen.height*.61,Screen.width*.225,Screen.height*.17),"Restraining Order");
		}
	if (Achievements.achieve[16] == 0)
		{
			GUI.Button(Rect(Screen.width*.725,Screen.height*.61,Screen.width*.225,Screen.height*.17),"Negate and Destroy");
		}
	if (Achievements.achieve[17] == 0)
		{
			GUI.Button(Rect(Screen.width*.05,Screen.height*.78,Screen.width*.225,Screen.height*.17),"Gives you Winnngggs");
		}
	if (Achievements.achieve[18] == 0)
		{
			GUI.Button(Rect(Screen.width*.275,Screen.height*.78,Screen.width*.225,Screen.height*.17),"Can't Burst this Bubble");
		}
	if (Achievements.achieve[19] == 0)
		{
			GUI.Button(Rect(Screen.width*.5,Screen.height*.78,Screen.width*.225,Screen.height*.17),"IT'S SUPER EFFECTIVE!!!");
		}
	if (Achievements.achieve[20] == 0)
		{
			GUI.Button(Rect(Screen.width*.725,Screen.height*.78,Screen.width*.225,Screen.height*.17),"Appreciative Player");
		}
	
	//Unlocked
	if (Achievements.achieve[1] == 1)
		{
			GUI.Button(Rect(Screen.width*.05,Screen.height*.1,Screen.width*.225,Screen.height*.17),"Unlocked: Basic Training");
		}
	if (Achievements.achieve[2] == 1)
		{
			GUI.Button(Rect(Screen.width*.275,Screen.height*.1,Screen.width*.225,Screen.height*.17),"Unlocked: Boot Camp");
		}
	if (Achievements.achieve[3] == 1)
		{
			GUI.Button(Rect(Screen.width*.5,Screen.height*.1,Screen.width*.225,Screen.height*.17),"Unlocked: Basic Brawler");
		}
	if (Achievements.achieve[4] == 1)
		{
			GUI.Button(Rect(Screen.width*.725,Screen.height*.1,Screen.width*.225,Screen.height*.17),"Unlocked: Specialized Fighter");
		}
	if (Achievements.achieve[5] == 1)
		{
			GUI.Button(Rect(Screen.width*.05,Screen.height*.27,Screen.width*.225,Screen.height*.17),"Unlocked: Handsy");
		}
	if (Achievements.achieve[6] == 1)
		{
			GUI.Button(Rect(Screen.width*.275,Screen.height*.27,Screen.width*.225,Screen.height*.17),"Unlocked: Splintered Shields");
		}
	if (Achievements.achieve[7] == 1)
		{
			GUI.Button(Rect(Screen.width*.5,Screen.height*.27,Screen.width*.225,Screen.height*.17),"Unlocked: KO King: Tahu");
		}
	if (Achievements.achieve[8] == 1)
		{
			GUI.Button(Rect(Screen.width*.725,Screen.height*.27,Screen.width*.225,Screen.height*.17),"Unlocked: KO King: Kopaka");
		}
	if (Achievements.achieve[9] == 1)
		{
			GUI.Button(Rect(Screen.width*.05,Screen.height*.44,Screen.width*.225,Screen.height*.17),"Unlocked: KO Master: Tahu");
		}
	if (Achievements.achieve[10] == 1)
		{
			GUI.Button(Rect(Screen.width*.275,Screen.height*.44,Screen.width*.225,Screen.height*.17),"Unlocked: KO Master: Kopaka");
		}
	if (Achievements.achieve[11] == 1)
		{
			GUI.Button(Rect(Screen.width*.5,Screen.height*.44,Screen.width*.225,Screen.height*.17),"Unlocked: Fire and Ice");
		}
	if (Achievements.achieve[12] == 1)
		{
			GUI.Button(Rect(Screen.width*.725,Screen.height*.44,Screen.width*.225,Screen.height*.17),"Unlocked: Bragging Rights");
		}
	if (Achievements.achieve[13] == 1)
		{
			GUI.Button(Rect(Screen.width*.05,Screen.height*.61,Screen.width*.225,Screen.height*.17),"Unlocked: Heart Attack");
		}
	if (Achievements.achieve[14] == 1)
		{
			GUI.Button(Rect(Screen.width*.275,Screen.height*.61,Screen.width*.225,Screen.height*.17),"Unlocked: Reconciliation");
		}
	if (Achievements.achieve[15] == 1)
		{
			GUI.Button(Rect(Screen.width*.5,Screen.height*.61,Screen.width*.225,Screen.height*.17),"Unlocked: Restraining Order");
		}
	if (Achievements.achieve[16] == 1)
		{
			GUI.Button(Rect(Screen.width*.725,Screen.height*.61,Screen.width*.225,Screen.height*.17),"Unlocked: Negate and Destroy");
		}
	if (Achievements.achieve[17] == 1)
		{
			GUI.Button(Rect(Screen.width*.05,Screen.height*.78,Screen.width*.225,Screen.height*.17),"Unlocked: Gives you Winnngggs");
		}
	if (Achievements.achieve[18] == 1)
		{
			GUI.Button(Rect(Screen.width*.275,Screen.height*.78,Screen.width*.225,Screen.height*.17),"Unlocked: Can't Burst this Bubble");
		}
	if (Achievements.achieve[19] == 1)
		{
			GUI.Button(Rect(Screen.width*.5,Screen.height*.78,Screen.width*.225,Screen.height*.17),"Unlocked: IT'S SUPER EFFECTIVE!");
		}
	if (Achievements.achieve[20] == 1)
		{
			GUI.Button(Rect(Screen.width*.725,Screen.height*.78,Screen.width*.225,Screen.height*.17),"Unlocked: Appreciative Player");
		}
		
	}
	
//Challenges Menu
if (extrasMenu == 2)
	{
	if (GUI.Button(Rect(10,10,Screen.width*.1,Screen.height/15),backImage))
		{
			menu = 5;
			extrasMenu = 0;
		}
	
	}
	
//Exhibit Menu
if (extrasMenu == 3)
	{
	if (GUI.Button(Rect(10,10,Screen.width*.1,Screen.height/15),backImage))
		{
			menu = 5;
			extrasMenu = 0;
		}
	
	}
	
//Notifications Menu
if (extrasMenu == 4)
	{
	if (GUI.Button(Rect(10,10,Screen.width*.1,Screen.height/15),backImage))
		{
			menu = 5;
			extrasMenu = 0;
		}
			
	}
	
//Gallery Menu
if (extrasMenu == 5)
	{
		if (GUI.Button(Rect(10,10,Screen.width*.1,Screen.height/15),backImage))
			{
				menu = 5;
				extrasMenu = 0;
			}
		
	}
	
//Sound Test Menu
if (extrasMenu == 6)
	{
		if (GUI.Button(Rect(10,10,Screen.width*.1,Screen.height/15),backImage))
			{
				menu = 5;
				extrasMenu = 0;
			}
		
	}
	
//Meet the Makers Menu
if (extrasMenu == 7)
	{
		if (GUI.Button(Rect(10,10,Screen.width*.1,Screen.height/15),backImage))
			{
				menu = 5;
				extrasMenu = 0;
			}
	
	}
	
//Credits Menu
if (extrasMenu == 8)
	{
		if (GUI.Button(Rect(10,10,Screen.width*.1,Screen.height/15),backImage))
			{
				menu = 5;
				extrasMenu = 0;
			}
			
	} 
	
	
	
	}
}

function Update () {
	
	
var locationX: int = Input.mousePosition.x;
var locationY: int = Input.mousePosition.y;
var multiPlayerButton = Rect (Screen.width*.05,Screen.height*.475,Screen.width*.425,Screen.height*.375);
var trainingButton = Rect (Screen.width*.525,Screen.height*.475,Screen.width*.425,Screen.height*.375);
var extrasButton = Rect (Screen.width*.05,Screen.height*.05,Screen.width*.425,Screen.height*.375);
var optionsButton = Rect (Screen.width*.525,Screen.height*.05,Screen.width*.425,Screen.height*.375);

		
if (menu == 1)
{
if (multiPlayerButton.Contains (Input.mousePosition))
	{
	print("This Place");
	locationU = (locationX - (Screen.width*.05)) / (Screen.width*.425);
	locationV = (locationY - (Screen.height*.475)) / (Screen.height*.375);
	if ((Input.GetButtonDown("Fire1")) || (Input.GetKeyDown(ControlSetup.acceptButton)))
		{
			locationColor = multiPlayerImage.GetPixelBilinear (locationU,locationV);
			if (locationColor.a > 0)
				{
				menu = 7;
				}
		}
	}
	
if (trainingButton.Contains (Input.mousePosition))
	{
	locationU = (locationX - (Screen.width*.525)) / (Screen.width*.425);
	locationV = (locationY - (Screen.height*.475)) / (Screen.height*.375);
	if ((Input.GetButtonDown("Fire1")) || (Input.GetKeyDown(ControlSetup.acceptButton)))
		{
			locationColor = trainingImage.GetPixelBilinear (locationU,locationV);
			if (locationColor.a > 0)
				{
				menu = 8;
				Achievements.achieve[1] = 1;
				widgetsEarned = widgetsEarned + 5;
				}
		}
	}
	
if (extrasButton.Contains (Input.mousePosition))
	{
	print("Here as well");
	locationU = (locationX - (Screen.width*.05)) / (Screen.width*.425);
	locationV = (locationY - (Screen.height*.05)) / (Screen.height*.375);
	if ((Input.GetButtonDown("Fire1")) || (Input.GetKeyDown(ControlSetup.acceptButton)))
		{
			locationColor = extrasImage.GetPixelBilinear (locationU,locationV);
			if (locationColor.a > 0)
				{
				menu = 5;
				}
		}
	}
	
if (optionsButton.Contains (Input.mousePosition))
	{
	print("Over Here");
	locationU = (locationX - (Screen.width*.525)) / (Screen.width*.425);
	locationV = (locationY - (Screen.height*.05)) / (Screen.height*.375);
	if ((Input.GetButtonDown("Fire1")) || (Input.GetKeyDown(ControlSetup.acceptButton)))
		{
			locationColor = optionsImage.GetPixelBilinear (locationU,locationV);
			if (locationColor.a > 0)
				{
				menu = 2;
				}
		}
	}
	

}
		
	audio.volume = musicVolume;
}

function Start () {
	audio.loop = true;
	audio.clip = mainMenuTheme;
	audio.Play ();
	
}

