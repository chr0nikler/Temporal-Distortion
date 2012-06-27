#pragma strict

var TahuModel : GameObject;
var KopakaModel: GameObject;
static var Tahu: GameObject;
static var Kopaka: GameObject;
static var TTN : Texture2D;
static var TTG : Texture2D;
static var TTI : Texture2D;
static var TTR : Texture2D;
static var TTS : Texture2D;
static var TTRT : Texture2D;
static var TTBT : Texture2D;
static var TTGT : Texture2D;
static var KTN : Texture2D;
static var KTG : Texture2D;
static var KTI : Texture2D;
static var KTR : Texture2D;
static var KTS : Texture2D;

function Awake()
{
	TTN = Resources.Load("tahu_texture_main");
	TTG = Resources.Load("tahu_texture_golden");
	TTI = Resources.Load("tahu_texture_inverse");
	TTR = Resources.Load("tahu_texture_reverse");
	TTS = Resources.Load("tahu_texture_shadow");
	KTN = Resources.Load("kopaka_texture_main");
	KTG = Resources.Load("kopaka_texture_golden");
	KTI = Resources.Load("kopaka_texture_inverse");
	KTR = Resources.Load("kopaka_texture_reverse");
	KTS = Resources.Load("kopaka_texture_shadow");
	Tahu = TahuModel;
	Kopaka = KopakaModel;

	
}

function Start () {

}

function Update () {

}