#pragma strict

var clone : GameObject;

function Awake(){

	clone = Instantiate(Player2Create.NewModel2, transform.position, transform.rotation);
	clone.transform.localScale += Vector3(10,10,10);
	
	clone.AddComponent(CharacterController);
	clone.GetComponent(CharacterController).radius = 0.07;
	clone.GetComponent(CharacterController).height = 0.2205;
	clone.GetComponent(CharacterController).center.y = 0.1;
	clone.animation.playAutomatically = false;
	Player2Create.costumeChange();
}


function Start () {

}

function Update () {

}