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
