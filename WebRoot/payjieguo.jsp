<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2014/12/25
  Time: 11:16
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="s" uri="/struts-tags" %>
<html>
<head>
    <title></title>
</head>
<body>
订单：<%=request.getSession().getAttribute("agent_bill_id")%>,<s:property value="paymess"></s:property>
<script language="javascript" type="text/javascript">
    var i = 5;
    var intervalid;
    intervalid = setInterval("fun()", 1000);
    function fun() {
        if (i == 0) {
            window.location.href = "zhunbei.jsp";
            clearInterval(intervalid);
        }
    }
        </script>
    </body>
</html>
