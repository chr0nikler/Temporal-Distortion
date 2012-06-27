#pragma strict

var numberOfPlayers = 0; //Actual Number of Players
var numberNormalPlayers = 0; //Number of players there would be if all spaces left of last were filled

var player1Exist = 1;
var player2Exist = 1;
var player3Exist = 1;
var player4Exist = 1;

var placeP1 = 0;
var placeP2 = 0;
var placeP3 = 0;
var placeP4 = 0;

var totalKOP1 = 0; //The total amount of KOs ("kills") inflicted by the player.
var totalKOP2 = 0;
var totalKOP3 = 0;
var totalKOP4 = 0;

var totalTKOP1 = 0; //The total amount of TKOs ("deaths") for the player.
var totalTKOP2 = 0;
var totalTKOP3 = 0;
var totalTKOP4 = 0;

var koTkoRatioP1 : float = 0; //The KO/TKO ("kill/death") ratio for the player.
var koTkoRatioP2 : float = 0;
var koTkoRatioP3 : float = 0;
var koTkoRatioP4 : float = 0;

var totalSelfDestructsP1 = 0; //The amount of times a player self-destructed.
var totalSelfDestructsP2 = 0;
var totalSelfDestructsP3 = 0;
var totalSelfDestructsP4 = 0;

var highestDamageP1 = 0; //The highest damage ever had at one time by a player.
var highestDamageP2 = 0;
var highestDamageP3 = 0;
var highestDamageP4 = 0;

var totalDamageP1 = 0; //The total amount of damage taken in the match.
var totalDamageP2 = 0;
var totalDamageP3 = 0;
var totalDamageP4 = 0;

var timeSurvivedP1 : float = 0; //How long a player survived in the match.
var timeSurvivedP2 : float = 0;
var timeSurvivedP3 : float = 0;
var timeSurvivedP4 : float = 0;

var endWidgetCountP1 = 0; //How many widgets the player had at the end.
var endWidgetCountP2 = 0;
var endWidgetCountP3 = 0;
var endWidgetCountP4 = 0;

var maxWidgetCountP1 = 0; //The highest widget count the player had at one time.
var maxWidgetCountP2 = 0;
var maxWidgetCountP3 = 0;
var maxWidgetCountP4 = 0;

var endPointCountP1 = 0; //How many points the player had at the end.
var endPointCountP2 = 0;
var endPointCountP3 = 0;
var endPointCountP4 = 0;

var maxPointCountP1 = 0; //The highest number of points the player had at one time.
var maxPointCountP2 = 0;
var maxPointCountP3 = 0;
var maxPointCountP4 = 0;

var maxTimeOneStockP1 = 0; //The maximum amount of time survived in a single stock/life.
var maxTimeOneStockP2 = 0;
var maxTimeOneStockP3 = 0;
var maxTimeOneStockP4 = 0;

var player1Scroll : Vector2; //The vector for the stats scroll bar
var player2Scroll : Vector2; 
var player3Scroll : Vector2;
var player4Scroll : Vector2;

function calcCharacteristics (g : GameObject) : float
{
	if(g == Characters.Tahu)
	{
		timeSurvivedP1 = tahuScript.dead;
	}
	if(g == Characters.Tahu)
	{
		//f = kopakaScript.dead;
	}
}

