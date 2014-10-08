// 切换往返程
function one_way() {
    var obj = document.getElementById('air_type');
    var index = obj.selectedIndex;
    var obj1 = document.getElementById("db_way");
    if (index == 0) {
        obj1.style.display = "none";
    }
    else {
        obj1.style.display = "block";
    }

}