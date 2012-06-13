var NewModel : GameObject;
static var characterNumber : int = SelectCharacter.player3Character;
static var clone : GameObject;

function Awake()
{
	if(characterNumber == 1)
	{
		NewModel = Characters.Tahu;
	}
	else if(characterNumber == 2)
	{
		NewModel = Characters.Kopaka;
	}
	else if(characterNumber == 3)
	{
		if(Random.value > 0.5)
		{
			characterNumber = 1;
		}
		else
		{
			characterNumber = 2;
		}
		if(characterNumber == 1)
		{
			NewModel = Characters.Tahu;
		}
		else if(characterNumber == 2)
		{
			NewModel = Characters.Kopaka;
		}
	}
}

function Start() {

	clone = Instantiate(NewModel, transform.position, transform.rotation);
	clone.AddComponent(CharacterController);
	clone.AddComponent("P3script");
	clone.transform.localScale += Vector3(10,10,10);
	
}


