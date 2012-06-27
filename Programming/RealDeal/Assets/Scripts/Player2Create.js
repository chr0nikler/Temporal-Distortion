static var NewModel2 : GameObject;
static var characterNumber : int = SelectCharacter.player2Character;
static var clone2 : GameObject;
static var model : GameObject;


function Awake()
{
	if(characterNumber == 1)
	{
		NewModel2 = Characters.Tahu;
		
	}
	else if(characterNumber == 2)
	{
		NewModel2 = Characters.Kopaka;
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
			NewModel2 = Characters.Tahu;
		}
		else if(characterNumber == 2)
		{
			NewModel2 = Characters.Kopaka;
		}
	}

}

function Start() {

	
	clone2 = Instantiate(NewModel2, transform.position, transform.rotation);
	costumeChange();
	clone2.transform.localScale += Vector3(10,10,10);
	clone2.tag = "Player";
	
	clone2.AddComponent(CharacterController);
	clone2.GetComponent(CharacterController).radius = 0.07;
	clone2.GetComponent(CharacterController).height = 0.2205;
	clone2.GetComponent(CharacterController).center.y = 0.1;
	clone2.animation.playAutomatically = false;
	clone2.AddComponent("P2script");
	
	
	
}

public static function costumeChange()
{
	if(characterNumber == 1)
	{
		if(SelectCharacter.player2Costume == 2)
		{
			clone2.Find("Plane_024").GetComponent("SkinnedMeshRenderer").material.mainTexture = Characters.TTS;
			clone2.Find("Mesh_006").GetComponent("SkinnedMeshRenderer").material.mainTexture = Characters.TTS;
		}
		else if(SelectCharacter.player2Costume == 3)
		{
			clone2.Find("Plane_024").GetComponent("SkinnedMeshRenderer").material.mainTexture = Characters.TTI;
			clone2.Find("Mesh_006").GetComponent("SkinnedMeshRenderer").material.mainTexture = Characters.TTI;
			
		}
		else if(SelectCharacter.player2Costume == 4)
		{
			clone2.Find("Plane_024").GetComponent("SkinnedMeshRenderer").material.mainTexture = Characters.TTR;
			clone2.Find("Mesh_006").GetComponent("SkinnedMeshRenderer").material.mainTexture = Characters.TTR;
		}
		else if(SelectCharacter.player2Costume == 5)
		{
			clone2.Find("Plane_024").GetComponent("SkinnedMeshRenderer").material.mainTexture = Characters.TTG;
			clone2.Find("Mesh_006").GetComponent("SkinnedMeshRenderer").material.mainTexture = Characters.TTG;
		}
	}
	else if(characterNumber == 2)
	{
		if(SelectCharacter.player2Costume == 2)
		{
			clone2.Find("Plane_000").GetComponent("SkinnedMeshRenderer").material.mainTexture = Characters.KTS;
			clone2.Find("Mesh_006").GetComponent("SkinnedMeshRenderer").material.mainTexture = Characters.KTS;
		}
		else if(SelectCharacter.player2Costume == 3)
		{
			clone2.Find("Plane_000").GetComponent("SkinnedMeshRenderer").material.mainTexture = Characters.KTI;
			clone2.Find("Mesh_006").GetComponent("SkinnedMeshRenderer").material.mainTexture = Characters.KTI;
			
		}
		else if(SelectCharacter.player2Costume == 4)
		{
			clone2.Find("Plane_000").GetComponent("SkinnedMeshRenderer").material.mainTexture = Characters.KTR;
			clone2.Find("Mesh_006").GetComponent("SkinnedMeshRenderer").material.mainTexture = Characters.KTR;
		}
		else if(SelectCharacter.player2Costumee == 5)
		{
			clone2.Find("Plane_000").GetComponent("SkinnedMeshRenderer").material.mainTexture = Characters.KTG;
			clone2.Find("Mesh_006").GetComponent("SkinnedMeshRenderer").material.mainTexture = Characters.KTG;
		}
	}
}

