// получаем форму
const form = document.getElementById('form');
    
// добавляем обработчик на отправку формы
form.addEventListener('submit', function(e) {
    e.preventDefault(); // отменяем действие по умолчанию (отправку формы)
    
    // получаем значения полей формы
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const weight = +document.getElementById('weight').value;
    const height = +document.getElementById('height').value;
    const age = +document.getElementById('age').value;
    const goal = document.getElementById('goal').value;
  
    
    // получаем выбранный уровень активности
    const activity = parseFloat(document.getElementById("activity").value);

    // рассчитываем базовую метаболическую скорость (БМС)
    let bmr = 0;
    if (gender === "male") {
        bmr = 88.36 + 13.4 * weight + 4.8 * height - 5.7 * age;
    } else {
        bmr = 447.6 + 9.2 * weight + 3.1 * height - 4.3 * age;
    }

    // рассчитываем калории в зависимости от цели
    let calories = 0;
    if (goal === "deficit") {
        calories = bmr * activity * 0.8;
    } else if (goal === "maintenance") {
        calories = bmr * activity;
    } else {
        calories = bmr * activity * 1.2;
    }

    // выводим результаты на страницу
    document.getElementById("bmr").textContent = Math.round(bmr);
    document.getElementById("calories").textContent = Math.round(calories);
    document.getElementById("result").style.display = "block";

    // вычисляем количество БЖУ в день
    const protein = weight * 2;
    const fat = weight * 1;
    const carbs = (calories - (protein * 4) - (fat * 9)) / 4;

    // выводим результаты на страницу
    const bmrResult = document.getElementById('bmr');
    const caloriesResult = document.getElementById('calories');
    const proteinResult = document.getElementById('protein');
    const fatResult = document.getElementById('fat');
    const carbsResult = document.getElementById('carbs');

    bmrResult.textContent = bmr.toFixed(2);
    caloriesResult.textContent = calories.toFixed(2);
    proteinResult.textContent = protein.toFixed(2);
    fatResult.textContent = fat.toFixed(2);
    carbsResult.textContent = carbs.toFixed(2);

    // показываем результаты
    const result = document.getElementById('result');
    result.style.display = 'block';

    const dryWeight = 1.1 * weight * (weight / height)

    // вычисляем количество соли в день (рекомендуемое количество - не более 6 граммов)
    const saltPerKg = 0.1; // количество соли на килограмм веса тела
    const salt = saltPerKg * weight;

    // вычисляем количество клетчатки в день (рекомендуемое количество - 25-30 граммов)
    const fiberPerKg = 0.5; // количество клетчатки на килограмм веса тела
    const fiber = fiberPerKg * weight;

    // вычисляем количество кофеина в день (рекомендуемое количество - не более 400 мг)
    const caffeinePerKg = 3; // количество кофеина на килограмм веса тела
    const caffeine = caffeinePerKg * weight;

    let water = 0;
    if (gender === "male") {
        water = 40 * weight;
    } else {
        water = 30 * weight;
    }

    // выводим результаты на страницу

    document.getElementById('salt').textContent = salt.toFixed(2);
    document.getElementById('fiber').textContent = fiber.toFixed(2);
    document.getElementById('caffeine').textContent = caffeine.toFixed(2);
    document.getElementById('water').textContent = water.toFixed(2);
});