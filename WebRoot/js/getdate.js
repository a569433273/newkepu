// 获取当前日期
function getdt() {
    var res_dt1 = new Date();
    var res_Year = res_dt1.getFullYear();
    var res_Mon = res_dt1.getMonth();
    var res_Day = res_dt1.getDate();
    res_Mon = res_Mon + 1;
    var res_dt2 = res_Year + '-' + res_Mon + '-' + res_Day;
    return res_dt2;
}
// 获取当前-7
function get7dt() {
//获取系统时间
    var LSTR_ndate = new Date();
    var LSTR_Year = LSTR_ndate.getFullYear();
    var LSTR_Month = LSTR_ndate.getMonth();
    var LSTR_Date = LSTR_ndate.getDate();
//处理
    var uom = new Date(LSTR_Year, LSTR_Month, LSTR_Date);
    uom.setDate(uom.getDate() - 7);//取得系统时间的前一天,重点在这里,负数是前几天,正数是后几天
    var LINT_MM = uom.getMonth();
    LINT_MM++;
    var LSTR_MM = LINT_MM;
    var LINT_DD = uom.getDate();
    var LSTR_DD = LINT_DD;
//得到最终结果
    uom = uom.getFullYear() + "-" + LSTR_MM + "-" + LSTR_DD;
    return uom;
}