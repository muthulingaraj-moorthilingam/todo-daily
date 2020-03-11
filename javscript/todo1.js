
let id_name=[];
document.getElementById('toto-ip').addEventListener("keypress",function(event) {
	
	


	if(event.code === "Enter"){
	//console.log(event.target.value);
	var ip=event.target.value;
	var parent_id=document.getElementById('item');
	//console.log(parent_id.id);
		if(parent_id.childElementCount === 0){
			renderList(event);
			//console.log(parent_id.childElementCount);
		}
		else{
			 for (var i = 0; i < parent_id.childElementCount; i++) {
			 	var parent_node=parent_id.children[i];
				var child_node=parent_node.children[0];
				var child_node_value=child_node.innerText;
				if(child_node_value === event.target.value){
					alert("Alredy Exsist");
					break;
				}
				else if(i !== parent_id.childElementCount-1){
					continue;
				}
				else{
					renderList(event);
					break;
				}
			 }
			//renderList(event);
		}


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

	//localStorage.setItem()
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
		

		var chars="abcdefghijklmnopqrstuvwxyzzyxwvutsrponmlkjihgfedcbaabcdefghijklmnopqrstuvwxyzzyxwvutsrponmlkjihgfedcba";
		let name=Math.floor(Math.random()*55)+1;
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
		document.getElementById('item').appendChild(div);
	
		var span=document.createElement('span');
		span.setAttribute('id',spn);
		span.innerHTML=event.target.value;
		div.appendChild(span);

		var input=document.createElement('input');
		div.appendChild(input);
		input.style.display="none";
		input.type="text";
		input.value="";

		//document.getElementById('item').appendChild(div);
		document.getElementById('toto-ip').value='';


		var edit=document.createElement("button");
		edit.setAttribute('id',eb);
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


		//var count=item.childElementCount-1;
		//var ch=item.children[count];
		//localStorage.setItem("data",item.innerHTML);
		//localStorage.setItem(sub,item.children[item.childElementCount-1]);

		//localStorage.setItem("data",item.innerHTvML)
		//localStorage.clear();
		//localStorage.setItem("data",item.innerHTML)
		
		id_name.push(span.innerHTML);
		localStorage.setItem("data",JSON.stringify(id_name));
		
		
		/*var id=document.getElementById(sub);
		console.log(id.firstChild);

		var child=id.firstChild.innerText;
		console.log(child);

		window.localStorage.setItem("parent",child);

		var presist=window.localStorage.getItem("parent");

		console.log(presist);*/	
}

id_name=JSON.parse(localStorage.getItem("data"));

for (var i = 0; i < id_name.length; i++) {

		var div=document.createElement('div');
		document.getElementById('item').appendChild(div);
	
		var span=document.createElement('span'); 
		//span.innerHTML=event.target.value;
		span.innerHTML=id_name[i];
		div.appendChild(span);

		var input=document.createElement('input');
		div.appendChild(input);
		input.style.display="none";
		input.type="text";
		input.value="";

		var edit=document.createElement("button");
		edit.innerHTML="EDIT";
		div.appendChild(edit);
		

		var b=document.createElement("button");
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