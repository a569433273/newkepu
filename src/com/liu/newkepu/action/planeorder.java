package com.liu.newkepu.action;

import org.springframework.stereotype.Component;

import com.liu.newkepu.vo.searchInfo;
import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.ModelDriven;

@Component("planeorder")
public class planeorder extends ActionSupport implements ModelDriven<Object>{
	private searchInfo searchInfo = new searchInfo();

	@Override
	public String execute() throws Exception {
		return null;
	}
	
	@Override
	public Object getModel() {
		// TODO Auto-generated method stub
		return searchInfo;
	}

}
