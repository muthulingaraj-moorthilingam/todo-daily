function myfucn(){
	var a= document.getElementById('toto-ip').value;
	var span=document.createElement("span");
	span.innerHTML=a;
	document.getElementById('item').appendChild(span);
	 document.getElementById('toto-ip').value='';
}