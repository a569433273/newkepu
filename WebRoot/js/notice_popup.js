function notice_popup(nm_id){
    var ttt=document.getElementById(nm_id).innerHTML;
	document.getElementById("mNt2_1").innerHTML="";
	document.getElementById("mNt2_1").innerHTML=ttt;
	var aa=document.getElementById("mNt_2").offsetHeight;
	 var box =160;
		var th= $(window).scrollTop()+$(window).height()/1.6-box;
		var h =document.body.clientHeight;
		var rw =$(window).width()/2-box;
		$(".mNotice_div").animate({top:th,opacity:1,width:420,height:aa+50,right:rw},500);
	   $("#z_h").css({
			display:"block",height:$(document).height()
		});
	 return false;
	}
//关闭通知详情
function noticed_close(){
	 $(".mNotice_div").animate({top:0,opacity:0,width:0,height:0,right:0},500);
	$("#z_h").css("display","none");
	}