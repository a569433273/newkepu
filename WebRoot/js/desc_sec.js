// <!--延误险被选中时底部应该出现的内容-->
function desc_sec(del_name){
	var del_num=del_name.substr(8);
	var flag=1;
	var del_name1=document.getElementById(del_name);
	var del_name2=document.getElementById("num_f"+del_num);
	var del_name3=document.getElementById("desc_sec");// 关于延误险的说明书
	var money_1=document.getElementById("all_money_0");//总的钱数
	var money_2=parseInt(money_1.innerHTML.substr(1));//钱数 整型
   
    var money_3=document.getElementById("delay_money0"); 
	var money_4=parseInt(money_3.innerHTML.substr(1));//航意险钱数
	if(del_name1.checked){
		del_name2.innerHTML="×1";
		del_name3.innerHTML=" 及<a href=''>《保险经纪委托协议》</a>&<a href=''>《延误险说明》</a>";
		money_2=money_2+20;
	   money_1.innerHTML="¥"+money_2;//总的钱数写入
	   money_4=money_4+20;
	   money_3.innerHTML="¥"+money_4;//航意险钱数写入
		}
		else{
			del_name2.innerHTML="";
			money_2=money_2-20;
	        money_1.innerHTML="¥"+money_2;//总的钱数写入
        	money_4=money_4-20;
	       money_3.innerHTML="¥"+money_4;//航意险钱数写入
			var classElements = [],allElements = document.getElementsByTagName('*');
			for (var i=0; i< allElements.length; i++ )  {
	      if (allElements[i].className == "delay_cl" ) 
		    {	
			    if(allElements[i].checked){
				 flag=0;
				 }
		   } 
		  } //for 判断是否全没有选中延误险
		   if(flag==1){
			del_name3.innerHTML="";
			}//全没选中 将意外险内容清空
			}//else
			
	}//点击延误险对应“份数x1”