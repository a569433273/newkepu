// JavaScript Document
//提交订单验证
function ck_submit(){
	var flag=0;
	var flag1=0;
	var flag2=0;
	var flag3=0;
	//电话姓名
	var ck_nm=document.getElementById("ck_name");//姓名
	var ck_nm_val=ck_nm.value;
    var patrn_nm=/(?:[\u4E00-\u9FFF]{1,8}·\u4E00-\u9FFF]{1,8})|(?:[\u4E00-\u9FFF]{2,5})/; //姓名正则表达式
	var ck_tp=document.getElementById("check_tel");//电话
	var ck_tp_val=ck_tp.value;
	var patrn_tp=/^0?(13[0-9]|15[012356789]|18[0236789]|14[57])[0-9]{8}$/ ; //电话正则表达式
	if(ck_tp_val!="" && ck_nm_val!=""){
		if(patrn_nm.exec(ck_nm_val) && patrn_tp.exec(ck_tp_val)){
			//提交
			}
		else{
			flag=1;
			}
		}//判断姓名与话是否正确
	else{
		flag=1;
		}//判断姓名电话
	//乘机人姓名证件号码出生日期验证
	  //姓名
	 var classElements = [],allElements = document.getElementsByTagName('*');
     for (var i=0; i< allElements.length; i++ )  {
	      if (allElements[i].className == "input_val" ) 
		  {	
		  var tt=allElements[i].value;
		  if(tt!=""){
			 if(patrn_nm.exec(tt)){
				 //正确
				 }
			   else{
				   flag1=1;
				  
				   break;
				   }
			  }//if
		  else{
			  flag1=1;
			  break;
			  }//else
		  } //if
		}//for
	 //证件号码
	 var patrn_card=/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
	  
	  for (var i=0; i< allElements.length; i++ )  {
	      if (allElements[i].className == "input_val1" ) 
		  {	
		  
		  var tt1=allElements[i].value;
		  if(tt1!=""){
			 if(patrn_card.exec(tt1)){
				
				 }
			   else{
				   flag2=1;
				   break;
				   }
			  }//if
		  else{
			  flag2=1;
			  break;
			  }//else
		  } //if
		}//for
	//出生日期
   var partn_birth=/((^((1[8-9]\d{2})|([2-9]\d{3}))([-\/\._])(10|12|0?[13578])([-\/\._])(3[01]|[12][0-9]|0?[1-9])$)|(^((1[8-9]\d{2})|([2-9]\d{3}))([-\/\._])(11|0?[469])([-\/\._])(30|[12][0-9]|0?[1-9])$)|(^((1[8-9]\d{2})|([2-9]\d{3}))([-\/\._])(0?2)([-\/\._])(2[0-8]|1[0-9]|0?[1-9])$)|(^([2468][048]00)([-\/\._])(0?2)([-\/\._])(29)$)|(^([3579][26]00)([-\/\._])(0?2)([-\/\._])(29)$)|(^([1][89][0][48])([-\/\._])(0?2)([-\/\._])(29)$)|(^([2-9][0-9][0][48])([-\/\._])(0?2)([-\/\._])(29)$)|(^([1][89][2468][048])([-\/\._])(0?2)([-\/\._])(29)$)|(^([2-9][0-9][2468][048])([-\/\._])(0?2)([-\/\._])(29)$)|(^([1][89][13579][26])([-\/\._])(0?2)([-\/\._])(29)$)|(^([2-9][0-9][13579][26])([-\/\._])(0?2)([-\/\._])(29)$))/ig

   for (var i=0; i< allElements.length; i++ )  {
	      if (allElements[i].className == "input_val2" ) 
		  {	
		  
		  var tt2=allElements[i].value;
		  if(tt2!=""){
			  if(tt2!="yyyy-mm-dd"){//日期的value有默认值yyyy-mm-dd
			 if(partn_birth.exec(tt2)){
				//正确
				
				 }
			   else{
			     flag3=1;
			     break;
				
				 }
		       }
			
			}//if
		  else{
			  flag3=1;
			  break;
			  }//else
		  } //if
		}//for
	//乘机人姓名证件号码出生日期验证over
	if(flag==0 && flag1==0 && flag2==0 && flag3==0){
		document.getElementsByName("booking").submit();
		}//输入正确
	 else{
		 alert("您的信息输入有误！请重新输入");
		 return false;
		 }
	}
