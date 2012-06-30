static var NewModel : GameObject;
static var characterNumber : int = SelectCharacter.player1Character;
static var clone : GameObject;
static var model : GameObject;
static var character : String;



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
	clone.tag = "Player";
	costumeChange();
	clone.transform.localScale += Vector3(10,10,10);
	properCollider();
	clone.animation.playAutomatically = false;
	clone.AddComponent(P1script);
	
	
	
	
}

function properCollider()
{
	if(characterNumber == 1)
	{

		clone.AddComponent(CharacterController);
		clone.GetComponent(CharacterController).radius = 0.07;
		clone.GetComponent(CharacterController).height = 0.2205;
		clone.GetComponent(CharacterController).center.y = 0.1;
		
	}
	else if (characterNumber == 2)
	{
		clone.AddComponent(CharacterController);
		clone.GetComponent(CharacterController).radius = 0.07;
		clone.GetComponent(CharacterController).height = 0.2205;
		clone.GetComponent(CharacterController).center.y = 0.1;
	}
}

public static function costumeChange()
{
	if(characterNumber == 1)
	{
		if(SelectCharacter.player1Costume == 2)
		{
			clone.Find("Plane_024").GetComponent("SkinnedMeshRenderer").material.mainTexture = Characters.TTS;
			clone.Find("Mesh_006").GetComponent("SkinnedMeshRenderer").material.mainTexture = Characters.TTS;
		}
		else if(SelectCharacter.player1Costume == 3)
		{
			clone.Find("Plane_024").GetComponent("SkinnedMeshRenderer").material.mainTexture = Characters.TTI;
			clone.Find("Mesh_006").GetComponent("SkinnedMeshRenderer").material.mainTexture = Characters.TTI;
			
		}
		else if(SelectCharacter.player1Costume == 4)
		{
			clone.Find("Plane_024").GetComponent("SkinnedMeshRenderer").material.mainTexture = Characters.TTR;
			clone.Find("Mesh_006").GetComponent("SkinnedMeshRenderer").material.mainTexture = Characters.TTR;
		}
		else if(SelectCharacter.player1Costume == 5)
		{
			clone.Find("Plane_024").GetComponent("SkinnedMeshRenderer").material.mainTexture = Characters.TTG;
			clone.Find("Mesh_006").GetComponent("SkinnedMeshRenderer").material.mainTexture = Characters.TTG;
		}
	}
	else if(characterNumber == 2)
	{
		if(SelectCharacter.player1Costume == 2)
		{
			clone.Find("Plane_000").GetComponent("SkinnedMeshRenderer").material.mainTexture = Characters.KTS;
			clone.Find("Mesh_006").GetComponent("SkinnedMeshRenderer").material.mainTexture = Characters.KTS;
		}
		else if(SelectCharacter.player1Costume == 3)
		{
			clone.Find("Plane_000").GetComponent("SkinnedMeshRenderer").material.mainTexture = Characters.KTI;
			clone.Find("Mesh_006").GetComponent("SkinnedMeshRenderer").material.mainTexture = Characters.KTI;
			
		}
		else if(SelectCharacter.player1Costume == 4)
		{
			clone.Find("Plane_000").GetComponent("SkinnedMeshRenderer").material.mainTexture = Characters.KTR;
			clone.Find("Mesh_006").GetComponent("SkinnedMeshRenderer").material.mainTexture = Characters.KTR;
		}
		else if(SelectCharacter.player1Costume == 5)
		{
			clone.Find("Plane_000").GetComponent("SkinnedMeshRenderer").material.mainTexture = Characters.KTG;
			clone.Find("Mesh_006").GetComponent("SkinnedMeshRenderer").material.mainTexture = Characters.KTG;
		}
	}
}

