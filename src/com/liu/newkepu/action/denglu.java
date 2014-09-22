package com.liu.newkepu.action;

import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.apache.struts2.ServletActionContext;
import org.springframework.stereotype.Component;

import com.liu.newkepu.dao.UserDao;
import com.liu.newkepu.model.User;
import com.liu.newkepu.vo.searchInfo;
import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.ModelDriven;

@Component("denglu")
public class denglu extends ActionSupport implements ModelDriven<Object> {

	private searchInfo searchInfo = new searchInfo();

	@Resource
	private UserDao userDao;

	@Override
	public String execute() throws Exception {
		String yuangong = "";
		List<User>	users = userDao.findBynameandword(searchInfo.getUsername(),
					searchInfo.getPassword());
		HttpServletRequest request = ServletActionContext.getRequest();
		if (searchInfo.getStatus() !=null && searchInfo.getStatus().equals("0")&&searchInfo.getStatus() != "") {
			request.getSession().removeAttribute("yuangong");
			return "faild";
		}
		if (users.size() <= 0) {
			yuangong = "1";
			request.getSession().setAttribute("yuangong", yuangong);
			return "faild";
		} else {
			yuangong = users.get(0).getYuangong();
			request.getSession().setAttribute("yuangong", yuangong);
			searchInfo.setUsername(null);
		return "success";
		}
	}

	public denglu() {

	}

	@Override
	public Object getModel() {
		// TODO Auto-generated method stub
		return searchInfo;
	}

}
