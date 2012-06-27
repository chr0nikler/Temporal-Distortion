#pragma strict

// the textfield to update the time to
private var textfield:GUIText;
private var done : int = 0;
 
// time variables
public var allowedTime:int = 3;
private var currentTime = allowedTime;
 
function Awake()
{
    // retrieve the GUIText Component and set the text
    textfield = GetComponent(GUIText);
 
    UpdateTimerText();
 
    // start the timer ticking
    TimerTick();
}

function Update()
{
	if(GameOver())
    {
    		textfield.text = "GAME OVER";
    		
    		loadwinner();
    		
    }
}

function UpdateTimerText()
{
    // update the textfield
    textfield.text = currentTime.ToString();
    
}

function TimerTick()
{
    // while there are seconds left
    while(currentTime > 0)
    {
        // wait for 1 second
        yield WaitForSeconds(1);
 
        // reduce the time
        currentTime--;
 
        UpdateTimerText();
    }
    
    if(currentTime == 0)
    {
	 	textfield.text = "FIGHT";
		yield WaitForSeconds (1);
		textfield.text = "";
    }
 
    // game over
 
}

function GameOver(): boolean
{
	done = 0;
	if(Gui_StatDisplay.player1stock == 0)
	{
		done ++;
	}
	if(Gui_StatDisplay.player2stock == 0)
	{
		done++;
	}
	if(Gui_StatDisplay.player3stock == 0)
	{
		done++;
	}
	if(Gui_StatDisplay.player4stock == 0)
	{
		done++;
	}
	Debug.Log("" + done);
	if(done == SelectCharacter.numberOfPlayers-1)
	{
		return(true);
	}
	else
	{
		return(false);
	}
}

function loadwinner()
{
	yield WaitForSeconds(1);
	textfield.text = "";
	yield WaitForSeconds(1);
	Application.LoadLevel("WinnerScene");
}