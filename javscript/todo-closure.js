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

	var input=document.createElement('input');
	input.type="text";
	input.style.display="none";
	input.value='';
	div.appendChild(input);
    //.log(this)
  

	/*return function(){
		
		console.log(this)
	}*/

	var edit=document.createElement('button');
	edit.innerText="EDIT";
	div.appendChild(edit);

	edit.addEventListener("click",function(event){
		edit.style.display="none"
		del.style.display="none"
		span.style.display="none";
		input.style.display="inline";
		input.value=span.innerText;

		input.addEventListener("keypress",function (event){
			if(event.code === "Enter"){
			span.innerText=event.target.value;
			input.style.display="none";
			span.style.display="inline";
			input.value='';
			edit.style.display="inline"
			del.style.display="inline"
		}
		});
		
	});
	var del=document.createElement('button');
	del.innerHTML="DELETE";
	div.appendChild(del);
	del.addEventListener("click",function(){
		document.getElementById('item').removeChild(div);
	});

	document.getElementById('toto-ip').value='';

}