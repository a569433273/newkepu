// 验证表单
//v姓名验证
function check_name(){
	var c_name=document.getElementById("ck_name");
	var c_text=c_name.value;
	var c_sp=document.getElementById("ck_nm");
	
	var patrn=/(?:[\u4E00-\u9FFF]{1,8}·\u4E00-\u9FFF]{1,8})|(?:[\u4E00-\u9FFF]{2,5})/;
	if(!patrn.exec(c_text)){
		c_sp.innerHTML="<img src='img/wrong_ck.jpg' id='ft_say'>";
		}
	else{
		c_sp.innerHTML="<img src='img/right_ck.jpg'>";
		$("#crh").remove();
		}

	}
function check_name1(){
	var c_name=document.getElementById("ck_name");
	var c_text=c_name.value;
	var c_sp=document.getElementById("ck_nm");
	if(c_text==""){
		c_sp.innerHTML="<img src='img/wrong_ck.jpg'>";
		}
	}
//电话验证
function ck_tel(){
	var c_name=document.getElementById("check_tel");
	var c_text=c_name.value;
	var c_sp=document.getElementById("ck_tl");
	var patrn=/^0?(13[0-9]|15[012356789]|18[0236789]|14[57])[0-9]{8}$/ ; 
	if(!patrn.exec(c_text)){
		c_sp.innerHTML="<img src='img/wrong_ck.jpg'>";
		}
	else{
		
		c_sp.innerHTML="<img src='img/right_ck.jpg'>";
		}
	}
function check_tel1(){
	
	var c_name=document.getElementById("check_tel");
	var c_text=c_name.value;
	var c_sp=document.getElementById("ck_tl");
	if(c_text==""){
		c_sp.innerHTML="<img src='img/wrong_ck.jpg'>";
		}
	}
//判断姓名
function ck_unm(id_name){//onkeyup

    var id1_name=id_name.substr(8);
	var id_name1=document.getElementById(id_name);
	var id1_name1=document.getElementById("name_"+id1_name);
	var id_val=id_name1.value;
	var patrn=/(?:[\u4E00-\u9FFF]{1,8}·\u4E00-\u9FFF]{1,8})|(?:[\u4E00-\u9FFF]{2,5})/;
	if(!patrn.exec(id_val)){
		id1_name1.innerHTML="&nbsp;<img src='img/wrong_ck.jpg' id='ft_say'>";
		}
	else{
		id1_name1.innerHTML="&nbsp;<img src='img/right_ck.jpg'>";
		}
	}
function ck_name1(id_name){//onfocus
	var id1_name=id_name.substr(8);
	var id_name1=document.getElementById(id_name);
	var id1_name1=document.getElementById("name_"+id1_name);
	var id_val=id_name1.value;
	if(id_val==""){id1_name1.innerHTML="&nbsp;<img src='img/wrong_ck.jpg' id='ft_say'>";}
	}
//判断身份
function ck_idCard(id_card){//onkeyup
	var id1_card=id_card.substr(7);
	var id_card1=document.getElementById(id_card);
	var id_card2=id_card1.value;
	var id1_card1=document.getElementById("psg_card"+id1_card)
	 // 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X  
   var patrn = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;  
   if(!patrn.exec(id_card2)){
		id1_card1.innerHTML="&nbsp;<img src='img/wrong_ck.jpg' id='ft_say'>";
		}
	else{
		id1_card1.innerHTML="&nbsp;<img src='img/right_ck.jpg'>";
		}
	}
function ck_idCard1(id_card){//onfocus
    var id1_card=id_card.substr(7);
	var id_card1=document.getElementById(id_card);
	var id_card2=id_card1.value;
	var id1_card1=document.getElementById("psg_card"+id1_card)
	if(id_card2==""){id1_card1.innerHTML="&nbsp;<img src='img/wrong_ck.jpg' id='ft_say'>";}
}
//电子邮箱
function ck_email(id_mail){//onkeyup

	 var id_mail1=document.getElementById(id_mail);
	 var id_mail2=id_mail1.value;
	 
	 var id_mail3=document.getElementById('p_email1');
	
	 var patrn= /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/;
	  if(!patrn.exec(id_mail2)){
		id_mail3.innerHTML="&nbsp;<img src='img/wrong_ck.jpg' id='ft_say'>";
		}
	else{
		id_mail3.innerHTML="&nbsp;<img src='img/right_ck.jpg'>";
		}
	}
//出生日期
function ck_dtime(aa){
   var id_name2=aa.substr(8);
	var id_name3=document.getElementById('ck_tm'+id_name2);
     var id_name1=document.getElementById(aa);
     var id_val=id_name1.value;
     var partn=/((^((1[8-9]\d{2})|([2-9]\d{3}))([-\/\._])(10|12|0?[13578])([-\/\._])(3[01]|[12][0-9]|0?[1-9])$)|(^((1[8-9]\d{2})|([2-9]\d{3}))([-\/\._])(11|0?[469])([-\/\._])(30|[12][0-9]|0?[1-9])$)|(^((1[8-9]\d{2})|([2-9]\d{3}))([-\/\._])(0?2)([-\/\._])(2[0-8]|1[0-9]|0?[1-9])$)|(^([2468][048]00)([-\/\._])(0?2)([-\/\._])(29)$)|(^([3579][26]00)([-\/\._])(0?2)([-\/\._])(29)$)|(^([1][89][0][48])([-\/\._])(0?2)([-\/\._])(29)$)|(^([2-9][0-9][0][48])([-\/\._])(0?2)([-\/\._])(29)$)|(^([1][89][2468][048])([-\/\._])(0?2)([-\/\._])(29)$)|(^([2-9][0-9][2468][048])([-\/\._])(0?2)([-\/\._])(29)$)|(^([1][89][13579][26])([-\/\._])(0?2)([-\/\._])(29)$)|(^([2-9][0-9][13579][26])([-\/\._])(0?2)([-\/\._])(29)$))/ig
      if(!partn.exec(id_val)){
		id_name3.innerHTML="";
	   id_name3.innerHTML="&nbsp;<img src='img/wrong_ck.jpg' id='ft_say'>";
		}
      else{
 	    id_name3.innerHTML="";
		id_name3.innerHTML="&nbsp;<img src='img/right_ck.jpg'>";
		}
	}