//加载完后排序价格
function sortTable2(tableId, Idx) {
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
    } //firfox兼容innerText
    var t_table = document.getElementById(tableId);
    var tbody = t_table.getElementsByTagName("tbody");
    var num_t = tbody.length;//获得tbody个数
    for (var i = 0; i < num_t; i++) {
        var tbody1 = t_table.getElementsByTagName("tbody")[i];
        var tb_tr = tbody1.rows;
        var num_t_tr = tbody1.rows.length;
        //比较价格并倒序
        for (var j = 1; j < num_t_tr; j = j + 2) {
            var tr1 = tb_tr[j];
            for (var k = j + 2; k < num_t_tr; k = k + 2) {
                var tr1_td = tr1.cells[Idx].innerText;//取出价格所在单元格所对应的值

                var len1 = tr1_td.length;
                var tr1_str = tr1_td.substr(4);
                var tr1_str_len = tr1_str.length;
                //取出价格
                for (var ii = 0; ii < tr1_str_len; ii++) {
                    var pri_str1 = tr1_str.substr(ii, 1);
                    var pri_str2 = parseInt(pri_str1);
                    if (isNaN(pri_str2)) {
                        var mm = ii;
                        break;
                    }
                }
                var tr1_str = tr1_str.substr(0, mm);//取出价格
                //取出价格 is over
                var tr1_int = parseInt(tr1_str, 10);//将价格转换为数值
                var tr2 = tb_tr[k];
                var tr2_td = tr2.cells[Idx].innerText;//取出价格所在单元格所对应的值
                var tr2_str = tr2_td.substr(4);
                var tr2_str_len = tr2_str.length;
                //取出价格
                for (var iii = 0; i < tr2_str_len; iii++) {
                    var pri_str1 = tr2_str.substr(iii, 1);
                    var pri_str2 = parseInt(pri_str1);
                    if (isNaN(pri_str2)) {
                        var mmm = iii;
                        break;
                    }
                }
                var tr2_str = tr2_str.substr(0, mmm);//取出价格
                //取出价格 over
                var tr2_int = parseInt(tr2_str, 10);////将价格2转换为数值
                //对有升序的价格 交换tr 降序
                if (tr1_int < tr2_int) {
                    var cloneTr = tr1.cloneNode(true); //交换位置,交换会失败,替换后,会少一行
                    tr2.parentNode.replaceChild(cloneTr, tr2);
                    tr1.parentNode.replaceChild(tr2, tr1);
                    tr1 = tr2;
                }
            }
        }
    }//for end
}