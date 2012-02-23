 var p1stock:Texture2D;
static var p2stock:Texture2D;
static var p3stock:Texture2D;
static var p4stock:Texture2D;
static var p1icon:Texture2D;
static var p2icon:Texture2D;
static var p3icon:Texture2D;
static var p4icon:Texture2D;
static var totalplayers:int=2;
static var player1stock:int=1;
static var player2stock:int=1;
static var player3stock:int=1;
static var player4stock:int=1;
static var player1percent:int=0;
static var player2percent:int=0;
static var player3percent:int=0;
static var player4percent:int=0;
static var player1kos:int[]=new int[3];
static var player2kos:int[]=new int[3];
static var player3kos:int[]=new int[3];
static var player4kos:int[]=new int[3];
var charSkin : GUISkin;

function OnGUI () {
	GUI.skin = charSkin;
 if (totalplayers >0) {
    GUI.Box (Rect (((Screen.width/totalplayers))-(Screen.width/(2 * totalplayers))-50,Screen.height - 100,200,100), "P1 Stats");
    GUI.Label (Rect (((Screen.width/totalplayers))-(Screen.width/(2 * totalplayers)),Screen.height - 100,100,100), p1stock);
	GUI.Label (Rect (((Screen.width/totalplayers))-(Screen.width/(2 * totalplayers))+50,Screen.height - 60,100,100), "x"+player1stock.ToString());
	GUI.Label (Rect (((Screen.width/totalplayers))-(Screen.width/(2 * totalplayers))-30,Screen.height - 60,120,100), player1percent.ToString()+"%");
	GUI.Label (Rect (((Screen.width/totalplayers))-(Screen.width/(2 * totalplayers))-75,Screen.height - 85,100,100), p1icon);
	//GUI.Label (Rect (((Screen.width/totalplayers))-(Screen.width/(2 * totalplayers))-30,Screen.height - 20,100,100), "TestChar");
}
if (totalplayers > 1) {
    GUI.Box (Rect ((2*(Screen.width/totalplayers))-(Screen.width/(2 * totalplayers))-50,Screen.height - 100,200,100), "P2 Stats");
	GUI.Label (Rect ((2*(Screen.width/totalplayers))-(Screen.width/(2 * totalplayers)),Screen.height - 80,100,100), p2stock);
	GUI.Label (Rect ((2*(Screen.width/totalplayers))-(Screen.width/(2 * totalplayers))+50,Screen.height - 60,100,100), "x"+player2stock.ToString());
	GUI.Label (Rect ((2*(Screen.width/totalplayers))-(Screen.width/(2 * totalplayers))-10,Screen.height - 60,100,100), player2percent.ToString()+"%");
	GUI.Label (Rect ((2*(Screen.width/totalplayers))-(Screen.width/(2 * totalplayers))-75,Screen.height - 85,100,100), p2icon);
	//GUI.Label (Rect ((2*(Screen.width/totalplayers))-(Screen.width/(2 * totalplayers))-30,Screen.height - 20,100,100), "TestChar");
}
if (totalplayers > 2) {
    GUI.Box (Rect ((3*(Screen.width/totalplayers))-(Screen.width/(2 * totalplayers))-50,Screen.height - 100,100,100), "P3 Stats");
	GUI.Label (Rect ((3*(Screen.width/totalplayers))-(Screen.width/(2 * totalplayers)),Screen.height - 80,100,100), p3stock);
	GUI.Label (Rect ((3*(Screen.width/totalplayers))-(Screen.width/(2 * totalplayers))+50,Screen.height - 60,100,100), "x"+player3stock.ToString());
	GUI.Label (Rect ((3*(Screen.width/totalplayers))-(Screen.width/(2 * totalplayers))-10,Screen.height - 60,100,100), player3percent.ToString()+"%");
	GUI.Label (Rect ((3*(Screen.width/totalplayers))-(Screen.width/(2 * totalplayers))-75,Screen.height - 85,100,100), p3icon);
	GUI.Label (Rect ((3*(Screen.width/totalplayers))-(Screen.width/(2 * totalplayers))-30,Screen.height - 20,100,100), "TestChar");
}
if (totalplayers > 3) {
    GUI.Box (Rect ((4*(Screen.width/totalplayers))-(Screen.width/(2 * totalplayers))-50,Screen.height - 100,100,100), "P4 Stats");
	GUI.Label (Rect ((4*(Screen.width/totalplayers))-(Screen.width/(2 * totalplayers)),Screen.height - 80,100,100), p4stock);
	GUI.Label (Rect ((4*(Screen.width/totalplayers))-(Screen.width/(2 * totalplayers))+50,Screen.height - 60,100,100), "x"+player4stock.ToString());
	GUI.Label (Rect ((4*(Screen.width/totalplayers))-(Screen.width/(2 * totalplayers))-10,Screen.height - 60,100,100), player4percent.ToString()+"%");
	GUI.Label (Rect ((4*(Screen.width/totalplayers))-(Screen.width/(2 * totalplayers))-75,Screen.height - 85,100,100), p4icon);
	GUI.Label (Rect ((4*(Screen.width/totalplayers))-(Screen.width/(2 * totalplayers))-30,Screen.height - 20,100,100), "TestChar");
}

}
