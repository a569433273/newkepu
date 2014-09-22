// JavaScript Document
//<!--添加乘客-->
var len_p=0;
function add_pinfo(){
	var len_p1=0;
	var seat=document.getElementById("seat_hide");
	var seat_val=seat.innerHTML;
	var seat_int=parseInt(seat_val);
	var classElements = [],allElements = document.getElementsByTagName('*');
	for (var i=0; i< allElements.length; i++ )  {
	      if (allElements[i].className == "t_1" ) 
		  {	
		  len_p1=len_p1+1;
		  } 
		}
	
		if(len_p1<seat_int && len_p1<9){
			var id_w=document.getElementById('no_add');
		   id_w.innerHTML="";
			len_p=len_p+1;	
			//添加内容
			var str="<div class='t_1' id='add_p1"+len_p+"'></div>";
			$("#top2_info").append(str);
			var str1="<div class='t_1_top' id='add_p2"+len_p+"'></div>";
			$("#add_p1"+len_p).append(str1);
			var str2="<div style='float:left; width:720px;' id='add_p3"+len_p+"'></div>";
			$("#add_p2"+len_p).append(str2);
			var str3="<div style='float:left; width:250px;' id='add_p4"+len_p+"'></div>";
			$("#add_p3"+len_p).append(str3);
			var str4="<div style='float:left; width:50px; font-size:12px; line-height:20px;'>姓名<span style='color:#f00;'>*</span></div><div style='float:left;'><input type='text' class='input_val' style='width:60px;' name='p_name' id='psg_name"+len_p+"' onkeyup='ck_unm(this.id)' onfocus='ck_name1(this.id)'/></div>";
            str4+=" <div style='float:left;'><span id='name_"+len_p+"'></span>&nbsp;<select name='add_age"+len_p+"' onchange='yong_litter(this.id)' id='add_age"+len_p+"'><option>成人(>12岁)</option><option>儿童(< 12岁)</option></select></div>";
            $("#add_p4"+len_p).append(str4);
			var str5="<div style='width:460px; float:left;' id='add_p5"+len_p+"'></div>";
			$("#add_p3"+len_p).append(str5);
           var str6="<div style='float:left; width:60px; font-size:12px; line-height:20px; text-align:right;'>证件号码<span style='color:#f00;'>*</span>&nbsp;</div>";
			str6+="<div style='float:left; overflow:hidden;'>&nbsp;<select name='p_card' id='p_card"+len_p+"' onchange='set_sex(this.id)'><option>身份证</option><option>护照</option><option>其他</option></select></div>";
            str6+="<div style='float:left;'>&nbsp;<input type='text' name='p_name' class='input_val1' style='width:140px;' id='idCard_"+len_p+"' onkeyup='ck_idCard(this.id)' onfocus='ck_idCard1(this.id)'><span id='psg_card"+len_p+"'></span></div>";
            str6+="<div style='float:left; margin-top:2px; overflow:hidden; display:inline;'>&nbsp;<input name='' type='checkbox' value='' checked='checked'/></div>";
			str6+=" <div style='float:left; overflow:hidden; font-size:12px; line-height:23px;'>&nbsp;是否保存为常用登机人</div>";
		   $("#add_p5"+len_p).append(str6);
		  var str7="<div style='float:left; oveflow:hidden;'>&nbsp;<input name='' type='checkbox' checked='checked' value='' id='secur"+len_p+"' class='secur0' onclick='box_ch(this.id)'/><span style='font-size:12px; color:#0068c9;' id='accid_s"+len_p+"'  onmousemove='mouse_disp(this.id);' onmouseout='mouse_hid()'>&nbsp;意外险</span>&nbsp;</div>";
           str7+="<div style='float:left;'><select name='secure' id='secure"+len_p+"' onchange='secur(this.id)'><option value='1' checked='checked'>¥30/份 保额260万元/份</option><option value='0'>未购买航意险</option></select></div>";
           str7+="<div style='float:left; line-height:20px; margin-left:5px; overflow:hidden; cursor:pointer;' id='add_pf"+len_p+"' onclick='remov_pinfo(this.id)'><img src='img/wrong.jpg' style='margin-top:5px;'></div>";
            $("#add_p2"+len_p).append(str7);
			var str8="<div class='t_1_top1' id='add_p6"+len_p+"'></div>";
			$("#add_p1"+len_p).append(str8);
			var str9="<div style='float:left; width:720px;' id='add_p7"+len_p+"'></div>";
			$("#add_p6"+len_p).append(str9);
			var str10="<div style='float:left; width:250px; text-align:right; font-size:12px;' id='disp_age"+len_p+"'>&nbsp;</div>";
			$("#add_p7"+len_p).append(str10);
			var str11="<div style='float:left; width:460px; display:none;' id='disp_sex"+len_p+"' ></div>";
			$("#add_p7"+len_p).append(str11);
			var str12="<div style='float:left; font-size:12px; width:60px; text-align:right;'>性别<span style='color:#f00;'>*</span></div>";
			str12+="<div style='float:left;'>&nbsp;<select name=''><option>男&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option><option>女&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option></select></div>"
            str12+="<div style='float:left; font-size:12px; width:70px; text-align:right;'>出生日期<span style='color:#f00;'>*</span></div>";
			str12+="<div style='float:left;'>&nbsp;<input type='text' name='date_add' class='input_val2' style='width:80px; color:#999;' value='yyyy-mm-dd' id='dt_input"+len_p+"' onkeyup='ck_dtime(this.id)' onfocus='set_val(this.id)' onblur='set_val1(this.id)'>&nbsp;<span id='ck_tm"+len_p+"'></span></div>";
			$("#disp_sex"+len_p).append(str12);
			var str13="<div style='float:left;'>&nbsp;<input name='' type='checkbox' value='' id='delay_cl"+len_p+"' class='delay_cl' onclick='desc_sec(this.id)'/></div>"
			str13+="<div style='float:left;'><span style='font-size:12px;'>&nbsp;<span style='color:#0068c9; font-weight:bold;'><span  id='delay_s"+len_p+"'  onmousemove='mouse_disp(this.id);' onmouseout='mouse_hid()'>延误险</span></span>&nbsp;<span style='color:#fe065a;'>¥20</span>/份<span id='num_f"+len_p+"'>×1</span>保额最高<span style='color:#fe065a;'>300元</span></span></div>";
			$("#add_p6"+len_p).append(str13);
			//钱数合计
			var money_1=document.getElementById("all_money_0");//总的钱数
	        var money_2=parseInt(money_1.innerHTML.substr(1));//钱数 整型
			money_2=money_2+30;
			//读取航班价格
			var price_ar_1=document.getElementById("j_money");
			var price_ar_2=price_ar_1.innerHTML;
			var price_ar_3=parseInt(price_ar_2);
			money_2=money_2+price_ar_3;
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
		    money_2=money_2+str4+str8;
			
			//机建燃油的价格 over
	        money_1.innerHTML="¥"+money_2;//总的钱数写入
			var money_3=document.getElementById("air_secure0"); 
	        var money_4=parseInt(money_3.innerHTML.substr(1));//航意险钱数
			money_4=money_4+30;
			
	        money_3.innerHTML="¥"+money_4;//航意险钱数写入
			
			}//添加
		else{
			var id_w=document.getElementById('no_add');
			id_w.innerHTML="<span>同一订单仅支持"+seat_int+"位乘客</span>";
			}//若不合格 添加文字
	}