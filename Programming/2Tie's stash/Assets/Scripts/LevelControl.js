var Totalplayers:int = 1;
var P1Dead:int=0;
var P2Dead:int=0;
var P3Dead:int=0;
var P4Dead:int=0;

function Start() {
Totalplayers = (CharDataHolder.p1Controller != 0 ? 1 : 0)+(CharDataHolder.p2Controller != 0 ? 1 : 0);
}

function Update () {

if(CharDataHolder.p1KOS[1] + CharDataHolder.p1KOS[2] == CharDataHolder.stocknum)
{
P1Dead = 1;
}
if(CharDataHolder.p2KOS[1] + CharDataHolder.p2KOS[2] == CharDataHolder.stocknum)
{
P2Dead = 1;
}
if (P1Dead + P2Dead + P3Dead + P4Dead == Totalplayers - 1)
{
	Application.LoadLevel("matchover");
}
if (P1Dead + P2Dead + P3Dead + P4Dead == Totalplayers)
{
//sudden death
}
}