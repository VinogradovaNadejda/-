function print(x) { console.log(x); }

function aBitHigher(x) {
	setTimeout(() => { window.scrollBy(0, -x) }, 0);
}

function getId(x) {
	return document.getElementById('' + x);
}

function closeOrOpenList() {
	if (exampleList.classList.contains('hidden')) {
		exampleList.classList.remove('hidden');
		setTimeout(() => {
			exampleList.classList.remove('invis');
		}, 1);
	}
	else {
		exampleList.classList.add('invis');
		setTimeout(() => {
			exampleList.classList.add('hidden');
		}, 500);
	}
}

function setName(newName) {
	if (isNameTyped(newName)) {
		localStorage.setItem('localName', newName);
	}
}

function getName() {
	return localStorage.getItem('localName');
}

function isNameTyped(name) {
	return !(name == null || name.trim() == '');
}



function squareTriangle(a, h) {
	return a * h / 2
}

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffleTest() {
	for (let i = 1; i <= 10; i++) {
		let nums = [];
		let n = (i == 1 ? 7 : 4);
		for (let k = 1; k <= n; k++) {
			nums.push(k);
		}
		//print(nums);
		let m;
		for (let j = 1; j <= n; j++) {
			m = rand(0, nums.length - 1);
			document.getElementById('lq' + i + '_' + j)
				.setAttribute('class', 'ord' + nums[m]);
			nums.splice(m, 1);
			//print(nums);
		}
	}
}

function shuffleTestOnUpdate() {
	setTimeout(()=>{
		shuffleTest();
	}, 0);
}

shuffleTestOnUpdate();

function blockTest() {
	for (let i = 1; i <= 10; i++) {
		document.getElementById('testform' + i)
			.classList.add('blockForms');
	}
}

let corrects = [
	[2, 5, 6],
	[3],
	[2],
	[1],
	[1, 2],
	[1, 2],
	[1],
	[3],
	[1],
	[3]
];

let scores = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function colorTestAndScores() {
	let n;
	let id;

	let score;
	let chooseMax;
	let chosen;

	let checkboxAns = [0, 4, 5];

	for (let i = 0; i < 10; i++) {
		n = (i == 0 ? 7 : 4);

		score = 0;
		chosen = 0;
		chooseMax = (i == 0 ? 3 : 2);

		for (let j = 0; j < n; j++) {
			id = 'q' + (i + 1) + '_' + (j + 1);

			if (getId('q' + id).checked) {
				chosen++;
				if (!corrects[i].includes(j + 1)) {
					getId(id).classList.add('incorrect');
				}
			}

			if (corrects[i].includes(j + 1)) {
				getId(id).classList.add('correct');
				if (getId('q' + id).checked) {
					score++;
				}
			}

			if (checkboxAns.includes(i) &&
				(chosen - chooseMax > 0)) {

				scores[i] = score - (chosen - chooseMax);

				if (scores[i] < 0) { scores[i] = 0; }
			}
			else {
				scores[i] = score;
			}

		}
	}
	print(scores)
}

function printScores() {
	let total = 0;
	let ofMax;
	for (i = 0; i < 10; i++) {
		ofMax = (i == 0 ? 3 : (
			(i == 4 || i == 5) ? 2 : 1)
		);
		getId('score_' + (i + 1)).innerHTML = 'Получено баллов: ' +
			scores[i] + '/' + ofMax;
		total += scores[i];
	}

	getId('score_total').innerHTML = 'Получено баллов: ' +
			total + '/14';
}


function setNameFromLocal() {
	let tempName;
	if (null != localStorage.getItem('localName')) {
		lastbut.classList.add('lastButtons');
		ddlb.classList.remove('hidden');

		getId('helloName').innerHTML = 'Здравствуй, '
			+ getName() + '!';
		getId('onlyName').innerHTML = getName();
	
		getId('showIt').classList.remove('hidden');
		getId('showUser').classList.add('flex');
		getId('showUser').classList.remove('hidden');
	}
}

setNameFromLocal();

let date = new Date();
function getDateForWin() {
	let month = date.getMonth() + 1;
	let day = date.getDate();
	if (month < 10) month = '0' + month;
	if (day < 10) day = '0' + day;
	return day + '.' + month + '.' +
		date.getFullYear();
}

getId('dateWin').innerText = getDateForWin();

function showWindow() {
	getId('userWin').innerText = getName();

	getId('bigWindow').classList.add('flex');
	getId('bigWindow').classList.remove('hidden');

	setTimeout(() => {
		getId('bigWindow').classList.remove('invis');
	}, 1);

	setTimeout(() => {
		getId('smallWindow').classList.remove('invis');
		getId('bigWindow').setAttribute('onclick', 'hideWindow();');
	}, 800);
}


function hideWindow() {
	getId('bigWindow').setAttribute('onclick', '');
	getId('smallWindow').classList.add('invis');

	setTimeout(() => {
		getId('bigWindow').classList.add('invis');

		setTimeout(() => {
			getId('bigWindow').classList.add('hidden');
			getId('bigWindow').classList.remove('flex');
		}, 800);

	}, 500);
}

let time = 0;
let decrement = -1;

let timerVar = setInterval('', 100000);

function timeDecrease() {
	if (time == 1) {
		clearInterval(timerVar);
	}
	time += decrement;
	print(time);
	let hours = Math.floor(time / 3600) + '';
	let minutes = Math.floor((time % 3600) / 60) + '';
	let seconds = time % 60 + '';
	if (hours.length == 1) hours = '0' + hours;
	if (minutes.length == 1) minutes = '0' + minutes;
	if (seconds.length == 1) seconds = '0' + seconds;

	timerText.innerHTML = hours + ':' + minutes + ':' + seconds;
}

function launchTimer() {
	if (!isNaN(timer1.value) &&
		!isNaN(timer2.value) &&
		!isNaN(timer3.value)) 
	{
		timerError.innerHTML = "";
		clearInterval(timerVar);

		let input1 = '' + timer1.value;
		let input2 = '' + timer2.value;
		let input3 = '' + timer3.value;
		if (input1 == '') input1 = 0;
		if (input2 == '') input2 = 0;
		if (input3 == '') input3 = 0;
		if (+input1 < 0) input1 = -input1;
		if (+input2 < 0) input2 = -input2;
		if (+input3 < 0) input3 = -input3;
		time = +input1 * 3600 + +input2 * 60 +
			+input3 + 1;

		if (decrement == 0) {
			decrement = -1;
			pauseButton.innerHTML = 'Пауза';
		}
		timerVar = setInterval(timeDecrease, 1000);
	}
	else {
		timerError.innerHTML = 
			'Ошибка! Проверьте введённые данные';
	}
}

function timerPause() {
	if (decrement == -1) {
		decrement = 0;
		pauseButton.innerHTML = 'Возобновить';
	}
	else {
		decrement = -1;
		pauseButton.innerHTML = 'Пауза';
	}
}

function zeroTimer() {
	timerText.innerHTML = '00:00:00';
	clearInterval(timerVar);
	if (decrement == 0) {
		decrement = -1;
		pauseButton.innerHTML = 'Пауза';
	}
}