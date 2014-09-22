// <!--登录中的切换效果--
function show_user(us_name){//登录显示隐藏
	var a1=document.getElementById("show_all1");
	var a2=document.getElementById("show_all2");
	if(us_name=="us1"){
		a1.style.display="block";
		a2.style.display="none";
		}
		else{
		a1.style.display="none";
		a2.style.display="block";	
	}
	}