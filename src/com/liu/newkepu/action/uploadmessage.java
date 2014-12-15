package com.liu.newkepu.action;

import com.liu.newkepu.dao.HuiyitongzhiDao;
import com.liu.newkepu.model.Huiyitongzhi;
import com.liu.newkepu.vo.searchInfo;
import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.ModelDriven;
import org.apache.struts2.ServletActionContext;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.UUID;

@Component("uploadmessage")
public class uploadmessage extends ActionSupport implements ModelDriven<Object>{
    private searchInfo searchInfo = new searchInfo();

    @Resource
    private HuiyitongzhiDao huiyitongzhiDao;

    @Override
    public String execute() throws Exception {
        HttpServletRequest request = ServletActionContext.getRequest();
        Huiyitongzhi huiyitongzhi = new Huiyitongzhi();
        huiyitongzhi.setHytz_id(UUID.randomUUID().toString());
        huiyitongzhi.setHytz_bt(searchInfo.getHuiyibiaotibj());
        huiyitongzhi.setHytz_nr(searchInfo.getEditor());
        huiyitongzhi.setHytz_meeting_id(request.getSession().getAttribute("meeting_id").toString());
        Calendar calendar = Calendar.getInstance();
        DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd hh-mm");
        huiyitongzhi.setHytz_date(dateFormat.format(calendar.getTime()));
        huiyitongzhiDao.sava(huiyitongzhi);
        return "success";
    }

    @Override
    public Object getModel() {
        return searchInfo;
    }
}
