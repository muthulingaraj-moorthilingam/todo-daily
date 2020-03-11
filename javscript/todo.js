/*function myfucn(){
	var a= document.getElementById('toto-ip').value;
	var span=document.createElement("span");
	span.innerHTML=a;
	document.getElementById('item').appendChild(span);
	 document.getElementById('toto-ip').value='';
}*/

/*
document.getElementById('toto-ip').addEventListener("keypress",function(event){
	if(event.code === "Enter"){
		var span=document.createElement("span");
	span.innerHTML=event.target.value;
	document.getElementById('item').appendChild(span);
	 document.getElementById('toto-ip').value='';
	}
});
*/
/*
function addEventListener(e,cb) {
	var __event;
	cb(event)
}*/

/*var asdf = document.getElementById('toto-ip');
typeof asdf;
asdf.addEventListener("keypress", function(){ 
	keyevent(event)
});
*/

document.getElementById('toto-ip').addEventListener("keypress", function(){ 
	keyevent(event)});
function keyevent(event){
	if(event.code === "Enter"){
		var div=document.createElement("div");
		div.setAttribute('class','items');
		div.innerHTML=event.target.value;
		document.getElementById('item').appendChild(div);
		document.getElementById('toto-ip').value='';

		var edit=document.createElement("button");
		edit.setAttribute('class','btn')
		edit.innerHTML="EDIT";
		div.appendChild(edit);	
		

		var b=document.createElement("button");
		b.setAttribute('class','btn')
		b.innerHTML="DELETE";
		div.appendChild(b);
	

		
		edit.addEventListener("click",edit_ip,false);

		function edit_ip(){
			var d=document.getElementsByClassName('items');
		console.log(d[0].innerText);
				d[0].innerText='';
			//document.getElementsByClassName('items').innerHTML='';
		}
		
		
		b.addEventListener("click",function(){
			document.getElementById('item').removeChild(div);
		});
	}
}
/*
function get() {

   var a = 5;
	function() {}
	function() {}
	function() {}function() {}function() {}function() {}
}
*/