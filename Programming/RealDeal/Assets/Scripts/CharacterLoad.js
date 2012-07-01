
class CharacterLoad extends MonoBehaviour{
	
	protected var statusNum : int;
	protected var characterNum : int;
	protected var playerNum : int;
	
	function CharacterLoad(sN : int, cN : int, pN : int) {
		statusNum = sN;
		characterNum = cN;
		playerNum = pN;
	}
	
	function getstatusNum() {
		return(statusNum);
	}
	function setstatusNum(s : int) {
		statusNum = s;
	}
	
	function getcharacterNum() {
		return(characterNum);
	}
	function setcharacterNum(c : int) {
		characterNum = c;
	}
	
	function getplayerNum() {
		return(playerNum);
	}
	function setplayerNum(p : int) {
		playerNum = p;
	}
}

static var script : String;

function Start() {
	if(playerNum == 1) {
		script = "P1script";
	}
}
static function forwardAerial(model : GameObject) {
	if(Input.GetKeyDown(ControlSetup.attackButton) && (script.lastxkey ==  "Right" || script.lastxkey == "Left"))
	{
		var aerial : AnimationState = model.animation.CrossFadeQueued("forward_aerial",0.3,QueueMode.PlayNow);
		aerial.speed = 2.5;
		Debug.Log("Forward Aerial");
	}
}