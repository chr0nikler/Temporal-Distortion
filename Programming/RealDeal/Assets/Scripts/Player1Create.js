var NewModel : GameObject;
static var clone:GameObject;

function Start() {

	clone = Instantiate(NewModel, transform.position, transform.rotation);
	clone.AddComponent(CharacterController);
	clone.AddComponent("P1script");
	
}

/*function OnGUI(){
	GUI.skin = charSkin;
	GUI.Label(Rect(Screen.width*0.1, Screen.height*0.85, Screen.width*0.15, Screen.height*0.15),stockIcon);
	GUI.Box(Rect(Screen.width*0.1, Screen.height*0.85, Screen.width*0.15, Screen.height*0.15),P1script.percent + "%");
	GUI.Label(Rect(Screen.width*0.1, Screen.height*0.95, Screen.width*0.15, Screen.height*0.1), NewModel.name);
}*/
