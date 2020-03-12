document.getElementById('toto-ip').addEventListener("keypress",function(event){
	if(event.code === "Enter"){
		var ip=event.target.value;
		var parent_id=document.getElementById('item');
		renderList(event);
	}
});

function renderList(event){

	var div=document.createElement('div');
	document.getElementById("item").appendChild(div);

	var span=document.createElement('span');
	span.innerHTML=event.target.value;
	div.appendChild(span);

	var edit=document.createElement('button');
	edit.innerText="EDIT";
	div.appendChild(edit);

	var del=document.createElement('button');
	del.innerHTML="DELETE";
	div.appendChild(del);

	document.getElementById('toto-ip').value='';
}