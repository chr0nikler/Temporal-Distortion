    ////////////////////////////////////////////////////////////////////
    //IMPORTANT! Tag ALL players with "Player" so they are recognized.//
    ////////////////////////////////////////////////////////////////////  

var targets : GameObject[];

var currentDistance : float;
var largestDistance : float;

var theCamera : Camera;
var height : float = 8.0;

var avgDistance;
var distance = 6.0;                    // Default Distance 
var speed = 1;
var offset : float;

//========================================

function Start(){

    targets = GameObject.FindGameObjectsWithTag("Player");  //Identifies all players

}

function OnGUI(){

    GUILayout.Label("largest distance is = " + largestDistance.ToString());  //Testing Camera data 
    GUILayout.Label("height = " + height.ToString());						 //(distance to target point between all players)
    GUILayout.Label("number of players = " + targets.length.ToString());
    for(n = 0; n < targets.length; n++)
    {
    	GUILayout.Label(targets[n].name);
    }

}


function LateUpdate () //Camera Follow actiosn
{
	
    targets = GameObject.FindGameObjectsWithTag("Player"); 

    if (!GameObject.FindWithTag("Player"))
    return;

    var sum = Vector3(0,0,0);

    for (n = 0; n < targets.length ; n++){

        sum += targets[n].transform.position;

    }
      avgDistance = sum / targets.length;  //Create avgDistance point between all players

	//Debug.Log(avgDistance);

      var largestDifference = returnLargestDifference();

      height = Mathf.Lerp(height,largestDifference,Time.deltaTime * speed);

      theCamera.transform.position.x = avgDistance.x ;
      theCamera.transform.position.z = avgDistance.z - distance - largestDifference;
	  if (theCamera.transform.position.z > -4)  //Never follow player as to see them go to deathTriggers
      {
		theCamera.transform.position.z = -4;
	  }
	  if (theCamera.transform.position.z < -19)
      {
		theCamera.transform.position.z = -19;
	  }
	  if (theCamera.transform.position.x < -7)
      {
		theCamera.transform.position.x = -7;
	  }
	  if (theCamera.transform.position.x > 7)
      {
		theCamera.transform.position.x = 7;
	  }
	  if (theCamera.transform.position.y > 20)
      {
		theCamera.transform.position.y = 20;
	  }
	  if (theCamera.transform.position.y < -2)
      {
		theCamera.transform.position.y = -2;
	  }
	  theCamera.transform.position.y = avgDistance.y;
	  avgDistance.x = transform.position.x;

      theCamera.transform.LookAt(avgDistance);

}

function returnLargestDifference(){

    currentDistance = 0.0;
    largestDistance = 0.0;

    for(var i = 0; i < targets.length; i++){

        for(var j = 0; j <  targets.length; j++){

            currentDistance = Vector3.Distance(targets[i].transform.position,targets[j].transform.position);

            if(currentDistance > largestDistance){

                largestDistance = currentDistance;

            }
        }
    }
    return largestDistance;

}
