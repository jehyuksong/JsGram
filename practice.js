// var btn = document.querySelector(".hello-btn");
// var btn2 = document.querySelector(".hello-btn2");
// var btn3 = document.querySelector(".hello-btn3");
// var hello = document.querySelector("#hello-auto");

// function btnClickHandler() {
//   hello.style.background = "purple";
// }

// function btnClickHandler2() {
//   hello.style.background = "yellow";
// }

// function btnClickHandler3() {
//   hello.style.background = "blue";
// }

// btn.addEventListener("click", btnClickHandler);
// btn2.addEventListener("click", btnClickHandler2);
// btn3.addEventListener("click", btnClickHandler3);

var btn = document.querySelector(".btn"); // 버튼을 가져옴
var mainTitle = document.querySelector("#main-title"); // 메인타이틀을 가져옴

function btnClickHandler() {
  mainTitle.style.background = "dodgerblue";
} // 클릭했을 때 발생할 함수를 만들어줌

btn.addEventListener("click", btnClickHandler);
// 클릭이 발생 했을 때 btnClickHandler가 발생하게끔 설정해
