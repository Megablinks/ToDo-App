const todayTime = () => {
	const todayDate = new Date();
	const today = todayDate.getDate(); 
	const month = todayDate.getMonth() + 1;
	const year = todayDate.getFullYear();
	const day = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
	let date = day[todayDate.getDay()] + ", ";
	date += today + "/" + month + "/" + year;
	return date;
}

const addTodoList = (e)=> {
	let input = document.querySelector('[type="text"]');
	const letters = /^[0-9a-zA-Z \s]+$/;
	
	if(input.value.length != 0 && (e.key === "Enter" || input) && input.value.match(letters)){
		
		// create Li element
		let node = document.createElement('LI');
		let textNode = document.createTextNode(input.value);
		node.appendChild(textNode);
		
		// create delete BUTTON element
		let deleteNode = document.createElement('INPUT');
		let deleteNodeAtt = document.createAttribute('type');
		let valueNodeAtt = document.createAttribute('value');
		deleteNodeAtt.value = "button";
		valueNodeAtt.value = "X";
		deleteNode.setAttributeNode(deleteNodeAtt);
		deleteNode.setAttributeNode(valueNodeAtt);
		node.appendChild(deleteNode);
		
		// create checkbox INPUT element
		let checkNode = document.createElement('INPUT');
		let nodeAtt = document.createAttribute('type');
		nodeAtt.value = "checkbox"; 
		checkNode.setAttributeNode(nodeAtt);
		node.appendChild(checkNode);
		
		//display the created TO-DO List
		document.querySelector('ul').appendChild(node);
		input.value = "";
	}
	else if(!letters) {alert("wrong key set, try again")};
	e.preventDefault();
}

const checkOrDeleteTask = (e) => {
	if(e.target.getAttribute("type") == "checkbox"){
		let check = e.target.parentNode;
		if(check.getAttribute("class") == 'taskstyle'){
			check.setAttribute('class', ' ');
		}
		else{
			check.setAttribute('class', 'taskstyle');
		}
	}
	else if(e.target.getAttribute("type") == "button"){
		const taskParent = document.querySelector('[task-checked]');
		taskParent.removeChild(e.target.parentNode);
	}
}

const clearAllTask = () => {
	const taskParent = document.querySelector('[task-checked]');
	const taskChild = document.querySelectorAll('li');
	const len = taskChild.length;
	for (let i = 0; i < len; i++){
		taskParent.removeChild(taskChild[i]);
	}	
}

document.querySelector('[today-date]').innerHTML = todayTime();

const add = document.querySelector('[input-task]')[1];
add.addEventListener('click', addTodoList);

const enterKey = document.querySelector('[input-task]')[0];
add.addEventListener('keydown', addTodoList);

const clearTask = document.querySelector('[clear-task]');
clearTask.addEventListener('click', clearAllTask);

const checkOrDelete = document.querySelector('[task-checked]');
if (checkOrDelete){
	checkOrDelete.addEventListener('click', checkOrDeleteTask);
}

var myvar = setInterval(function (){myTimer(), 1000});
function myTimer(){
	var d = new Date();
	var x = d.toLocaleTimeString();
	document.getElementById('time').innerHTML =x;
}