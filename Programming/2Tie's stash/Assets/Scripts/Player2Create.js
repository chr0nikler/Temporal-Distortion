var NewModel : GameObject;
static var clone:GameObject;

function Start() {
	if (CharDataHolder.p2Controller != 0)
	{
	clone = Instantiate(NewModel, transform.position, transform.rotation);
	clone.AddComponent(CharacterController);
	if (CharDataHolder.p2Controller == 1)
		clone.AddComponent("P2script");
	//if (CharDataHolder.p2Controller == 2)
		//clone.AddComponent("P2AIscript");
	}
}