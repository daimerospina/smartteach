#pragma strict
 
function Start () {

}
var speed = 10.0;
var theSkin : GUISkin;
static var axisPos: Vector3=Vector3.zero;

static function Update () {
axisPos.x= Input.acceleration.x;
axisPos.y= Input.acceleration.y;
//Normalizar la entrada
if(axisPos.sqrMagnitude>1 )
	axisPos.Normalize;
//convertir de unidades por frame a unidades por segundo
axisPos *= Time.deltaTime;

//mover objeto
Transform.Translate ( axisPos * speed);

}
function OnGUI(){
	GUI.skin =theSkin ;
	//Los primeros dos numeros son posicion
	//los ultimos dos numeros son el tamano del rectangulo creado.
	GUI.Label(new Rect (Screen.width/2, Screen.height/2, 100, 100),"" + axisPos.x);
	GUI.Label(new Rect (Screen.width/2, Screen.height/2+1, 100, 5),"" + axisPos.y);

}