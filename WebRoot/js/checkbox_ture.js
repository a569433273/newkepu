// <!--选中表单时 选中意外险--以及将钱数写入
function box_ch(ck_name){
	var flag=1;
	
	var ck_name2=document.getElementById(ck_name);
	var ck_name1=ck_name.substr(5);
	var sc_name=document.getElementById("secure"+ck_name1);
	var ck_name3=document.getElementById("safe_0");
	var money_1=document.getElementById("all_money_0");//总的钱数
	var money_2=parseInt(money_1.innerHTML.substr(1));//钱数 整型
   
    var money_3=document.getElementById("air_secure0"); 
	var money_4=parseInt(money_3.innerHTML.substr(1));//航意险钱数
	
	var classElements = [],allElements = document.getElementsByTagName('*');
		
	if(ck_name2.checked){
	sc_name.options[1].selected="false";
	sc_name.options[0].selected="true";
	ck_name3.innerHTML="及<a href=''>《航意险说明1》</a> &<a href=''>《航意险说明2》</a>";
	money_2=money_2+30;
	money_1.innerHTML="¥"+money_2;//总的钱数写入
	money_4=money_4+30;
	money_3.innerHTML="¥"+money_4;//航意险钱数写入
	}
	else{
		sc_name.options[0].selected="false";
		sc_name.options[1].selected="true";
		money_2=money_2-30;
	    money_1.innerHTML="¥"+money_2;//总的钱数写入
		money_4=money_4-30;
	    money_3.innerHTML="¥"+money_4;//航意险钱数写入
		for (var i=0; i< allElements.length; i++ )  {
	      if (allElements[i].className == "secur0" ) 
		    {	
			    if(allElements[i].checked){
				 flag=0;
				 }
		   } 
		  } //for 判断是否全没有选中意外险
		if(flag==1){
			ck_name3.innerHTML="";
			}
		}
	}