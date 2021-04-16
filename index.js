//-----------------------------------------------------//
//　　jQueryに頼らずネイティブの記述で書く
//　　拡張性のあるコードを心がける
//-----------------------------------------------------//

//　サクチケ 4h
var num1 = 14400;

//　秘薬 2h
var num2 = 7200;

// サクチケ 1h
var num3 = 3600;

// バフ30m
var num4 = 1800;

//　バフ 30m
var num5 = 1800;

//　バフ 20m
var num6 = 1200;

// バフ 15m
var num7 = 900;

//　バフ 10m
var num8 = 600;

//　動作確認テスト用
var num9 = 5;


var time1;
var time2;
var time3;
var time4;
var time5;
var time6;
var time7;
var time8;
var time9;



var intervalId1;
var intervalId2;
var intervalId3;
var intervalId4;
var intervalId5;
var intervalId6;
var intervalId7;
var intervalId8;
var intervalId9;









var intervalId;





// var num1 = 900;
// num1 = clock(num1);
// console.log(num1);




//-----------------------------------------------------//
//　初期化設定
//-----------------------------------------------------//
window.onload = function() {

  time1 = document.getElementById('time1');
  time2 = document.getElementById('time2');
  time3 = document.getElementById('time3');
  time4 = document.getElementById('time4');
  time5 = document.getElementById('time5');
  time6 = document.getElementById('time6');
  time7 = document.getElementById('time7');
  time8 = document.getElementById('time8');
  time9 = document.getElementById('time9');

  clock1 = clock(num1);
  clock2 = clock(num2);
  clock3 = clock(num3);
  clock4 = clock(num4);
  clock5 = clock(num5);
  clock6 = clock(num6);
  clock7 = clock(num7);
  clock8 = clock(num8);
  clock9 = clock(num9);

  time1.innerHTML = clock1;
  time2.innerHTML = clock2;
  time3.innerHTML = clock3;
  time4.innerHTML = clock4;
  time5.innerHTML = clock5;
  time6.innerHTML = clock6;
  time7.innerHTML = clock7;
  time8.innerHTML = clock8;
  time9.innerHTML = clock9;

};



//-----------------------------------------------------//
//　ボタン1
//-----------------------------------------------------//
function start1(){
  if ((intervalId1 == null)&&(num1 != 0)) {
    intervalId1 = setInterval(function(){
      num1--;
      checkTimer()
      clock1 = clock(num1);
      time1.innerHTML = clock1;
      if (num1 <= 0){
        clearInterval(intervalId1);
        intervalId1 = null;
      }
   }, 1000);
 }
}
function reset1() {
  num1 = 14400;
  checkTimer()
  clock1 = clock(num1);
  time1.innerHTML = clock1;
  clearInterval(intervalId1);
  intervalId1 = null;
}


//-----------------------------------------------------//
//　ボタン2
//-----------------------------------------------------//
function start2(){
  if ((intervalId2 == null)&&(num2 != 0)) {
    intervalId2 = setInterval(function(){
      num2--;
      checkTimer()
      clock2 = clock(num2);
      time2.innerHTML = clock2;
      if (num2 <= 0){
        clearInterval(intervalId2);
        intervalId2 = null;
      }
   }, 1000);
 }
}
function reset2() {
  num2 = 7200;
  checkTimer()
  clock2 = clock(num2);
  time2.innerHTML = clock2;
  clearInterval(intervalId2);
  intervalId2 = null;
}


//-----------------------------------------------------//
//　ボタン3
//-----------------------------------------------------//
function start3(){
  if ((intervalId3 == null)&&(num3 != 0)) {
    intervalId3 = setInterval(function(){
      num3--;
      checkTimer()
      clock3 = clock(num3);
      time3.innerHTML = clock3;
      if (num3 <= 0){
        clearInterval(intervalId3);
        intervalId3 = null;
      }
   }, 1000);
 }
}
function reset3() {
  num3 = 3600;
  checkTimer()
  clock3 = clock(num3);
  time3.innerHTML = clock3;
  clearInterval(intervalId3);
  intervalId3 = null;
}


//-----------------------------------------------------//
//　ボタン4
//-----------------------------------------------------//
function start4(){
  if ((intervalId4 == null)&&(num4 != 0)) {
    intervalId4 = setInterval(function(){
      num4--;
      checkTimer()
      clock4 = clock(num4);
      time4.innerHTML = clock4;
      if (num4 <= 0){
        clearInterval(intervalId4);
        intervalId4 = null;
      }
   }, 1000);
 }
}
function reset4() {
  num4 = 1800;
  checkTimer()
  clock4 = clock(num4);
  time4.innerHTML = clock4;
  clearInterval(intervalId4);
  intervalId4 = null;
}


//-----------------------------------------------------//
//　ボタン5
//-----------------------------------------------------//
function start5(){
  if ((intervalId5 == null)&&(num5 != 0)) {
    intervalId5 = setInterval(function(){
      num5--;
      checkTimer()
      clock5 = clock(num5);
      time5.innerHTML = clock5;
      if (num5 <= 0){
        clearInterval(intervalId5);
        intervalId5 = null;
      }
   }, 1000);
 }
}
function reset5() {
  num5 = 1800;
  checkTimer()
  clock5 = clock(num5);
  time5.innerHTML = clock5;
  clearInterval(intervalId5);
  intervalId5 = null;
}


//-----------------------------------------------------//
//　ボタン6
//-----------------------------------------------------//
function start6(){
  if ((intervalId6 == null)&&(num6 != 0)) {
    intervalId6 = setInterval(function(){
      num6--;
      checkTimer()
      clock6 = clock(num6);
      time6.innerHTML = clock6;
      if (num6 <= 0){
        clearInterval(intervalId6);
        intervalId6 = null;
      }
   }, 1000);
 }
}
function reset6() {
  num6 = 1200;
  checkTimer()
  clock6 = clock(num6);
  time6.innerHTML = clock6;
  clearInterval(intervalId6);
  intervalId6 = null;
}


