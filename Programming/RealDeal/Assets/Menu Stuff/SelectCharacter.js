var backImage : Texture2D;
var section : int = 0;
var teamOrFFAImage : Texture2D = ffaImage;
var ffaImage : Texture2D;
var teamImage : Texture2D;
var teamOrFFA : int = 0;
var arrowLeft : Texture2D;
var arrowRight : Texture2D;
var stockAmount : int = 1;
var timeMinutes : int = 1;
var timeSecondsTens : int = 0;
var timeSecondsOnes : int = 0;
var timeTotal : int = 60;
var timedStockAmount : int = 0;
var widgetAmount : int = 10000;
var handicapString = "No";
var handicap = 0;
var damageRatio : float = 1.0;
var uDDBallString = "Yes";
var uDDBall = 1;

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
			
			
		GUI.Box (Rect (Screen.width*.05,Screen.height*.1,Screen.width*.3,Screen.height*.4),"Tahu");
		GUI.Box (Rect (Screen.width*.35,Screen.height*.1,Screen.width*.3,Screen.height*.4),"Kopaka");
		GUI.Box (Rect (Screen.width*.65,Screen.height*.1,Screen.width*.3,Screen.height*.4),"Random");
			
		GUI.Box (Rect (Screen.width*.05,Screen.height*.55,Screen.width*.1875,Screen.height*.4),"Player 1");
		GUI.Box (Rect (Screen.width*.2875,Screen.height*.55,Screen.width*.1875,Screen.height*.4),"Player 2");
		GUI.Box (Rect (Screen.width*.525,Screen.height*.55,Screen.width*.1875,Screen.height*.4),"Player 3");
		GUI.Box (Rect (Screen.width*.7625,Screen.height*.55,Screen.width*.1875,Screen.height*.4),"Player 4");
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
		
		
		GUI.Box (Rect(Screen.width*.15,Screen.height*.27,Screen.width*.7,Screen.height*.12),"Time: " + timeMinutes + ":" +timeSecondsTens + timeSecondsOnes);
			
		if (GUI.Button (Rect(Screen.width*.1,Screen.height*.27,Screen.width*.05,Screen.height*.12), arrowLeft))
			{
				timeSecondsOnes = timeSecondsOnes - 1;
			}
		if (GUI.Button (Rect(Screen.width*.85,Screen.height*.27,Screen.width*.05,Screen.height*.12), arrowRight))
			{
				timeSecondsOnes = timeSecondsOnes + 1;
			}
			
		
		GUI.Box (Rect(Screen.width*.15,Screen.height*.44,Screen.width*.7,Screen.height*.12),"Widgets: " + widgetAmount);
		
		if (GUI.Button (Rect(Screen.width*.1,Screen.height*.44,Screen.width*.05,Screen.height*.12), arrowLeft))
			{
				widgetAmount = widgetAmount - 1;
			}
		if (GUI.Button (Rect(Screen.width*.85,Screen.height*.44,Screen.width*.05,Screen.height*.12), arrowRight))
			{
				widgetAmount = widgetAmount + 1;
			}
			
		
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
			
		
		GUI.Button (Rect(Screen.width*.55,Screen.height*.78,Screen.width*.35,Screen.height*.12), "More Rules");
			
			
		
		}
		
		
			
	}
}


function Update() {

if (stockAmount > 99)
	{
	stockAmount = 0;
	}
if (stockAmount < 0)
	{
	stockAmount = 99;
	}
	
timeTotal = ((timeMinutes*60) + (timeSecondsTens*10) + (timeSecondsOnes));

if (timeSecondsOnes > 9)
	{
	timeSecondsOnes = 0;
	timeSecondsTens = timeSecondsTens + 1;
	}
if (timeSecondsTens > 5)
	{
	timeSecondsTens = 0;
	timeMinutes = timeMinutes + 1;
	}
if (timeSecondsOnes < 0 && timeSecondsTens < 0)
	{
	timeSecondsOnes = 0;
	}
if (timeSecondsOnes < 0)
	{
	timeSecondsOnes = 9;
	timeSecondsTens = timeSecondsTens - 1;
	}
if (timeSecondsTens < 0)
	{
	timeSecondsTens = 5;
	timeMinutes = timeMinutes - 1;
	}
if (timeMinutes < 0)
	{
	timeMinutes = 0;
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
	
if (damageRatio < 0.1)
	{
	damageRatio = 5.0;
	}
if (damageRatio > 5.0)
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

}