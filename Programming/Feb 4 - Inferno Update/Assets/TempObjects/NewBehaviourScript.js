function OnTriggerEnter (other : Collider) {
	other.gameObject.SendMessage ("LastHit", "Player2", SendMessageOptions.DontRequireReceiver);
	other.gameObject.SendMessage ("Damage", 5, SendMessageOptions.DontRequireReceiver);
	other.gameObject.SendMessage ("Knockback", new Vector4(1,1,transform.position.x,20), SendMessageOptions.DontRequireReceiver);
}