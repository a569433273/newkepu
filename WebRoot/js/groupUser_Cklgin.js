//登录时的验证
function ck_lgin(){
	var txt_1=document.getElementById("login_nm").value;
	var txt_2=document.getElementById("login_pwd").value;
	if(txt_1=="" || txt_2==""){
		document.getElementById("ck_lgintxt").style.display="block";
		return false;
		}
	 else{
		document.getElementById("ck_lgintxt").style.display="none"; 
		return true;
		 }
	}