#pragma strict
var stage : GameObject;




function Awake()
{	
	//simply instantiating the sample stage
	stage = Instantiate(Resources.Load("showdown_platform_demo 1"), this.transform.position, this.transform.rotation); 
	stage.transform.localScale += Vector3(78,60,78);
	stage.transform.parent = this.transform;
	stage.AddComponent(MeshCollider);
	stage.GetComponent(MeshCollider).sharedMesh = Resources.Load("Cube");
	
}

function Start () {
	
	
}

function Update () {
	print(Vector3.Distance(stage.transform.position, GameObject.Find("Cube").transform.position));
}

function LateUpdate()
{
} //Added so it wouldn't crash the engine. Sorry.
	