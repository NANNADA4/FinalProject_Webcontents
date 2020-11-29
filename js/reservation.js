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

    var confirm_check = confirm(
        "예약 날짜 : " +
            dateValue +
            "일, 예약 시간 : " +
            timeValue +
            "분, 전화번호 : " +
            textValue +
            ", 인원수 : " +
            numberValue +
            "명, 이메일 : " +
            emailValue +
            "이 맞나요?"
    );
    if (confirm_check == true) {
        alert("!!!하단의 예약 확인 버튼을 눌러주셔야 예약이 됩니다!!!");
        var MailSend = document.getElementById("sendMail");
        MailSend.innerHTML =
            "<a href='mailto:coco96062233@gmail.com," +
            emailValue +
            "?subject=[예약] " +
            dateValue +
            " " +
            timeValue +
            " " +
            numberValue +
            "명 &body= 더덕향을 이용해주셔서 감사합니다. 본 이메일은 예약 임시확인 이메일입니다. %0D%0A 일시 : " +
            dateValue +
            " " +
            timeValue +
            "%0D%0A 인원 수 : " +
            numberValue +
            "%0D%0A 휴대전화 번호 : " +
            textValue +
            "%0D%0A 문의전화 : 033-335-6888 더덕향'>예약 확인</a>";
    } else if (confirm_check == false) {
        alert("예약이 취소됩니다.");
    }
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