//-----------------------------------------------------//
//　ボタン7
//-----------------------------------------------------//
function start7(){
  if ((intervalId7 == null)&&(num7 != 0)) {
    intervalId7 = setInterval(function(){
      num7--;
      checkTimer()
      clock7 = clock(num7);
      time7.innerHTML = clock7;
      if (num7 <= 0){
        clearInterval(intervalId7);
        intervalId7 = null;
      }
   }, 1000);
 }
}
function reset7() {
  num7 = 900;
  checkTimer()
  clock7 = clock(num7);
  time7.innerHTML = clock7;
  clearInterval(intervalId7);
  intervalId7 = null;
}


//-----------------------------------------------------//
//　ボタン8
//-----------------------------------------------------//
function start8(){
  if ((intervalId8 == null)&&(num8 != 0)) {
    intervalId8 = setInterval(function(){
      num8--;
      checkTimer()
      clock8 = clock(num8);
      time8.innerHTML = clock8;
      if (num8 <= 0){
        clearInterval(intervalId8);
        intervalId8 = null;
      }
   }, 1000);
 }
}
function reset8() {
  num8 = 600;
  checkTimer()
  clock8 = clock(num8);
  time8.innerHTML = clock8;
  clearInterval(intervalId8);
  intervalId8 = null;
}


//-----------------------------------------------------//
//　ボタン9
//-----------------------------------------------------//
function start9(){
  if ((intervalId9 == null)&&(num9 != 0)) {
    intervalId9 = setInterval(function(){
      num9--;
      checkTimer()
      clock9 = clock(num9);
      time9.innerHTML = clock9;
      if (num9 <= 0){
        clearInterval(intervalId9);
        intervalId9 = null;
      }
   }, 1000);
 }
}
function reset9() {
  num9 = 5;
  checkTimer()
  clock9 = clock(num9);
  time9.innerHTML = clock9;
  clearInterval(intervalId9);
  intervalId9 = null;
}









//-----------------------------------------------------//
//　タイマーが時間切れになっていないかをチェック
//-----------------------------------------------------//
function checkTimer(){
  var checkCount = num1 * num2 * num3 * num4 * num5 * num6 * num7 * num8 * num9;
  console.log(checkCount);

  if (checkCount == 0) {
    document.getElementById('body').classList.add('body-over');
  }else {
    document.getElementById('body').classList.remove('body-over');
  }


}





//-----------------------------------------------------//
//　数字を時計表記に変える
//-----------------------------------------------------//
function clock(x){
  var hour = Math.floor(x % (24 * 60 * 60) / (60 * 60));
  var min = Math.floor(x % (24 * 60 * 60) % (60 * 60) / 60);
  var sec = x % (24 * 60 * 60) % (60 * 60) % 60;
  hour = addZero(hour);
  min = addZero(min);
  sec = addZero(sec);
  x = hour + ":" + min + ":" + sec;
  return x;
}


//-----------------------------------------------------//
//　数字が一桁の時、0を付け加える
//-----------------------------------------------------//
function addZero(value) {

  if (value < 10) {
    value = '0' + value;
  }
  return value;
}
























//-----------------------------------------------------//
//　スタートボタン
//-----------------------------------------------------//
// function start() {
//   console.log("スタート関数開始");
//   if (intervalId == null) {
//     intervalId = setInterval(function(){
//       count--;
//       var hour = Math.floor(count % (24 * 60 * 60) / (60 * 60));
//       var min = Math.floor(count % (24 * 60 * 60) % (60 * 60) / 60);
//       var sec = count % (24 * 60 * 60) % (60 * 60) % 60;
//       hour = addZero(hour);
//       min = addZero(min);
//       sec = addZero(sec);
//       time9.innerHTML = (hour + ":" + min + ":" + sec);
//       if (count <= 0){
//         console.log("0");
//         clearInterval(intervalId);
//         intervalId = null;
//       }
//
//    }, 1000);
//
//  }
// }


//-----------------------------------------------------//
//　リセットボタン
//-----------------------------------------------------//
// function reset() {
//   console.log("リセット関数開始");
//   count = 5;
//   var hour = Math.floor(count % (24 * 60 * 60) / (60 * 60));
//   var min = Math.floor(count % (24 * 60 * 60) % (60 * 60) / 60);
//   var sec = count % (24 * 60 * 60) % (60 * 60) % 60;
//   hour = addZero(hour);
//   min = addZero(min);
//   sec = addZero(sec);
//   time9.innerHTML = (hour + ":" + min + ":" + sec);
//   clearInterval(intervalId);
//   intervalId = null;
// }





//-----------------------------------------------------//
//　数字が一桁の時、0を付け加える
//-----------------------------------------------------//
// var addZero = function(value) {
//   if (value < 10) {
//     value = '0' + value;
//   }
//   return value;
// }

// function start(itemNum){
//   console.log("こんにちは");
// }
//
// function ctdown(itemNum){
//   console.log("カウントダウン開始");
//   var targetItem = document.querySelector(".Mtimer__timer_item:nth-of-type(" + itemNum + ")");
//   var targetHour = targetItem.querySelector(".hour").textContent;
//   var targetMin = targetItem.querySelector(".minute").textContent;
//   var targetSec = targetItem.querySelector(".second").textContent;
//   var targetSec = targetSec - 1;
//   if(targetSec < 10){
//     targetItem.querySelector(".second").innerHTML = "0" + targetSec;
//   }else{
//     targetItem.querySelector(".second").innerHTML = targetSec;
//   }
//   }
