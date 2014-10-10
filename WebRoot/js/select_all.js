//全选复选框
function selct_all(se_id) {
    var se1_id = document.getElementById(se_id);
    if (se1_id.checked) {
        var classElements = [], allElements = document.getElementsByTagName('*');
        for (var i = 0; i < allElements.length; i++) {
            if (allElements[i].className == "only_slt") {
                allElements[i].checked = true
            }
        }
    }
    else {
        var classElements = [], allElements = document.getElementsByTagName('*');

        for (var i = 0; i < allElements.length; i++) {
            if (allElements[i].className == "only_slt") {
                allElements[i].checked = false
            }
        }
    }
}