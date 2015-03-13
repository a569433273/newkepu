//登录下拉菜单效果
function lgn_pos(){
	document.getElementById("lgin1").style.background="#38a3db";
	document.getElementById("lgin1").style.color="#ffffff";
	var tp=parseInt(document.getElementById("lgin1").offsetTop);
	var lft=parseInt(document.getElementById("lgin1").offsetLeft);
	document.getElementById("pos_lgn1").style.top=tp+16+'px';
	document.getElementById("pos_lgn1").style.left=lft-30+'px';
	document.getElementById("pos_lgn1").style.display='block';
	}

	
function lgn_dispos(){
	document.getElementById("lgin1").style.background="none";
	document.getElementById("lgin1").style.color="#000";
	document.getElementById("pos_lgn1").style.display='none';
	}
	
