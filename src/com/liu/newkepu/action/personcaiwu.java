package com.liu.newkepu.action;

import com.liu.newkepu.dao.CaiwuDao;
import com.liu.newkepu.dao.XunizhanghuDao;
import com.liu.newkepu.model.Caiwu;
import com.liu.newkepu.model.Xunizhanghu;
import com.liu.newkepu.vo.searchInfo;
import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.ModelDriven;
import org.apache.struts2.ServletActionContext;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Component("personcaiwu")
public class personcaiwu extends ActionSupport implements ModelDriven<Object> {

    private searchInfo searchInfo = new searchInfo();

    @Resource
    private CaiwuDao caiwuDao;

    @Resource
    private XunizhanghuDao xunizhanghuDao;

    private List<Caiwu> caiwus;

    private List<Xunizhanghu> xunizhanghus;

    @Override
    public String execute() throws Exception {
        HttpServletRequest request = ServletActionContext.getRequest();
        caiwus = caiwuDao.findBymember_id(request.getSession().getAttribute("member_id").toString());
        xunizhanghus = xunizhanghuDao.findBymemberid(request.getSession().getAttribute("member_id").toString());
        return "success";
    }

    @Override
    public Object getModel() {
        return searchInfo;
    }

    public List<Caiwu> getCaiwus() {
        return caiwus;
    }

    public void setCaiwus(List<Caiwu> caiwus) {
        this.caiwus = caiwus;
    }

    public List<Xunizhanghu> getXunizhanghus() {
        return xunizhanghus;
    }

    public void setXunizhanghus(List<Xunizhanghu> xunizhanghus) {
        this.xunizhanghus = xunizhanghus;
    }
}
