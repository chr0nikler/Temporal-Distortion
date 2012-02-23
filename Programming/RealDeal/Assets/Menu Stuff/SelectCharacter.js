var backImage : Texture2D;
var section : int = 0;
var teamOrFFAImage : Texture2D = ffaImage;
var ffaImage : Texture2D;
var teamImage : Texture2D;
var teamOrFFA : int = 0;
var arrowLeft : Texture2D;
var arrowRight : Texture2D;
var trainingTitleImage : Texture2D;
var stockAmount : int = 5;
var timeMinutes : int = 0;
var timeSecondsTens : int = 0;
var timeSecondsOnes : int = 0;
var timeTotal : int = 0;
var timedStockAmount : int = 0;
var widgetAmount : int = 0;
var handicapString = "No";
var handicap = 0;
static var damageRatio : float = 1.0;
var uDDBallString = "Yes";
var uDDBall = 1;
var friendlyFireString = "Off";
var friendlyFire = 0;
var canPauseString = "On";
var canPause = 1;
var scoreDisplayString = "Off";
var scoreDisplay = 0;
var selfDestructPenalty = -1;
var damageGaugeString = "On";
var damageGauge = 1;
var selectedMaxCombo = 0;
var tahuMaxCombo = 0;
var kopakaMaxCombo = 0;
var totalCombo = 0;
var player1Status = 1;
var player2Status = 2;
var player3Status = 0;
var player4Status = 0;
var player1StatusTitle = "Player 1";
var player2StatusTitle = "CPU";
var player3StatusTitle = "None";
var player4StatusTitle = "None";
var numberOfPlayers = 0;
var player1Character = 0;
var player2Character = 0;
var player3Character = 0;
var player4Character = 0;
var player1Completed = 0;
var player2Completed = 0;
var player3Completed = 0;
var player4Completed = 0;
var trainingPlayerCharacter = 3;
var tahuSelectionImage : Texture2D;
var kopakaSelectionImage : Texture2D;
var randomSelectionImage : Texture2D;
var tahuSelectedImage : Texture2D;
var kopakaSelectedImage : Texture2D;
var randomSelectedImage : Texture2D;
var player1Image : Texture2D;
var player2Image : Texture2D;
var player3Image : Texture2D;
var player4Image : Texture2D;
var player1Costume = 0;
var player2Costume = 0;
var player3Costume = 0;
var player4Costume = 0;
var player : int = 0;
var randomCharacter : int;

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
				}
			if (teamOrFFA == 1)
				{
					teamOrFFAImage = ffaImage;
					teamOrFFA = 0;
				}
			if (teamOrFFA == 2)
				{
					teamOrFFA = 1;
				}
			}		

		if (GUI.Button (Rect (Screen.width*.4,10,Screen.width*.55,Screen.height/15),"Rules"))
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
		
		if (GUI.Button (Rect (Screen.width*.05,Screen.height*.1,Screen.width*.3,Screen.height*.4),"Tahu")) //Creates Tahu Selection Button, as well as assigning the current selection to it
		{
			if (player == 1)
				{
					player1Character = 1;
					player1Completed = 1;
				}
			if (player == 2)
				{
					player2Character = 1;
					player2Completed = 1;
				}
			if (player == 3)
				{
					player3Character = 1;
					player3Completed = 1;
				}
			if (player == 4)
				{
					player4Character = 1;
					player4Completed = 1;
				}
		}
		if (GUI.Button (Rect (Screen.width*.35,Screen.height*.1,Screen.width*.3,Screen.height*.4),"Kopaka")) //Creates Kopaka Selection Button, as well as assigning the current selection to it
		{
			if (player == 1)
				{
					player1Character = 2;
					player1Completed = 1;
				}
			if (player == 2)
				{
					player2Character = 2;
					player2Completed = 1;
				}
			if (player == 3)
				{
					player3Character = 2;
					player3Completed = 1;
				}
			if (player == 4)
				{
					player4Character = 2;
					player4Completed = 1;
				}
		}
		if (GUI.Button (Rect (Screen.width*.65,Screen.height*.1,Screen.width*.3,Screen.height*.4),"Random")) //Creates Random Selection Button, as well as assigning the current selection to it
		{
			if (player == 1)
				{
					player1Character = 3;
					player1Completed = 1;
				}
			if (player == 2)
				{
					player2Character = 3;
					player2Completed = 1;
				}
			if (player == 3)
				{
					player3Character = 3;
					player3Completed = 1;
				}
			if (player == 4)
				{
					player4Character = 3;
					player4Completed = 1;
				}
		}
		
		//Creates the Player sections at the bottom
		
		if (GUI.Button (Rect (Screen.width*.05,Screen.height*.9,Screen.width*.125,Screen.height*.05),player1StatusTitle))
			{
				player1Status++;
			}
		if (GUI.Button (Rect (Screen.width*.175,Screen.height*.9,Screen.width*.03125,Screen.height*.05),"" + player1Costume))
			{
				player = 1;
				costumechange(player);
			}
		GUI.Box (Rect (Screen.width*.20625,Screen.height*.9,Screen.width*.03125,Screen.height*.05), "Name");
		if (GUI.Button (Rect (Screen.width*.2875,Screen.height*.9,Screen.width*.125,Screen.height*.05),player2StatusTitle))
			{
				player2Status++;
			}
		if (GUI.Button (Rect (Screen.width*.4125,Screen.height*.9,Screen.width*.03125,Screen.height*.05),"" + player2Costume))
			{
				player = 2;
				costumechange(player);
			}
		GUI.Box (Rect (Screen.width*.44375,Screen.height*.9,Screen.width*.03125,Screen.height*.05), "Name");
		if (GUI.Button (Rect (Screen.width*.525,Screen.height*.9,Screen.width*.125,Screen.height*.05),player3StatusTitle))
			{
				player3Status++;
			}
		if (GUI.Button (Rect (Screen.width*.65,Screen.height*.9,Screen.width*.03125,Screen.height*.05),"" + player3Costume))
			{
				player = 3;
				costumechange(player);
			}
		GUI.Box (Rect (Screen.width*.68125,Screen.height*.9,Screen.width*.03125,Screen.height*.05), "Name");
		if (GUI.Button (Rect (Screen.width*.7625,Screen.height*.9,Screen.width*.125,Screen.height*.05),player4StatusTitle))
			{
				player4Status++;
			}
		if (GUI.Button (Rect (Screen.width*.8875,Screen.height*.9,Screen.width*.03125,Screen.height*.05),"" + player4Costume))
			{
				player = 4;
				costumechange(player);
			}
		GUI.Box (Rect (Screen.width*.91875,Screen.height*.9,Screen.width*.03125,Screen.height*.05), "Name");	
			
		
		if(GUI.Button (Rect (Screen.width*.05,Screen.height*.55,Screen.width*.1875,Screen.height*.35), player1Image))
		{
			player = 1;
			print ("Player is " + player);
		}
		else if(GUI.Button (Rect (Screen.width*.2875,Screen.height*.55,Screen.width*.1875,Screen.height*.35), player2Image))
		{
			player = 2;
			print ("Player is " + player);
		}
		else if(GUI.Button (Rect (Screen.width*.525,Screen.height*.55,Screen.width*.1875,Screen.height*.35), player3Image))
		{
			player = 3;
			print ("Player is " + player);
		}
		else if(GUI.Button (Rect (Screen.width*.7625,Screen.height*.55,Screen.width*.1875,Screen.height*.35), player4Image))
		{
			player = 4;
			print ("Player is " + player);
		}
		
		
	//Begin the game box
		if (numberOfPlayers > 1)
		{
			if (GUI.Button (Rect (Screen.width*.05,Screen.height*.5,Screen.width*.9,Screen.height*.05), "Click to Start!"))
			{
				print ("The game has started!");
				//Load Stage Here
			}
		}
		
		
	}
		
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

	if (GUI.Button (Rect (Screen.width*.05,Screen.height*.1,Screen.width*.3,Screen.height*.4),"Tahu")) //Creates Tahu Selection Button, as well as assigning the current selection to it
		{
			if (player == 1)
				{
					player1Character = 1;
					player1Completed = 1;
				}
			if (player == 2)
				{
					player2Character = 1;
					player2Completed = 1;
				}
			if (player == 3)
				{
					player3Character = 1;
					player3Completed = 1;
				}
			if (player == 4)
				{
					player4Character = 1;
					player4Completed = 1;
				}
		}
		if (GUI.Button (Rect (Screen.width*.35,Screen.height*.1,Screen.width*.3,Screen.height*.4),"Kopaka")) //Creates Kopaka Selection Button, as well as assigning the current selection to it
		{
			if (player == 1)
				{
					player1Character = 2;
					player1Completed = 1;
				}
			if (player == 2)
				{
					player2Character = 2;
					player2Completed = 1;
				}
			if (player == 3)
				{
					player3Character = 2;
					player3Completed = 1;
				}
			if (player == 4)
				{
					player4Character = 2;
					player4Completed = 1;
				}
		}
		if (GUI.Button (Rect (Screen.width*.65,Screen.height*.1,Screen.width*.3,Screen.height*.4),"Random")) //Creates Random Selection Button, as well as assigning the current selection to it
		{
			if (player == 1)
				{
					player1Character = 3;
					player1Completed = 1;
				}
			if (player == 2)
				{
					player2Character = 3;
					player2Completed = 1;
				}
			if (player == 3)
				{
					player3Character = 3;
					player3Completed = 1;
				}
			if (player == 4)
				{
					player4Character = 3;
					player4Completed = 1;
				}
		}
	GUI.Button (Rect (Screen.width*.05,Screen.height*.55,Screen.width*.1875,Screen.height*.4),"Player 1");
	GUI.Button (Rect (Screen.width*.7625,Screen.height*.55,Screen.width*.1875,Screen.height*.4),"CPU");
	
	GUI.Box (Rect (Screen.width*.2875,Screen.height*.625,Screen.width*.425,Screen.height*.1),"Max Combo: " + selectedMaxCombo);
	GUI.Box (Rect (Screen.width*.2875,Screen.height*.775,Screen.width*.425,Screen.height*.1),"Total Combo: " + totalCombo);		
	
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
				player1Costume = 0; //0=Normal, 1=Shadow, 2=Inverse, 3=Reverse, 4=Gold Mask (This will be adjusted for full game)
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
				player1Costume = 0; //0=Red, 1=Green, 2=Blue (This may be adjusted for full game)
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

}
		

function Update() {

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

	

}


/* To-Do List

-Allow Switch between Characters
-Allow Switch between player type (1=Human, 2=CPU, 0=None)
-Create Button that appears when enough players/teams exist
-Allow Switch between Characters in Training Menu
-Allow Switch between Costumes in Training Menu
-Attach Training Menu to Training Mode
-Attach Select Menu to Main Game
-Set warning box to appear if (stockAmount == 0 && timeTotal == 0 && widgetAmount == 0), rather than play box

-More

*/ 