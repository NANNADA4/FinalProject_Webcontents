function printTime() {
    var clock = document.getElementById("clock");

    var now = new Date(); // 현재시간

    var year = now.getFullYear();
    var month = now.getMonth();
    var date = now.getDate();

    var nowTime = year + "년 " + (month + 1) + "월 " + date + "일";

    clock.innerHTML = nowTime;
}

window.onload = function () {
    printTime();
};

function check() {
    var dateValue = document.getElementById("date1").value;
    var timeValue = document.getElementById("time1").value;
    var textValue = document.getElementById("text1").value;
    var numberValue = document.getElementById("number1").value;
    var emailValue = document.getElementById("email1").value;

    confirm(
        dateValue +
            "일, " +
            timeValue +
            "시, 전화번호 : " +
            textValue +
            ", " +
            numberValue +
            "명, 이메일 : " +
            emailValue +
            "이 맞나요?"
    );
}

function formsubmit() {
    if (!document.getElementById("date1").value) {
        alert("날짜를 입력해주세요.");
    } else if (!document.getElementById("time1").value) {
        alert("시간을 입력해주세요.");
    } else if (!document.getElementById("text1").value) {
        alert("전화번호를 입력해주세요.");
    } else if (!document.getElementById("number1").value) {
        alert("인원 수를 입력해주세요.");
    } else if (!document.getElementById("email1").value) {
        alert("이메일을 입력해주세요.");
    } else {
        check();
        return false;
    }
}
