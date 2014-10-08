// sort_table 排序时间
function sortTable(tableId, Idx, t_tr, asd) {
    try {
        HTMLElement.prototype.__defineGetter__
        (
            "innerText",
            function () {
                var anyString = "";
                var childS = this.childNodes;
                for (var i = 0; i < childS.length; i++) {
                    if (childS[i].nodeType == 1)
                        anyString += childS[i].tagName == "BR" ? '"n' : childS[i].innerText;
                    else if (childS[i].nodeType == 3)
                        anyString += childS[i].nodeValue;
                }
                return anyString;
            }
        );
    }
    catch (e) {
    }//firfox兼容innerText
    var t_table = document.getElementById(tableId);
    var tbody = t_table.getElementsByTagName("tbody");
    var num_t = tbody.length;

    //比较各个tobdy中的时间
    for (var i = 0; i < num_t; i++) {
        var tbody1 = t_table.getElementsByTagName("tbody")[i];
        for (var j = i + 1; j < num_t; j++) {
            var tbody2 = t_table.getElementsByTagName("tbody")[j];
            var tr = tbody1.rows;
            var tr1 = tbody2.rows;
            var trValue = new Array();
            var trValue1 = new Array();
            trValue[0] = tr[t_tr].cells[Idx].innerText;//取出时间所在单元格所对应的值
            var tr1_str = trValue[0].length;
            var tr1_num = trValue[0].substr(tr1_str - 12);//将时间截取出来
            trValue1[0] = tr1[t_tr].cells[Idx].innerText;
            var tr1_str1 = trValue1[0].length;
            var tr1_num1 = trValue1[0].substr(tr1_str1 - 12);
            var trValue2 = new Array();
            trValue[0] = tr1_num;
            trValue1[0] = tr1_num1;
            // 升序 交换tbody
            if (asd == 'asc') {
                if (trValue[0] > trValue1[0]) {
                    var cloneTr = tbody1.cloneNode(true); //交换位置,交换会失败,替换后,会少一行
                    tbody2.parentNode.replaceChild(cloneTr, tbody2);
                    tbody1.parentNode.replaceChild(tbody2, tbody1);
                    tbody1 = tbody2;
                }
            }
            //降序 交换tbody
            else {
                if (trValue[0] < trValue1[0]) {
                    var cloneTr = tbody1.cloneNode(true); //交换位置,交换会失败,替换后,会少一行
                    tbody2.parentNode.replaceChild(cloneTr, tbody2);
                    tbody1.parentNode.replaceChild(tbody2, tbody1);
                    tbody1 = tbody2;
                }
            }
        }
    }//顺序比较各个tbody
}
	