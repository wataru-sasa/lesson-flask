// console.log("12345tresdcf");

// var position = "Nakamura";

// position = "omura";
// console.log(position);

// 数学で言うと
// position = "nakamura"
// position = "sakamoto"
// position = "nakamura" = "sakamoto"

// var game = "switch";
// console.log(game);

// var tax = 1.1;
// console.log(tax);

// tax = "1.1";
// console.log(tax);

// var num = 5;
// console.log(num + 5);
// console.log(num - 5);
// console.log(num * 5);
// console.log(num / 5);
// console.log(num % 5);

// var num2 = "12";
// console.log(num2 + 3);

// var count;
// count = 0;
// console.log(count);
// console.log(count += 1);
// console.log(count -= 1);
// console.log(count *= 1);

// var click = 0;
// console.log(++click);
// console.log(--click);

// var click2 = 0;
// console.log(click2++);
// console.log(click2--);
// console.log(click2);

// console.log('Hello');
// console.log("I'm saito");

// ここから閉じます！！
// console.log("suna" + "baco");

// var str1;
// var str2;

// str1 = "suna";
// str2 = "baco";

// str3 = str1 + str2;
// console.log(str3);

// str3 = str2 + str1;
// console.log(str3);

// str2 = str1;
// str3 = str1 + str2 + str1;
// console.log(str3);

// var surname = "Tataka";
// var name1 = "Taka";

// console.log(surname + name1);

// var name2 = "Mika";
// console.log(surname + name2);
// console.log(surname + name2);

// console.log("沖縄、八代、江別、高松".split("、"));
// console.log("香川県高松市".split("県"))

// var regions = ["沖縄", "八代", "江別", "高松"];
// console.log(regions);
// console.log(regions[1]);
// console.log(regions[3]);

// regions[2] = "東京";
// console.log(regions);

// regions = {
//     "沖縄": "コザ",
//     "熊本": "八代",
//     "北海道": "江別",
//     "香川": "高松"
// };

// console.log(regions);
// console.log(regions["香川"]);

// regions["北海道"] = "東京";
// console.log(regions);

// console.log(regions["高松"]);

// var items = {
//     "コーラ": 130,
//     "ポカリ": 150,
//     "サイダー": 100,
//     "ビール": 200
// };

// console.log(items);
// console.log(items["ビール"]);

// sum = items["ビール"] + items["コーラ"] + items["ポカリ"];
// console.log(sum);

//比較演算
// var x = 1;
// var y = 5;
// var z = "1";

// console.log(x == y);
// console.log(x < y);
// console.log(x > y);
// console.log(x != y);
// console.log(x == z);
// console.log(x === y);

// console.log("hoge" == "hoge");

// 条件文
// var wakeUpTime = 7;
// if (wakeUpTime > 11) {
//     console.log("寝坊");
// } else if (wakeUpTime > 9) {
//     console.log("間に合った");
// } else if (wakeUpTime > 6) {
//     console.log("早起き");
// } else {
//     console.log("おじいさん");
// }

// var limit = 10;
// var getup = 8;

// if (limit < getup) {
//     console.log("遅刻です");
// } else if (limit == getup) {
//     console.log("ギリギリセーフ");
// } else {
//     console.log("よくがんばりました");
// };

//for文
// for (var i = 10; i > 0; i--) {
//     console.log(i);
// }
// console.log("終わったよ");

// 関数の定義
// function greet() {
//     console.log("Hello");
// }

// greet();

// function greet(name) {
//     message = "中村さん" + name;
//     return message
//     // console.log(message);
// }
// console.log(greet("ブラウニー"));

// function sum(x, y) {
//     total = x + y;
//     return total;
// }
// console.log(sum(10, 15));

// DOMのこと
// var text_node = document.getElementById("text");
// console.log(text_node);
// text_node.textContent = "書き換えた";
// console.log(text_node.textContent);

// var btn_note = document.getElementById("change");
// console.log(btn_note);
// btn_note.addEventListener("click", changeText);

// function changeText() {
//     var text_node = document.getElementById("text");
//     text_node.textContent = "ボタンがクリックされました！！！";
// }

$(function () {
    $("#text").text("ノードの更新");
    $("#toggle_btn").on('click', function () {
        $("p").toggle();
    });
    $("#toggle_btn").on('click', function () {
        $("header").toggle();
    });
    $("#color_btn").on('click', function () {
        $("#color").css('color', 'red');
    });
    $("#color_btn").on('click', function () {
        $("#color").css('background-color', 'blue');
    });
    $("#add_class").on('click', function () {
        $("#text").toggleClass("sunabaco");
    });
    $("#change_image").on('click', function () {
        $("img").attr('src', './img/rabbit.jpg');
    });
    $('.hum_menu').on('click', function () {
        $('header').toggleClass('open');
    });
});