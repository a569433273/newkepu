//onfocus 默认值
function meeting_num(){
	if(document.getElementById("Mt_nm").value=="请输入要搜索的会议编号"){
		document.getElementById("Mt_nm").value="";
		}
	}
//onblur
function meeting_dhid(){
	if(document.getElementById("Mt_nm").value==""){
		document.getElementById("Mt_nm").value="请输入要搜索的会议编号"
		}
	}
//单击取消时 弹出框消失
function M_Div_hid(){
    $(".M_div1").animate({top:0,opacity: 'hide',width:0,height:0,right:0},500);
	$("#z_h").css("display","none");
	}
//单击搜索时正确的时候跳转
function M_Div_href(){
	var id1_val=document.getElementById("Mt_nm").value;
	if (id1_val!="" && id1_val!="请输入要搜索的会议编号"){
		return true;
		}
	else{
		alert("请输入正确的会议编号");
		return false;
		}
	}
//搜索会议弹出框
function Meet_Sear(){
	 var box =160;
		var th= $(window).scrollTop()+$(window).height()/1.6-box;
		var h =document.body.clientHeight;
		var rw =$(window).width()/2-box;
		$(".M_div1").animate({top:th,opacity:'show',width:250,height:150,right:rw},500);
	   $("#z_h").css({
			display:"block",height:$(document).height()
		});
	}
