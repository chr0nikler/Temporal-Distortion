var backImage : Texture2D;
var section : int = 0;
var teamOrFFAImage : Texture2D;
teamOrFFAImage = ffaImage;
var ffaImage : Texture2D;
var teamImage : Texture2D;
static var teamOrFFA : int = 0;
var rulesImage : Texture2D;
var arrowLeft : Texture2D;
var arrowRight : Texture2D;
var trainingTitleImage : Texture2D;
static var stockAmount : int = 5;
static var nameordiff1 : String = "Player 1";
static var nameordiff2 : String = "Player 2";
static var nameordiff3 : String = "Player 3";
static var nameordiff4 : String = "Player 4";
var timeMinutes : int = 0;
var timeSecondsTens : int = 0;
var timeSecondsOnes : int = 0;
static var timeTotal : int = 0;
var timedStockAmount : int = 0;
static var widgetAmount : int = 0;
var handicapString = "No";
static var handicap = 0; //No Handicap
static var damageRatio : float = 1.0;
var uDDBallString = "Yes";
static var uDDBall = 1; //Allows UDD Ball
var friendlyFireString = "Off";
static var friendlyFire = 0; //Doesn't allow Friendly Fire
var canPauseString = "On";
static var canPause = 1; //Allows Pausing
var scoreDisplayString = "Off";
static var scoreDisplay = 0; //No score display
static var selfDestructPenalty = -1; //Penalty for Self-Destructs
var damageGaugeString = "On";
static var damageGauge = 1; //Show damage gauge
var selectedMaxCombo = 0;
static var tahuMaxCombo = 0; //Sets Tahu's Max Combo
static var kopakaMaxCombo = 0; //Sets Kopaka's Max Combo
var totalCombo = 0;
static var player1Status = 1; //Player 1 Type [0 = None, 1 = Player, 2 = CPU]
static var player2Status = 2; //Same as above for P2
static var player3Status = 0; //Same as above for P3
static var player4Status = 0; //Same as above for P4
var player1StatusTitle = "Player 1";
var player2StatusTitle = "CPU";
var player3StatusTitle = "None";
var player4StatusTitle = "None";
static var numberOfPlayers = 0; //Sets the number of players
static var player1Character = 0; //Sets Player 1 Character [0 = None, 1 = Tahu, 2 = Kopaka, 3 = Random]
static var player2Character = 0; //Same as above for P2
static var player3Character = 0; //Same as above for P3
static var player4Character = 0; //Same as above for P4
static var trainingPlayerCharacter = 0; //Same as above for Training Player
static var trainingComputerCharacter = 3; //Same as above for Trainer
static var player1Completed = 0;
static var player2Completed = 0;
static var player3Completed = 0;
static var player4Completed = 0;
var tahuSelectionImage : Texture2D;
var kopakaSelectionImage : Texture2D;
var randomSelectionImage : Texture2D;
//Tahu Selected Images
var tahuSelectedImageRegular : Texture2D;
var tahuSelectedImageShadow : Texture2D;
var tahuSelectedImageInverse : Texture2D;
var tahuSelectedImageReverse : Texture2D;
var tahuSelectedImageGoldenMask : Texture2D;
var tahuSelectedImageRed : Texture2D;
var tahuSelectedImageLightRed : Texture2D;
var tahuSelectedImageDarkRed : Texture2D;
var tahuSelectedImageGreen : Texture2D;
var tahuSelectedImageLightGreen : Texture2D;
var tahuSelectedImageDarkGreen : Texture2D;
var tahuSelectedImageBlue : Texture2D;
var tahuSelectedImageLightBlue : Texture2D;
var tahuSelectedImageDarkBlue : Texture2D;
//Kopaka Selected Images
var kopakaSelectedImage : Texture2D; //This is the image that will appear if Kopaka is selected (variable).
kopakaSelectedImage = kopakaSelectedImageRegular;
var kopakaSelectedImageRegular : Texture2D;
var kopakaSelectedImageShadow : Texture2D;
var kopakaSelectedImageInverse : Texture2D;
var kopakaSelectedImageReverse : Texture2D;
var kopakaSelectedImageGoldenMask : Texture2D;
var kopakaSelectedImageRed : Texture2D;
var kopakaSelectedImageLightRed : Texture2D;
var kopakaSelectedImageDarkRed : Texture2D;
var kopakaSelectedImageGreen : Texture2D;
var kopakaSelectedImageLightGreen : Texture2D;
var kopakaSelectedImageDarkGreen : Texture2D;
var kopakaSelectedImageBlue : Texture2D;
var kopakaSelectedImageLightBlue : Texture2D;
var kopakaSelectedImageDarkBlue : Texture2D;
//Random Selected Image
var randomSelectedImage : Texture2D; //This is the image that will appear if Random is selected (constant)
var noneSelectedPlayer1Image : Texture2D;
var noneSelectedPlayer2Image : Texture2D;
var noneSelectedPlayer3Image : Texture2D;
var noneSelectedPlayer4Image : Texture2D;
var noneSelectedTrainingPlayerImage : Texture2D;
var noneSelectedTrainingComputerImage : Texture2D;
var noPlayerImage : Texture2D;
var player1Image : Texture2D;
var player2Image : Texture2D;
var player3Image : Texture2D;
var player4Image : Texture2D;
var trainingPlayerImage : Texture2D;
var trainingComputerImage : Texture2D;
static var player1Costume = 1; //Sets Player 1 Costume [1 = Normal, 2 = Shadow, 3 = Inverse, 4 = Reverse, 5 = Golden Mask]
static var player2Costume = 1; //Same as above for P2
static var player3Costume = 1; //Same as above for P3
static var player4Costume = 1; //Same as above for P4
static var trainingPlayerCostume = 1; //Same as above for Training Player
static var trainingComputerCostume = 1; //Same as above for Trainer
var player : int = 0;
static var randomCharacter : int; //Use this to set what Random equals
var player1NameOrDifficultyScroll : Vector2; //Use for ScrollView Function
var player2NameOrDifficultyScroll : Vector2;
var player3NameOrDifficultyScroll : Vector2;
var player4NameOrDifficultyScroll : Vector2;
var trainingPlayerNameScroll : Vector2; //Same as above but only for the Training Player's name
var player1TypeBox : int = 0;
var player1NameButtonBox : int = 0;
var player2NameButtonBox : int = 0;
var player3NameButtonBox : int = 0;
var player4NameButtonBox : int = 0;
var trainingPlayerNameButtonBox : int = 0;
var redTeamP1 = 0;
var redTeamP2 = 0;
var redTeamP3 = 0;
var redTeamP4 = 0;
var redTeamAmount = 0;
var redTeamViable = 0;
var greenTeamP1 = 0;
var greenTeamP2 = 0;
var greenTeamP3 = 0;
var greenTeamP4 = 0;
var greenTeamAmount = 0;
var greenTeamViable = 0;
var blueTeamP1 = 0;
var blueTeamP2 = 0;
var blueTeamP3 = 0;
var blueTeamP4 = 0;
var blueTeamAmount = 0;
var blueTeamViable = 0;
var numberOfTeams = 0;



