//单击单选按钮控制往返程
function chge_radio(rd_id){
	if(rd_id=="idx_radio2"){
		document.getElementById("radio_cnt1").innerHTML="<img src='images/radio_checked.jpg'  id='idx_radio2' />";
		document.getElementById("radio_cnt").innerHTML="<img src='images/radio.png' style='cursor:pointer;' id='idx_radio1' onclick='chge_radio(this.id)'/>";
		document.getElementById("go_arrive").style.display='none';
		}
	 else{
		document.getElementById("radio_cnt").innerHTML="<img src='images/radio_checked.jpg' style='cursor:pointer;' id='idx_radio1' onclick='chge_radio(this.id)'/>";
		document.getElementById("radio_cnt1").innerHTML="<img src='images/radio.png'  id='idx_radio2'/>";
		 document.getElementById("go_arrive").style.display='none';
		 }
	
	}
//单击显示日历
function disp_keyboard(){
	    $('.city_ipt2').kuiDate({
		className:'city_ipt2',
		isDisabled: "0"  // isDisabled为可选参数，"0"表示今日之前不可选，"1"标志今日之前可选
  	     });
	}
	
//导航中的效果
function move_bar(bar_id){
	var num=bar_id.substr(7);
	$("#"+bar_id).removeClass("idx_2");
	$("#"+bar_id).addClass("idx_1");
	document.getElementById("nav_bar_bg"+num).style.display='block';
	}

function hide_bar(bar_id){
	var num=bar_id.substr(7);
	$("#"+bar_id).removeClass("idx_1");
	$("#"+bar_id).addClass("idx_2");
	document.getElementById("nav_bar_bg"+num).style.display='none';
	}

//新闻中去除多余字体
function patch_cntlen(){
	var classElements = [],allElements = document.getElementsByTagName('*');
     for (var i=0; i< allElements.length; i++ )  {
	      if (allElements[i].className == "cnt_len" ) 
		  {	
		   var ss=allElements[i].innerHTML.length;
		   if(ss>13){
			   allElements[i].innerHTML=allElements[i].innerHTML.substr(0,13)+'...';
			   }
		  }}
	}
//鼠标经过banner中的文字
function ban_ChgBg(C_id){
	var txt=C_id.substr(0,7);
	var num=C_id.substr(7);
	//将所有的背景先变成白色
    for(var i=1; i<=4;i++){
		if(i==1){
	 $("#ban_cnt1").removeClass("ban_li1");
	  $("#ban_cnt1").addClass("ban_li11");
			}
	  else if(i==4){
      $("#ban_cnt4").removeClass("ban_li22");
	  $("#ban_cnt4").addClass("ban_li2");
		}
	  else{
		$("#"+txt+i).removeClass("ban_libg");
		 $("#"+txt+i).addClass("ban_li");	
		  }
	 }
	 //先将右边隐藏
	 for(var k=1; k<=3; k++){
		 document.getElementById("idx_banImg"+k).style.display='none';
		 }
	 //切换
	if(num=='1'){
			

	 $("#ban_cnt1").removeClass("ban_li11");
	  $("#ban_cnt1").addClass("ban_li1");
	  document.getElementById("idx_banImg1").style.display='block';
	  document.getElementById("business").style.display="none";
	  document.getElementById("business1").style.display="none";
	  document.getElementById("none_bus").style.display="block";
	  document.getElementById("radio_cnt").innerHTML="<img src='images/radio_checked.jpg' style='cursor:pointer;' id='idx_radio1' onclick='chge_radio(this.id)'/>";
	 document.getElementById("radio_cnt1").innerHTML="<img src='images/radio.png'  id='idx_radio2'/>";
	 document.getElementById("go_arrive").style.display='none';
	  }
	else if(num=='4'){
		document.getElementById("idx_banImg3").style.display='block';
      $("#"+C_id).removeClass("ban_li2");
	  $("#"+C_id).addClass("ban_li22");
		}
	else{
		$("#"+C_id).removeClass("ban_li");
		 $("#"+C_id).addClass("ban_libg");

		//公务卡机票
		if(num==2){
			document.getElementById("idx_banImg1").style.display='block';
	        document.getElementById("none_bus").style.display="none";
		    document.getElementById("business").style.display="block";
		    document.getElementById("business1").style.display="block";
			document.getElementById("radio_cnt").innerHTML='<img src="images/radio_blue.png" style="cursor:pointer;" id="idx_Busradio1" onclick="chge_Busradio(this.id)"/>';
			document.getElementById("radio_cnt1").innerHTML="<img src='images/radio.png'  id='idx_Busradio2' />";
			document.getElementById("go_arrive").style.display='none';
			}
		 else if(num==3){document.getElementById("idx_banImg2").style.display='block';}
		}
}

//公务卡单选按钮
function chge_Busradio(c_id){
	if(c_id=="idx_Busradio2"){
		document.getElementById("radio_cnt1").innerHTML='<img src="images/radio_blue.png" style="cursor:pointer;" id="idx_Busradio2" onclick="chge_Busradio(this.id)"/>';
		document.getElementById("radio_cnt").innerHTML="<img src='images/radio.png'  id='idx_Busradio1' />";
		document.getElementById("go_arrive").style.display='block';
		}
	 else{
		document.getElementById("radio_cnt").innerHTML="<img src='images/radio_blue.png' style='cursor:pointer;' id='idx_Busradio1' onclick='chge_Busradio(this.id)'/>";
		document.getElementById("radio_cnt1").innerHTML="<img src='images/radio.png'  id='idx_Busradio2' />";
		 document.getElementById("go_arrive").style.display='none';
		 }

	}
	
//机票提交
function noneBus_sumit(){
	document.getElementById("air_smit").action="plane/searchresult.jsp";
	}
//公务卡机票提交
function bus_sumit(){
	document.getElementById("air_smit").action="plane/searchresult.jsp";
	}