package com.liu.newkepu.action;

import com.liu.newkepu.dao.HuiyijinjitongzhiDao;
import com.liu.newkepu.model.Huiyijinjitongzhi;
import com.liu.newkepu.vo.searchInfo;
import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.ModelDriven;
import org.apache.struts2.ServletActionContext;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Component("meetingtongzhi")
public class meetingtongzhi extends ActionSupport implements ModelDriven<Object>{

    private searchInfo searchInfo = new searchInfo();

    @Resource
    private HuiyijinjitongzhiDao huiyijinjitongzhiDao;

    private List<Huiyijinjitongzhi> huiyijinjitongzhis;

    @Override
    public String execute() throws Exception {
        HttpServletRequest request = ServletActionContext.getRequest();
        huiyijinjitongzhis = huiyijinjitongzhiDao.findBymeeting_id(request.getSession().getAttribute("meeting_id").toString());
        return "success";
    }

    @Override
    public Object getModel() {
        return searchInfo;
    }

    public List<Huiyijinjitongzhi> getHuiyijinjitongzhis() {
        return huiyijinjitongzhis;
    }

    public void setHuiyijinjitongzhis(List<Huiyijinjitongzhi> huiyijinjitongzhis) {
        this.huiyijinjitongzhis = huiyijinjitongzhis;
    }
}