function OnGUI() {

if(DemoMenu.menu == 7)
{
	if (section == 0)
		{
		if (GUI.Button (Rect (10,10,Screen.width*.1,Screen.height/15),backImage))
			{
				DemoMenu.menu = 1;
			}
		
		if (GUI.Button (Rect (Screen.width*.15,10,Screen.width*.2,Screen.height/15),teamOrFFAImage))
			{
			if (teamOrFFA == 0)
				{
					teamOrFFAImage = teamImage;
					teamOrFFA = 2;
					player1Costume = 1;
					player2Costume = 1;
					player3Costume = 1;
					player4Costume = 1;
				}
			if (teamOrFFA == 1)
				{
					teamOrFFAImage = ffaImage;
					teamOrFFA = 0;
					player1Costume = 1;
					player2Costume = 1;
					player3Costume = 1;
					player4Costume = 1;
				}
			if (teamOrFFA == 2)
				{
					teamOrFFA = 1;
				}
			}		

		if (GUI.Button (Rect (Screen.width*.4,10,Screen.width*.55,Screen.height/15), rulesImage))
			{
				section = 1;
			}
			
		/*Using GUI Buttons for testing with character selects. Comment out my code (marked by astericts) if trying t
		edit box code*/	
		/*GUI.Box (Rect (Screen.width*.05,Screen.height*.1,Screen.width*.3,Screen.height*.4),"Tahu");
		GUI.Box (Rect (Screen.width*.35,Screen.height*.1,Screen.width*.3,Screen.height*.4),"Kopaka");
		GUI.Box (Rect (Screen.width*.65,Screen.height*.1,Screen.width*.3,Screen.height*.4),"Random");
			
		GUI.Box (Rect (Screen.width*.05,Screen.height*.55,Screen.width*.1875,Screen.height*.4),"Player 1");
		GUI.Box (Rect (Screen.width*.2875,Screen.height*.55,Screen.width*.1875,Screen.height*.4),"Player 2");
		GUI.Box (Rect (Screen.width*.525,Screen.height*.55,Screen.width*.1875,Screen.height*.4),"Player 3");
		GUI.Box (Rect (Screen.width*.7625,Screen.height*.55,Screen.width*.1875,Screen.height*.4),"Player 4");*/
		
		if (GUI.Button (Rect (Screen.width*.05,Screen.height*.1,Screen.width*.3,Screen.height*.4), tahuSelectionImage)) //Creates Tahu Selection Button, as well as assigning the current selection to it
		{
			if (player == 1)
				{
					if (player1Status > 0)
					{
						player1Character = 1;
						player1Completed = 1;
					}
				}
			if (player == 2)
				{
					if (player2Status > 0)
					{
						player2Character = 1;
						player2Completed = 1;
					}
				}
			if (player == 3)
				{
					if (player3Status > 0)
					{
						player3Character = 1;
						player3Completed = 1;
					}
				}
			if (player == 4)
				{
					if (player4Status > 0)
					{
						player4Character = 1;
						player4Completed = 1;
					}
				}
		}
		if (GUI.Button (Rect (Screen.width*.35,Screen.height*.1,Screen.width*.3,Screen.height*.4), kopakaSelectionImage)) //Creates Kopaka Selection Button, as well as assigning the current selection to it
		{
			if (player == 1)
				{
					if (player1Status > 0)
					{
						player1Character = 2;
						player1Completed = 1;
					}
				}
			if (player == 2)
				{
					if (player2Status > 0)
					{
						player2Character = 2;
						player2Completed = 1;
					}
				}
			if (player == 3)
				{
					if (player3Status > 0)
					{
						player3Character = 2;
						player3Completed = 1;
					}
				}
			if (player == 4)
				{
					if (player4Status > 0)
					{
						player4Character = 2;
						player4Completed = 1;
					}
				}
		}
		if (GUI.Button (Rect (Screen.width*.65,Screen.height*.1,Screen.width*.3,Screen.height*.4),randomSelectionImage)) //Creates Random Selection Button, as well as assigning the current selection to it
		{
			if (player == 1)
				{
					if (player1Status > 0)
					{
						player1Character = 3;
						player1Completed = 1;
					}
				}
			if (player == 2)
				{
					if (player2Status > 0)
					{
						player2Character = 3;
						player2Completed = 1;
					}
				}
			if (player == 3)
				{
					if (player3Status > 0)
					{
						player3Character = 3;
						player3Completed = 1;
					}
				}
			if (player == 4)
				{
					if (player4Status > 0)
					{
						player4Character = 3;
						player4Completed = 1;
					}
				}
		}
		
		//Creates the Player sections at the bottom
		
		//Player 1 Section
		if (player1NameButtonBox == 0)
		{
			if(GUI.Button (Rect (Screen.width*.05,Screen.height*.55,Screen.width*.1875,Screen.height*.35), player1Image))
			{
				player = 1;
				print ("Player is " + player);
			}
			if (GUI.Button (Rect (Screen.width*.05,Screen.height*.9,Screen.width*.125,Screen.height*.05),player1StatusTitle))
			{
				player1Status++;
				
			}
			if(player1Status == 2)
			{
				nameordiff1 = "CPU Lv. 1";
			}
			if (player1Status == 1 || player1Status == 2)
			{
				if (GUI.Button (Rect (Screen.width*.175,Screen.height*.9,Screen.width*.03125,Screen.height*.05),"" + player1Costume))
				{
					player = 1;
					costumechange(player);
				}
				if(player1Status == 1)
				{
					if (GUI.Button (Rect (Screen.width*.20625,Screen.height*.9,Screen.width*.03125,Screen.height*.05), "Name"))
					{
						player1NameButtonBox = 1;
					}
				}
				else if (player1Status == 2)
				{
					if (GUI.Button (Rect (Screen.width*.20625,Screen.height*.9,Screen.width*.03125,Screen.height*.05), "Diff"))
					{
						player1NameButtonBox = 1;
					}
				}	
			}
		} //STILL NEED TO ADD ARRAY SO BOTH NAMES AND DIFFICULTIES CAN BE ACCESSED.
		if (player1NameButtonBox == 1) 
		{
			
			GUILayout.BeginArea (Rect (Screen.width*.05,Screen.height*.55,Screen.width*.1875,Screen.height*.4));
			GUILayout.BeginVertical ("box");
			player1NameOrDifficultyScroll = GUILayout.BeginScrollView (player1NameOrDifficultyScroll);
			if (player1Status == 1)
			{
				if(Event.current.type == EventType.KeyDown && Event.current.character == '\n')
				{
					player1NameButtonBox = 0;
				}
				else
				{
					nameordiff1 = GUILayout.TextField(nameordiff1, 8,GUILayout.Height(Screen.height*.1)); //Here
				}
			}
			else if (player1Status == 2)
			{
				for (var player1NameButtons : int = 1; player1NameButtons < 16; player1NameButtons++)
				{
					if (GUILayout.Button("Difficulty " + player1NameButtons, GUILayout.Height(Screen.height*.1))) //Here
					{
						nameordiff1 = "CPU Lv." + player1NameButtons.ToString();
						player1NameButtonBox = 0;
					}
				}
					
			}
			
			GUILayout.EndScrollView();
			GUILayout.EndVertical();
			GUILayout.EndArea();
		}
		//Player 2 Section
		if (player2NameButtonBox == 0)
		{
			if(GUI.Button (Rect (Screen.width*.2875,Screen.height*.55,Screen.width*.1875,Screen.height*.35), player2Image))
			{
				player = 2;
				print ("Player is " + player);
			}
			if (GUI.Button (Rect (Screen.width*.2875,Screen.height*.9,Screen.width*.125,Screen.height*.05),player2StatusTitle))
			{
				player2Status++;
				
			}
			if(player2Status == 2)
			{
				nameordiff2 = "CPU Lv. 1";
			}
			else
			{
			 	nameordiff2 = "Player 2";
			}
			if (player2Status == 1 || player2Status == 2)
			{
				if (GUI.Button (Rect (Screen.width*.4125,Screen.height*.9,Screen.width*.03125,Screen.height*.05),"" + player2Costume))
				{
					player = 2;
					costumechange(player);
				}
				if (GUI.Button (Rect (Screen.width*.44375,Screen.height*.9,Screen.width*.03125,Screen.height*.05), "Name"))
				{
					player2NameButtonBox = 1;
				}
			}
		}
		if (player2NameButtonBox == 1) 
		{
			GUILayout.BeginArea (Rect (Screen.width*.2875,Screen.height*.55,Screen.width*.1875,Screen.height*.4));
			GUILayout.BeginVertical ("box");
			player2NameOrDifficultyScroll = GUILayout.BeginScrollView (player2NameOrDifficultyScroll);
			if (player2Status == 1)
			{
				if(Event.current.type == EventType.KeyDown && Event.current.character == '\n')
				{
					player2NameButtonBox = 0;
				}
				else
				{
					nameordiff2 = GUILayout.TextField(nameordiff2, 8,GUILayout.Height(Screen.height*.1)); //Here
				}
			}
			else if(player2Status == 2)
			{
				
				for (var player2NameButtons : int = 1; player2NameButtons < 16; player2NameButtons++)
				{
					if (GUILayout.Button("Difficulty " + player2NameButtons, GUILayout.Height(Screen.height*.1))) //Here
					{
						nameordiff2 = "CPU Lv." + player2NameButtons.ToString();
						player2NameButtonBox = 0;
					}	
				}
			}
			GUILayout.EndScrollView();
			GUILayout.EndVertical();
			GUILayout.EndArea(); 
		} 
		
		//Player 3 Section
		if (player3NameButtonBox == 0)
		{
			if(GUI.Button (Rect (Screen.width*.525,Screen.height*.55,Screen.width*.1875,Screen.height*.35), player3Image))
			{
				player = 3;
				print ("Player is " + player);
			}
			if (GUI.Button (Rect (Screen.width*.525,Screen.height*.9,Screen.width*.125,Screen.height*.05),player3StatusTitle))
			{
				player3Status++;
				
			}
			if(player3Status == 2)
			{
				nameordiff3 = "CPU Lv. 1";
			}
			else
			{
			 	nameordiff3 = "Player 3";
			}
			if (player3Status == 1 || player3Status == 2)
			{
				if (GUI.Button (Rect (Screen.width*.65,Screen.height*.9,Screen.width*.03125,Screen.height*.05),"" + player3Costume))
				{
					player = 3;
					costumechange(player);
				}
				if (GUI.Button (Rect (Screen.width*.68125,Screen.height*.9,Screen.width*.03125,Screen.height*.05), "Name"))
				{
					player3NameButtonBox = 1;
				}
			}
		} 
		if (player3NameButtonBox == 1) 
		{
			GUILayout.BeginArea (Rect (Screen.width*.525,Screen.height*.55,Screen.width*.1875,Screen.height*.4));
			GUILayout.BeginVertical ("box");
			player3NameOrDifficultyScroll = GUILayout.BeginScrollView (player3NameOrDifficultyScroll);
			if (player3Status == 1)
			{
				if(Event.current.type == EventType.KeyDown && Event.current.character == '\n')
				{
					player3NameButtonBox = 0;
				}
				else
				{
					nameordiff3 = GUILayout.TextField(nameordiff3,8, GUILayout.Height(Screen.height*.1)); //Here
				}
			}
			else if (player3Status == 2)
			{
				for (var player3NameButtons : int = 1; player3NameButtons < 16; player3NameButtons++)
				{
					if (GUILayout.Button("Difficulty " + player3NameButtons, GUILayout.Height(Screen.height*.1))) //Here
					{
						nameordiff3 = "CPU Lv." + player3NameButtons.ToString();
						player3NameButtonBox = 0;
					}	
				}
			}
			GUILayout.EndScrollView();
			GUILayout.EndVertical();
			GUILayout.EndArea(); 
		} 
		
		//Player 4 Section
		if (player4NameButtonBox == 0)
		{
			if(GUI.Button (Rect (Screen.width*.7625,Screen.height*.55,Screen.width*.1875,Screen.height*.35), player4Image))
			{
				player = 4;
				print ("Player is " + player);
			}
			if (GUI.Button (Rect (Screen.width*.7625,Screen.height*.9,Screen.width*.125,Screen.height*.05),player4StatusTitle))
			{
				player4Status++;
				
			}
			if(player4Status == 2)
			{
				nameordiff4 = "CPU Lv. 1";
			}
			else
			{
			 	nameordiff4 = "Player 4";
			}
			if (player4Status == 1 || player4Status == 2)
			{
				if (GUI.Button (Rect (Screen.width*.8875,Screen.height*.9,Screen.width*.03125,Screen.height*.05),"" + player4Costume))
				{
					player = 4;
					costumechange(player);
				}
				if (GUI.Button (Rect (Screen.width*.91875,Screen.height*.9,Screen.width*.03125,Screen.height*.05), "Name"))
				{
					player4NameButtonBox = 1;
				}
			}
		} 
		if (player4NameButtonBox == 1) 
		{
			GUILayout.BeginArea (Rect (Screen.width*.7625,Screen.height*.55,Screen.width*.1875,Screen.height*.4));
			GUILayout.BeginVertical ("box");
			player4NameOrDifficultyScroll = GUILayout.BeginScrollView (player4NameOrDifficultyScroll);
			if (player4Status == 1)
			{
				if(Event.current.type == EventType.KeyDown && Event.current.character == '\n')
				{
					player4NameButtonBox = 0;
				}
				else
				{
					nameordiff4 = GUILayout.TextField(nameordiff4, 8, GUILayout.Height(Screen.height*.1)); //Here
				}
			}
			else if (player4Status == 2)
			{
				for (var player4NameButtons : int = 1; player4NameButtons < 16; player4NameButtons++)
				{
					
					if (GUILayout.Button("Difficulty " + player4NameButtons, GUILayout.Height(Screen.height*.1))) //Here
					{
						nameordiff4 = "CPU Lv." + player4NameButtons.ToString();
						player4NameButtonBox = 0;
					}	
				}
			}				
			GUILayout.EndScrollView();
			GUILayout.EndVertical();
			GUILayout.EndArea(); 
		}
		
		/*if (GUI.Button (Rect (Screen.width*.2875,Screen.height*.9,Screen.width*.125,Screen.height*.05),player2StatusTitle))
			{
				player2Status++;
			}
		if (GUI.Button (Rect (Screen.width*.4125,Screen.height*.9,Screen.width*.03125,Screen.height*.05),"" + player2Costume))
			{
				player = 2;
				costumechange(player);
			}
		GUI.Box (Rect (Screen.width*.44375,Screen.height*.9,Screen.width*.03125,Screen.height*.05), "Name"); */
		
		/*if (GUI.Button (Rect (Screen.width*.525,Screen.height*.9,Screen.width*.125,Screen.height*.05),player3StatusTitle))
			{
				player3Status++;
			}
		if (GUI.Button (Rect (Screen.width*.65,Screen.height*.9,Screen.width*.03125,Screen.height*.05),"" + player3Costume))
			{
				player = 3;
				costumechange(player);
			}
		GUI.Box (Rect (Screen.width*.68125,Screen.height*.9,Screen.width*.03125,Screen.height*.05), "Name"); */
		
		/*if (GUI.Button (Rect (Screen.width*.7625,Screen.height*.9,Screen.width*.125,Screen.height*.05),player4StatusTitle))
			{
				player4Status++;
			}
		if (GUI.Button (Rect (Screen.width*.8875,Screen.height*.9,Screen.width*.03125,Screen.height*.05),"" + player4Costume))
			{
				player = 4;
				costumechange(player);
			}
		GUI.Box (Rect (Screen.width*.91875,Screen.height*.9,Screen.width*.03125,Screen.height*.05), "Name");*/	
			
		
		
		/* if(GUI.Button (Rect (Screen.width*.2875,Screen.height*.55,Screen.width*.1875,Screen.height*.35), player2Image))
		{
			player = 2;
			print ("Player is " + player);
		} */
		
		/*if(GUI.Button (Rect (Screen.width*.525,Screen.height*.55,Screen.width*.1875,Screen.height*.35), player3Image))
		{
			player = 3;
			print ("Player is " + player);
		}*/
		
		/*if(GUI.Button (Rect (Screen.width*.7625,Screen.height*.55,Screen.width*.1875,Screen.height*.35), player4Image))
		{
			player = 4;
			print ("Player is " + player);
		}*/
		
		
	//Begin the game box
		if (teamOrFFA == 0)
		{
			if (numberOfPlayers > 1)
			{
				print(numberOfPlayers);
				print(player1Completed + " " + player2Completed +  " " + player3Completed + " " + player4Completed);
				if (GUI.Button (Rect (Screen.width*.05,Screen.height*.5,Screen.width*.9,Screen.height*.05), "Click to Start!"))
				{
					print ("The game has started!");
					Application.LoadLevel("demo1stagetestv2"); //
				}
			}
		}
		if (teamOrFFA == 1)
		{
			if (numberOfTeams > 1)
			{
				if (GUI.Button (Rect (Screen.width*.05,Screen.height*.5,Screen.width*.9,Screen.height*.05), "Click to Start!"))
				{
					print ("The game has started!");
					Application.LoadLevel("demo1stagetestv2"); //
				}
			}
		}
		
		
		
	}
	
	//Rules		
	if (section == 1)
		{
		if (GUI.Button (Rect(10,10,Screen.width*.1,Screen.height/15),backImage))
			{
				section = 0;
			}
		GUI.Box (Rect(Screen.width*.15,Screen.height*.1,Screen.width*.7,Screen.height*.12),"Stock: " + stockAmount);
			
		if (GUI.Button (Rect(Screen.width*.1,Screen.height*.1,Screen.width*.05,Screen.height*.12), arrowLeft))
			{
				stockAmount = stockAmount - 1;
			}
		if (GUI.Button (Rect(Screen.width*.85,Screen.height*.1,Screen.width*.05,Screen.height*.12), arrowRight))
			{
				stockAmount = stockAmount + 1;
			}
		stockAmount = GUI.HorizontalSlider (Rect (Screen.width*.2,Screen.height*.18,Screen.width*.6,Screen.height*.02), stockAmount, 0, 99);
		
		
		GUI.Box (Rect(Screen.width*.15,Screen.height*.27,Screen.width*.7,Screen.height*.12),"Time: " + timeMinutes + ":" +timeSecondsTens + timeSecondsOnes);
			
		if (GUI.Button (Rect(Screen.width*.1,Screen.height*.27,Screen.width*.05,Screen.height*.12), arrowLeft))
			{
				timeSecondsOnes = timeSecondsOnes - 1;
			}
		if (GUI.Button (Rect(Screen.width*.85,Screen.height*.27,Screen.width*.05,Screen.height*.12), arrowRight))
			{
				timeSecondsOnes = timeSecondsOnes + 1;
			}
		timeMinutes = GUI.HorizontalSlider (Rect (Screen.width*.2,Screen.height*.35,Screen.width*.25,Screen.height*.02), timeMinutes, 0, 90);
		timeSecondsTens = GUI.HorizontalSlider (Rect (Screen.width*.5,Screen.height*.35,Screen.width*.125,Screen.height*.02), timeSecondsTens, 0, 5);
		timeSecondsOnes = GUI.HorizontalSlider (Rect (Screen.width*.675,Screen.height*.35,Screen.width*.125,Screen.height*.02), timeSecondsOnes, 0, 9); 
			
		
		GUI.Box (Rect(Screen.width*.15,Screen.height*.44,Screen.width*.7,Screen.height*.12),"Widgets: " + widgetAmount);
		
		if (GUI.Button (Rect(Screen.width*.1,Screen.height*.44,Screen.width*.05,Screen.height*.12), arrowLeft))
			{
				widgetAmount = widgetAmount - 1;
			}
		if (GUI.Button (Rect(Screen.width*.85,Screen.height*.44,Screen.width*.05,Screen.height*.12), arrowRight))
			{
				widgetAmount = widgetAmount + 1;
			}
		widgetAmount = GUI.HorizontalSlider (Rect (Screen.width*.2,Screen.height*.52,Screen.width*.6,Screen.height*.02), widgetAmount, 0, 10000);
			
		
		GUI.Box (Rect(Screen.width*.15,Screen.height*.61,Screen.width*.25,Screen.height*.12), "Handicap: " + handicapString);
		
		if (GUI.Button (Rect(Screen.width*.1,Screen.height*.61,Screen.width*.05,Screen.height*.12), arrowLeft))
			{
				handicap = handicap - 1;
			}
		if (GUI.Button (Rect(Screen.width*.4,Screen.height*.61,Screen.width*.05,Screen.height*.12), arrowRight))
			{
				handicap = handicap + 1;	
			}
			
		GUI.Box (Rect(Screen.width*.6,Screen.height*.61,Screen.width*.25,Screen.height*.12), "Damage Ratio: " + damageRatio); 
		
		if (GUI.Button (Rect(Screen.width*.55,Screen.height*.61,Screen.width*.05,Screen.height*.12), arrowLeft))
			{
				damageRatio = (Mathf.Round((damageRatio - 0.1)*10)/10);
			}
		if (GUI.Button (Rect(Screen.width*.85,Screen.height*.61,Screen.width*.05,Screen.height*.12), arrowRight))
			{
				damageRatio = (Mathf.Round((damageRatio + 0.1)*10)/10);
			}
			
			
		GUI.Box (Rect(Screen.width*.15,Screen.height*.78,Screen.width*.25,Screen.height*.12), "UDD Ball: " + uDDBallString);
		
		if (GUI.Button (Rect(Screen.width*.1,Screen.height*.78,Screen.width*.05,Screen.height*.12), arrowLeft))
			{
				uDDBall = uDDBall - 1;
			}
		if (GUI.Button (Rect(Screen.width*.4,Screen.height*.78,Screen.width*.05,Screen.height*.12), arrowRight))
			{
				uDDBall = uDDBall + 1;
			}
			
		
		if (GUI.Button (Rect(Screen.width*.55,Screen.height*.78,Screen.width*.35,Screen.height*.12), "More Rules"))
			{
				section = 2;
			}
		}
	
	//More Rules	
	if (section == 2)
		{
		if (GUI.Button (Rect(10,10,Screen.width*.1,Screen.height/15),backImage))
			{
				section = 1;
			}
		if (GUI.Button (Rect(10,10,Screen.width*.1,Screen.height/15),backImage))
			{
				section = 0;
			}
		GUI.Box (Rect(Screen.width*.15,Screen.height*.1,Screen.width*.7,Screen.height*.12),"Friendly Fire: " + friendlyFireString);
			
		if (GUI.Button (Rect(Screen.width*.1,Screen.height*.1,Screen.width*.05,Screen.height*.12), arrowLeft))
			{
				friendlyFire = friendlyFire - 1;
			}
		if (GUI.Button (Rect(Screen.width*.85,Screen.height*.1,Screen.width*.05,Screen.height*.12), arrowRight))
			{
				friendlyFire = friendlyFire + 1;
			}
		
		
		GUI.Box (Rect(Screen.width*.15,Screen.height*.27,Screen.width*.7,Screen.height*.12),"Pause: " + canPauseString);
			
		if (GUI.Button (Rect(Screen.width*.1,Screen.height*.27,Screen.width*.05,Screen.height*.12), arrowLeft))
			{
				canPause = canPause - 1;
			}
		if (GUI.Button (Rect(Screen.width*.85,Screen.height*.27,Screen.width*.05,Screen.height*.12), arrowRight))
			{
				canPause = canPause + 1;
			}
			
		
		GUI.Box (Rect(Screen.width*.15,Screen.height*.44,Screen.width*.7,Screen.height*.12),"Score Display: " + scoreDisplayString);
		
		if (GUI.Button (Rect(Screen.width*.1,Screen.height*.44,Screen.width*.05,Screen.height*.12), arrowLeft))
			{
				scoreDisplay = scoreDisplay - 1;
			}
		if (GUI.Button (Rect(Screen.width*.85,Screen.height*.44,Screen.width*.05,Screen.height*.12), arrowRight))
			{
				scoreDisplay = scoreDisplay + 1;
			}
			
		
		GUI.Box (Rect(Screen.width*.15,Screen.height*.61,Screen.width*.7,Screen.height*.12), "Self-Destruct Penalty: " + selfDestructPenalty);
		
		if (GUI.Button (Rect(Screen.width*.1,Screen.height*.61,Screen.width*.05,Screen.height*.12), arrowLeft))
			{
				selfDestructPenalty = selfDestructPenalty - 1;
			}
		if (GUI.Button (Rect(Screen.width*.85,Screen.height*.61,Screen.width*.05,Screen.height*.12), arrowRight))
			{
				selfDestructPenalty = selfDestructPenalty + 1;	
			}
			
			
		GUI.Box (Rect(Screen.width*.15,Screen.height*.78,Screen.width*.7,Screen.height*.12), "Damage Gauge: " + damageGaugeString);
		
		if (GUI.Button (Rect(Screen.width*.1,Screen.height*.78,Screen.width*.05,Screen.height*.12), arrowLeft))
			{
				damageGauge = damageGauge - 1;
			}
		if (GUI.Button (Rect(Screen.width*.85,Screen.height*.78,Screen.width*.05,Screen.height*.12), arrowRight))
			{
				damageGauge = damageGauge + 1;
			}
		}	
	}
	
//Training Menu	
if (DemoMenu.menu == 8)
	{
	if (GUI.Button (Rect (10,10,Screen.width*.1,Screen.height/15),backImage))
			{
				DemoMenu.menu = 1;
			}
	GUI.Box (Rect (Screen.width*.15,10,Screen.width*.2,Screen.height/15),trainingTitleImage);
	
	/*GUI.Box (Rect (Screen.width*.05,Screen.height*.1,Screen.width*.3,Screen.height*.4),"Tahu");
	GUI.Box (Rect (Screen.width*.35,Screen.height*.1,Screen.width*.3,Screen.height*.4),"Kopaka");
	GUI.Box (Rect (Screen.width*.65,Screen.height*.1,Screen.width*.3,Screen.height*.4),"Random");
			
	GUI.Box (Rect (Screen.width*.05,Screen.height*.55,Screen.width*.1875,Screen.height*.4),"Player 1");
	GUI.Box (Rect (Screen.width*.7625,Screen.height*.55,Screen.width*.1875,Screen.height*.4),"CPU"); */

	if (GUI.Button (Rect (Screen.width*.05,Screen.height*.1,Screen.width*.3,Screen.height*.4),tahuSelectionImage)) //Creates Tahu Selection Button, as well as assigning the current selection to it
		{
			if (player == 5)
				{
					trainingPlayerCharacter = 1;
				}
			if (player == 6)
				{
					trainingComputerCharacter = 1;
				}
			
		}
		if (GUI.Button (Rect (Screen.width*.35,Screen.height*.1,Screen.width*.3,Screen.height*.4),kopakaSelectionImage)) //Creates Kopaka Selection Button, as well as assigning the current selection to it
		{
			if (player == 5)
				{
					trainingPlayerCharacter = 2;
				}
			if (player == 6)
				{
					trainingComputerCharacter = 2;
				}
			
		}
		if (GUI.Button (Rect (Screen.width*.65,Screen.height*.1,Screen.width*.3,Screen.height*.4),randomSelectionImage)) //Creates Random Selection Button, as well as assigning the current selection to it
		{
			if (player == 5)
				{
					trainingPlayerCharacter = 3;
				}
			if (player == 6)
				{
					trainingComputerCharacter = 3;
				}
			
		}
	//GUI.Button (Rect (Screen.width*.05,Screen.height*.55,Screen.width*.1875,Screen.height*.4),"Player 1");
	//GUI.Button (Rect (Screen.width*.7625,Screen.height*.55,Screen.width*.1875,Screen.height*.4),"CPU");
	
	GUI.Box (Rect (Screen.width*.2875,Screen.height*.625,Screen.width*.425,Screen.height*.1),"Max Combo: " + selectedMaxCombo);
	GUI.Box (Rect (Screen.width*.2875,Screen.height*.775,Screen.width*.425,Screen.height*.1),"Total Combo: " + totalCombo);		
	
	//Training Player Section
		if (trainingPlayerNameButtonBox == 0)
		{
			if(GUI.Button (Rect (Screen.width*.05,Screen.height*.55,Screen.width*.1875,Screen.height*.35), trainingPlayerImage))
			{
				player = 5;
				print ("Player is " + player);
			}
			GUI.Box (Rect (Screen.width*.05,Screen.height*.9,Screen.width*.125,Screen.height*.05), "Player");

				if (GUI.Button (Rect (Screen.width*.175,Screen.height*.9,Screen.width*.03125,Screen.height*.05),"" + trainingPlayerCostume))
				{
					player = 5;
					costumechange(player);
				}
				if (GUI.Button (Rect (Screen.width*.20625,Screen.height*.9,Screen.width*.03125,Screen.height*.05), "Name"))
				{
					trainingPlayerNameButtonBox = 1;
				}
		} 
		if (trainingPlayerNameButtonBox == 1) //Also, add same settings to the other Player sections
		{
			GUILayout.BeginArea (Rect (Screen.width*.05,Screen.height*.55,Screen.width*.1875,Screen.height*.4));
			GUILayout.BeginVertical ("box");
			trainingPlayerNameScroll = GUILayout.BeginScrollView (trainingPlayerNameScroll);
			for (var trainingPlayerNameButtons : int = 1; trainingPlayerNameButtons < 16; trainingPlayerNameButtons++)
			{
					if (GUILayout.Button("Name " + trainingPlayerNameButtons, GUILayout.Height(Screen.height*.1))) //Here
					{
						trainingPlayerNameButtonBox = 0;
					}	
			}
			GUILayout.EndScrollView();
			GUILayout.EndVertical();
			GUILayout.EndArea();
		}//Do something with the Trainer
	
	/*if(GUI.Button (Rect (Screen.width*.05,Screen.height*.55,Screen.width*.1875,Screen.height*.35), player1Image))
		{
			player = 5;
			print ("Player is " + player);
		}*/
	
	if(GUI.Button (Rect (Screen.width*.7625,Screen.height*.55,Screen.width*.1875,Screen.height*.35), trainingComputerImage))
		{
			player = 6;
			print ("Player is " + player);
		}
	
	/*GUI.Box (Rect (Screen.width*.05,Screen.height*.9,Screen.width*.125,Screen.height*.05),"Player");
				
			
		if (GUI.Button (Rect (Screen.width*.175,Screen.height*.9,Screen.width*.03125,Screen.height*.05),"" + trainingPlayerCostume))
			{
				player = 5;
				costumechange(player);
			}
		GUI.Box (Rect (Screen.width*.20625,Screen.height*.9,Screen.width*.03125,Screen.height*.05), "Name");*/
	
	GUI.Box (Rect (Screen.width*.7625,Screen.height*.9,Screen.width*.125,Screen.height*.05),"Trainer");
			
		if (GUI.Button (Rect (Screen.width*.8875,Screen.height*.9,Screen.width*.03125,Screen.height*.05),"" + trainingComputerCostume))
			{
				player = 6;
				costumechange(player);
			}
		GUI.Box (Rect (Screen.width*.91875,Screen.height*.9,Screen.width*.03125,Screen.height*.05), "Name");
	
	//Creates stage load box
	if (trainingPlayerCharacter > 0 && trainingComputerCharacter > 0)
		{
			if (GUI.Button (Rect (Screen.width*.05,Screen.height*.5,Screen.width*.9,Screen.height*.05), "Click to Start!"))
			{
				print ("Training has started!");
				//Load Stage Here
			}
		}
	
	}	
}
//Costume changing code. Inferno, if you understand it, take it away...
function costumechange(player)
{
	if (teamOrFFA == 0) //Costume amounts change slightly if it is a FFA or Team game (0 is FFA)
	{ 
		if (player == 1)//if already on the player 1
		{
			if (player1Costume == 5) //restart numbering
			{
				player1Costume = 0; //1=Normal, 2=Shadow, 3=Inverse, 4=Reverse, 5=Gold Mask (This will be adjusted for full game)
			}
				player1Costume++;
				print("Player 1 Costume is " + player1Costume); //change player costume every click
		}
	
		else if (player == 2)//if already on player 2
		{
			if (player2Costume == 5)
			{
				player2Costume = 0; //Same values as Player 1 Costumes
			}
				player2Costume++;
				print ("Player 2 Costume is " + player2Costume); 
		}
			
		else if (player == 3)//if already on player 3
		{
			if (player3Costume == 5)
			{
				player3Costume = 0; //Same values as Player 1 Costumes
			}
				player3Costume++;
				print ("Player 3 Costume is " + player3Costume);
		}
		
		else if (player == 4)//if already on player 4
		{
			if (player4Costume == 5)
			{
				player4Costume = 0; //Same values as Player 1 Costumes
			}
				player4Costume++;
				print ("Player 4 Costume is " + player4Costume);
		}
		
		
				
	}
	
	if (teamOrFFA == 1) //If Team Match
	{
		if (player == 1)//if already on the player 1
		{
			if (player1Costume == 3) //restart numbering
			{
				player1Costume = 0; //1=Red, 2=Green, 3=Blue (This may be adjusted for full game)
			}
				player1Costume++;
				print("Player 1 Team is " + player1Costume); //change player costume every click
		}
	
		else if (player == 2)//if already on player 2
		{
			if (player2Costume == 3)
			{
				player2Costume = 0; //Same values as Player 1 Costumes
			}
				player2Costume++;
				print ("Player 2 Team is " + player2Costume); 
		}
			
		else if (player == 3)//if already on player 3
		{
			if (player3Costume == 3)
			{
				player3Costume = 0; //Same values as Player 1 Costumes
			}
				player3Costume++;
				print ("Player 3 Team is " + player3Costume);
		}
		
		else if (player == 4)//if already on player 4
		{
			if (player4Costume == 3)
			{
				player4Costume = 0; //Same values as Player 1 Costumes
			}
				player4Costume++;
				print ("Player 4 Team is " + player4Costume);
		}
				
	}
	
	//Training Mode Costumes
	else if (player == 5) //if already on training player
		{
			if (trainingPlayerCostume == 5)
			{
				trainingPlayerCostume = 0; //Same as multiplayer values
			}
				trainingPlayerCostume++;
				print ("Player Costume is " + trainingPlayerCostume);
		}
		
	else if (player == 6) //if already on trainer
		{
			if (trainingComputerCostume == 5)
			{
				trainingComputerCostume = 0; //Same as multiplayer values
			}
				trainingComputerCostume++;
				print ("Player Costume is " + trainingComputerCostume);
		}

}
		

