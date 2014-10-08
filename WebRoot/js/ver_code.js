var code; //在全局 定义验证码
function createCode() {
    code = "";
    var codeLength = 4;//验证码的长度
    var checkCode = document.getElementById("checkCode");
    var selectChar = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');//所有候选组成验证码的字符，当然也可以用中文的

    for (var i = 0; i < codeLength; i++) {
        var charIndex = Math.floor(Math.random() * 36);
        var tt = "tt" + i;
        code += "<span class='tt" + i + "' >" + selectChar[charIndex] + "</span>"
    }
//       alert(code);
    if (checkCode) {
        checkCode.className = "code";
        checkCode.innerHTML = code;
        var colors = new Array("#490808", "#0d3203", "#5d5c5c", "#097f94", "#8a730a", "#620c77", "#17067c", "#dd25ce", "#0e6a04", "#c2410e");
        var classElements = [], allElements = document.getElementsByTagName('span');
        var all_c = allElements.length;
        for (var i = 0; i < codeLength; i++) {
            var tt = "tt" + i;
            for (var j = 0; j < all_c; j++) {
                if (allElements[j].className == tt) {
                    allElements[j].style.color = colors[Math.floor(Math.random() * 10)];
                }
            }
        }//for end
    }

}
