const body = document.querySelector('body');

let keySection = document.getElementById('menu-section');
let keys = keySection.getElementsByClassName('number');

let toggleNo = document.getElementById('toggle-no');
let toggleNNO = toggleNo.getElementsByClassName('toggle-no');


const btn1 = document.querySelector('#theme-1');
btn1.addEventListener('click', () => {
	theme1();
})
const btn2 = document.querySelector('#theme-2');
btn2.addEventListener('click', () => {
	theme2();
})

const btn3 = document.querySelector('#theme-3');
btn3.addEventListener('click', () => {
	theme3();
})
/****************************theme 1**********************************/
function theme1() {
	document.getElementById('theme-1').style.backgroundColor = "";
	document.getElementById('theme-2').style.backgroundColor = "transparent";
	document.getElementById('theme-3').style.backgroundColor = "transparent";
	body.style.backgroundColor = "";
	document.getElementById('logo').style.color = "";
	document.getElementById('theme-txt').style.color = "";
	document.getElementById('toggle').style.backgroundColor = "";
	document.getElementById('menu-section').style.backgroundColor = "";
	document.getElementById('screen-void').style.backgroundColor = "";
	document.getElementById('screen-void').style.color = "";
	document.getElementById('equal').style.backgroundColor = "";
	document.getElementById('equal').style.boxShadow = "";
	document.getElementById('equal').style.color = "";
	document.getElementById('reset').style.backgroundColor = "";
	document.getElementById('reset').style.boxShadow = "";
	document.getElementById('del').style.backgroundColor = "";
	document.getElementById('del').style.boxShadow = "";
	for (var i = 0; i < toggleNNO.length; i++) {
		toggleNNO[i].style.color = '';
	}
	for (var i = 0; i < keys.length; i++) {
		keys[i].style.backgroundColor = "";
		keys[i].style.boxShadow = "";
		keys[i].style.color = "";
	}
}
/*****************************theme 2***************************************/
function theme2() {
	document.getElementById('theme-1').style.backgroundColor = "transparent";
	document.getElementById('theme-2').style.backgroundColor = "hsl(25, 98%, 40%)";
	document.getElementById('theme-3').style.backgroundColor = "transparent";
	body.style.backgroundColor = "hsl(0, 0%, 90%)";
	document.getElementById('logo').style.color = "#000000";
	document.getElementById('theme-txt').style.color = "#000000";
	document.getElementById('toggle').style.backgroundColor = "hsl(0, 5%, 81%)";
	document.getElementById('menu-section').style.backgroundColor = "hsl(0, 5%, 81%)";
	document.getElementById('screen-void').style.backgroundColor = "hsl(0, 0%, 93%)";
	document.getElementById('screen-void').style.color = "#000000";
	document.getElementById('equal').style.backgroundColor = "hsl(25, 98%, 40%)";
	document.getElementById('equal').style.boxShadow = "0 5px hsl(25, 99%, 27%)";
	document.getElementById('equal').style.color = "hsl(0, 0, 100%)";
	document.getElementById('reset').style.backgroundColor = "hsl(185, 42%, 37%)";
	document.getElementById('reset').style.boxShadow = "0 5px hsl(185, 58%, 25%)";
	document.getElementById('del').style.backgroundColor = "hsl(185, 42%, 37%)";
	document.getElementById('del').style.boxShadow = "0 5px hsl(185, 58%, 25%)";
	for (var i = 0; i < toggleNNO.length; i++) {
		toggleNNO[i].style.color = '#000000';
	}
	for (var i = 0; i < keys.length; i++) {
		keys[i].style.backgroundColor = "hsl(45, 7%, 89%)";
		keys[i].style.boxShadow = "0 5px hsl(35, 11%, 61%)";
		keys[i].style.color = "#000000";
	}
}
/*******************************theme 3******************************************/
function theme3() {
	document.getElementById('theme-1').style.backgroundColor = "transparent";
	document.getElementById('theme-2').style.backgroundColor = "transparent";
	document.getElementById('theme-3').style.backgroundColor = "hsl(176, 100%, 44%)";
	body.style.backgroundColor = "hsl(268, 75%, 9%)";
	document.getElementById('logo').style.color = "hsl(52, 100%, 62%)";
	document.getElementById('theme-txt').style.color = "hsl(52, 100%, 62%)";
	document.getElementById('toggle').style.backgroundColor = "hsl(268, 71%, 12%)";
	document.getElementById('menu-section').style.backgroundColor = "hsl(268, 71%, 12%)";
	document.getElementById('screen-void').style.backgroundColor = "hsl(268, 71%, 12%)";
	document.getElementById('screen-void').style.color = "hsl(52, 100%, 62%)";
	document.getElementById('equal').style.backgroundColor = "hsl(176, 100%, 44%)";
	document.getElementById('equal').style.boxShadow = "0 5px hsl(177, 92%, 70%)";
	document.getElementById('equal').style.color = "hsl(198, 20%, 13%)";
	document.getElementById('reset').style.backgroundColor = "hsl(281, 89%, 26%)";
	document.getElementById('reset').style.boxShadow = "0 5px hsl(285, 91%, 52%)";
	document.getElementById('del').style.backgroundColor = "hsl(281, 89%, 26%)";
	document.getElementById('del').style.boxShadow = "0 5px hsl(285, 91%, 52%)";
	for (var i = 0; i < toggleNNO.length; i++) {
		toggleNNO[i].style.color = 'hsl(52, 100%, 62%)';
	}
	for (var i = 0; i < keys.length; i++) {
		keys[i].style.backgroundColor = "hsl(268, 47%, 21%)";
		keys[i].style.boxShadow = "0 5px hsl(290, 70%, 36%)";
		keys[i].style.color = "hsl(52, 100%, 62%)";
	}
}

/*******************************************main-section********************************/