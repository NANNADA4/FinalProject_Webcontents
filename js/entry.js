// mouseenter시 EntryImage 회전
const card = document.querySelector(".card");
const EntryImage = document.querySelector(".EntryImage img");

card.addEventListener("mouseenter", (e) => {
    EntryImage.style.transform = "rotateZ(-45deg)";
});
card.addEventListener("mouseleave", (e) => {
    EntryImage.style.transform = "rotateZ(0deg)";
});
// 클릭시 문장 변경
function ClickTitle1(t, o) {
    var o = document.getElementById(o);
    o.innerHTML = t;
}
function ClickTitle2(t, o) {
    var o = document.getElementById(o);
    o.innerHTML = t;
}
function ClickTitle3(t, o) {
    var o = document.getElementById(o);
    o.innerHTML = t;
}
function ClickTitle4(t, o) {
    var o = document.getElementById(o);
    o.innerHTML = t;
}
function ClickTitle5(t, o) {
    var o = document.getElementById(o);
    o.innerHTML = t;
}
//Page move with button click
function dbl_click(href) {
    location.href = href;
}
