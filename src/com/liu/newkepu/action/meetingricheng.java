package com.liu.newkepu.action;

import com.liu.newkepu.dao.HuiyitongzhiDao;
import com.liu.newkepu.model.Huiyitongzhi;
import com.liu.newkepu.util.ZhengzeUtil;
import com.liu.newkepu.vo.searchInfo;
import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.ModelDriven;
import org.apache.struts2.ServletActionContext;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Component("meetingricheng")
public class meetingricheng extends ActionSupport implements ModelDriven<Object>{

    private searchInfo searchInfo = new searchInfo();

    @Resource
    private HuiyitongzhiDao huiyitongzhiDao;

    private List<Huiyitongzhi> huiyitongzhis;

    @Override
    public String execute() throws Exception {
        HttpServletRequest request = ServletActionContext.getRequest();
        ZhengzeUtil zhengzeUtil = new ZhengzeUtil();
        huiyitongzhis = huiyitongzhiDao.findBymember_id(request.getSession().getAttribute("meeting_id").toString());
        for (Huiyitongzhi huiyitongzhi : huiyitongzhis) {
            int firstp = huiyitongzhi.getHytz_nr().indexOf("</p>");
            List<String> thestt = zhengzeUtil.zhengze(huiyitongzhi.getHytz_nr().substring(0, firstp), "[\\u4e00-\\u9fa5]");
            if (thestt.size() > 70) {
                huiyitongzhi.setHytz_nr(huiyitongzhi.getHytz_nr().substring(0, huiyitongzhi.getHytz_nr().lastIndexOf(thestt.get(70))) + "</p>");
            } else {
                huiyitongzhi.setHytz_nr(huiyitongzhi.getHytz_nr().substring(0, huiyitongzhi.getHytz_nr().lastIndexOf(thestt.get(thestt.size()))) + "</p>");
            }
        }
        return "success";
    }

    @Override
    public Object getModel() {
        return searchInfo;
    }

    public List<Huiyitongzhi> getHuiyitongzhis() {
        return huiyitongzhis;
    }

    public void setHuiyitongzhis(List<Huiyitongzhi> huiyitongzhis) {
        this.huiyitongzhis = huiyitongzhis;
    }
}
