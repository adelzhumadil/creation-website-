function checkAnswers() {
    var correctAnswers = 0;
    var answer1 = document.querySelector('input[name="question1"]:checked').value;
    var answer2 = document.querySelector('input[name="question2"]:checked').value;
    var answer3 = document.querySelector('input[name="question3"]:checked').value;
    var answer4 = document.querySelector('input[name="question4"]:checked').value;
    var answer5 = document.querySelector('input[name="question5"]:checked').value;

    if (answer1 === "zefir") {
        correctAnswers++;
        document.querySelector('input[name="question1"][value="zefir"]').parentNode.style.color = "#00f808";
    } else {
        document.querySelector('input[name="question1"][value="zefir"]').parentNode.style.color = "#ff0000";
    }

    if (answer2 === "cottage_cheese") {
        correctAnswers++;
        document.querySelector('input[name="question2"][value="cottage_cheese"]').parentNode.style.color = "#00f808";
    } else {
        document.querySelector('input[name="question2"][value="cottage_cheese"]').parentNode.style.color = "#ff0000";
    }

    if (answer3 === "olive_oil") {
        correctAnswers++;
        document.querySelector('input[name="question3"][value="olive_oil"]').parentNode.style.color = "#00f808";
    } else {
        document.querySelector('input[name="question3"][value="olive_oil"]').parentNode.style.color = "#ff0000";
    }

    if (answer4 === "sugar") {
        correctAnswers++;
        document.querySelector('input[name="question4"][value="sugar"]').parentNode.style.color = "#00f808";
    } else {
        document.querySelector('input[name="question4"][value="sugar"]').parentNode.style.color = "#ff0000";
    }

    if (answer5 === "celery") {
        correctAnswers++;
        document.querySelector('input[name="question5"][value="celery"]').parentNode.style.color = "#00f808";
    } else {
        document.querySelector('input[name="question5"][value="celery"]').parentNode.style.color = "#ff0000";
    }
    
    alert("Количество правильных ответов: " + correctAnswers);
}