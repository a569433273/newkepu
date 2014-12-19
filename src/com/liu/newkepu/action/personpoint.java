package com.liu.newkepu.action;

import com.liu.newkepu.dao.GuizeDao;
import com.liu.newkepu.dao.JifenjiluDao;
import com.liu.newkepu.dao.MemberDao;
import com.liu.newkepu.dao.XunizhanghuDao;
import com.liu.newkepu.model.Guize;
import com.liu.newkepu.model.Jifenjilu;
import com.liu.newkepu.model.Member;
import com.liu.newkepu.model.Xunizhanghu;
import com.liu.newkepu.vo.searchInfo;
import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.ModelDriven;
import org.apache.struts2.ServletActionContext;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Map;

@Component("personpoint")
public class personpoint extends ActionSupport implements ModelDriven<Object>{
    private searchInfo searchInfo = new searchInfo();

    @Resource
    private GuizeDao guizeDao;

    @Resource
    private MemberDao memberDao;

    @Resource
    private JifenjiluDao jifenjiluDao;

    @Resource
    private XunizhanghuDao xunizhanghuDao;

    private List<Guize> guizes;
    private List<Jifenjilu> jifenjilus;
    private List<Xunizhanghu> xunizhanghus;

    private List<Map> memberseconds;

    @Override
    public String execute() throws Exception {
        HttpServletRequest request = ServletActionContext.getRequest();
        guizes = guizeDao.findBygzid("jifenguize12");
        xunizhanghus = xunizhanghuDao.findBymemberid(request.getSession().getAttribute("member_id").toString());
        jifenjilus = jifenjiluDao.findBymemberid(request.getSession().getAttribute("member_id").toString());
        memberseconds = memberDao.findThesecond(request.getSession().getAttribute("member_yqm").toString());
        return "success";
    }

    @Override
    public Object getModel() {
        return searchInfo;
    }

    public List<Guize> getGuizes() {
        return guizes;
    }

    public void setGuizes(List<Guize> guizes) {
        this.guizes = guizes;
    }

    public List<Jifenjilu> getJifenjilus() {
        return jifenjilus;
    }

    public void setJifenjilus(List<Jifenjilu> jifenjilus) {
        this.jifenjilus = jifenjilus;
    }

    public List<Xunizhanghu> getXunizhanghus() {
        return xunizhanghus;
    }

    public void setXunizhanghus(List<Xunizhanghu> xunizhanghus) {
        this.xunizhanghus = xunizhanghus;
    }

    public List<Map> getMemberseconds() {
        return memberseconds;
    }

    public void setMemberseconds(List<Map> memberseconds) {
        this.memberseconds = memberseconds;
    }
}
