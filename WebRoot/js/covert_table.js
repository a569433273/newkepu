// 切换退改签 
function covert_table(id_name){
		var id_name2=document.getElementById("covert1");
		var id_name3=document.getElementById("covert3");
		if(id_name2.style.display==""){
			id_name3.innerHTML="<span>退改签费用标准&nbsp;<img src='../images/down.jpg' style='margin-bottom:-5px;'/></span>";
			id_name2.style.display="none";
			}
		else{
		  id_name3.innerHTML="<span>退改签费用标准&nbsp;<img src='../images/up.png' style='margin-bottom:-5px;'/></span>";
		  id_name2.style.display="";
		
		}	
	
	}