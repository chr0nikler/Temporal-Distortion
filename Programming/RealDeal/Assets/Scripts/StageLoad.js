#pragma strict
var stage : GameObject;



function Awake()
{
	stage = Instantiate(Resources.Load("showdown_platform_demo 1"), this.transform.position, this.transform.rotation);
	stage.transform.localScale += Vector3(60,34,34);
	stage.transform.parent = this.transform;
	
}

function Start () {
	
}

function Update () {
	print(Vector3.Distance(stage.transform.position, GameObject.Find("Cube").transform.position));
}

function LateUpdate()
{
} //Added so it wouldn't crash the engine. Sorry.
	