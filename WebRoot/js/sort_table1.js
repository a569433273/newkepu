//sort_table1.js 对价格进行升降序
function sortTable1(tableId,Idx,asd){
      try{
         HTMLElement.prototype.__defineGetter__
         (
         "innerText",
         function ()
         {
             var anyString = "";
             var childS = this.childNodes;
             for(var i=0; i<childS.length; i++)
             {
                 if(childS[i].nodeType==1)
                     anyString += childS[i].tagName=="BR" ? '"n' : childS[i].innerText;
                 else if(childS[i].nodeType==3)
                     anyString += childS[i].nodeValue;
             }
             return anyString;
          }
         ); 
        }
       catch(e){} //firfox兼容innerText
				var t_table=document.getElementById(tableId);
				var t_tbody = t_table.getElementsByTagName("tbody");
				var num_t=t_tbody.length;
				// 取出每个tbody 比较价格
				for(var i=0;i<num_t;i++){
					var tbody1 = t_table.getElementsByTagName("tbody")[i];
					//对价格进行比较
					for(var j=i+1; j<num_t;j++){
						var tr1=tbody1.rows;
				        var tr1_len=tr1.length;
					    var tr1_tr=tr1[tr1_len-2];//取出最后一个tr 从大到小排 最后一个tr价格最低
					    var tr1_tr_td=tr1_tr.cells[Idx].innerText;//取出价格所在单元格所对应的值
						var len1=tr1_tr_td.length;
						var tr1_str=tr1_tr_td.substr(4);
						var tr1_str_len=tr1_str.length;
						//取出价格
						    for(var ii=0;ii<tr1_str_len;ii++){
							  var pri_str1=tr1_str.substr(ii,1);
							  var pri_str2=parseInt(pri_str1);
							  if(isNaN(pri_str2)){
								  var mm=ii;
								  break;
								  }
							  }
						  var tr1_str=tr1_str.substr(0,mm);//取出价格
						  //取出价格 is over
						var tr1_int=parseInt(tr1_str,10);//将价格转换为数值
						var tbody2=t_table.getElementsByTagName("tbody")[j];
						var tr2=tbody2.rows;
						var tr2_len=tr2.length;
						var tr2_tr=tr2[tr2_len-2];
						var tr2_tr_td=tr2_tr.cells[Idx].innerText;//取出价格所在单元格所对应的值
						var len2=tr2_tr_td.length;
						var tr2_str=tr2_tr_td.substr(4);
						var tr2_str_len=tr2_str.length;
						 //取出价格
						  for(var iii=0;i<tr2_str_len;iii++){
							  var pri_str1=tr2_str.substr(iii,1);
							  var pri_str2=parseInt(pri_str1);
							  if(isNaN(pri_str2)){
								  var mmm=iii;
								  break;
								  }
							  }
							 var tr2_str=tr2_str.substr(0,mmm);//取出价格
						  //取出价格 over
						var tr2_int=parseInt(tr2_str,10);//将价格2转换为数值
						// 升序 交换tbody
						if(asd=='asc'){if(tr1_int>tr2_int){
						var cloneTr = tbody1.cloneNode(true); //交换位置,交换会失败,替换后,会少一行
                        tbody2.parentNode.replaceChild(cloneTr, tbody2); 
                        tbody1.parentNode.replaceChild(tbody2, tbody1);
				           var tbody3=tbody1;
							  tbody1=tbody2;
							  tbody2=tbody3;
							}}//if
						// 降序 交换tbody
						 else{
							 if(tr1_int<tr2_int){
						      var cloneTr = tbody1.cloneNode(true); //交换位置,交换会失败,替换后,会少一行
                              tbody2.parentNode.replaceChild(cloneTr, tbody2); 
                              tbody1.parentNode.replaceChild(tbody2, tbody1);
				              var tbody3=tbody1;
							  tbody1=tbody2;
							  tbody2=tbody3;
							}
							 }//else
						}
				}//for
				
				}

