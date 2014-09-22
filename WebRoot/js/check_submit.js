// JavaScript Document
//提交订单验证
function ck_submit(){
	var flag=0;
	var flag1=0;
	var flag2=0;
	var flag3=0;
	//电话姓名
	var ck_nm=document.getElementById("ck_name");//姓名
	var ck_nm_val=ck_nm.value.replace(/(^\s*)|(\s*$)/g,"");//去掉头尾空格
    var patrn_nm=/(?:[\u4E00-\u9FFF]{1,8}·\u4E00-\u9FFF]{1,8})|(?:[\u4E00-\u9FFF]{2,5})/; //姓名正则表达式
	var patrn1_nm=/^([A-Za-z]+\s?)*[A-Za-z]$/;//姓名英文
	var ck_tp=document.getElementById("check_tel");//电话
	var ck_tp_val=ck_tp.value;
	var patrn_tp=/^0?(13[0-9]|15[012356789]|18[0236789]|14[57])[0-9]{8}$/ ; //电话正则表达式
	if(ck_tp_val!="" && ck_nm_val!=""){
		if(patrn_nm.exec(ck_nm_val) && patrn_tp.exec(ck_tp_val)){
			//提交
			}
		else{
			if(patrn1_nm.exec(ck_nm_val) && patrn_tp.exec(ck_tp_val)){}
			else{flag=1;}
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
				  if(patrn1_nm.exec(tt)){}
				  else{
				   flag1=1;
				   break;
				  }
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
	      if (allElements[i].className == "hz_val1" ) 
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
	//护照 其他
	for (var i=0; i< allElements.length; i++ )  {
	      if (allElements[i].className == "hz_val" ){			  
			  if(allElements[i].value==""){ 
			  flag2=1;
			  break;}
			  }}
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
//将航班信息重新写入到页面中
	var  C1=window.location.href.split("?")[1];
	var  C2=C1.split("=")[1]; 
	var  C3=C2.split(",")[0];//航空公司
	 C3= decodeURI(decodeURI(C3));
	 C3= decodeURI(decodeURI(C3));
	
	 var C4=C2.split(",")[1];//折
	 C4= decodeURI(decodeURI(C4));
	 C4= decodeURI(decodeURI(C4));
	  
	var  C5=C2.split(",")[2];//票面价
	  C5=unescape(C5);
	  C5= utf8to16(base64decode(C5));
	var C6=C2.split(",")[3];//返点
    var  C7=C2.split(",")[4];//净价
	  C7=unescape(C7);
	 C7= utf8to16(base64decode(C7));
	 
    var  C8=C2.split(",")[5];//经停	
	 C8= decodeURI(decodeURI(C8));//解码
	 C8= decodeURI(decodeURI(C8)); 
	var C17=C2.split(",")[14];//起飞地点
	   C17= decodeURI(decodeURI(C17));//解码
	   C17= decodeURI(decodeURI(C17));
	 
	 var  C18=C2.split(",")[15];//起飞时间
	   C18= decodeURI(decodeURI(C18));//解码
	   C18= decodeURI(decodeURI(C18));
	 
	var  C19=C2.split(",")[16];//降落地点
	   C19= decodeURI(decodeURI(C19));//解码
	   C19= decodeURI(decodeURI(C19));
	 
	var C20=C2.split(",")[17];//降落时间
	    C20= decodeURI(decodeURI(C20));//解码
	    C20= decodeURI(decodeURI(C20));
	var C21=C2.split(",")[18];//油价
	     C21= decodeURI(decodeURI(C21));//解码
	    C21= decodeURI(decodeURI(C21));	
	 document.getElementById('air_name').innerHTML=C3;
	 document.getElementById('viaport').innerHTML=C8;
	 document.getElementById('sale').innerHTML=C4;
	 document.getElementById('price').innerHTML=C5;
	 document.getElementById('sale1').innerHTML=C6;
	 document.getElementById('j_money').innerHTML=C7;
	 document.getElementById('tk_off1').innerHTML=C17;
	 document.getElementById('tk_off2').innerHTML=C18;
	 document.getElementById('land_1').innerHTML=C19;
	 document.getElementById('land_2').innerHTML=C20;
	  document.getElementById('fir_oil').innerHTML=C21;		
		//将航班信息重新写入到页面中 over
//将总的价格重新写入

//读取url里面的数据
			var M1=window.location.href.split("?")[1];
	        var  M2=M1.split("=")[1]; 
	       var  M3=M2.split(",")[4];//净价
		    M3=unescape(M3);
	        M3= utf8to16(base64decode(M3));
		   var M4=M2.split(",")[18];//油价
	           M4= decodeURI(decodeURI(M4));//解码
	           M4= decodeURI(decodeURI(M4)); 
	       var M5=M2.split(",")[13];//Y价格
		        //机建燃油的价格
		   
	        var oil_2=M4;
	       for(var m=1; m<oil_2.length; m++){
		      var str1=oil_2.substr(m,1);
		      var str2=parseInt(str1);
		     if(isNaN(str2)){
			   var mm=m;
			   break;
			  }
		      }// 找到机建的数字位置
		    var str3=oil_2.substr(1,mm-1);
		    var str4=parseInt(str3);//机建价格
		    var oil_len=oil_2.length;
		    var str7=oil_2.substr(mm+2,oil_len-mm-2);
		    var str8=parseInt(str7);//油价
		   var add_money=parseInt(M3)+str4+str8;//添加时要添加的钱数
		 
	  //油价 逢5进1
	  var str8_y=parseInt(str8/2);
	 
	  var str8_y_str=String(str8_y);//类型转换
	  
	   var str8_y_len=str8_y_str.length;//统计长度
	   var str8_last=str8_y_str.substr(str8_y_len-1,1);
	   if (str8_last>='5' || str8_last>='5' && str8_last!='0'){
		var str8_last=str8_y_str.substr(0,1);
		 var str8_last_int=parseInt(str8_last);
		 var str8_lt_1=str8_last_int+'0';
		var str8_lt_int=parseInt(str8_lt_1);//儿童油价
		   }
		  else{
			var str8_lt_int=str8_y;//儿童油价  
			  }
	  //油价 逢5进1 over
		   
		   //单个童价格
		  
		    var add_y_money=parseInt(M5)/2+str8_lt_int; 
			//机建燃油的价格 over
//读取url里面的数据
			
//获取订单总额
	 //统计之前共有几个乘客
	 var psg_int=0;
	 var classElements = [],allElements = document.getElementsByTagName('*');
     for (var i=0; i< allElements.length; i++ )  {
	      if (allElements[i].className == "t_1" ) 
		  {	
		  psg_int=psg_int+1;
		  }}
	//统计之前共有几个乘客 over
	//统计共有几个儿童 
	var yng_int=0; 
	var classElements = [],allElements = document.getElementsByTagName('*');
	for (var i=0; i< allElements.length; i++ )  {
	      if (allElements[i].className == "younger" ) 
		  {	
		    var aa=allElements[i].selectedIndex;//获取选中的索引值
			if(aa==1){
				yng_int=yng_int+1;
				}
		  }}
	//统计共有几个儿童 over
	//计算儿童与成人的价格
	 if(yng_int!=0){
	 var psg_yng=psg_int-yng_int;}
	 else{psg_yng=psg_int;}
	 var psg_M=psg_yng*add_money;//成人总价
	 var yng_M=yng_int*add_y_money;//儿童总价
	//统计航意险选中个数
	var sec_M=0;
	var classElements = [],allElements = document.getElementsByTagName('*');
	for (var i=0; i< allElements.length; i++ )  {
	      if (allElements[i].className == "f_sec0" ) 
		  {	
		   var f_hx=allElements[i].selectedIndex;
		   var f_hx_val=allElements[i].options[f_hx].text
			var f_hx_int=parseInt(f_hx_val);
			sec_M=sec_M+f_hx_int*30;
			
		  }}
	  
	//统计航意险选中个数 over
	//统计延误险选中个数
	var del_M=0;
	var classElements = [],allElements = document.getElementsByTagName('*');
	for (var i=0; i< allElements.length; i++ )  {
	      if (allElements[i].className == "f_del0" ) 
		  
		  {
			  var f_yw=allElements[i].selectedIndex;
			  var f_yw_val=allElements[i].options[f_yw].text
			  var f_yw_int=parseInt(f_yw_val);
		      del_M=del_M+20*f_yw_int;
			
		  }}
	 
	//统计延误险选中个数 over		
  var pre_allM=del_M+sec_M+yng_M+psg_M; //添加之前的总价

//获取订单总额 over
//将航班内容写入到hidden中
var C4_4=C4.substr(0,1); //扣
var C22=C2.split(",")[19];//航班号
document.getElementById("air_Name").value=C22; //航空编号
document.getElementById("tkoff_Name").value=C17; //起飞机场名
document.getElementById("tkoff_Time").value=C18; //起飞时间
document.getElementById("land_Name").value=C19; //降落机场名
document.getElementById("land_Time").value=C20; //降落时间
document.getElementById("Viaport_1").value=C8; //经停
document.getElementById("Saled_1").value=C4_4; //折扣前面的数字
document.getElementById("Price_1").value=C5; //票面价
document.getElementById("Return_1").value=C6; //返点
document.getElementById("net_Price_1").value=C7; //净价
document.getElementById("mach_oil").value=C21; //机建燃油
//将航班内容写入到hidden中over

//将总的价格重新写入 over
document.getElementById("all_money_0").innerHTML="¥"+pre_allM;
document.getElementById("air_secure0").innerHTML="¥"+sec_M;
document.getElementById("delay_money0").innerHTML="¥"+del_M;
		document.getElementsByName("booking").submit();
		}//输入正确
	 else{
		 alert("您的信息输入有误！请重新输入");
		 return false;
		 }
	}
