#pragma strict

var displacement: int=2500;


private var p0 : Vector3;

function Start () {
 p0= transform.position;
}

function Update () {


rigidbody2D.velocity.x = 0;
rigidbody2D.velocity.y = 0;
transform.position= p0;

}

function OnCollisionEnter2D (colInfo : Collision2D) {
	colInfo.collider.rigidbody2D.AddForce(new Vector2(0,displacement));
	//colInfo.collider.gameObject.animation.Play("Jump");
	
	
	//animation1.SetTrigger("PlatformPressed");
	//rigidbody2D.AddForce(new Vector2(0,-0.05));
	//animation1.Play("Platform");
	
}