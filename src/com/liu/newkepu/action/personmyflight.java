package com.liu.newkepu.action;

import com.liu.newkepu.dao.MyflightDao;
import com.liu.newkepu.model.Myflight;
import com.liu.newkepu.vo.searchInfo;
import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.ModelDriven;
import org.apache.struts2.ServletActionContext;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Component("personmyflight")
public class personmyflight extends ActionSupport implements ModelDriven<Object> {

    private searchInfo searchInfo = new searchInfo();

    @Resource
    private MyflightDao myflightDao;

    private List<Myflight> myflights;

    @Override
    public String execute() throws Exception {
        HttpServletRequest request = ServletActionContext.getRequest();
        myflights = myflightDao.findBymember_id(request.getSession().getAttribute("member_id").toString());
        return "success";
    }

    @Override
    public Object getModel() {
        return searchInfo;
    }

    public List<Myflight> getMyflights() {
        return myflights;
    }

    public void setMyflights(List<Myflight> myflights) {
        this.myflights = myflights;
    }
}
