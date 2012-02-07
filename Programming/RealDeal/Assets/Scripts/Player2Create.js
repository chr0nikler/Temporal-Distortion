var NewModel : GameObject;
static var clone:GameObject;

function Start() {

	clone = Instantiate(NewModel, transform.position, transform.rotation);
	clone.AddComponent(CharacterController);
	clone.AddComponent("P2script");
}