var charSelectCurrent:int = 0;
var char1Controller:int = 0; //0 is none, 1 is Player, and 2 is CPU
var char2Controller:int = 0;
var playericon1:Texture2D;
var playericon1selected:Texture2D;
var playericon2:Texture2D;
var playericon2selected:Texture2D;
var playericon1holder:Texture2D;
var playericon2holder:Texture2D;
var keypressedlag:int = 0;
var stocknum:int=3;
var char1ControllerStr:String="N/A";
var char2ControllerStr:String="N/A";

//Nobody ever pays *me* in gum...

function OnGUI () {
	if (charSelectCurrent == 0)
	{
		playericon1holder = playericon1selected;
		playericon2holder = playericon2;
	} else {
		playericon1holder = playericon1;
		playericon2holder = playericon2selected;
	}
	GUI.Label(Rect((Screen.width/2) - 25, 5, 50, 30), "     " + stocknum.ToString());
	if(GUI.Button(Rect((Screen.width/2)-45,5,20,20), "-"))
	{
		if (stocknum != 0)
		stocknum--;
	}
	if(GUI.Button(Rect((Screen.width/2)+25,5,20,20), "+"))
	{
		stocknum++;
	}
	GUI.Label(Rect((Screen.width/2) - 200, 100, 150,150), playericon1holder);
	//GUI.Label(Rect((Screen.width/2) - 300, 125, 100,100), char1Controller.ToString());
	GUI.Label(Rect((Screen.width/2) + 50, 100, 150,150), playericon2holder);
	//GUI.Label(Rect((Screen.width/2) + 300, 125, 100, 100), char2Controller.ToString());
	GUI.Label(Rect(10,150,50,50),char1ControllerStr);
	GUI.Label(Rect(Screen.width-30,150,50,50),char2ControllerStr);
	if(GUI.Button(Rect(Screen.width-50,Screen.height-50, 50, 50), "Go!~"))
	{
		Application.LoadLevel("demo1stagetest");
	}
}

function Update() {
	if (Input.GetAxis("P1Horizontal") > 0)
	{
		charSelectCurrent = 1;
	} else {
	if (Input.GetAxis("P1Horizontal") < 0)
	{
		charSelectCurrent = 0;
	} else {
	if (Input.GetAxis("P1Jump") > 0)
	{
	if (keypressedlag == 1)
	{
		if (charSelectCurrent == 0)
			char1Controller = (char1Controller +1)%3;
		if (charSelectCurrent == 1)
			char2Controller = (char2Controller+1)%3;
		keypressedlag = 0;
	}
	} else
		keypressedlag = 1;
	}
	}
	
	if (char1Controller == 0)
	{
		char1ControllerStr = "N/A";
	}
	if (char1Controller == 1)
	{
		char1ControllerStr = "HMN";
	}
	if (char1Controller == 2)
	{
		char1ControllerStr = "CPU";
	}
	if (char2Controller == 0)
	{
		char2ControllerStr = "N/A";
	}
	if (char2Controller == 1)
	{
		char2ControllerStr = "HMN";
	}
	if (char2Controller == 2)
	{
		char2ControllerStr = "CPU";
	}
	
	
	CharDataHolder.p1Controller=char1Controller;
	CharDataHolder.p2Controller=char2Controller;
	CharDataHolder.stocknum=stocknum;
}