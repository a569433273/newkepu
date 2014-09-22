// JavaScript Document
//点击护照 其他时 应显示的内容
function set_sex(id_name){
	var id_n1=id_name.substr(6);
 var obj=document.getElementById('p_card'+id_n1);
var index=obj.selectedIndex; 
var obj1=document.getElementById("disp_sex"+id_n1);
if(index==1 || index==2){
  obj1.style.display="block";
  	}
	else{
		 obj1.style.display="none";
		
		}

	}
//儿童时显示的内容

function yong_litter(id_name){
 var id_n1=id_name.substr(7);
 var obj=document.getElementById('add_age'+id_n1);
var index=obj.selectedIndex; 
var obj1=document.getElementById("disp_age"+id_n1);
if(index==1){
	var price_y=document.getElementById('Y_p_young').innerHTML;//Y价格
	var price_Yint=parseInt(price_y);
	var price_y1="¥"+price_y;
	obj1.innerHTML="";
	 obj1.innerHTML="儿童票价：<span class='young_p' style='color:#f00'>"+price_y1+"</span>(含税费)";
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
	 var all_price2=all_price1-jq_int-str3_int-str4_int+price_Yint;
	 document.getElementById("all_money_0").innerHTML="¥"+all_price2;
	// 得到总得价格 over   
  	}
	else{
		   var id_n1=id_name.substr(7);
            var obj=document.getElementById('add_age'+id_n1);
            var index=obj.selectedIndex; 
            var obj1=document.getElementById("disp_age"+id_n1);
		obj1.innerHTML="&nbsp;";
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
	 var all_price2=all_price1+jq_int+str3_int+str4_int-price_Yint;
	 document.getElementById("all_money_0").innerHTML="¥"+all_price2;
	// 得到总得价格 over 
		}

	}
	
