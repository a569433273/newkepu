// JavaScript Document
 function setTab(name,cursel){
	for(var i=1; i<=2; i++){
		var menu = document.getElementById(name+i);
		var menudiv = document.getElementById(name+"_"+i);
		if(i==cursel){
			menu.className='fore1';
			menudiv.style.display="block";
		}
		else{
			menu.className='fore2';
			menudiv.style.display="none";
		}
	}
}