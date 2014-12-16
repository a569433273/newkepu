package com.liu.newkepu.action;

import com.liu.newkepu.dao.ZixunDao;
import com.liu.newkepu.model.Zixun;
import com.liu.newkepu.vo.searchInfo;
import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.ModelDriven;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.util.List;

@Component("meetingbusdetail")
public class meetingbusdetail extends ActionSupport implements ModelDriven<Object> {
    private searchInfo searchInfo = new searchInfo();

    @Resource
    private ZixunDao zixunDao;

    private List<Zixun> zixundetails;

    @Override
    public String execute() throws Exception {
        zixundetails = zixunDao.findByzixunid(searchInfo.getZxid());
        return "success";
    }

    @Override
    public Object getModel() {
        return searchInfo;
    }

    public List<Zixun> getZixundetails() {
        return zixundetails;
    }

    public void setZixundetails(List<Zixun> zixundetails) {
        this.zixundetails = zixundetails;
    }
}