function Update() {

nameDone();

if (stockAmount > 99) //Max Stock is 99 (Likely will be Changed for Full Game)
	{
	stockAmount = 0;
	}
if (stockAmount < 0)
	{
	stockAmount = 99;
	}
	
timeTotal = ((timeMinutes*60) + (timeSecondsTens*10) + (timeSecondsOnes)); //Adds the minutes, Tens Place, and Ones place to get the total seconds a game will last

if (timeSecondsOnes > 9) //When the ones place is equal to 10, the value goes to the tens place (10 seconds)
	{
	timeSecondsOnes = 0;
	timeSecondsTens = timeSecondsTens + 1;
	}
if (timeSecondsTens > 5) //When the tens place is equal to 6, the value goes to the minutes place (60 seconds)
	{
	timeSecondsTens = 0;
	timeMinutes = timeMinutes + 1;
	}
if (timeSecondsOnes < 0 && timeSecondsTens < 0) //Does not allow time to be negative by disallowing both the ones and tens place from being below zero
	{
	timeSecondsOnes = 0;
	}
if (timeSecondsOnes < 0) //Does not allow the ones place to be negative, instead drops tens place and makes ones place nine
	{
	timeSecondsOnes = 9;
	timeSecondsTens = timeSecondsTens - 1;
	}
if (timeSecondsTens < 0) //Does not allow the tens place to be negative, instead drops minutes place and makes tens place five
	{
	timeSecondsTens = 5;
	timeMinutes = timeMinutes - 1;
	}
if (timeMinutes < 0) //Does not allow minutes place to be less than zero
	{
	timeMinutes = 0;
	}
	
if (timeTotal > 5400) //Does not allow Time to be greater than 90:00
	{
	timeSecondsTens = 0;
	timeSecondsOnes = 0;
	}

if (handicap == 0) 
	{
	handicapString = "No";
	}
if (handicap == 1)
	{
	handicapString = "Yes";
	}
if (handicap < 0)
	{
	handicap = 1;
	}
if (handicap > 1)
	{
	handicap = 0;
	}
	
if (damageRatio < 0.1) //Does not allow the Damage ratio to be below 10%
	{
	damageRatio = 5.0;
	}
if (damageRatio > 5.0) //Does not allow the Damage ratio to be above 500%
	{
	damageRatio = 0.1;
	}

if (uDDBall == 0)
	{
	uDDBallString = "No";
	}
if (uDDBall == 1)
	{
	uDDBallString = "Yes";
	}
if (uDDBall < 0)
	{
	uDDBall = 1;
	}
if (uDDBall > 1)
	{
	uDDBall = 0;
	}
	
if (friendlyFire == 0)
	{
	friendlyFireString = "Off";
	}
if (friendlyFire == 1)
	{
	friendlyFireString = "On";
	}
if (friendlyFire < 0)
	{
	friendlyFire = 1;
	}
if (friendlyFire > 1)
	{
	friendlyFire = 0;
	}
	
if (canPause == 0)
	{
	canPauseString = "Off";
	}
if (canPause == 1)
	{
	canPauseString = "On";
	}
if (canPause < 0)
	{
	canPause = 1;
	}
if (canPause > 1)
	{
	canPause = 0;
	}

if (scoreDisplay == 0)
	{
	scoreDisplayString = "Off";
	}
if (scoreDisplay == 1)
	{
	scoreDisplayString = "On";
	}
if (scoreDisplay < 0)
	{
	scoreDisplay = 1;
	}
if (scoreDisplay > 1)
	{
	scoreDisplay = 0;
	}
	
if (selfDestructPenalty > 0) //Does not allow a positive penalty for self-destructs, sets to -10 instead
	{
	selfDestructPenalty = -10;
	}
if (selfDestructPenalty < -10) //Does not allow the penalty for self-destructs to be less than -10, sets to 0 instead
	{
	selfDestructPenalty = 0;
	}
	
if (damageGauge == 0)
	{
	damageGaugeString = "Off";
	}
if (damageGauge == 1)
	{
	damageGaugeString = "On";
	}
if (damageGauge < 0)
	{
	damageGauge = 1;
	}
if (damageGauge > 1)
	{
	damageGauge = 0;
	}
	
totalCombo = tahuMaxCombo + kopakaMaxCombo; //Calculates the total combo value using the current Tahu and Kopaka combos.

numberOfPlayers = player1Completed + player2Completed + player3Completed + player4Completed; //Adds up the number of players that will be in the game

//Sets the limit of Player Status [So it cycles between None, Human, and CPU]
if (player1Status > 2)
{
	player1Status = 0;
}
if (player2Status > 2)
{
	player2Status = 0;
}
if (player3Status > 2)
{
	player3Status = 0;
}
if (player4Status > 2)
{
	player4Status = 0;
}

//Sets the Titles of the Player Types
if (player1Status == 0)
	{ player1StatusTitle = "None";
	  player1Character = 0;}
if (player1Status == 1)
	{ player1StatusTitle = "Player 1";}
if (player1Status == 2)
	{ player1StatusTitle = "CPU";}
if (player2Status == 0)
	{ player2StatusTitle = "None";
	  player2Character = 0;}
if (player2Status == 1)
	{ player2StatusTitle = "Player 2";}
if (player2Status == 2)
	{ player2StatusTitle = "CPU";}
if (player3Status == 0)
	{ player3StatusTitle = "None";
	  player3Character = 0;}
if (player3Status == 1)
	{ player3StatusTitle = "Player 3";}
if (player3Status == 2)
	{ player3StatusTitle = "CPU";}
if (player4Status == 0)
	{ player4StatusTitle = "None";
	  player4Character = 0;}
if (player4Status == 1)
	{ player4StatusTitle = "Player 4";}
if (player4Status == 2)
	{ player4StatusTitle = "CPU";}
	
//Causes the Player not to count if no character is selected for them.
if (player1Character == 0)
	{ player1Completed = 0; }
if (player2Character == 0)
	{ player2Completed = 0; }
if (player3Character == 0)
	{ player3Completed = 0; }
if (player4Character == 0)
	{ player4Completed = 0; }

	
//Player Selection Images (Fight!)
//Player 1 Selection Images
if (player1Status == 0)
	{player1Image = noPlayerImage;}
if (player1Status != 0 && player1Character == 0)
	{player1Image = noneSelectedPlayer1Image;}
if (player1Character == 1) 
{
	if (teamOrFFA == 0)
	{
		if (player1Costume == 1)
			{player1Image = tahuSelectedImageRegular;}
		if (player1Costume == 2)
			{player1Image = tahuSelectedImageShadow;}
		if (player1Costume == 3)
			{player1Image = tahuSelectedImageInverse;}
		if (player1Costume == 4)
			{player1Image = tahuSelectedImageReverse;}
		if (player1Costume == 5)
			{player1Image = tahuSelectedImageGoldenMask;}
	}
	if (teamOrFFA == 1)
	{
		if (player1Costume == 1)
			{player1Image = tahuSelectedImageRed;}
		if (player1Costume == 2)
			{player1Image = tahuSelectedImageGreen;}
		if (player1Costume == 3)
			{player1Image = tahuSelectedImageBlue;}
	}
}
if (player1Character == 2)
{
	if (teamOrFFA == 0) 
	{
		if (player1Costume == 1)
			{player1Image = kopakaSelectedImageRegular;}
		if (player1Costume == 2)
			{player1Image = kopakaSelectedImageShadow;}
		if (player1Costume == 3)
			{player1Image = kopakaSelectedImageInverse;}
		if (player1Costume == 4)
			{player1Image = kopakaSelectedImageReverse;}
		if (player1Costume == 5)
			{player1Image = kopakaSelectedImageGoldenMask;}
	}
	if (teamOrFFA == 1)
	{
		if (player1Costume == 1)
			{player1Image = kopakaSelectedImageRed;}
		if (player1Costume == 2)
			{player1Image = kopakaSelectedImageGreen;}
		if (player1Costume == 3)
			{player1Image = kopakaSelectedImageBlue;}
	}
}
if (player1Character == 3)
	{player1Image = randomSelectedImage;}
	
//Player 2 Selection Images
if (player2Status == 0)
	{player2Image = noPlayerImage;}
if (player2Status != 0 && player2Character == 0)
	{player2Image = noneSelectedPlayer2Image;}
if (player2Character == 1) 
{
	if (teamOrFFA == 0)
	{
		if (player2Costume == 1)
			{player2Image = tahuSelectedImageRegular;}
		if (player2Costume == 2)
			{player2Image = tahuSelectedImageShadow;}
		if (player2Costume == 3)
			{player2Image = tahuSelectedImageInverse;}
		if (player2Costume == 4)
			{player2Image = tahuSelectedImageReverse;}
		if (player2Costume == 5)
			{player2Image = tahuSelectedImageGoldenMask;}
	}
	if (teamOrFFA == 1) //I'm unhappy with my current way of assigning Lighter and Darker variants, but it will work for now...
	{ //This unhappiness is because this system will always give player 1 the normal costume, rather than the first to choose it.
		if (player2Costume == 1 && (player1Character != 1 || player1Costume != 1))
			{player2Image = tahuSelectedImageRed;}
		if (player2Costume == 1 && player1Character == 1 && player1Costume == 1)
			{player2Image = tahuSelectedImageLightRed;}
		if (player2Costume == 2 && (player1Character != 1 || player1Costume != 2))
			{player2Image = tahuSelectedImageGreen;}
		if (player2Costume == 2 && player1Character == 1 && player1Costume == 2)
			{player2Image = tahuSelectedImageLightGreen;}
		if (player2Costume == 3 && (player1Character != 1 || player1Costume != 3))
			{player2Image = tahuSelectedImageBlue;}
		if (player2Costume == 3 && player1Character == 1 && player1Costume == 3)
			{player2Image = tahuSelectedImageLightBlue;}
	}
}
if (player2Character == 2)
{
	if (teamOrFFA == 0) 
	{
		if (player2Costume == 1)
			{player2Image = kopakaSelectedImageRegular;}
		if (player2Costume == 2)
			{player2Image = kopakaSelectedImageShadow;}
		if (player2Costume == 3)
			{player2Image = kopakaSelectedImageInverse;}
		if (player2Costume == 4)
			{player2Image = kopakaSelectedImageReverse;}
		if (player2Costume == 5)
			{player2Image = kopakaSelectedImageGoldenMask;}
	}
	if (teamOrFFA == 1) //Same comment as the one for Tahu
	{
		if (player2Costume == 1 && (player1Character != 2 || player1Costume != 1))
			{player2Image = kopakaSelectedImageRed;}
		if (player2Costume == 1 && player1Character == 2 && player1Costume == 1)
			{player2Image = kopakaSelectedImageLightRed;}
		if (player2Costume == 2 && (player1Character != 2 || player1Costume != 2))
			{player2Image = kopakaSelectedImageGreen;}
		if (player2Costume == 2 && player1Character == 2 && player1Costume == 2)
			{player2Image = kopakaSelectedImageLightGreen;}
		if (player2Costume == 3 && (player1Character != 2 || player1Costume != 3))
			{player2Image = kopakaSelectedImageBlue;}
		if (player2Costume == 3 && player1Character == 2 && player1Costume == 3)
			{player2Image = kopakaSelectedImageLightBlue;}
	}
}
if (player2Character == 3)
	{player2Image = randomSelectedImage;}

//Player 3 Selection Images
if (player3Status == 0)
	{player3Image = noPlayerImage;}
if (player3Status != 0 && player3Character == 0)
	{player3Image = noneSelectedPlayer3Image;}
if (player3Character == 1) 
{
	if (teamOrFFA == 0) 
	{
		if (player3Costume == 1)
			{player3Image = tahuSelectedImageRegular;}
		if (player3Costume == 2)
			{player3Image = tahuSelectedImageShadow;}
		if (player3Costume == 3)
			{player3Image = tahuSelectedImageInverse;}
		if (player3Costume == 4)
			{player3Image = tahuSelectedImageReverse;}
		if (player3Costume == 5)
			{player3Image = tahuSelectedImageGoldenMask;}
	}
	if (teamOrFFA == 1) //Same annoyances as the one for P2
	{
		if (player3Costume == 1 && (player1Character != 1 || player1Costume != 1) && (player2Character != 1 || player2Costume != 1))
			{player3Image = tahuSelectedImageRed;}
		if (player3Costume == 1 && ((player1Character == 1 && player1Costume == 1) || (player2Character == 1 && player2Costume == 1)))
			{player3Image = tahuSelectedImageLightRed;}
		if (player3Costume == 1 && ((player1Character == 1 && player1Costume == 1) && (player2Character == 1 && player2Costume == 1)))
			{player3Image = tahuSelectedImageDarkRed;}
		if (player3Costume == 2 && ( player1Character != 1 || player1Costume != 2) && (player2Character != 1 || player2Costume != 2))
			{player3Image = tahuSelectedImageGreen;}
		if (player3Costume == 2 && ((player1Character == 1 && player1Costume == 2) || (player2Character == 1 && player2Costume == 2)))
			{player3Image = tahuSelectedImageLightGreen;}
		if (player3Costume == 2 && ((player1Character == 1 && player1Costume == 2) && (player2Character == 1 && player2Costume == 2)))
			{player3Image = tahuSelectedImageDarkGreen;}
		if (player3Costume == 3 && (player1Character!= 1 || player1Costume != 3) && (player2Character != 1 || player2Costume != 3))
			{player3Image = tahuSelectedImageBlue;}
		if (player3Costume == 3 && ((player1Character == 1 && player1Costume == 3) || (player2Character == 1 && player2Costume == 3)))
			{player3Image = tahuSelectedImageLightBlue;}
		if (player3Costume == 3 && ((player1Character == 1 && player1Costume == 3) && (player2Character == 1 && player2Costume == 3)))
			{player3Image = tahuSelectedImageDarkBlue;}
	}
}
if (player3Character == 2)
{
	if (teamOrFFA == 0) 
	{
		if (player3Costume == 1)
			{player3Image = kopakaSelectedImageRegular;}
		if (player3Costume == 2)
			{player3Image = kopakaSelectedImageShadow;}
		if (player3Costume == 3)
			{player3Image = kopakaSelectedImageInverse;}
		if (player3Costume == 4)
			{player3Image = kopakaSelectedImageReverse;}
		if (player3Costume == 5)
			{player3Image = kopakaSelectedImageGoldenMask;}
	}
	if (teamOrFFA == 1)
	{
		if (player3Costume == 1 && (player1Character != 2 || player1Costume != 1) && (player2Character != 2 || player2Costume != 1))
			{player3Image = kopakaSelectedImageRed;}
		if (player3Costume == 1 && ((player1Character == 2 && player1Costume == 1) || (player2Character == 2 && player2Costume == 1)))
			{player3Image = kopakaSelectedImageLightRed;}
		if (player3Costume == 1 && ((player1Character == 2 && player1Costume == 1) && (player2Character == 2 && player2Costume == 1)))
			{player3Image = kopakaSelectedImageDarkRed;}
		if (player3Costume == 2 && (player1Character != 2 || player1Costume != 2) && (player2Character != 2 || player2Costume != 2))
			{player3Image = kopakaSelectedImageGreen;}
		if (player3Costume == 2 && ((player1Character == 2 && player1Costume == 2) || (player2Character == 2 && player2Costume == 2)))
			{player3Image = kopakaSelectedImageLightGreen;}
		if (player3Costume == 2 && ((player1Character == 2 && player1Costume == 2) && (player2Character == 2 && player2Costume == 2)))
			{player3Image = kopakaSelectedImageDarkGreen;}
		if (player3Costume == 3 && (player1Character != 2 || player1Costume != 3) && (player2Character != 2 || player2Costume != 3))
			{player3Image = kopakaSelectedImageBlue;}
		if (player3Costume == 3 && ((player1Character == 2 && player1Costume == 3) || (player2Character == 2 && player2Costume == 3)))
			{player3Image = kopakaSelectedImageLightBlue;}
		if (player3Costume == 3 && ((player1Character == 2 && player1Costume == 3) && (player2Character == 2 && player2Costume == 3)))
			{player3Image = kopakaSelectedImageDarkBlue;}
	}
}
if (player3Character == 3)
	{player3Image = randomSelectedImage;}
	
//Player 4 Selection Images
if (player4Status == 0)
	{player4Image = noPlayerImage;}
if (player4Status != 0 && player4Character == 0)
	{player4Image = noneSelectedPlayer4Image;}
if (player4Character == 1) 
{
	if (teamOrFFA == 0)
	{
		if (player4Costume == 1)
			{player4Image = tahuSelectedImageRegular;}
		if (player4Costume == 2)
			{player4Image = tahuSelectedImageShadow;}
		if (player4Costume == 3)
			{player4Image = tahuSelectedImageInverse;}
		if (player4Costume == 4)
			{player4Image = tahuSelectedImageReverse;}
		if (player4Costume == 5)
			{player4Image = tahuSelectedImageGoldenMask;}
	}
	if (teamOrFFA == 1) //This section is even more annoying to me than the other two.
	{
		if (player4Costume == 1 && (player1Character != 1 || player1Costume != 1) && (player2Character != 1 || player2Costume != 1) && (player2Character != 1 || player2Costume != 1))
			{player4Image = tahuSelectedImageRed;}
		if (player4Costume == 1 && ((player1Character == 1 && player1Costume == 1) || (player2Character == 1 && player2Costume == 1) || (player3Character == 1 && player3Costume == 1)))
			{player4Image = tahuSelectedImageLightRed;}
		if (player4Costume == 1 && (((player1Character == 1 && player1Costume == 1) && (player2Character == 1 && player2Costume == 1)) || ((player2Character == 1 && player2Costume == 1) && (player3Character == 1 && player3Costume == 1)) || ((player1Character == 1 && player1Costume == 1) && (player3Character == 1 && player3Costume == 1))))
			{player4Image = tahuSelectedImageDarkRed;}
		if (player4Costume == 1 && (player1Character == 1 && player1Costume == 1) && (player2Character == 1 && player2Costume == 1) && (player3Character == 1 && player3Costume == 1))
			{player4Costume = 2;} //Does not allow the player to try to be red if all others are already.
		if (player4Costume == 2 && (player1Character != 1 || player1Costume != 2) && (player2Character != 1 || player2Costume != 2) && (player2Character != 1 || player2Costume != 2))
			{player4Image = tahuSelectedImageGreen;}
		if (player4Costume == 2 && ((player1Character == 1 && player1Costume == 2) || (player2Character == 1 && player2Costume == 2) || (player3Character == 1 && player3Costume == 2)))
			{player4Image = tahuSelectedImageLightGreen;}
		if (player4Costume == 2 && (((player1Character == 1 && player1Costume == 2) && (player2Character == 1 && player2Costume == 2)) || ((player2Character == 1 && player2Costume == 2) && (player3Character == 1 && player3Costume == 2)) || ((player1Character == 1 && player1Costume == 2) && (player3Character == 1 && player3Costume == 2))))
			{player4Image = tahuSelectedImageDarkGreen;}
		if (player4Costume == 2 && (player1Character == 1 && player1Costume == 2) && (player2Character == 1 && player2Costume == 2) && (player3Character == 1 && player3Costume == 2))
			{player4Costume = 3;} //Does not allow the player to try to be green if all other are already.
		if (player4Costume == 3 && (player1Character != 1 || player1Costume != 3) && (player2Character != 1 || player2Costume != 3) && (player2Character != 1 || player2Costume != 3))
			{player4Image = tahuSelectedImageBlue;}
		if (player4Costume == 3 && ((player1Character == 1 && player1Costume == 3) || (player2Character == 1 && player2Costume == 3) || (player3Character == 1 && player3Costume == 3)))
			{player4Image = tahuSelectedImageLightBlue;}
		if (player4Costume == 3 && (((player1Character == 1 && player1Costume == 3) && (player2Character == 1 && player2Costume == 3)) || ((player2Character == 1 && player2Costume == 3) && (player3Character == 1 && player3Costume == 3)) || ((player1Character == 1 && player1Costume == 3) && (player3Character == 1 && player3Costume == 3))))
			{player4Image = tahuSelectedImageDarkBlue;}
		if (player4Costume == 3 && (player1Character == 1 && player1Costume == 3) && (player2Character == 1 && player2Costume == 3) && (player3Character == 1 && player3Costume == 3))
			{player4Costume = 1;} //Does not allow the player to try to be blue if all others are already.
	}
}
if (player4Character == 2)
{
	if (teamOrFFA == 0) 
	{
		if (player4Costume == 1)
			{player4Image = kopakaSelectedImageRegular;}
		if (player4Costume == 2)
			{player4Image = kopakaSelectedImageShadow;}
		if (player4Costume == 3)
			{player4Image = kopakaSelectedImageInverse;}
		if (player4Costume == 4)
			{player4Image = kopakaSelectedImageReverse;}
		if (player4Costume == 5)
			{player4Image = kopakaSelectedImageGoldenMask;}
	}
	if (teamOrFFA == 1)
	{
		if (player4Costume == 1 && (player1Character != 2 || player1Costume != 1) && (player2Character != 2 || player2Costume != 1) && (player2Character != 2 || player2Costume != 1))
			{player4Image = kopakaSelectedImageRed;}
		if (player4Costume == 1 && ((player1Character == 2 && player1Costume == 1) || (player2Character == 2 && player2Costume == 1) || (player3Character == 2 && player3Costume == 1)))
			{player4Image = kopakaSelectedImageLightRed;}
		if (player4Costume == 1 && (((player1Character == 2 && player1Costume == 1) && (player2Character == 2 && player2Costume == 1)) || ((player2Character == 2 && player2Costume == 1) && (player3Character == 2 && player3Costume == 1)) || ((player1Character == 2 && player1Costume == 1) && (player3Character == 2 && player3Costume == 1))))
			{player4Image = kopakaSelectedImageDarkRed;}
		if (player4Costume == 1 && (player1Character == 2 && player1Costume == 1) && (player2Character == 2 && player2Costume == 1) && (player3Character == 2 && player3Costume == 1))
			{player4Costume = 2;} //Same function as above for Kopaka
		if (player4Costume == 2 && (player1Character != 2 || player1Costume != 2) && (player2Character != 2 || player2Costume != 2) && (player2Character != 2 || player2Costume != 2))
			{player4Image = kopakaSelectedImageGreen;}
		if (player4Costume == 2 && ((player1Character == 2 && player1Costume == 2) || (player2Character == 2 && player2Costume == 2) || (player3Character == 2 && player3Costume == 2)))
			{player4Image = kopakaSelectedImageLightGreen;}
		if (player4Costume == 2 && (((player1Character == 2 && player1Costume == 2) && (player2Character == 2 && player2Costume == 2)) || ((player2Character == 2 && player2Costume == 2) && (player3Character == 2 && player3Costume == 2)) || ((player1Character == 2 && player1Costume == 2) && (player3Character == 2 && player3Costume == 2))))
			{player4Image = kopakaSelectedImageDarkGreen;}
		if (player4Costume == 2 && (player1Character == 2 && player1Costume == 2) && (player2Character == 2 && player2Costume == 2) && (player3Character == 2 && player3Costume == 2))
			{player4Costume = 3;} //Same function as above for Kopaka
		if (player4Costume == 3 && (player1Character != 2 || player1Costume != 3) && (player2Character != 2 || player2Costume != 3) && (player2Character != 2 || player2Costume != 3))
			{player4Image = kopakaSelectedImageBlue;}
		if (player4Costume == 3 && ((player1Character == 2 && player1Costume == 3) || (player2Character == 2 && player2Costume == 3) || (player3Character == 2 && player3Costume == 3)))
			{player4Image = kopakaSelectedImageLightBlue;}
		if (player4Costume == 3 && (((player1Character == 2 && player1Costume == 3) && (player2Character == 2 && player2Costume == 3)) || ((player2Character == 2 && player2Costume == 2) && (player3Character == 2 && player3Costume == 3)) || ((player1Character == 2 && player1Costume == 3) && (player3Character == 2 && player3Costume == 3))))
			{player4Image = kopakaSelectedImageDarkBlue;}
		if (player4Costume == 3 && (player1Character == 2 && player1Costume == 3) && (player2Character == 2 && player2Costume == 3) && (player3Character == 2 && player3Costume == 3))
			{player4Costume = 1;} //Same function as above for Kopaka
	}
}
if (player4Character == 3)
	{player4Image = randomSelectedImage;}


//Player Selection Images (Training)
if (trainingPlayerCharacter == 0)
	{trainingPlayerImage = noneSelectedTrainingPlayerImage;}
if (trainingPlayerCharacter == 1)
	{trainingPlayerImage = tahuSelectedImageRegular;}
if (trainingPlayerCharacter == 2)
	{trainingPlayerImage = kopakaSelectedImageRegular;}
if (trainingPlayerCharacter == 3)
	{trainingPlayerImage = randomSelectedImage;}
	
if (trainingComputerCharacter == 0)
	{trainingComputerImage = noneSelectedTrainingComputerImage;}
if (trainingComputerCharacter == 1)
	{trainingComputerImage = tahuSelectedImageRegular;}
if (trainingComputerCharacter == 2)
	{trainingComputerImage = kopakaSelectedImageRegular;}
if (trainingComputerCharacter == 3)
	{trainingComputerImage = randomSelectedImage;}


//Team Costume Adjustments
if (teamOrFFA == 1)
{
	if (player1Costume == 1 && player1Character != 0)
		{redTeamP1 = 1;}
	if (player1Costume != 1 || player1Character == 0)
		{redTeamP1 = 0;}
	if (player1Costume == 2 && player1Character != 0)
		{greenTeamP1 = 1;}
	if (player1Costume != 2 || player1Character == 0)
		{greenTeamP1 = 0;}
	if (player1Costume == 3 && player1Character != 0)
		{blueTeamP1 = 1;}
	if (player1Costume != 3 || player1Character == 0)
		{blueTeamP1 = 0;}
	if (player2Costume == 1 && player2Character != 0)
		{redTeamP2 = 1;}
	if (player2Costume != 1 || player2Character == 0)
		{redTeamP2 = 0;}
	if (player2Costume == 2 && player2Character != 0)
		{greenTeamP2 = 1;}
	if (player2Costume != 2 || player2Character == 0)
		{greenTeamP2 = 0;}
	if (player2Costume == 3 && player2Character != 0)
		{blueTeamP2 = 1;}
	if (player2Costume != 3 || player2Character == 0)
		{blueTeamP2 = 0;}
	if (player3Costume == 1 && player3Character != 0)
		{redTeamP3 = 1;}
	if (player3Costume != 1 || player3Character == 0)
		{redTeamP3 = 0;}
	if (player3Costume == 2 && player3Character != 0)
		{greenTeamP3 = 1;}
	if (player3Costume != 2 || player3Character == 0)
		{greenTeamP3 = 0;}
	if (player3Costume == 3 && player3Character != 0)
		{blueTeamP3 = 1;}
	if (player3Costume != 3 || player3Character == 0)
		{blueTeamP3 = 0;}
	if (player4Costume == 1 && player4Character != 0)
		{redTeamP4 = 1;}
	if (player4Costume != 1 || player4Character == 0)
		{redTeamP4 = 0;}
	if (player4Costume == 2 && player4Character != 0)
		{greenTeamP4 = 1;}
	if (player4Costume != 2 || player4Character == 0)
		{greenTeamP4 = 0;}
	if (player4Costume == 3 && player4Character != 0)
		{blueTeamP4 = 1;}
	if (player4Costume != 3 || player4Character == 0)
		{blueTeamP4 = 0;}
}

//Number of Players on a Team
redTeamAmount = redTeamP1 + redTeamP2 + redTeamP3 + redTeamP4;
greenTeamAmount = greenTeamP1 + greenTeamP2 + greenTeamP3 + greenTeamP4;
blueTeamAmount = blueTeamP1 + blueTeamP2 + blueTeamP3 + blueTeamP4;

if (redTeamAmount > 0)
	{redTeamViable = 1;}
if (redTeamAmount == 0)
	{redTeamViable = 0;}
if (greenTeamAmount > 0)
	{greenTeamViable = 1;}
if (greenTeamAmount == 0)
	{greenTeamViable = 0;}
if (blueTeamAmount > 0)
	{blueTeamViable = 1;}
if (blueTeamAmount == 0)
	{blueTeamViable = 0;}

numberOfTeams = redTeamViable + greenTeamViable + blueTeamViable;

}

function nameDone() {
	if(Input.GetKeyDown(KeyCode.Return))
	{
		player1NameButtonBox = 0;
	}
}

/* To-Do List

-Allow Switch between Characters
-Allow Switch between player type (1=Human, 2=CPU, 0=None)
-Create Button that appears when enough players/teams exist [ESPECIALLY TEAMS]
-Allow Switch between Characters in Training Menu
-Allow Switch between Costumes in Training Menu
-Attach Training Menu to Training Mode
-Attach Select Menu to Main Game
-Set warning box to appear if (stockAmount == 0 && timeTotal == 0 && widgetAmount == 0), rather than play box

-Allow change between costume images

-SET UP WAY SO COSTUME SHADE WILL CHANGE BASED ON WHEN THE TEAM WAS JOINED {This can be done for the next release. Current is based on which player it is.}

-More

*/ 