function Awake() {

calcCharacteristics (Player1Create.NewModel);
Debug.Log(tahuScript.dead);

Debug.Log("" + timeSurvivedP1);
var times = new Array(timeSurvivedP1, timeSurvivedP2, timeSurvivedP3, timeSurvivedP4);

times.Sort();

Debug.Log(times);//All I did here was simply put the times in an array and use the prebuilt "sort" function to sort them from least to greatest


/*for(int i = 0; i < 4; i++)
{
	for(int k = i+1; i < 4; i++)
	{
		replace = times[i];
		times[i] = times[k];
		times[k] = replace;
	}
}*/


	if (SelectCharacter.teamOrFFA == 0)
	{
		if (SelectCharacter.stockAmount > 0 && SelectCharacter.timeTotal == 0 && SelectCharacter.widgetAmount == 0)
		{
			var p1done : boolean = false;
			var p2done : boolean = false;
			var p3done : boolean = false;
			var p4done : boolean = false;
			for(var i : int = 1; i < 5; i++) //Here, I assigned places
			{
				if(times[i-1] == timeSurvivedP1 && !p1done) //Checks if the array value == p1's time survived and if p1 hasn't already been done yet.
				{						
					placeP1 = 5-i; //Subtract i from 5 to get the actual place value
					p1done = true;	//Don't let it repeatedly replace the place		
				}
				if(times[i-1] == timeSurvivedP2 && !p2done)
				{
					placeP2 = 5-i;
					p2done = true;
				} 
				if(times[i-1] == timeSurvivedP3 && !p3done)
				{
					placeP3 = 5-i;
					p3done = true;
				}
				if(times[i-1] == timeSurvivedP4 && !p4done)
				{
					placeP4 = 5-i;
					p4done = true;
				}
			}
			print("places " + placeP1 + " " + placeP2 + " " + placeP3 + " " + placeP4);
			
			if(placeP3 != 1 && placeP4 != 1 && placeP2 != 1 && placeP1 != 1)
			{	
				if(placeP1 == 2)
				{
					placeP1--;
				}
				if(placeP2 == 2)
				{
					placeP2--;
				}
				if(placeP3 == 2)
				{
					placeP3--;
				}
				if(placeP4 == 2)
				{
					placeP4--;
				}
			}
			if(placeP3 != 2 && placeP4 != 2 && placeP2 != 2 && placeP1 != 2)
			{	
				if(placeP1 == 3)
				{
					placeP1--;
				}
				if(placeP2 == 3)
				{
					placeP2--;
				}
				if(placeP3 == 3)
				{
					placeP3--;
				}
				if(placeP4 == 3)
				{
					placeP4--;
				}
			}
			if(placeP3 != 3 && placeP4 != 3 && placeP2 != 3 && placeP1 != 3)//Here lots of subtraction is done so that the score
			{																//goes from being 2-2-4-4 to 1-1-2-2, to initiate sudden death.
				if(placeP1 == 4)
				{
					placeP1--;
				}
				if(placeP2 == 4)
				{
					placeP2--;
				}
				if(placeP3 == 4)
				{
					placeP3--;
				}
				if(placeP4 == 4)
				{
					placeP4--;
				}
			}
			
			if(placeP3 != 3 && placeP4 != 3 && placeP2 != 3 && placeP1 != 3)
			{	
				if(placeP1 == 4)
				{
					placeP1--;
				}
				if(placeP2 == 4)
				{
					placeP2--;
				}
				if(placeP3 == 4)
				{
					placeP3--;
				}
				if(placeP4 == 4)
				{
					placeP4--;
				}
			}
			if(placeP3 != 2 && placeP4 != 2 && placeP2 != 2 && placeP1 != 2)
			{	
				if(placeP1 == 3)
				{
					placeP1--;
				}
				if(placeP2 == 3)
				{
					placeP2--;
				}
				if(placeP3 == 3)
				{
					placeP3--;
				}
				if(placeP4 == 3)
				{
					placeP4--;
				}
			}
			if(placeP3 != 1 && placeP4 != 1 && placeP2 != 1 && placeP1 != 1)
			{	
				if(placeP1 == 2)
				{
					placeP1--;
				}
				if(placeP2 == 2)
				{
					placeP2--;
				}
				if(placeP3 == 2)
				{
					placeP3--;
				}
				if(placeP4 == 2)
				{
					placeP4--;
				}
			}
			print("places " + placeP1 + " " + placeP2 + " " + placeP3 + " " + placeP4);
				
					/*if (placeP2 == 1)
						{ print("Sudden Death: P1 and P2!");}
					if (placeP3 == 1)
						{ print("Sudden Death: P1 and P3!");}
					if (placeP4 == 1)
						{ print("Sudden Death: P1 and P4!");}
					if ((placeP2 == 1) && (placeP3 == 1))
						{ print("Super Sudden Death: P1, P2, and P3!!");}
					if ((placeP2 == 1) && (placeP4 == 1))
						{ print("Super Sudden Death: P1, P2, and P4!!");}
					if ((placeP3 == 1) && (placeP4 == 1))
						{ print("Super Sudden Death: P1, P3, and P4!!");}*/
					if (placeP1== 1 && placeP2 == 1 && placeP3 != 1 && placeP4 !=1)
						{ print("Sudden Death: P1 and P2!");}
					else if (placeP1== 1 && placeP3 == 1 && placeP2 != 1 && placeP4 !=1)
						{ print("Sudden Death: P1 and P3!");}
					else if (placeP1== 1 && placeP4 == 1 && placeP3 != 1 && placeP2 !=1)
						{ print("Sudden Death: P1 and P4!");}
					else if (placeP1== 1 && placeP2 == 1 && placeP3 == 1 && placeP4 !=1)
						{ print("Super Sudden Death: P1, P2, and P3!!");}
					else if (placeP1== 1 && placeP2 == 1 && placeP4 == 1 && placeP3 !=1)
						{ print("Super Sudden Death: P1, P2, and P4!!");}
					else if (placeP1== 1 && placeP3 == 1 && placeP4 == 1 && placeP2 != 1)
						{ print("Super Sudden Death: P1, P3, and P4!!");}
					else if (placeP1 != 1 && placeP3 == 1 && placeP4 == 1 && placeP2 == 1)
						{ print("Super Sudden Death: P2, P3, and P4!!");}
					else if (placeP1 != 1 && placeP3 == 1 && placeP2 == 1 && placeP4 != 1)
						{ print("Sudden Death: P2 and P3!");}
					else if (placeP1 != 1 && placeP3 != 1 && placeP2 == 1 && placeP4 == 1)
						{ print("Sudden Death: P2 and P4!");}
					else if (placeP1 != 1 && placeP3 == 1 && placeP2 != 1 && placeP4 == 1)
						{ print("Sudden Death: P3 and P4!");}
					else if((placeP1 == 1) && (placeP2 == 1) && (placeP3 == 1) && (placeP4 == 1))
						{ print("Impossible Sudden Death: All Players!!!"); }
			}
	}
}

	
	/*if ((totalTKOP1 < totalTKOP2) && (totalTKOP1 < totalTKOP3) && (totalTKOP1 < totalTKOP4))
		{ placeP1 = 1;}
	if ((totalTKOP2 < totalTKOP1) && (totalTKOP2 < totalTKOP3) && (totalTKOP2 < totalTKOP4))
		{ placeP2 = 1;}
	if ((totalTKOP3 < totalTKOP1) && (totalTKOP3 < totalTKOP2) && (totalTKOP3 < totalTKOP4))
		{ placeP3 = 1;}
	if ((totalTKOP4 < totalTKOP1) && (totalTKOP4 < totalTKOP2) && (totalTKOP4 < totalTKOP3))
		{ placeP4 = 1;}
		
	if (placeP1 == 1)
		{ 
		if ((totalTKOP2 < totalTKOP3) && (totalTKOP2 < totalTKOP4))
			{ placeP2 = 2;}
		if ((totalTKOP3 < totalTKOP2) && (totalTKOP3 < totalTKOP4))
			{ placeP3 = 2;}
		if ((totalTKOP4 < totalTKOP2) && (totalTKOP4 < totalTKOP3))
			{ placeP4 = 2;}
		}
	if (placeP2 == 1)
		{
		if ((totalTKOP1 < totalTKOP3) && (totalTKOP1 < totalTKOP4)) */
		
	//if ((totalKOP1 < totalKOP2) || (totalKOP1 < totalKOP3) || (totalKOP1 < totalKOP4))
		//{ placeP1 = 2;}
	//if (((totalKOP1 < totalKOP2) && (totalKOP1 < totalKOP3)) || ((totalKOP1 < totalKOP2) && (totalKOP1 < totalKOP4)) || ((totalKOP1 < totalKOP3) && (totalKOP1 < totalKOP4)))
		//{ placeP1 = 3;}
	//if 
		


