//Movement Animation to happen
const card = document.querySelector(".card");
//Items
const title = document.querySelector(".title");
const EntryImage = document.querySelector(".EntryImage img");
const MovePage = document.querySelector(".MovePage");
const description = document.querySelector(".info h3");
const sizes = document.querySelector(".sizes");
//Moving Animation Event
card.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//Animate In
card.addEventListener("mouseenter", (e) => {
    card.style.transition = "none";
    //Popout
    title.style.transform = "translateZ(150px)";
    EntryImage.style.transform = "translateZ(200px) rotateZ(-45deg)";
    description.style.transform = "translateZ(125px)";
    sizes.style.transform = "translateZ(100px)";
});
//Animate Out
card.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //Popback
    title.style.transform = "translateZ(0px)";
    EntryImage.style.transform = "translateZ(0px) rotateZ(0deg)";
    description.style.transform = "translateZ(0px)";
    sizes.style.transform = "translateZ(0px)";
});
//EntryTitle onmouse event
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
