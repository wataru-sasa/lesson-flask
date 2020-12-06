console.log('Hello world');

var x ="こんにちは中村さん";
console.log(x);

var action = ["インセプション","スターウォーズ","アベンジャーズ"];
// console.log(action);
// console.log(action[1]);
console.log(action.length);

// var command = "出勤せよ！！";
// alert(command);

// 確認・入力ダイアログボックス
// var command = "本当にご本人ですか？";
// confirm(command);
// var name = prompt("本当にご本人ですか？");
// console.log(name);

var tax = 1.08;
var price = prompt("値段を入力してください");
var result = Math.round(price * tax);
alert("お買い上げは税込みで"+result+"です");



