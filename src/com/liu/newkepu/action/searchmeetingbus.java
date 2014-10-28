package com.liu.newkepu.action;

import com.liu.newkepu.dao.ZixunDao;
import com.liu.newkepu.model.Zixun;
import com.liu.newkepu.util.ZhengzeUtil;
import com.liu.newkepu.vo.searchInfo;
import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.ModelDriven;
import org.apache.struts2.ServletActionContext;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Component("searchmeetingbus")
public class searchmeetingbus extends ActionSupport implements ModelDriven<Object>{
    private searchInfo searchInfo = new searchInfo();

    @Resource
    private ZixunDao zixunDao;

    private List<Zixun> zixuns;

    @Override
    public String execute() throws Exception {
        HttpServletRequest request = ServletActionContext.getRequest();
        ZhengzeUtil zhengzeUtil = new ZhengzeUtil();
        zixuns = zixunDao.findBymember_id(request.getSession().getAttribute("meeting_id").toString());
        for (int i=0;i< zixuns.size();i++){
            int firstp = zixuns.get(i).getZixun_neirong().indexOf("</p>");
            List<String> thestt = zhengzeUtil.zhengze(zixuns.get(i).getZixun_neirong().substring(0,firstp),"[\\u4e00-\\u9fa5]");
            if (thestt.size() > 70) {
                zixuns.get(i).setZixun_neirong( zixuns.get(i).getZixun_neirong().substring(0,zixuns.get(i).getZixun_neirong().lastIndexOf(thestt.get(70))) + "</p>");
            } else {
                zixuns.get(i).setZixun_neirong( zixuns.get(i).getZixun_neirong().substring(0,zixuns.get(i).getZixun_neirong().lastIndexOf(thestt.get(thestt.size()))) + "</p>");
            }
        }
        return "success";
    }

    @Override
    public Object getModel() {
        return searchInfo;
    }

    public List<Zixun> getZixuns() {
        return zixuns;
    }

    public void setZixuns(List<Zixun> zixuns) {
        this.zixuns = zixuns;
    }
}
