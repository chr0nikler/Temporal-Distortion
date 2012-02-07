//Brent Tutaj, Jan 4, 2011

var totalicons:int=1;
var rows:int=1;
var currenticon:int=0;
var currentrow:int=0;

function OnGUI () {
	if (totalicons>3)
	{
	rows = 2;
	}
	if (totalicons>8)
	{
	rows = 3;
	}
	if (totalicons>18)
	{
	rows = 4;
	}
	if (totalicons>36)
	{
	rows = 5;
	}
	for(currenticon=1;currenticon<=totalicons;currenticon++)
	{
		
		//GUI.Box(Rect())
		
	}
}