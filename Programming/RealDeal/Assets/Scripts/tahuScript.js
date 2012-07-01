@script RequireComponent(CharacterController);
var timer : float = 0;
var comboCount : int = 0;

function midJumping (p : int) {
	if(p==1) {
		if (Input.GetKeyDown(ControlSetup.jumpButton) && P1script.upwait >= 3){
			if (P1script.jumpstate != 2)
			{
				P1script.moveDirection.y=P1script.jumpSpeed;
				P1script.jumpstate = 2;
				animation.CrossFadeQueued("midjump", 0.3, QueueMode.PlayNow);
				animation.CrossFadeQueued("falling", 0.3, QueueMode.PlayNow);
			}
		}
	}
}		
function forwardAerial(p : int) {
	if(p == 1) {
		if(Input.GetKeyDown(ControlSetup.attackButton) && (P1script.lastxkey ==  "Right" || P1script.lastxkey == "Left"))
		{
			var aerial : AnimationState = gameObject.animation.CrossFadeQueued("forward_aerial",0.3,QueueMode.PlayNow);
			aerial.speed = 3;
			Debug.Log("Forward Aerial");
		}
	}
}

function groundAttack(p : int) {
	if(p == 1) {
		if(animation.IsPlaying("idle") || animation.IsPlaying("slash1") || animation.IsPlaying("slash2"))
		{	
			if (P1script.attack <= 3 && P1script.attack > 0)
			{
				A_Combo();
				Debug.Log("slash");
			}
			else if(P1script.attack >3 && P1script.attack < 10)
			{	
				if (P1script.upAttack)
				{
					animation.CrossFadeQueued("up_tilt",0.3,QueueMode.PlayNow);
					Debug.Log("Up Tilt");
				}
				else if(P1script.downcheck ==  1)
				{
					animation.CrossFadeQueued("down_tilt",0.3,QueueMode.PlayNow);
					Debug.Log("Down Tilt");
				}
				else if((P1script.lastxkey ==  "Right" || P1script.lastxkey == "Left") && P1script.keywait == 1)
				{
					animation.CrossFadeQueued("side_tilt", 0.3, QueueMode.PlayNow);
					Debug.Log("Side Tilt");
				}
				else if((Input.GetAxis("P1Horizontal") > 0 || Input.GetAxis("P1Horizontal") < 0))
				{
					animation.Play("dash_attack");
					Debug.Log("dashing attacking");
					//animation.CrossFadeQueued("dash_attack", 0.3, QueueMode.PlayNow);
				}
			}
			/*else if(attack >= 10)
			{
				var oldcharge:int = charging;
				charge();
				Debug.Log("" + oldcharge + "   " + charging);
				if(lastxkey == "left" || lastxkey == "right")
				{
					if((oldcharge < charging) && charged == false)
					{
						attack++;
						var chargeSpeed : AnimationState = animation.CrossFadeQueued("forwardcharge", 0.3, QueueMode.PlayNow);
						chargeSpeed.speed = 2.0;
						charged = true;
					}
					else if (oldcharge == charging)
					{
						animation.CrossFadeQueued("forwardsmash", 0.3, QueueMode.PlayNow);
						charging = 0;
						charged = false;
					}
				}
			}*/
		}
		
			
	}
}

function A_Combo(){
	
    if (comboCount == 0)
    {
    	timer = Time.time;
        Debug.Log("I served a punch!");
        //Do something awesome to deliver a punch!
        
        animation.CrossFadeQueued("slash1", 0.3, QueueMode.PlayNow);
        comboCount ++;
        
    }
    else
    {
    	if (comboCount == 1 && (Time.time - timer < 1)) {
    		timer = Time.time;
        	comboCount = 1;
        	Debug.Log("I did a combo!");                
        	//Do something awesome for the combo!
        	
       		animation.CrossFadeQueued("slash2",0.3,QueueMode.PlayNow);
        	comboCount ++;
    	}
    	else
    	{
    		if(comboCount == 2 && (Time.time - timer < 0.7))
   			{
    			comboCount = 0;
        		Debug.Log("I kicked!");                
        		//Do something awesome for the combo!
        		
        		animation.CrossFadeQueued("flip_kick",0.3,QueueMode.PlayNow);
        	}
        	else
        	{
        		timer = Time.time;
        		comboCount = 1;
        		Debug.Log("Restart Combo");
        		animation.Stop();
        		animation.CrossFadeQueued("slash1",0.3,QueueMode.CompleteOthers);
        	}
        		
        }
    }
}

function idleSprint(p : int) {
	if(p==1) {
		if (Input.GetKey(ControlSetup.jumpButton) && P1script.upwait >= 3){
			P1script.moveDirection.y=P1script.jumpSpeed;
			P1script.jumpstate = 1;
			var fastjump : AnimationState = animation.CrossFadeQueued("jump", 0.3, QueueMode.PlayNow);
			fastjump.speed = 2.0;
			animation.CrossFadeQueued("falling", 0.3, QueueMode.PlayNow);
		} else if (Input.GetAxis("P1Horizontal") != 0) {
			P1script.moveDirection.y = 0;
			if(P1script.dashing == 0)
			{
				if(!animation.IsPlaying("walk"))
				{
					animation.CrossFadeQueued("walk", 0.3, QueueMode.PlayNow);
				}
			}
			else
			{
				if(!animation.IsPlaying("sprint"))
				{
					animation.CrossFadeQueued("sprint", 0.3, QueueMode.PlayNow);
				}
			}
		} else if (Input.GetAxis("P1Horizontal") == 0 && !Input.GetKeyDown(ControlSetup.attackButton)) {
			var slowedIdle : AnimationState = animation.CrossFadeQueued("idle", 0.3, QueueMode.CompleteOthers);
			slowedIdle.speed = 0.5;
		}
		if(Input.GetAxis("P1Horizontal") == 0 && (animation.IsPlaying("sprint") || animation.IsPlaying("walk")))
		{
			slowedIdle = animation.CrossFadeQueued("idle", 0.3, QueueMode.PlayNow);
			slowedIdle.speed = 0.5;
		}
	}
}

function specialAttack(p : int) {
	if(p==1) {
		if (Input.GetKeyDown(ControlSetup.specialButton))
		{
			print("special activated!");
			if (P1script.upcheck == 1)
			{
				Debug.Log("Up Special");
			} else {
				if (P1script.downcheck == 1)
				{	
					Debug.Log("Down Special");
				} else {
					if (P1script.lastxkey == "Right")
					{
						if (P1script.keywait == 1)
						{
							Debug.Log("Side Special");
						} else {
							Debug.Log("Neutral Special");
						}
					} else {
						if (P1script.lastxkey == "Left")
						{
							if (P1script.keywait == 1)
							{
								Debug.Log("Side Special");
							} else {
							Debug.Log("Neutral Special");
							}	
						}
					}
				}	
			}
		}
	}
}