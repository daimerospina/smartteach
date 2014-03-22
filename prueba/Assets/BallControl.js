#pragma strict

var BallSpeed : float=10;
//var axisPos: Vector3=Vector3.zero;

function Start () {
yield WaitForSeconds(1);

//rigidbody.AddForce(new Vector3(0,-9.8,0));


//Input.acceleration.x
}

function Update () {
BallSpeed= Input.acceleration.x;
//axisPos.y= Input.acceleration.y;

rigidbody.AddForce (new Vector3(BallSpeed,0,0));

}