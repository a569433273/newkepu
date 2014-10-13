//发送验证码
var InterValObj; //timer变量，控制时间
var count = 60; //间隔函数，1秒执行
var curCount;//当前剩余秒数
function sendMessage() {
            curCount = count;
            var dealType; //验证方式
           var uid=$("#uid").val();//用户uid
            //设置button效果，开始计时
                $("#btnSendCode").attr("disabled", "true");
				$("#btnSendCode").removeClass("ipt_but");
				$("#btnSendCode").removeClass("ipt_but1");
				$("#btnSendCode").removeClass("ipt_but2");
				$("#btnSendCode").addClass("ipt_but2");
		       $("#btnSendCode").val("请在" + curCount + "秒内输入验证码");				
                InterValObj = window.setInterval(SetRemainTime, 1000); //启动计时器，1秒执行一次
            }
        //timer处理函数
function SetRemainTime() {
            if (curCount == 0) {                
                window.clearInterval(InterValObj);//停止计时器
                $("#btnSendCode").removeAttr("disabled");//启用按钮
				$("#btnSendCode").removeClass("ipt_but");
				$("#btnSendCode").removeClass("ipt_but1");
				$("#btnSendCode").removeClass("ipt_but2");
				$("#btnSendCode").addClass("ipt_but1");
                $("#btnSendCode").val("重新发送验证码");
            }
            else {
                curCount--;	
				$("#btnSendCode").removeClass("ipt_but");
				$("#btnSendCode").removeClass("ipt_but1");
				$("#btnSendCode").removeClass("ipt_but2");
				$("#btnSendCode").addClass("ipt_but2");		
                $("#btnSendCode").val("请在" + curCount + "秒内输入验证码");
				
            }
        }