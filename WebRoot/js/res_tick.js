// 预定效果
function res_tick(id){
	//取值
	var id1=id;
	var id_num=id1.substr(3);
	
	var id_num1=id_num.indexOf('_');
	var id_numi=id_num.substr(0,id_num1);
	var air_name=document.getElementById('air_name'+id_numi);
	var air_name_v=air_name.innerHTML;//航空公司名称
	var air_no=document.getElementById('air_no'+id_numi);
	var air_no_v=air_no.innerHTML;//航班号
	var air_name_v=air_name_v+air_no_v;
	air_name_v=encodeURI(air_name_v);//转码
	air_name_v=encodeURI(air_name_v);
	var code=document.getElementById('code'+id_num);
	var code_v=code.innerHTML;//经济舱[里面的数字]
	var sale=document.getElementById('sale'+id_num);
    var sale_v=sale.innerHTML;
	var code_v=code_v+" "+sale_v+"折";//经济舱以及折
	code_v=encodeURI(code_v);//转码
	code_v=encodeURI(code_v);
	var price=document.getElementById('price'+id_num);
	var price_v=price.innerHTML; //票面价
	var sale1_v='3.0%'; //返点
	var j_money=document.getElementById('j_money'+id_num);
	var j_money_v=j_money.innerHTML;//净价
	var viaport=document.getElementById('viaport'+id_num);
	var viaport_v=viaport.innerHTML;//经停
	viaport_v=encodeURI(viaport_v);//转码
	viaport_v=encodeURI(viaport_v);
	
	//退票改期签转
	var tp=document.getElementById("tp"+id_num);
	var tp_val=tp.innerHTML;//退票时
	
	if(tp_val!="按航空公司规定执行"){//按航空公司规定执行
	for(var u=14;u<tp_val.length;u++){
		var str4=tp_val.substr(u,1);
		if(isNaN(str4)){
			var z=u;
			break;
			}
		}//找到规定退票时间数字的位置
	var tp_hour1=tp_val.substr(14,z-14);//规定退票的时间（含）	
	var tp_1=tp_val.indexOf("%");//退票时对应的第一个%号的位置
	for(var t=tp_1-1;t>0;t--){
		var str3=tp_val.substr(t,1);
		if(isNaN(str3)){
			var w=t;
			break;
			}
		}//退票时第一个%后面数字的位置
	var tp_price=tp_val.substr(w+1,tp_1-w-1);//规定时间内应该对应的退票费
    for(var i=tp_val.length-1;i>0;i--){
		var str1=tp_val.substr(i,1);
		if(str1=="%"){
			var k=i;
			break;
			}
		}//最后一个百分号的位置
	for(var j=k-1;j>0;j--){
		var str1=tp_val.substr(j,1);
		var str2=parseInt(str1);
		if(isNaN(str2)){
			var g=j;//规定时间内及离站后所对应的退票费位置
			break;
			}
		}//找到最后一个百分号前面所对应的数字
		var tp_price2=tp_val.substr(g+1,k-g-1);//规定时间内及离站后所对应的退票费
		
	var qg=document.getElementById("gq"+id_num);
	var  qg_val=qg.innerHTML;//改期时		
	var qg_1=qg_val.indexOf("%");;//改期时第一个%对应的位置
		for(var b=qg_1-1;b>0;b--){		
		var str4=qg_val.substr(b,1);
		var str5=parseInt(str4);
		if(isNaN(str5)){
			var c=b;
			break;
			}
		}//找到前面%出现的数字	
	var qg_price1=qg_val.substr(c+1,qg_1-c-1);//在规定时间内改期（含）对应的数字
	for(var d=qg_val.length-1;d>0;d--){
		var str6=qg_val.substr(d,1);
		if(str6=='%'){
			var e=d;
			break;
			}
		}//最后一个%对应的位置
	 if(qg_1==e){
		var qg_price2=qg_price1;
		qg_price1="免费改期";	
		 }//判断在规定时间内是否（含）免费改期
	 else{
		 for(var f=e-1;f>0;f--){
			 var str7=qg_val.substr(f,1);
			 var str8=parseInt(str7);
			 if(isNaN(str8)){
				 var h=f;
				 break;
				 }
			 }//找出对应最后一个%的数字
		   var qg_price2=qg_val.substr(h+1,e-h-1);//离站后对应的改期手续费
		  }//ifend
	var  qz=document.getElementById("qz"+id_num);
	var qz_val=qz.innerHTML;//签转时
	var qz_1=qz_val.indexOf("：");
	var qz_2=qz_val.substr(qz_1+1);//签转时的规定
	}
	else{
		var tp_hour1="规定";//规定退票的时间（含）		
		var tp_price="按航空规定执行";//规定时间内应该对应的退票费		
		var tp_price2="按航空规定执行";//规定时间内及离站后所对应的退票费
		
		
		var qg_price1="按航空规定执行";//在规定时间内改期（含）对应的数字
		qg_price1=encodeURI(qg_price1);//转码
	    qg_price1=encodeURI(qg_price1);
		var qg_price2="按航空规定执行";//离站后对应的改期手续费		 
		var qz_2="按航空规定执行";//签转时的规定		
		}
		tp_hour1=encodeURI(tp_hour1);//转码
	    tp_hour1=encodeURI(tp_hour1);
		tp_price=encodeURI(tp_price);//转码
	    tp_price=encodeURI(tp_price);
		tp_price2=encodeURI(tp_price2);//转码
	    tp_price2=encodeURI(tp_price2);
		qg_price2=encodeURI(qg_price2);//转码
	     qg_price2=encodeURI(qg_price2);
		 qz_2=encodeURI(qz_2);//转码
	     qz_2=encodeURI(qz_2);
	//退票改期签转 over
	//对应的座位数
	 var seat=document.getElementById('seat'+id_num);
	 var seat_val=seat.innerHTML;
	 var str14="";
	 for(var L=0;L<seat_val.length;L++){
		 var str12=seat_val.substr(L,1);
		 var str13=parseInt(str12);
		 if(!isNaN(str13)){
			str14=str14+str12;//剩余票数		 
			 }
		 		 }
		
	//对应的座位数 over
	//Y的价格
	var Yclass_p=document.getElementById('id_YCL'+id_numi);
	var Yclass_p_val=Yclass_p.innerHTML;
   //降落起飞地点时间
    var tkoff_where=document.getElementById("d_where"+id_numi).innerHTML;//起飞地点
	var tkoff_no=document.getElementById("depa_no"+id_numi).innerHTML;//起飞编号
	var tkoff_w1=tkoff_where+tkoff_no;//起飞地点+起飞编号
	    tkoff_w1=encodeURI(tkoff_w1);//转码
	    tkoff_w1=encodeURI(tkoff_w1);
	var tkoff_time=document.getElementById("de"+id_numi).innerHTML;//起飞时间
	    tkoff_time=encodeURI(tkoff_time);//转码
	    tkoff_time=encodeURI(tkoff_time);
	var land_where=document.getElementById("off_where"+id_numi).innerHTML;//降落地点
	var land_no=document.getElementById("off_no"+id_numi).innerHTML;//降落编号
	var land_w1=land_where+land_no;//降落地点+降落编号
	     land_w1=encodeURI(land_w1);//转码
	     land_w1=encodeURI(land_w1);
	var land_time=document.getElementById("ar"+id_numi).innerHTML;//降落时间
	   land_time=encodeURI(land_time);//转码
	   land_time=encodeURI(land_time);
	
   //降落起飞地点时间 over
//传值
//	   document.getElementById('chuancan').value=air_name_v+","+code_v+","+price_v+","+sale1_v+","+j_money_v+","+viaport_v+","+tp_hour1+","+tp_price+","+ tp_price2+","+ qg_price1+","+qg_price2+","+qz_2+","+str14+","+Yclass_p_val+","+tkoff_w1+","+tkoff_time+","+land_w1+","+land_time;
//	   document.orderform.submit();
	window.location.href="planeorder.jsp?id="+air_name_v+","+code_v+","+price_v+","+sale1_v+","+j_money_v+","+viaport_v+","+tp_hour1+","+tp_price+","+ tp_price2+","+ qg_price1+","+qg_price2+","+qz_2+","+str14+","+Yclass_p_val+","+tkoff_w1+","+tkoff_time+","+land_w1+","+land_time+"";	
	}
	
	
	
	
	
	
	