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

const DESCRIPTION_UNDERWEIGHT = "Недостаточная масса приведет к: \n" +
	"Хрупкость костей. \n У женщин — аменорею, анорексию	изменение гормонального фона." +
		"\n Недостаточную выработку желчи, из-за чего пища хуже переваривается, усваивается."

const DESCRIPTION_OVERWEIGHT = "Индекс массы тела 25-29,9 говорит о необходимости коррекции веса.\n" +
	"В противном случае есть риск развития гипертонии, болезней сердца, сахарного диабета"

const DESCRIPTION_OBESITY_ONE_DEGREE = "Избыточная масса тела часто вызывает диабет.\n" +
	"Патологии сердечно-сосудистой системы, нарушение обмена веществ. "+
		"Человек может ощущать одышку при подъеме по лестнице, быстро утомляться, постоянно чувствовать сонливость. "+
			"Его настроение, аппетит могут быстро меняться."

const DESCRIPTION_OBESITY_TWO_DEGREE = "Болезнь нередко осложняется артериальной гипертензией,"+
	" гиперхолестеринемией, метаболическим синдромом и т. д.\n" +
		"У некоторых пациентов, кроме 2 степени ожирения диагностируют диабет."

const DESCRIPTION_OBESITY_THREE_DEGREE = "Такая патология встречается нечасто. "+
	"При данном ожирении лишний вес превышает нормальный в несколько раз (до 5).\n" +
		"Пациенты утрачивают способность даже к самообслуживанию, нередко практически не двигаются, "+
			"вынуждены проходить комплексное лечение у кардиологов, эндокринологов и других специалистов."

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
 * Получение button.
 */
let descriptionButton = document.getElementById("get-description-button");

/**
 * Получение тега <p> для записи результата.
 */
let innerText = document.getElementById("innerText");


let descriptionNormalWeight


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
	[18, "Недостаточная масса"],
	[25, "Нормальная масса"],
	[30, "Избыточная масса"],
	[35, "Ожирение 1 степени"],
	[40, "Ожирение 2 степени"],
	[45, "Ожирение 3 степени"],
];

/**
 * Расчет индекса массы тела.
 * @param {numeric} weight - масса.
 * @param {numeric} height - высота.
 * @returns
 */
function calculateBmi(weight, height) {
	checkValidRange(weight, MIN_WEIGHT, MAX_WEIGHT);
	checkValidRange(height, MIN_HEIGHT, MAX_HEIGHT);

	let bmi = weight / Math.pow(height / HUNDRED, SECOND_DEGREE);
	return bmi;
}

/**
 * Получение описания индекса массы тела.
 * @param {numeric} bmi - индекс массы тела.
 * @returns описание массы тела.
 */
function describeBmi(bmi) {
	if (bmi <= 0) {
		throw (bmi, "ИМТ равен меньше или равен 0");
	}

	for (let index = descriptions.length - 1; index >= 0; index--) {
		if (descriptions[index][0] < bmi) {
			return descriptions[index + 1][1];
		}
	}

	return descriptions[0][1];
}

/**
 * Проверка числа на принадлежность промежутку.
 * @param {number} value - значение для проверки.
 * @param {numeric} minRange - минимальная граница.
 * @param {numeric} maxRange - максимальная граница.
 */
function checkValidRange(value, minRange, maxRange) {
	if (!(value > minRange && value < maxRange)) {
		throw value;
	}
}

/**
 * Вывести индекс массы тела с описанием.
 * @param {string} name - Имя.
 * @param {number} height  - Высота.
 * @param {number} weight - Масса.
 */
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

/**
 * Вывод на экран описания индекса массы тела.
 * @param {numeric} height - высота.
 * @param {numeric} weight - вес.
 */
function ShowDescription(height, weight) {
	if (User.bmi === null) {
		throw User.bmi;
	}

	let bmiUser = new User();

	bmiUser.height = height;
	bmiUser.weight = weight;
	bmiUser.bmi = calculateBmi(bmiUser.weight, bmiUser.height);
	bmiUser.bmi = calculateBmi(bmiUser.weight, bmiUser.height);

	let desc = describeBmi(bmiUser.bmi);

	if ("Недостаточная масса" === desc) {
		alert(
			DESCRIPTION_UNDERWEIGHT
		);
	}

	if ("Нормальная масса" === desc) {
		alert(
			"Вы прекрасны С:"
		);
	}

	if ("Избыточная масса" === desc) {
		alert(
			DESCRIPTION_OVERWEIGHT
		);
	}

	if ("Ожирение 1 степени" === desc) {
		alert(
			DESCRIPTION_OBESITY_ONE_DEGREE
		);
	}

	if ("Ожирение 2 степени" === desc) {
		alert(
			DESCRIPTION_OBESITY_TWO_DEGREE
		);
	}

	if ("Ожирение 3 степени" === desc) {
		alert(
			DESCRIPTION_OBESITY_THREE_DEGREE
		);
	}
}

/**
 * Навешивание функции на нажатие кнопки.
 */
calculateButton.addEventListener("click", function () {
	ShowBmi(nameInput.value, heightInput.value, weightInput.value);
});

/**
 * Навешивание функции на нажатие кнопки.
 */
descriptionButton.addEventListener("click", function () {
	ShowDescription(heightInput.value, weightInput.value);
});
