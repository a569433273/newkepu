//分页效果
function goPage(pno,psize,p_nl){
   setupZoom();
   document.getElementById("Pg_1").innerHTML = "";
	var tby1_nm="tb_tab";
	var pge1_nm="page_total";
	var itable = document.getElementById(tby1_nm);
	var num = itable.rows.length;//表格行数
	var totalPage = 0;//总页数
	var pageSize = psize;//每页显示行数
	if((num-1)/pageSize > parseInt((num-1)/pageSize)){
   		totalPage=parseInt((num-1)/pageSize)+1;  
   	}else{ 
   		totalPage=parseInt((num-1)/pageSize);
   	}  
	var currentPage = pno;//当前页数
	var startRow = (currentPage - 1) * pageSize+1;//开始显示的行
   	var endRow = currentPage * pageSize+1;//结束显示的行 
   	endRow = (endRow > num)? num : endRow;
	//前三行始终显示
   	for(var i=1;i<num;i++){ 
		var irow = itable.rows[i]; 
		if(i>=startRow&&i<endRow){ 
			irow.style.display = "";
		}else{
			irow.style.display = "none";
		}
	}
	var tempStr = "<span style='font-size:12px; line-heigth:25px;'>共"+(num-1)*4+"条记录 分"+totalPage+"页    当前第</span>"
	 tempStr+="<span style='color:#f00; line-height:25px; font-size:12px;'>"+currentPage+"</span>";
	 tempStr+="<span style='line-height:25px; font-size:12px;'>页&nbsp;</span>";
	if(currentPage>1){
		tempStr += "<a href='#' onClick='goPage("+(currentPage-1)+","+psize+","+(currentPage-1)+")' class='a_page'>上一页</a>"; 
	}else{
		tempStr += "<span >上一页</span>";
	}
	//页码
	for(var k=1;k<=totalPage;k++){
		tempStr += "<a href='#' onClick='goPage("+(k)+","+psize+" ,"+k+")' id='p_len"+k+"' style='margin-left:5px;' class='a_page'>"+k+"</a>  "
		}
	if(currentPage<totalPage)
	  {
		tempStr += "<a href='#' onClick='goPage("+(currentPage+1)+","+psize+","+(currentPage+1)+")'  style='margin-left:5px;' class='a_page'>下一页</a>";
	  }
    else{
	   tempStr += "<span style='margin-left:5px;'>下一页</span>";
	   }
	if(currentPage>1){
 
		tempStr += "<a href='#' onClick='goPage("+(1)+","+psize+","+1+")' style='margin-left:5px;' class='a_page'>首页</a>";
 
	}else{
		tempStr += "<span class='a_sep1' style='margin-left:5px;'>首页</span>";
	}
 
	if(currentPage<totalPage){
		tempStr += "<a href='#' onClick='goPage("+(totalPage)+","+psize+","+(totalPage)+")'  style='margin-left:5px;' class='a_page'>尾页</a>";
 
	}else{
		tempStr += "<span  style='margin-left:5px;'>尾页</span>";
	}
	document.getElementById("Pg_1").innerHTML = tempStr;
    var pa_name="p_len"+p_nl;
	document.getElementById(pa_name).className="a_page1"
}