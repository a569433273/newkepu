package com.liu.newkepu.action;

import com.liu.newkepu.dao.HuiyitongzhiDao;
import com.liu.newkepu.model.Huiyitongzhi;
import com.liu.newkepu.vo.searchInfo;
import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.ModelDriven;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.util.List;

@Component("meetingrichengdetail")
public class meetingrichengdetail extends ActionSupport implements ModelDriven<Object> {
    private searchInfo searchInfo = new searchInfo();


    @Resource
    private HuiyitongzhiDao huiyitongzhiDao;

    private List<Huiyitongzhi> huiyitongzhidetails;

    @Override
    public String execute() throws Exception {
        huiyitongzhidetails = huiyitongzhiDao.findByhytzid(searchInfo.getTzid());
        return "success";
    }

    public List<Huiyitongzhi> getHuiyitongzhidetails() {
        return huiyitongzhidetails;
    }

    public void setHuiyitongzhidetails(List<Huiyitongzhi> huiyitongzhidetails) {
        this.huiyitongzhidetails = huiyitongzhidetails;
    }

    @Override
    public Object getModel() {
        return searchInfo;
    }
}
