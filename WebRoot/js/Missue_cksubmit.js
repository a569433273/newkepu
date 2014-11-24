// 发起会议验证
function Minti_cksub(){
	var flag1=0;
	var flag2=0;
	var flag3=0;
	var aa1=document.getElementById("Minti_depart").value.replace(/(^\s*)|(\s*$)/g,"").length;
	var aa2=document.getElementById("Minti_name").value.replace(/(^\s*)|(\s*$)/g,"").length;
	var aa3=document.getElementById("Minti_city").value.replace(/(^\s*)|(\s*$)/g,"").length;
	var aa4=document.getElementById("Minti_where").value.replace(/(^\s*)|(\s*$)/g,"").length;
	if(aa1==0 || aa2==0 || aa3==0 || aa4==0){
		flag1=1;
		}
   var aa5=document.getElementById("Minti_pnum").value.replace(/(^\s*)|(\s*$)/g,"");
   var aa6=parseInt(aa5);
   var aa7=document.getElementById("Minti_dnum").value.replace(/(^\s*)|(\s*$)/g,"");
   var aa8=parseInt(aa7);
   var aa9=document.getElementById("minti_money").value.replace(/(^\s*)|(\s*$)/g,"");
   var aa10=parseInt(aa9);
   if(isNaN(aa6) || isNaN(aa8) || isNaN(aa10)){flag2=1;}
   var aa11=document.getElementById("Minti_date").value.replace(/(^\s*)|(\s*$)/g,"").length;
   if(aa11==0){flag3=1;}
   if(flag1==0 && flag2==0 && flag3==0){ return true;}else{ return false;}
	}