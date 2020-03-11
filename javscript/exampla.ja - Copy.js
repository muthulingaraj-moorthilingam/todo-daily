
document.getElementById('toto-ip').addEventListener("keypress",function(event) {
	if(event.code === "Enter"){
		renderList(event);
	}
});


document.getElementById('item').addEventListener("click",function(event) {
//debugger;
		var evtarget=event.target;
		if(evtarget.innerText === "DELETE"){
			deleteNode(evtarget);
		}
		else if (evtarget.innerText === "EDIT"){
			editNode(evtarget);
		}
		else if(evtarget.innerText === "CONFIRM"){
			confirmField(evtarget);
		}
		else if(evtarget.innerText === "CANCEL"){
			cancelField(evtarget);
		}
});

function deleteNode(target){
		document.getElementById('item').removeChild(target.parentNode);
}


function editNode(etarget){
		var val=etarget.parentNode.children[0].innerText;
		etarget.parentNode.children[1].style.display="inline";
		etarget.parentNode.children[0].style.display="none";
		etarget.parentNode.children[1].value=val;
		etarget.parentNode.children[3].style.display="none";
		etarget.parentNode.children[2].style.display="none";
		etarget.parentNode.children[4].style.display="inline";
		etarget.parentNode.children[5].style.display="inline";	
}

function confirmField(conevent){
	var ipval=conevent.parentNode.children[1].value;
	conevent.parentNode.children[0].innerText=ipval;
	conevent.parentNode.children[4].style.display="none";
	conevent.parentNode.children[5].style.display="none";
	conevent.parentNode.children[1].style.display="none";
	conevent.parentNode.children[0].style.display="inline";
	conevent.parentNode.children[2].style.display="inline";
	conevent.parentNode.children[3].style.display="inline";
}

function cancelField(canevent){
	canevent.parentNode.children[4].style.display="none";
	canevent.parentNode.children[5].style.display="none";
	canevent.parentNode.children[1].style.display="none";
	canevent.parentNode.children[0].style.display="inline";
	canevent.parentNode.children[2].style.display="inline";
	canevent.parentNode.children[3].style.display="inline";
}
function renderList(event){
		var chars="abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
		let name=Math.floor(Math.random()*100)+1;
		var sub='';
		var spn='';
		var db='';
		var eb='';
		sub=chars.substring(name,name+5);
		spn=chars.substring(name,name+4);
		db=chars.substring(name+1,name+4);
		db=chars.substring(name+2,name+5);

		var div=document.createElement('div');
		div.setAttribute('id',sub);
	
		var span=document.createElement('span');
		span.setAttribute('id',spn);
		span.innerHTML=event.target.value;
		div.appendChild(span);

		var input=document.createElement('input');
		div.appendChild(input);
		input.style.display="none";
		input.type="text";
		input.value="";

		document.getElementById('item').appendChild(div);
		document.getElementById('toto-ip').value='';


		var edit=document.createElement("button");
		edit.setAttribute('id',eb)
		edit.innerHTML="EDIT";
		div.appendChild(edit);
		


		var b=document.createElement("button");
		b.setAttribute('id',db);
		b.innerHTML="DELETE";
		div.appendChild(b);

		var confirm=document.createElement("button");
		confirm.innerHTML="CONFIRM";
		confirm.style.display="none";
		div.appendChild(confirm);

		var cancel=document.createElement("button");
		cancel.innerHTML="CANCEL";
		cancel.style.display="none";
		div.appendChild(cancel);
}