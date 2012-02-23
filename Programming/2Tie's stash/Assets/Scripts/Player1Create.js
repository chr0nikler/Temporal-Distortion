var NewModel : GameObject;
static var clone:GameObject;

function Start() {
	if (CharDataHolder.p1Controller != 0)
	{
	clone = Instantiate(NewModel, transform.position, transform.rotation);
	clone.AddComponent(CharacterController);
	if (CharDataHolder.p1Controller == 1)
		clone.AddComponent("P1script");
	//if (CharDataHolder.p1Controller == 2)
		//clone.AddComponent("P1AIscript");
	}
}