<%--suppress ALL --%>
<%@ page language="java" pageEncoding="UTF-8" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
    <title></title>
</head>
<body>
<form id="frmSubmit" method="post" name="frmSubmit" action="https://pay.heepay.com/Payment/Index.aspx">
    <input type="text" name="version" value="1" />
    <input type="text" name="agent_id" value="1951704" />
    <input type="text" name="agent_bill_id" value="<%=request.getSession().getAttribute("agent_bill_id")%>" />
    <input type="text" name="agent_bill_time" value="<%=request.getSession().getAttribute("agent_bill_time")%>" />
    <input type="text" name="pay_type" value="20" />
    <input type="text" name="pay_code" value="0" />
    <input type="text" name="pay_amt" value="<%=request.getSession().getAttribute("pay_amt")%>" />
    <input type="text" name="notify_url" value="http://58.132.171.39:3991/heepaynotify.action" />
    <input type="text" name="return_url" value="http://58.132.171.39:3991/heepayreturn.action" />
    <input type="text" name="user_ip" value="<%=request.getSession().getAttribute("user_ip")%>" />
    <input type="text" name="goods_name" value="jipiao" />
    <input type="text" name="remark" value="<%=request.getSession().getAttribute("member_id")%>" />
    <input type="text" name="is_test" value="1" />
    <input type="text" name="sign" value="<%=request.getSession().getAttribute("sign")%>" />
</form>
<script language="javascript">
    window.onload=function(){document.frmSubmit.submit();}
</script>
</body>
</html>
