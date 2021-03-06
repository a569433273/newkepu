package com.liu.newkepu.action;

import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import com.liu.newkepu.dao.MemberDao;
import com.liu.newkepu.model.Member;
import com.liu.newkepu.util.Des3;
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
    private MemberDao memberDao;

    @Override
    public String execute() throws Exception {
        HttpServletRequest request = ServletActionContext.getRequest();
        if (searchInfo.getTuichu() == 1) {
            request.getSession().setAttribute("member_id", null);
            searchInfo.setTuichu(0);
            return "success";
        }
        List<Member> members = memberDao.findBynameandpassword(searchInfo.getUsername(), Des3.encode(searchInfo.getPassword()));
        if (members.size() > 0) {
            request.getSession().setAttribute("member_id", members.get(0).getMember_id());
            request.getSession().setAttribute("member_realname", members.get(0).getMember_realname());
            request.getSession().setAttribute("member_shstate", members.get(0).getMember_shstate());
            request.getSession().setAttribute("member_level",members.get(0).getMember_level());
            request.getSession().setAttribute("member_yqm",members.get(0).getMember_yqm());
            return "success";
        }
        request.getSession().setAttribute("member_id", null);
        return "faild";
    }

    public denglu() {

    }

    @Override
    public Object getModel() {
        return searchInfo;
    }

}
