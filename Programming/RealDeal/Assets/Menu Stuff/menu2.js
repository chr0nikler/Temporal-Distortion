var image1: Texture2D;
var menu:int=1;
var leftMouseCheck:int=0;

function OnGUI () {

//Main Menu
	if (menu == 0)
	{
	if (GUI.Button (Rect (10,(Screen.height/5)*.75,Screen.width/2,(Screen.height/5)*2.5), "Multiplayer"))
		{
			menu = 1;
		}	
	if (GUI.Button (Rect (20+(Screen.width/2),(Screen.height/5)*.75,Screen.width/2-30,(Screen.height/5)*2.5), "Single Player"))
		{
			menu = 2;
		}
	if (GUI.Button (Rect (10,(Screen.height/5)*3.5+10,Screen.width/4-10,(Screen.height/5)), "Internet"))
		{
			print ("You clicked the button for Internet!");
		}
	if (GUI.Button (Rect (Screen.width/4+10,(Screen.height/5)*3.5+10,Screen.width/4-10,(Screen.height/5)), "Archives"))
		{
			menu = 4;
		}
	if (GUI.Button (Rect (7.5+Screen.width/2,(Screen.height/5)*3.5+10,Screen.width/4-10,(Screen.height/5)),"Options"))
		{
			menu = 5;
		}
	if (GUI.Button (Rect (5+Screen.width/4*3,(Screen.height/5)*3.5+10,Screen.width/4-10,(Screen.height/5)),"Exit"))
		{
			print ("You clicked the button for Exit!");
		}
	}

//Multiplayer Menu
	if (menu == 1)
	{
	if (GUI.Button (Rect (10,(Screen.height/5)*.75,Screen.width/2-30,(Screen.height/5)*2.5),"Standard Fight"))
		{
			print ("Standard Fight");
		}
	if (GUI.Button (Rect (5+(Screen.width/2),(Screen.height/5)*.75,Screen.width/2-20,(Screen.height/5)*2.5),"Special Fight"))
		{
			print ("Special Fight");
		}
	if (GUI.Button (Rect (30,(Screen.height/5)*3.5+10,(Screen.width/3),(Screen.height/5)),"Rotation"))
		{
			print ("Rotation");
		}
	if (GUI.Button (Rect (Screen.width/3*2-40,(Screen.height/5)*3.5+10,(Screen.width/3),(Screen.height/5)),"Tourney"))
		{
			print ("Tourney");
		}
	if (GUI.Button (Rect (10,10,Screen.width/10,Screen.height/15),image1))
		{
			menu = 0;
		}	
	}
	
	//Single Player Menu
	if (menu == 2)
	{
	if (GUI.Button (Rect (10,Screen.height/6,Screen.width/4-5,Screen.height/4-5),"Adventure Mode"))
		{
			print ("Adventure Mode");
		}
	if (GUI.Button (Rect (10,Screen.height/6+Screen.height/4+5,Screen.width/4-5,Screen.height/4-5),"Event Mode"))
		{
			print ("Event Mode");
		}
	if (GUI.Button (Rect (10,Screen.height/6+Screen.height/2+10,Screen.width/4-5,Screen.height/4-5),"All-Star Mode"))
		{
			print ("All-Star Mode");
		}
	if (GUI.Button (Rect (15+Screen.width/4,Screen.height/6,Screen.width/4-5,Screen.height/4-5),"Classic Mode"))
		{
			print ("Classic Mode");
		}
	if (GUI.Button (Rect (15+Screen.width/4,Screen.height/6+Screen.height/4+5,Screen.width/4-5,Screen.height/2),"Colliseum Mode"))
		{
			menu = 3;
		}
	if (GUI.Button (Rect (20+Screen.width/2,Screen.height/6,Screen.width/2-30,Screen.height/2-10),"The Cracked Vahi"))
		{
			print ("Story Mode");
		}
	if (GUI.Button (Rect (Screen.width/10*6.25,Screen.height/6+Screen.height/2+10,Screen.width/3.5,Screen.height/4-5),"Training"))
		{
			print ("Training");
		}
	if (GUI.Button (Rect (10,10,Screen.width/10,Screen.height/15),image1))
		{
			menu = 0;
		}	
	}
	
	//Colliseum
	if (menu == 3)
	{
	if (GUI.Button (Rect (5,Screen.height/6,Screen.width/4-5,Screen.height-Screen.height/6-10),"Collect the Makoki Stones!"))
		{
			print ("Target Attack");
		}
	if (GUI.Button (Rect (5+Screen.width/4,Screen.height/6,Screen.width/4-5,Screen.height-Screen.height/6-10),"Dummy Smash"))
		{
			print ("Dummy Smash");
		}
	if (GUI.Button (Rect (5+Screen.width/2,Screen.height/6,Screen.width/4-5,Screen.height-Screen.height/6-10),"Boss Battles!"))
		{
			print ("Boss Battles!");
		}
	if (GUI.Button (Rect (5+Screen.width/4*3,Screen.height/6,Screen.width/4-5,Screen.height-Screen.height/6-10),"Multiman Bout!"))
		{
			menu = 6;
		}
	if (GUI.Button (Rect (10,10,Screen.width/10,Screen.height/15),image1))
		{
			menu = 2;
		}	
	}

	//Archives
	if (menu == 4)
	{
	if (GUI.Button (Rect (Screen.width/20,Screen.height/5,Screen.width/4-5,Screen.height/4),"Exhibits"))
		{
			print ("Exhibits");
		}
	if (GUI.Button (Rect (Screen.width/20,Screen.height/5*3,Screen.width/4-5,Screen.height/4),"Stills"))
		{
			print ("Stills");
		}
	if (GUI.Button (Rect (Screen.width/20+Screen.width/4,Screen.height/5,Screen.width/4-5,Screen.height/4),"Achievements"))
		{
			print ("Achievements");
		}
	if (GUI.Button (Rect (Screen.width/20+Screen.width/4,Screen.height/5*3,Screen.width/4-5,Screen.height/4),"Movies"))
		{
			print ("Movies");
		}
	if (GUI.Button (Rect (Screen.width/3*1.75-10,Screen.height/5,Screen.width/2.75+20,Screen.height/5*2+Screen.height/4),"Challenges"))
		{
			print ("Challenges");
		}
	if (GUI.Button (Rect (10,10,Screen.width/10,Screen.height/15),image1))
		{
			menu = 0;
		}	
	}
	
	//Options
	if (menu == 5)
	{
	if (GUI.Button (Rect (10,Screen.height/6,Screen.width/5,Screen.height/3),"Music"))
		{
			print ("Music");
		}
	if (GUI.Button (Rect (Screen.width/5,Screen.height/6+Screen.height/3+10,Screen.width/5,Screen.height/3),"Records"))
		{
			print ("Records");
		}
	if (GUI.Button (Rect (2*Screen.width/5-10,Screen.height/6,Screen.width/5,Screen.height/3),"Controls"))
		{
			print ("Controls");
		}
	if (GUI.Button (Rect (3*Screen.width/5-20,Screen.height/6+Screen.height/3+10,Screen.width/5,Screen.height/3),"Sound Test"))
		{
			print ("Sound Test");
		}
	if (GUI.Button (Rect (4*Screen.width/5-30,Screen.height/6,Screen.width/5,Screen.height/3),"Save Data"))
		{
			print ("Save Data");
		}	
	if (GUI.Button (Rect (10,10,Screen.width/10,Screen.height/15),image1))
		{
			menu = 0;
		}	
	}
	
	//Multiman Bout!
	if (menu == 6)
	{
	if (GUI.Button (Rect (Screen.width/2-Screen.width/32,Screen.height/7,Screen.width/2,Screen.height/8), "10 Man"))
		{
			print ("10 Man");
		}
	if (GUI.Button (Rect (Screen.width/2-Screen.width/32,Screen.height/7+Screen.height/7,Screen.width/2,Screen.height/8), "100 Man"))
		{
			print ("100 Man");
		}
	if (GUI.Button (Rect (Screen.width/2-Screen.width/32,Screen.height/7+2*Screen.height/7,Screen.width/2,Screen.height/8), "3 Minute"))
		{
			print ("3 Minute");
		}
	if (GUI.Button (Rect (Screen.width/2-Screen.width/32,Screen.height/7+3*Screen.height/7,Screen.width/2,Screen.height/8), "15 Minute"))
		{
			print ("15 Minute");
		}
	if (GUI.Button (Rect (Screen.width/2-Screen.width/32,Screen.height/7+4*Screen.height/7,Screen.width/2,Screen.height/8), "Endless"))
		{
			print ("Endless");
		}
	if (GUI.Button (Rect (Screen.width/2-Screen.width/32,Screen.height/7+5*Screen.height/7,Screen.width/2,Screen.height/8), "Cruel"))
		{
			print ("Cruel");
		}
	if (GUI.Button (Rect (10,10,Screen.width/10,Screen.height/15),image1))
		{
			menu = 3;
		}
	}
}



