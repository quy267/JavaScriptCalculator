/**
 * Created by MyPC on 16/10/2016.
 */
$(document).ready(function () {
    var res = 0;
    var op = "";
    var display = true;
    var input = '';
    var screen = $('#answer');
    var scrtext = '';

    function updateResult(num, opr) {
        display = true;
        switch (op) {
            case "+":
                res += num;
                break;
            case "-":
                res -= num;
                break;
            case "/":
                res /= num;
                break;
            case "*":
                res *= num;
                break;
            default:
                res = num == 0 ? res : num;
        }
        op = opr == "=" ? "" : opr;
        scrtext = res + "";
        screen.text(scrtext.length > 15 ? scrtext.substr(0, 15) : scrtext);
    }

    $('button').click(function () {
        input = $(this).attr("value");
        scrtext = $('#answer').text();
        console.log("input :" + input);
        console.log("scrtext :" + scrtext);
        switch (input) {
            case "ac":
                res = 0;
                op = "";
                display = true;
                screen.text("0");
                break;
            case "-/+":
                screen.text(-parseFloat(scrtext) + "");
                break;
            case "%":
                screen.text(parseFloat(scrtext) / 100 + "");
                display = true;
                break;
            case "+":
                updateResult(parseFloat(scrtext), "+");
                break;
            case "-":
                updateResult(parseFloat(scrtext), "-");
                break;
            case "x":
                updateResult(parseFloat(scrtext), "*");
                break;
            case "/":
                updateResult(parseFloat(scrtext), "/");
                break;
            case "=":
                updateResult(parseFloat(scrtext), "=");
                break;
            default:
                if (scrtext.length >= 15) {//improve letter
                    break;
                }
                if (display) {
                    screen.text(input);
                    display = false;
                }
                else {
                    screen.text(scrtext + input);
                }

        }

    });

});
