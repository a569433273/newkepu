function ShowFLT(aaa) {
	var at1=aaa;
    var lbmc=document.getElementById(at1);
	 var subnum=aaa.substr(3);	
	var x=document.getElementsByClassName('trdis'+subnum);
	if (lbmc.className=='as0') {
	for(var i=0;i<x.length;i++){
        x[i].style.display='';
        lbmc.className='a_but1';
    }}
	
    else {
		var x1=document.getElementById('sss'+subnum);
		for(var i=0;i<x.length;i++){
			      lbmc.className='as0';
				x[i].style.display='none';
		}
		x1.style.display='';
		}
       
  
  }