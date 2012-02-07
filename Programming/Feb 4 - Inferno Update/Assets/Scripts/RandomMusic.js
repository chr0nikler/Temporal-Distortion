var musicStuff:AudioClip[];
var musicelement:AudioClip;

function Start () {
	musicelement = musicStuff[Random.Range(0, musicStuff.length)];
	audio.loop = true;
	audio.clip = musicelement;
	audio.Play();

}