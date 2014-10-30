package com.liu.newkepu.action;

import com.liu.newkepu.dao.HuiyitupianDao;
import com.liu.newkepu.model.Huiyitupian;
import com.liu.newkepu.vo.searchInfo;
import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.ModelDriven;
import org.apache.struts2.ServletActionContext;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Component("meetingtupian")
public class meetingtupian extends ActionSupport implements ModelDriven<Object> {

    private searchInfo searchInfo = new searchInfo();

    @Resource
    private HuiyitupianDao huiyitupianDao;

    private List<Huiyitupian> huiyitupians;

    @Override
    public String execute() throws Exception {
        HttpServletRequest request = ServletActionContext.getRequest();
        huiyitupians = huiyitupianDao.findBymeeting_id(request.getSession().getAttribute("meeting_id").toString());
        return "success";
    }

    @Override
    public Object getModel() {
        return searchInfo;
    }

    public List<Huiyitupian> getHuiyitupians() {
        return huiyitupians;
    }

    public void setHuiyitupians(List<Huiyitupian> huiyitupians) {
        this.huiyitupians = huiyitupians;
    }
}
