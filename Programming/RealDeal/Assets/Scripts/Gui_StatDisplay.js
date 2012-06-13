var p1stock:Texture2D;
var p2stock:Texture2D;
var tahusybmol:Texture2D;
var kopakasybmol:Texture2D;
var tahustock:Texture2D;
var kopakastock:Texture2D;
var p3stock:Texture2D;
var p4stock:Texture2D;
var p1icon:Texture2D;
var p2icon:Texture2D;
var p3icon:Texture2D;
var p4icon:Texture2D;
static var totalplayers:int= SelectCharacter.numberOfPlayers; //Just out of curiosity, why did you make this static? -Inferno.
static var player1stock:int= SelectCharacter.stockAmount;
static var player2stock:int= SelectCharacter.stockAmount;
static var player3stock:int= SelectCharacter.stockAmount;
static var player4stock:int= SelectCharacter.stockAmount;
static var player1percent:int=0;
static var player2percent:int=0;
static var player3percent:int=0;
static var player4percent:int=0;
static var player1kos:int[]=new int[3];
static var player2kos:int[]=new int[3];
static var player3kos:int[]=new int[3];
static var player4kos:int[]=new int[3];
var charSkin : GUISkin;

function Awake()
{
}

function Start()
{
	if(Player1Create.characterNumber == 1)
 	{
 		p1stock = tahustock;
 		p1icon = tahusybmol;
 	}
 	else if(Player1Create.characterNumber == 2)
 	{
 		p1stock = kopakastock;
 		p1icon = kopakasybmol;
 	}
 	if(Player2Create.characterNumber == 1)
 	{
 		p2stock = tahustock;
 		p2icon = tahusybmol;
 	}
 	else if(Player2Create.characterNumber == 2)
 	{
 		p2stock = kopakastock;
 		p2icon = kopakasybmol;
 	}
 	if(Player3Create.characterNumber == 1)
 	{
 		p3stock = tahustock;
 		p3icon = tahusybmol;
 	}
 	else if(Player3Create.characterNumber == 2)
 	{
 		p3stock = kopakastock;
 		p3icon = kopakasybmol;
 	}
	if(Player4Create.characterNumber == 1)
 	{
 		p4stock = tahustock;
 		p4icon = tahusybmol;
 	}
 	else if(Player4Create.characterNumber == 2)
 	{
 		p4stock = kopakastock;
 		p4icon = kopakasybmol;
 	}
 	
}