//function Start () {

//}

function OnGUI () {

if (placeP1 == 1)
	{ GUI.Box (Rect(Screen.width*.05,Screen.height*.2,Screen.width*.1875,Screen.height*.75), "Player 1 Wins!");}
if (placeP2 == 1)
	{ GUI.Box (Rect(Screen.width*.2875,Screen.height*.2,Screen.width*.1875,Screen.height*.75), "Player 2 Wins!");}
if (placeP3 == 1)
	{ GUI.Box (Rect(Screen.width*.525,Screen.height*.2,Screen.width*.1875,Screen.height*.75), "Player 3 Wins!");}
if (placeP4 == 1)
	{GUI.Box (Rect(Screen.width*.7625,Screen.height*.2,Screen.width*.1875,Screen.height*.75), "Player 4 Wins!");}

if (placeP1 == 2)
	{ GUI.Box (Rect(Screen.width*.05,Screen.height*.25,Screen.width*.1875,Screen.height*.7), "Player 1: 2nd Place");}
if (placeP2 == 2)
	{ GUI.Box (Rect(Screen.width*.2875,Screen.height*.25,Screen.width*.1875,Screen.height*.7), "Player 2: 2nd Place");}
if (placeP3 == 2)
	{ GUI.Box (Rect(Screen.width*.525,Screen.height*.25,Screen.width*.1875,Screen.height*.7), "Player 3: 2nd Place");}
if (placeP4 == 2)
	{GUI.Box (Rect(Screen.width*.7625,Screen.height*.25,Screen.width*.1875,Screen.height*.7), "Player 4: 2nd Place");}

if (placeP1 == 3)
	{ GUI.Box (Rect(Screen.width*.05,Screen.height*.25,Screen.width*.1875,Screen.height*.7), "Player 1: 3rd Place");}
if (placeP2 == 3)
	{ GUI.Box (Rect(Screen.width*.2875,Screen.height*.25,Screen.width*.1875,Screen.height*.7), "Player 2: 3rd Place");}
if (placeP3 == 3)
	{ GUI.Box (Rect(Screen.width*.525,Screen.height*.25,Screen.width*.1875,Screen.height*.7), "Player 3: 3rd Place");}
if (placeP4 == 3)
	{GUI.Box (Rect(Screen.width*.7625,Screen.height*.25,Screen.width*.1875,Screen.height*.7), "Player 4: 3rd Place");}

if (placeP1 == 4)
	{ GUI.Box (Rect(Screen.width*.05,Screen.height*.25,Screen.width*.1875,Screen.height*.7), "Player 1: 4th Place");}
if (placeP2 == 4)
	{ GUI.Box (Rect(Screen.width*.2875,Screen.height*.25,Screen.width*.1875,Screen.height*.7), "Player 2: 4th Place");}
if (placeP3 == 4)
	{ GUI.Box (Rect(Screen.width*.525,Screen.height*.25,Screen.width*.1875,Screen.height*.7), "Player 3: 4th Place");}
if (placeP4 == 4)
	{GUI.Box (Rect(Screen.width*.7625,Screen.height*.25,Screen.width*.1875,Screen.height*.7), "Player 4: 4th Place");}

GUILayout.BeginArea(Rect(Screen.width*.05,Screen.height*.25,Screen.width*.9,Screen.height*.75));
GUILayout.BeginHorizontal();

if (player1Exist == 1) 
{
GUILayout.BeginVertical();
player1Scroll = GUILayout.BeginScrollView(player1Scroll);
	if (SelectCharacter.stockAmount > 0 && SelectCharacter.timeTotal == 0 && SelectCharacter.widgetAmount == 0)
		{GUILayout.Box("Stock Remaining: " + (SelectCharacter.stockAmount - totalTKOP1));
		 GUILayout.Box("Time Survived: " + timeSurvivedP1);}
	if (SelectCharacter.stockAmount > 0 && SelectCharacter.timeTotal > 0 && SelectCharacter.widgetAmount == 0)
		{GUILayout.Box("Stock Remaining: " + (SelectCharacter.stockAmount - totalTKOP1));
		 GUILayout.Box("Time Survived: " + timeSurvivedP1);}
	if (SelectCharacter.stockAmount > 0 && SelectCharacter.timeTotal == 0 && SelectCharacter.widgetAmount > 0)
		{GUILayout.Box("Widgets: " + endWidgetCountP1);
		 GUILayout.Box("Time Survived: " + timeSurvivedP1);}
	if (SelectCharacter.stockAmount == 0 && SelectCharacter.timeTotal > 0 && SelectCharacter.widgetAmount == 0)
		{GUILayout.Box("Points: " + endPointCountP1);}
	if (SelectCharacter.stockAmount == 0 && SelectCharacter.timeTotal > 0 && SelectCharacter.widgetAmount > 0)
		{GUILayout.Box("Widgets: " + endWidgetCountP1);}
	if (SelectCharacter.stockAmount == 0 && SelectCharacter.timeTotal == 0 && SelectCharacter.widgetAmount > 0)
		{GUILayout.Box("Widgets: " + endWidgetCountP1);}
	if (SelectCharacter.stockAmount > 0 && SelectCharacter.timeTotal > 0 && SelectCharacter.widgetAmount > 0)
		{GUILayout.Box("Widgets: " + endWidgetCountP1);
		 GUILayout.Box("Stock Remaining " + (SelectCharacter.stockAmount - totalTKOP1));
		 GUILayout.Box("Time Survived: " + timeSurvivedP1);}
GUILayout.Box("KOs: " + totalKOP1);
GUILayout.Box("TKOs: " + totalTKOP1);
GUILayout.Box("KO/TKO Ratio: " + koTkoRatioP1);
GUILayout.Box("Self-Destructs: " + totalSelfDestructsP1);
GUILayout.Box("Highest Damage: " + highestDamageP1);
GUILayout.Box("Total Damage: " + totalDamageP1);
	if (SelectCharacter.stockAmount == 0 && SelectCharacter.timeTotal > 0 && SelectCharacter.widgetAmount == 0)
		{GUILayout.Box("Max Points: " + maxPointCountP1);}
	if (SelectCharacter.widgetAmount > 0)
		{GUILayout.Box("Max Widgets: " + maxWidgetCountP1);}
GUILayout.Box("Longest Lifetime: " + maxTimeOneStockP1);
GUILayout.EndScrollView();
GUILayout.EndVertical();
}

GUILayout.BeginVertical();
GUILayout.Label("",GUILayout.Width(Screen.width*.05));
GUILayout.EndVertical();

if (player2Exist == 1)
{
GUILayout.BeginVertical();
player2Scroll = GUILayout.BeginScrollView(player2Scroll);
	if (SelectCharacter.stockAmount > 0 && SelectCharacter.timeTotal == 0 && SelectCharacter.widgetAmount == 0)
		{GUILayout.Box("Stock Remaining: " + (SelectCharacter.stockAmount - totalTKOP2));
		 GUILayout.Box("Time Survived: " + timeSurvivedP2);}
	if (SelectCharacter.stockAmount > 0 && SelectCharacter.timeTotal > 0 && SelectCharacter.widgetAmount == 0)
		{GUILayout.Box("Stock Remaining: " + (SelectCharacter.stockAmount - totalTKOP2));
		 GUILayout.Box("Time Survived: " + timeSurvivedP2);}
	if (SelectCharacter.stockAmount > 0 && SelectCharacter.timeTotal == 0 && SelectCharacter.widgetAmount > 0)
		{GUILayout.Box("Widgets: " + endWidgetCountP2);
		 GUILayout.Box("Time Survived: " + timeSurvivedP2);}
	if (SelectCharacter.stockAmount == 0 && SelectCharacter.timeTotal > 0 && SelectCharacter.widgetAmount == 0)
		{GUILayout.Box("Points: " + endPointCountP2);}
	if (SelectCharacter.stockAmount == 0 && SelectCharacter.timeTotal > 0 && SelectCharacter.widgetAmount > 0)
		{GUILayout.Box("Widgets: " + endWidgetCountP2);}
	if (SelectCharacter.stockAmount == 0 && SelectCharacter.timeTotal == 0 && SelectCharacter.widgetAmount > 0)
		{GUILayout.Box("Widgets: " + endWidgetCountP2);}
	if (SelectCharacter.stockAmount > 0 && SelectCharacter.timeTotal > 0 && SelectCharacter.widgetAmount > 0)
		{GUILayout.Box("Widgets: " + endWidgetCountP2);
		 GUILayout.Box("Stock Remaining " + (SelectCharacter.stockAmount - totalTKOP2));
		 GUILayout.Box("Time Survived: " + timeSurvivedP2);}
GUILayout.Box("KOs: " + totalKOP2);
GUILayout.Box("TKOs: " + totalTKOP2);
GUILayout.Box("KO/TKO Ratio: " + koTkoRatioP2);
GUILayout.Box("Self-Destructs: " + totalSelfDestructsP2);
GUILayout.Box("Highest Damage: " + highestDamageP2);
GUILayout.Box("Total Damage: " + totalDamageP2);
	if (SelectCharacter.stockAmount == 0 && SelectCharacter.timeTotal > 0 && SelectCharacter.widgetAmount == 0)
		{GUILayout.Box("Max Points: " + maxPointCountP2);}
	if (SelectCharacter.widgetAmount > 0)
		{GUILayout.Box("Max Widgets: " + maxWidgetCountP2);}
GUILayout.Box("Longest Lifetime: " + maxTimeOneStockP2);
GUILayout.EndScrollView();
GUILayout.EndVertical();
}

GUILayout.BeginVertical();
GUILayout.Label("",GUILayout.Width(Screen.width*.05));
GUILayout.EndVertical();

if (player3Exist == 1)
{
GUILayout.BeginVertical();
player3Scroll = GUILayout.BeginScrollView(player3Scroll);
	if (SelectCharacter.stockAmount > 0 && SelectCharacter.timeTotal == 0 && SelectCharacter.widgetAmount == 0)
		{GUILayout.Box("Stock Remaining: " + (SelectCharacter.stockAmount - totalTKOP3));
		 GUILayout.Box("Time Survived: " + timeSurvivedP3);}
	if (SelectCharacter.stockAmount > 0 && SelectCharacter.timeTotal > 0 && SelectCharacter.widgetAmount == 0)
		{GUILayout.Box("Stock Remaining: " + (SelectCharacter.stockAmount - totalTKOP3));
		 GUILayout.Box("Time Survived: " + timeSurvivedP3);}
	if (SelectCharacter.stockAmount > 0 && SelectCharacter.timeTotal == 0 && SelectCharacter.widgetAmount > 0)
		{GUILayout.Box("Widgets: " + endWidgetCountP3);
		 GUILayout.Box("Time Survived: " + timeSurvivedP3);}
	if (SelectCharacter.stockAmount == 0 && SelectCharacter.timeTotal > 0 && SelectCharacter.widgetAmount == 0)
		{GUILayout.Box("Points: " + endPointCountP3);}
	if (SelectCharacter.stockAmount == 0 && SelectCharacter.timeTotal > 0 && SelectCharacter.widgetAmount > 0)
		{GUILayout.Box("Widgets: " + endWidgetCountP3);}
	if (SelectCharacter.stockAmount == 0 && SelectCharacter.timeTotal == 0 && SelectCharacter.widgetAmount > 0)
		{GUILayout.Box("Widgets: " + endWidgetCountP3);}
	if (SelectCharacter.stockAmount > 0 && SelectCharacter.timeTotal > 0 && SelectCharacter.widgetAmount > 0)
		{GUILayout.Box("Widgets: " + endWidgetCountP3);
		 GUILayout.Box("Stock Remaining " + (SelectCharacter.stockAmount - totalTKOP3));
		 GUILayout.Box("Time Survived: " + timeSurvivedP3);}
GUILayout.Box("KOs: " + totalKOP3);
GUILayout.Box("TKOs: " + totalTKOP3);
GUILayout.Box("KO/TKO Ratio: " + koTkoRatioP3);
GUILayout.Box("Self-Destructs: " + totalSelfDestructsP3);
GUILayout.Box("Highest Damage: " + highestDamageP3);
GUILayout.Box("Total Damage: " + totalDamageP3);
	if (SelectCharacter.stockAmount == 0 && SelectCharacter.timeTotal > 0 && SelectCharacter.widgetAmount == 0)
		{GUILayout.Box("Max Points: " + maxPointCountP3);}
	if (SelectCharacter.widgetAmount > 0)
		{GUILayout.Box("Max Widgets: " + maxWidgetCountP3);}
GUILayout.Box("Longest Lifetime: " + maxTimeOneStockP3);
GUILayout.EndScrollView();
GUILayout.EndVertical();
}

GUILayout.BeginVertical();
GUILayout.Label("",GUILayout.Width(Screen.width*.05));
GUILayout.EndVertical();

if (player4Exist == 1)
{
GUILayout.BeginVertical();
player4Scroll = GUILayout.BeginScrollView(player4Scroll);
	if (SelectCharacter.stockAmount > 0 && SelectCharacter.timeTotal == 0 && SelectCharacter.widgetAmount == 0)
		{GUILayout.Box("Stock Remaining: " + (SelectCharacter.stockAmount - totalTKOP4));
		 GUILayout.Box("Time Survived: " + timeSurvivedP4);}
	if (SelectCharacter.stockAmount > 0 && SelectCharacter.timeTotal > 0 && SelectCharacter.widgetAmount == 0)
		{GUILayout.Box("Stock Remaining: " + (SelectCharacter.stockAmount - totalTKOP4));
		 GUILayout.Box("Time Survived: " + timeSurvivedP4);}
	if (SelectCharacter.stockAmount > 0 && SelectCharacter.timeTotal == 0 && SelectCharacter.widgetAmount > 0)
		{GUILayout.Box("Widgets: " + endWidgetCountP4);
		 GUILayout.Box("Time Survived: " + timeSurvivedP4);}
	if (SelectCharacter.stockAmount == 0 && SelectCharacter.timeTotal > 0 && SelectCharacter.widgetAmount == 0)
		{GUILayout.Box("Points: " + endPointCountP4);}
	if (SelectCharacter.stockAmount == 0 && SelectCharacter.timeTotal > 0 && SelectCharacter.widgetAmount > 0)
		{GUILayout.Box("Widgets: " + endWidgetCountP4);}
	if (SelectCharacter.stockAmount == 0 && SelectCharacter.timeTotal == 0 && SelectCharacter.widgetAmount > 0)
		{GUILayout.Box("Widgets: " + endWidgetCountP4);}
	if (SelectCharacter.stockAmount > 0 && SelectCharacter.timeTotal > 0 && SelectCharacter.widgetAmount > 0)
		{GUILayout.Box("Widgets: " + endWidgetCountP4);
		 GUILayout.Box("Stock Remaining " + (SelectCharacter.stockAmount - totalTKOP4));
		 GUILayout.Box("Time Survived: " + timeSurvivedP4);}
GUILayout.Box("KOs: " + totalKOP4);
GUILayout.Box("TKOs: " + totalTKOP4);
GUILayout.Box("KO/TKO Ratio: " + koTkoRatioP4);
GUILayout.Box("Self-Destructs: " + totalSelfDestructsP4);
GUILayout.Box("Highest Damage: " + highestDamageP4);
GUILayout.Box("Total Damage: " + totalDamageP4);
	if (SelectCharacter.stockAmount == 0 && SelectCharacter.timeTotal > 0 && SelectCharacter.widgetAmount == 0)
		{GUILayout.Box("Max Points: " + maxPointCountP4);}
	if (SelectCharacter.widgetAmount > 0)
		{GUILayout.Box("Max Widgets: " + maxWidgetCountP4);}
GUILayout.Box("Longest Lifetime: " + maxTimeOneStockP4);
GUILayout.EndScrollView();
GUILayout.EndVertical();
}

GUILayout.EndHorizontal();
GUILayout.EndArea();


}


function Update () {

	if(Input.GetKeyDown("space"))
	{
		Application.LoadLevel("DemoMenuV2");
	}

}