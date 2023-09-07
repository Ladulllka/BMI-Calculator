/**
 * Максимальный вес.
 */
const MAX_WEIGHT = 635;

/**
 * Минимальный вес.
 */
const MIN_WEIGHT = 14.5;

/**
 * Максимальный рост.
 */
const MAX_HEIGHT = 272;

/**
 * Минимальный рост.
 */
const MIN_HEIGHT = 70;

/**
 * Одна сотня для формулы нахождения индекса массы тела.
 */
const HUNDRED = 100;

/**
 * Вторая степень для формулы нахождения индекса массы тела.
 */
const SECOND_DEGREE = 2;
/**
 * Получение input с именем.
 */
let nameInput = document.getElementById("name");

/**
 * Получение input с высотой.
 */
let heightInput = document.getElementById("height");

/**
 * Получение input с массой.
 */
let weightInput = document.getElementById("weight");

/**
 * Получение button.
 */
let calculateButton = document.getElementById("calculate-button");

/**
 * Получение тега <p> для записи результата.
 */
let innerText = document.getElementById("innerText");

/**
 * Класс пользователь.
 */
class User {
	name;
	height;
	weight;
	bmi;
	description;
}

/**
 * Массив границ ИМТ и описание ИМТ.
 */
let descriptions = [
	[18.5, "Недостаточная масса"],
	[25, "Нормальная масса"],
	[30, "Избыточная масса"],
	[35, "Ожирение 1 степени"],
	[40, "Ожирение 2 степени"],
	[45, "Ожирение 3 степени"],
];

/**
 * Расчет 
 * @param {} weight 
 * @param {*} height 
 * @returns 
 */
function calculateBmi(weight, height) {
	checkValidRange(weight, MIN_WEIGHT, MAX_WEIGHT);
	checkValidRange(height, MIN_HEIGHT, MAX_HEIGHT);

	let bmi = weight / Math.pow(height / HUNDRED, SECOND_DEGREE);
	return bmi;
}

function describeBmi(bmi) {
	if (bmi <= 0) {
		throw (bmi, "ИМТ равен меньше или равен 0");
	}

	for (let index = descriptions.length - 1; index >= 0; index--) {
		if (descriptions[index][0] < bmi) {
			return descriptions[index + 1][1];
		}
	}
}

function checkValidRange(value, minRange, maxRange) {
	if (!(value > minRange && value < maxRange)) {
		throw value;
	}
}

function ShowBmi(name, height, weight) {
	try {
		checkValidRange(height, MIN_HEIGHT, MAX_HEIGHT);
		checkValidRange(weight, MIN_WEIGHT, MAX_WEIGHT);
		if (name === "") {
			throw value;
		}

		let bmiUser = new User();

		bmiUser.name = name;
		bmiUser.height = height;
		bmiUser.weight = weight;
		bmiUser.bmi = calculateBmi(bmiUser.weight, bmiUser.height);

		let desc = describeBmi(bmiUser.bmi);

		innerText.innerText =
			"Ваш ИМТ равен = " + bmiUser.bmi + " Это означает:" + desc;
	} catch (error) {
		alert(
			"Пожалуйста, исправьте ваш ввод. Значение " +
				error +
				" недопустимо."
		);
	}
}

calculateButton.addEventListener("click", function () {
	ShowBmi(nameInput.value, heightInput.value, weightInput.value);
});