function OnGUI () {
	GUI.skin = charSkin;
	//Each if statement checks for the player. 
 	if (SelectCharacter.player1Completed == 1) {
 	//Each if within this if statment that contains (playerXstock < y) is to count stock. If greater than/ equal to 6, replace icons with counter
 		print("Player1");
 		if(player1stock < 6)
 		{
 			for(var n : int = 0; n < player1stock; n++)
 			{
    			GUI.Label (Rect (((Screen.width/totalplayers))-(Screen.width/(2 * totalplayers))-30 + (n * 20),Screen.height - 100,100,100), p1stock);
    		}
   		}
    	else
   		{
    		GUI.Label (Rect (((Screen.width/totalplayers))-(Screen.width/(2 * totalplayers))-40,Screen.height - 100,100,100), p1stock);
    		GUI.Label (Rect (((Screen.width/totalplayers))-(Screen.width/(2 * totalplayers))+60,Screen.height - 100,100,100), "x"+player1stock.ToString());
    	}
    	GUI.Box (Rect (((Screen.width/totalplayers))-(Screen.width/(2 * totalplayers))-50,Screen.height - 100,200,100),"P1 Stats");
	
		GUI.Label (Rect (((Screen.width/totalplayers))-(Screen.width/(2 * totalplayers))-30,Screen.height - 60,120,100), player1percent.ToString()+"%");
		GUI.Label (Rect (((Screen.width/totalplayers))-(Screen.width/(2 * totalplayers))-90,Screen.height - 100,120,100), p1icon);
	
		}
	if (SelectCharacter.player2Completed == 1) {
		print("Player2");
		if(player2stock < 6)	
		{
			for(var b : int = 0; b < player2stock; b++)
	 		{
	 			if(SelectCharacter.player1Completed == 1) //This check determines if the 1st player has actually been created or not, for spacing reasons
	 			{										//Other checks like this exist later on and in more numbers for each player
					GUI.Label (Rect ((2*(Screen.width/totalplayers))-(Screen.width/(2 * totalplayers))-30 + (b * 20),Screen.height - 100,100,100), p2stock);
				}
				else
				{
					GUI.Label (Rect (((Screen.width/totalplayers))-(Screen.width/(2 * totalplayers))-30 + (b * 20),Screen.height - 100,100,100), p2stock);
				}
			}
		}
		else
		{
			if(SelectCharacter.player1Completed == 1)
	 		{
				GUI.Label (Rect ((2*(Screen.width/totalplayers))-(Screen.width/(2 * totalplayers))-40,Screen.height - 100,100,100), p2stock);
				GUI.Label (Rect ((2*(Screen.width/totalplayers))-(Screen.width/(2 * totalplayers))+60,Screen.height - 100,100,100), "x"+player2stock.ToString());
			}
			else
			{
				GUI.Label (Rect (((Screen.width/totalplayers))-(Screen.width/(2 * totalplayers))-40,Screen.height - 100,100,100), p2stock);
				GUI.Label (Rect (((Screen.width/totalplayers))-(Screen.width/(2 * totalplayers))+60,Screen.height - 100,100,100), "x"+player2stock.ToString());
			}
		}
		if(SelectCharacter.player1Completed == 1)
		{
	   		GUI.Box (Rect ((2*(Screen.width/totalplayers))-(Screen.width/(2 * totalplayers))-50,Screen.height - 100,200,100), "P2 Stats");
			GUI.Label (Rect ((2*(Screen.width/totalplayers))-(Screen.width/(2 * totalplayers))-30,Screen.height - 60,120,100), player2percent.ToString()+"%");
			GUI.Label (Rect ((2*(Screen.width/totalplayers))-(Screen.width/(2 * totalplayers))-90,Screen.height - 100,120,100), p2icon);
		}
		else
		{
			GUI.Box (Rect (((Screen.width/totalplayers))-(Screen.width/(2 * totalplayers))-50,Screen.height - 100,200,100), "P2 Stats");
			GUI.Label (Rect (((Screen.width/totalplayers))-(Screen.width/(2 * totalplayers))-30,Screen.height - 60,120,100), player2percent.ToString()+"%");
			GUI.Label (Rect (((Screen.width/totalplayers))-(Screen.width/(2 * totalplayers))-90,Screen.height - 100,120,100), p2icon);
		}
			
	}
	if (SelectCharacter.player3Completed == 1) {
		print("Player3");
		if(player3stock < 6)
		{
			
			for(var d : int = 0; d < player3stock; d++)
	 		{	
	 			if(SelectCharacter.player1Completed == 1 && SelectCharacter.player2Completed)
	 			{
					GUI.Label (Rect ((3*(Screen.width/totalplayers))-(Screen.width/(2 * totalplayers))-30 + (d * 20),Screen.height - 100,100,100), p3stock);
				}
				else if(SelectCharacter.player1Completed ==1 || SelectCharacter.player2Completed)
				{
					GUI.Label (Rect ((2*(Screen.width/totalplayers))-(Screen.width/(2 * totalplayers))-30 + (d * 20),Screen.height - 100,100,100), p3stock);
				}
				else
				{
					GUI.Label (Rect (((Screen.width/totalplayers))-(Screen.width/(2 * totalplayers))-30 + (d * 20),Screen.height - 100,100,100), p3stock);
				}
			}
		}
		else
		{
			if(SelectCharacter.player1Completed == 1 && SelectCharacter.player2Completed)
	 		{
				GUI.Label (Rect ((3*(Screen.width/totalplayers))-(Screen.width/(2 * totalplayers))-40,Screen.height - 100,100,100), p3stock);
				GUI.Label (Rect ((3*(Screen.width/totalplayers))-(Screen.width/(2 * totalplayers))+60,Screen.height - 100,100,100), "x"+player3stock.ToString());
			}
			else if(SelectCharacter.player1Completed ==1 || SelectCharacter.player2Completed)
			{
				GUI.Label (Rect ((2*(Screen.width/totalplayers))-(Screen.width/(2 * totalplayers))-40,Screen.height - 100,100,100), p3stock);
				GUI.Label (Rect ((2*(Screen.width/totalplayers))-(Screen.width/(2 * totalplayers))+60,Screen.height - 100,100,100), "x"+player3stock.ToString());
			}
			else
			{
				GUI.Label (Rect (((Screen.width/totalplayers))-(Screen.width/(2 * totalplayers))-40,Screen.height - 100,100,100), p3stock);
				GUI.Label (Rect (((Screen.width/totalplayers))-(Screen.width/(2 * totalplayers))+60,Screen.height - 100,100,100), "x"+player3stock.ToString());
			}
		}
		
		if(SelectCharacter.player1Completed == 1 && SelectCharacter.player2Completed)
	 	{
	    	GUI.Box (Rect ((3*(Screen.width/totalplayers))-(Screen.width/(2 * totalplayers))-50,Screen.height - 100,200,100), "P3 Stats");
			GUI.Label (Rect ((3*(Screen.width/totalplayers))-(Screen.width/(2 * totalplayers))-30,Screen.height - 60,120,100), player3percent.ToString()+"%");
			GUI.Label (Rect ((3*(Screen.width/totalplayers))-(Screen.width/(2 * totalplayers))-90,Screen.height - 100,120,100), p3icon);
		}
		else if(SelectCharacter.player1Completed ==1 || SelectCharacter.player2Completed)
		{
			GUI.Box (Rect ((2*(Screen.width/totalplayers))-(Screen.width/(2 * totalplayers))-50,Screen.height - 100,200,100), "P3 Stats");
			GUI.Label (Rect ((2*(Screen.width/totalplayers))-(Screen.width/(2 * totalplayers))-30,Screen.height - 60,120,100), player3percent.ToString()+"%");
			GUI.Label (Rect ((2*(Screen.width/totalplayers))-(Screen.width/(2 * totalplayers))-90,Screen.height - 100,120,100), p3icon);
		}
		else
		{
			GUI.Box (Rect (((Screen.width/totalplayers))-(Screen.width/(2 * totalplayers))-50,Screen.height - 100,200,100), "P3 Stats");
			GUI.Label (Rect (((Screen.width/totalplayers))-(Screen.width/(2 * totalplayers))-30,Screen.height - 60,120,100), player3percent.ToString()+"%");
			GUI.Label (Rect (((Screen.width/totalplayers))-(Screen.width/(2 * totalplayers))-90,Screen.height - 100,120,100), p3icon);
		}
	}
	if (SelectCharacter.player4Completed == 1) {
	
		if(player4stock < 6)
		{
			for(var z : int = 0; z < player4stock; z++)
	 		{
	 			if(SelectCharacter.player1Completed == 1 && SelectCharacter.player2Completed == 1 && SelectCharacter.player3Completed == 1)
	 			{
					GUI.Label (Rect ((4*(Screen.width/totalplayers))-(Screen.width/(2 * totalplayers))-30 + (z * 20),Screen.height - 100,100,100), p4stock);
				}
				else if((SelectCharacter.player1Completed == 1 && SelectCharacter.player2Completed == 1) || (SelectCharacter.player1Completed == 1 && SelectCharacter.player3Completed == 1) || (SelectCharacter.player2Completed == 1 && SelectCharacter.player3Completed == 1))
				{
					GUI.Label (Rect ((3*(Screen.width/totalplayers))-(Screen.width/(2 * totalplayers))-30 + (z * 20),Screen.height - 100,100,100), p4stock);
				}
				else
				{
					GUI.Label (Rect ((2*(Screen.width/totalplayers))-(Screen.width/(2 * totalplayers))-30 + (z * 20),Screen.height - 100,100,100), p4stock);
				}
			}
		}
		else
		{
			if(SelectCharacter.player1Completed == 1 && SelectCharacter.player2Completed == 1 && SelectCharacter.player3Completed == 1)
	 		{
				GUI.Label (Rect ((4*(Screen.width/totalplayers))-(Screen.width/(2 * totalplayers))-40,Screen.height - 100,100,100), p4stock);
				GUI.Label (Rect ((4*(Screen.width/totalplayers))-(Screen.width/(2 * totalplayers))+60,Screen.height - 100,100,100), "x"+player4stock.ToString());
			}
			else if((SelectCharacter.player1Completed == 1 && SelectCharacter.player2Completed == 1) || (SelectCharacter.player1Completed == 1 && SelectCharacter.player3Completed == 1) || (SelectCharacter.player2Completed == 1 && SelectCharacter.player3Completed == 1))
			{
				GUI.Label (Rect ((3*(Screen.width/totalplayers))-(Screen.width/(2 * totalplayers))-40,Screen.height - 100,100,100), p4stock);
				GUI.Label (Rect ((3*(Screen.width/totalplayers))-(Screen.width/(2 * totalplayers))+60,Screen.height - 100,100,100), "x"+player4stock.ToString());
			}
			else
			{
				GUI.Label (Rect ((2*(Screen.width/totalplayers))-(Screen.width/(2 * totalplayers))-40,Screen.height - 100,100,100), p4stock);
				GUI.Label (Rect ((2*(Screen.width/totalplayers))-(Screen.width/(2 * totalplayers))+60,Screen.height - 100,100,100), "x"+player4stock.ToString());
			}
			
		}
		if(SelectCharacter.player1Completed == 1 && SelectCharacter.player2Completed == 1 && SelectCharacter.player3Completed == 1)
	 	{
	    	GUI.Box (Rect ((4*(Screen.width/totalplayers))-(Screen.width/(2 * totalplayers))-50,Screen.height - 100,200,100), "P4 Stats");
			GUI.Label (Rect ((4*(Screen.width/totalplayers))-(Screen.width/(2 * totalplayers))-30,Screen.height - 60,120,100), player4percent.ToString()+"%");
			GUI.Label (Rect ((4*(Screen.width/totalplayers))-(Screen.width/(2 * totalplayers))-90,Screen.height - 100,120,100), p4icon);
		}
		else if((SelectCharacter.player1Completed == 1 && SelectCharacter.player2Completed == 1) || (SelectCharacter.player1Completed == 1 && SelectCharacter.player3Completed == 1) || (SelectCharacter.player2Completed == 1 && SelectCharacter.player3Completed == 1))
		{
			GUI.Box (Rect ((3*(Screen.width/totalplayers))-(Screen.width/(2 * totalplayers))-50,Screen.height - 100,200,100), "P4 Stats");
			GUI.Label (Rect ((3*(Screen.width/totalplayers))-(Screen.width/(2 * totalplayers))-30,Screen.height - 60,120,100), player4percent.ToString()+"%");
			GUI.Label (Rect ((3*(Screen.width/totalplayers))-(Screen.width/(2 * totalplayers))-90,Screen.height - 100,120,100), p4icon);
		}
		else
		{
			GUI.Box (Rect ((2*(Screen.width/totalplayers))-(Screen.width/(2 * totalplayers))-50,Screen.height - 100,200,100), "P4 Stats");
			GUI.Label (Rect ((2*(Screen.width/totalplayers))-(Screen.width/(2 * totalplayers))-30,Screen.height - 60,120,100), player4percent.ToString()+"%");
			GUI.Label (Rect ((2*(Screen.width/totalplayers))-(Screen.width/(2 * totalplayers))-90,Screen.height - 100,120,100), p4icon);
		}
	}
	
}
