var charge : float = 0.0;
var comboCount : int = 0;
var timer : float = 0;
animation["forward_smash"].speed = 1.6;
var checkcharge : boolean = false;
var flame : GameObject;
var strengths: float = 1.0;
var sizes : float;
var strengthn: float = 1.0;
var sizen : float;


function Awake()
{
	flame = GameObject.Find("InnerCore");
	strengths = flame.particleEmitter.localVelocity.x;
	sizes = flame.particleEmitter.maxSize;
	print("" + strengths + " " + sizes);
}
function Update () {
	var walking : float = Input.GetAxis("Horizontal");
	A_Combo();
	forward_smash();
	walk();
	
}

function A_Combo(){
	if (Input.GetKeyDown("u"))
    {
        if (comboCount == 0)
        {
        	timer = Time.time;
            Debug.Log("I served a punch!");
            //Do something awesome to deliver a punch!
            animation["slash1"].speed = 1.3;
            animation.CrossFadeQueued("slash1", 0.3, QueueMode.CompleteOthers);
            comboCount ++;
            
        }
        else
        {
        	if (comboCount == 1 && (Time.time - timer < 1)) {
        		timer = Time.time;
            	comboCount = 1;
            	Debug.Log("I did a combo!");                
            	//Do something awesome for the combo!
            	animation["slash2"].speed = 1.3;
           		animation.CrossFade("slash2");
            	comboCount ++;
        	}
        	else
        	{
        		if(comboCount == 2 && (Time.time - timer < 0.7))
       			{
        			comboCount = 0;
            		Debug.Log("I kicked!");                
            		//Do something awesome for the combo!
            		animation["flip_kick"].speed = 2.5;
            		animation.CrossFade("flip_kick");
            	}
            	else
            	{
            		timer = Time.time;
            		comboCount = 1;
            		Debug.Log("Restart Combo");
            		animation.Stop();
            		animation.Play("slash1");
            	}
            		
            }
        }
          
    }

}

function forward_smash()
{
	if(Input.GetKey("j")) {
		
		if(!animation.IsPlaying("forward_charge") && !checkcharge && !animation.IsPlaying("forward_smash"))
		{
			strengthn = strengths;
			sizen = sizes;
    		animation.CrossFade("forward_charge");
    		checkcharge = true;
    	}
    	if(charge < 50.0)
    	{
    		strengthn = strengthn + 0.004;
    		sizen = sizen + 0.001;
    		charge = charge + 0.25;
    		flame.particleEmitter.maxSize = sizen;
    		flame.particleEmitter.localVelocity = Vector3(strengthn,0,0);
    	}
    	
    	else
    	{
    		animation.CrossFadeQueued("forward_smash", 0.3, QueueMode.CompleteOthers);
    		checkcharge = false;
    		Debug.Log("Charge = " + charge);
    		charge = 0;
    		yield WaitForSeconds(0.3);
    		strengthn = strengths;
			sizen = sizes;
			flame.particleEmitter.maxSize = sizen;
    		flame.particleEmitter.localVelocity = Vector3(strengthn,0,0);
    	}
    	
    }
    else if(Input.GetKeyUp("j"))
    {
    	if(checkcharge)
    	{
    		animation.CrossFadeQueued("forward_smash", 0.3, QueueMode.CompleteOthers);
    		checkcharge = false;
    		Debug.Log("Charge = " + charge);
    		charge = 0;
    		yield WaitForSeconds(0.3);
    		strengthn = strengths;
			sizen = sizes;
			flame.particleEmitter.maxSize = sizen;
    		flame.particleEmitter.localVelocity = Vector3(strengthn,0,0);
    	}
    	
    }
    
}

function walk()
{
	if (Input.GetAxis("Horizontal"))
	{
		walking = Input.GetAxis("Horizontal");
		transform.Translate(Vector3(0,0,walking) / 230);
		animation.Play("walk");
	}
}