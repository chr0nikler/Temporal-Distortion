static var achieve = new Array();
static var achieveComplete : int = 0;
var achieveProgress : int = 0;
static var achievePercent : float = 0;


function Update () {

achieve.Add(0); //NEVER USE THIS ONE!!!
achieve.Add(0); //Achievements.achieve[1] "Basic Training" - Play Training Mode once - 5W
achieve.Add(0); //Achievements.achieve[2] "Boot Camp" - Play Training Mode 5 times - 15W
achieve.Add(0); //Achievements.achieve[3] "Basic Brawler" - KO an opponent with a normal attack - 10W
achieve.Add(0); //Achievements.achieve[4] "Specialized Fighter" - KO an opponent with a special attack - 10W
achieve.Add(0); //Achievements.achieve[5] "Handsy" - KO an opponent with a grab - 10W 
achieve.Add(0); //Achievements.achieve[6] "Splintered Shields" - Shatter an Opponent's shield - 10W
achieve.Add(0); //Achievements.achieve[7] "KO King: Tahu" - KO an opponent 10 times as Tahu - 25W 
achieve.Add(0); //Achievements.achieve[8] "KO King: Kopaka" - KO an opponent 10 times as Kopaka - 25W
achieve.Add(0); //Achievements.achieve[9] "KO Master: Tahu" - KO an opponent 100 times as Tahu - 50W
achieve.Add(0); //Achievements.achieve[10] "KO Master: Kopaka" - KO an opponent 100 times as Kopaka - 50W 
achieve.Add(0); //Achievements.achieve[11] "Fire and Ice" - Play with Tahu and Kopaka on the same team - 5W 
achieve.Add(0); //Achievements.achieve[12] "Bragging Rights" - Taunt within 5 seconds of KOing an opponent - 5W
achieve.Add(0); //Achievements.achieve[13] "Heart Attack" - KO an opponent in Sudden Death - 15W
achieve.Add(0); //Achievements.achieve[14] "Reconciliation" - Tie a match 5 times - 15W 
achieve.Add(0); //Achievements.achieve[15] "Restraining Order" - KO an opponent within 10 seconds of being grabbed by them - 25W
achieve.Add(0); //Achievements.achieve[16] "Negate and Destroy" - KO an opponent within 5 seconds of blocking one of their attacks - 25W
achieve.Add(0); //Achievements.achieve[17] "Gives you Winnngggs" - Keep an Opponent mid-air with 5 or more consecutive attacks - 25W
achieve.Add(0); //Achievements.achieve[18] "Can't burst this Bubble" - Successfully block any attack with the Shield 50 times - 20W
achieve.Add(0); //Achievements.achieve[19] "IT'S SUPER EFFECTIVE!!!" - KO someone that had 0% damage before you hit them - 50W
achieve.Add(0); //Achievements.achieve[20] "Appreciative Player" - Take a look at the credits - 5W


achieveComplete = achieveComplete + achieve[achieveProgress];
achievePercent = (achieveComplete/20.0f);

if (DemoMenu.menu == 5)
	{
	if (achieveProgress < 21)
		{
		achieveProgress = achieveProgress + 1;
		}
	}

if (DemoMenu.menu != 5 && DemoMenu.menu != 6)
	{
	achieveProgress = 0;
	achieveComplete = 0;
	}
	
}
























