

const timer = document.querySelector('.countdown');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const message = document.querySelector('.message');

const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const start = document.querySelector('.start');
const button = document.querySelector('.button');
const repeat = document.querySelector('.repeat');

let countSec = 0; // устанавливаем глобальный счетчик секунд
let countMin = 0; // устанавливаем глобальный счетчик секунд

const updateText = () =>{	// функция отображения текущих значений счетчика
  minutes.innerHTML = (0 + String(countMin)).slice(-2); // показываем два последних значения
  seconds.innerHTML = (0 + String(countSec)).slice(-2); // показываем два последних значения
}

const countDown = () => {	// функция обратного отсчета
	let total = countSec + countMin * 60; // устанавливаем общее значение счетчика
  const timeinterval = setTimeout(countDown, 1000); // установка интервала времени в одну секунду и функции-обработчика
  if (total <= 0) { // действия при обнулении счетчика
    clearInterval(timeinterval);
    timer.style.display = 'none';
    button.style.display = 'none';
    repeat.style.display = 'inline-block';

    message.innerHTML = '<p>Отсчет завершен, если хотите повторить,нажмите кнопку повторить</p>'
  }
  if(countSec > 0) countSec--; // действия при уменьшении счетчика
  else { // если секунды равны 0
  	countSec = 59; // устанавливаем счетчик секунд в максимальное значение
    countMin--; // уменьшаем количество минут
  } 
  updateText(); // отображаем показания счетчика
}

plus.onclick = () =>{ // действия при нажатии конпки Плюс
  if(countSec < 59) ++countSec;
  else{
  	countSec = 0;
  	++countMin;
  }
  updateText()
}

minus.onclick = () =>{ // действия при нажатии кнопки Минус
	if(countMin <= 0 && countSec===0){
  	countSec = 0;
    countMin = 0;
    return;
  }
  if(countSec > 0) --countSec;
  else {
  	countSec = 59;
  	--countMin;
  }
  updateText();
}

start.onclick = () => { // действия при нажатии кнопки Старт
	  countDown();  
}

repeat.onclick = () => { // действия при нажатии кнопки Повторить
    countSec = 0; // обнуляем счетчики
    countMin = 0;
    updateText();  
    timer.style.display = 'block';
    button.style.display = 'inline-block';
    repeat.style.display = 'none';
    message.innerHTML = '';
}

updateText(); // запускаем счетчик