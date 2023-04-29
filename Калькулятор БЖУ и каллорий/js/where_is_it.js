function checkAnswers() {
    var correctAnswers = 0;
    var answer1 = document.querySelector('input[name="question1"]:checked').value;
    var answer2 = document.querySelector('input[name="question2"]:checked').value;
    var answer3 = document.querySelector('input[name="question3"]:checked').value;
    var answer4 = document.querySelector('input[name="question4"]:checked').value;
    var answer5 = document.querySelector('input[name="question5"]:checked').value;
    var answer6 = document.querySelector('input[name="question6"]:checked').value;

    if (answer1 === "crossfit") {
        correctAnswers++;
        document.querySelector('input[name="question1"][value="crossfit"]').parentNode.style.color = "#00f808";
    } else {
        document.querySelector('input[name="question1"][value="crossfit"]').parentNode.style.color = "#ff0000";
    }

    if (answer2 === "crossfit") {
        correctAnswers++;
        document.querySelector('input[name="question2"][value="crossfit"]').parentNode.style.color = "#00f808";
    } else {
        document.querySelector('input[name="question2"][value="crossfit"]').parentNode.style.color = "#ff0000";
    }

    if (answer3 === "yoga") {
        correctAnswers++;
        document.querySelector('input[name="question3"][value="yoga"]').parentNode.style.color = "#00f808";
    } else {
        document.querySelector('input[name="question3"][value="yoga"]').parentNode.style.color = "#ff0000";
    }

    if (answer4 === "bodybuilding") {
        correctAnswers++;
        document.querySelector('input[name="question4"][value="bodybuilding"]').parentNode.style.color = "#00f808";
    } else {
        document.querySelector('input[name="question4"][value="bodybuilding"]').parentNode.style.color = "#ff0000";
    }

    if (answer5 === "bodybuilding") {
        correctAnswers++;
        document.querySelector('input[name="question5"][value="bodybuilding"]').parentNode.style.color = "#00f808";
    } else {
        document.querySelector('input[name="question5"][value="bodybuilding"]').parentNode.style.color = "#ff0000";
    }

    if (answer6 === "yoga") {
        correctAnswers++;
        document.querySelector('input[name="question6"][value="yoga"]').parentNode.style.color = "#00f808";
    } else {
        document.querySelector('input[name="question6"][value="yoga"]').parentNode.style.color = "#ff0000";
    }

    alert("Количество правильных ответов: " + correctAnswers);
}