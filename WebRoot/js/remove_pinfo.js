// JavaScript Document
//<!--删除乘客-->
function remov_pinfo(id_name){
	var len_p=0;
	var classElements = [],allElements = document.getElementsByTagName('*');
	for (var i=0; i< allElements.length; i++ )  {
	      if (allElements[i].className == "t_1" ) 
		  {	
		  len_p=len_p+1;
		  } 
		}//添加的数量
	//删除
	 if(len_p>1){
		  var id_w=document.getElementById('no_add');
		 id_w.innerHTML="";
		 var id_name1=id_name.substr(0,5);
		 var id_name2=id_name.substr(6);
		 
		 var id_name3=id_name1+'1'+id_name2;
		 var id_name4=document.getElementById(id_name3);
		  //钱数合计 延误险
		  var id_name5=document.getElementById("delay_cl"+id_name2);
		    if(id_name5.checked){
			var money_1=document.getElementById("all_money_0");//总的钱数
	        var money_2=parseInt(money_1.innerHTML.substr(1));//钱数 整型
			money_2=money_2-20;
	        money_1.innerHTML="¥"+money_2;//总的钱数写入
			var money_3=document.getElementById("delay_money0"); 
	        var money_4=parseInt(money_3.innerHTML.substr(1));//航意险钱数
			money_4=money_4-20;
	        money_3.innerHTML="¥"+money_4;//航意险钱数钱数写入			
			}
		 //钱数合计 航意险
		  var id_name6=document.getElementById("secur"+id_name2);
		    if(id_name6.checked){
			var money_1=document.getElementById("all_money_0");//总的钱数
	        var money_2=parseInt(money_1.innerHTML.substr(1));//钱数 整型
			money_2=money_2-30;
	        money_1.innerHTML="¥"+money_2;//总的钱数写入
			var money_3=document.getElementById("air_secure0"); 
	        var money_4=parseInt(money_3.innerHTML.substr(1));//航意险钱数
			money_4=money_4-30;
	        money_3.innerHTML="¥"+money_4;//航意险钱数钱数写入
			}
		  //钱数合计 航意险 over
          
		    var age_d_v=document.getElementById('disp_age'+id_name2).innerHTML;
			if(age_d_v!="&nbsp;"){
			 //讲取儿童里的内容 以及 儿里里面的价格	
			var price_y=document.getElementById('Y_p_young').innerHTML;//Y价格
	        var price_Yint=parseInt(price_y);
		    //净价 机建 石油 价格
	       var jq_money=document.getElementById('j_money').innerHTML;//净价
	       var jq_int=parseInt(jq_money);//净价Int
	       var fir_oil1=document.getElementById('fir_oil').innerHTML;//机建、燃油
	       for(var i=1;i<fir_oil1.length;i++){
		    var str1=fir_oil1.substr(i,1);
		    var str2=parseInt(str1);
		    if(isNaN(str2)){
			var zz=i;
			break;
			}
		   }//找到机建价格
		 var str3=fir_oil1.substr(1,zz-1);//机建价格
		 var str3_int=parseInt(str3);//机建价格 int
		
		 var index1=fir_oil1.indexOf("/");
		 var str4=fir_oil1.substr(index1+2);//石油价格
		 var str4_int=parseInt(str4);//石油价格Int
	    //净价 机建 石油 价格 is over
	    //得到总得价格
	   var all_price=document.getElementById("all_money_0").innerHTML;
	   var all_price1=parseInt(all_price.substr(1));
	   var all_price2=all_price1-price_Yint;
	   document.getElementById("all_money_0").innerHTML="¥"+all_price2;
	// 得到总得价格 over
	//讲取儿童里的内容 以及 儿里里面的价格 over				
		}//当选中儿童价格的时候
		else{//没有选中儿童价格
		    
		   
			//读取航班价格
			var price_ar_1=document.getElementById("j_money");
			var price_ar_2=price_ar_1.innerHTML;
			var price_ar_3=parseInt(price_ar_2);
			var money_1=document.getElementById("all_money_0");//总的钱数
	        var money_2=parseInt(money_1.innerHTML.substr(1));//钱数 整型
			money_2= money_2-price_ar_3;
	        money_1.innerHTML="¥"+money_2;//总的钱数写入
			//读取航班价格over
			//机建燃油的价格
			var oil_1=document.getElementById("fir_oil");
	        var oil_2=oil_1.innerHTML;
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
		   
			var money_1=document.getElementById("all_money_0");//总的钱数
	        var money_2=parseInt(money_1.innerHTML.substr(1));//钱数 整型
			money_2= money_2-str4-str8;;
	        money_1.innerHTML="¥"+money_2;//总的钱数写入
			//机建燃油的价格 over		
				}
		  id_name4.parentNode.removeChild(id_name4);//删除		
		 }
	  else{
		  var id_w=document.getElementById('no_add');
		 id_w.innerHTML="<span>新增乘机人 一个订单至少保留1位乘机人</span>";
		  }//<=1时不删除 并且附加文字说明
	}