// JavaScript Document
//<!--选中option-->
function secur(s_name){
	var flag=0;
	var s1_name=s_name.substr(6);
	var aa=document.getElementById("secure"+s1_name);//opotion
	var ab=document.getElementById("secur"+s1_name);//checkbox
	if(ab.checked){//判断航意险checkbox是否为选中状态
	    //总钱数
		var all_money=document.getElementById("all_money_0");
		var all_m_val=all_money.innerHTML;
		var all_m_int=all_m_val.substr(1);
		var all_m_int=parseInt(all_m_int);
		all_m_int=all_m_int-30;
		all_money.innerHTML="¥"+all_m_int;
		//航意险总钱数
		var air_s=document.getElementById("air_secure0");
		var air_m_val=air_s.innerHTML;
		var air_m_int=air_m_val.substr(1);
		var all_m_int=parseInt(air_m_int);
		all_m_int=all_m_int-30;
		air_s.innerHTML="¥"+all_m_int;
		}
	else{
		//总钱数
		var all_money=document.getElementById("all_money_0");
		var all_m_val=all_money.innerHTML;
		var all_m_int=all_m_val.substr(1);
		var all_m_int=parseInt(all_m_int);
		all_m_int=all_m_int+30;
		all_money.innerHTML="¥"+all_m_int;
		//航意险总钱数
		var air_s=document.getElementById("air_secure0");
		var air_m_val=air_s.innerHTML;
		var air_m_int=air_m_val.substr(1);
		var all_m_int=parseInt(air_m_int);
		all_m_int=all_m_int+30;
		air_s.innerHTML="¥"+all_m_int;
		}
	var index=aa.selectedIndex; 
	if(aa.options[index].value=='1'){ab.checked='true';} else{ab.checked=false;}//设置默认的checked
		
	}
