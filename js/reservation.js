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

function formsubmit() {
    if (!document.form1.date.value) {
        alert("날짜를 입력해주세요.");
    } else if (!document.form1.time.value) {
        alert("시간을 입력해주세요.");
    } else if (!document.form1.text.value) {
        alert("전화번호를 입력해주세요.");
    } else if (!document.form1.number.value) {
        alert("인원 수를 입력해주세요.");
    } else if (!document.form1.email.value) {
        alert("이메일을 입력해주세요.");
    } else {
        return false;
    }
}
