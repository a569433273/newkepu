package com.liu.newkepu.action;

import com.liu.newkepu.dao.ZixunDao;
import com.liu.newkepu.model.Zixun;
import com.liu.newkepu.util.ZhengzeUtil;
import com.liu.newkepu.vo.searchInfo;
import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.ModelDriven;
import org.apache.struts2.ServletActionContext;
import org.hibernate.SessionFactory;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Component("searchmeetingbus")
public class searchmeetingbus extends ActionSupport implements ModelDriven<Object> {
    private searchInfo searchInfo = new searchInfo();

    @Resource
    private ZixunDao zixunDao;

    @Resource
    private SessionFactory sessionFactory;

    private List<Zixun> zixuns;

    @Override
    public String execute() throws Exception {
        HttpServletRequest request = ServletActionContext.getRequest();
        ZhengzeUtil zhengzeUtil = new ZhengzeUtil();
        zixuns = zixunDao.findBymember_id(request.getSession().getAttribute("meeting_id").toString());
        if (zixuns.size() > 0) {
            for (Zixun zixun : zixuns) {
                sessionFactory.getCurrentSession().evict(zixun);
                int firstp = zixun.getZixun_neirong().indexOf("</p>");
                List<String> thestt = zhengzeUtil.zhengze(zixun.getZixun_neirong().substring(0, firstp), "[\\u4e00-\\u9fa5]");
                if (thestt.size() > 0) {
                    if (thestt.size() > 70) {
                        zixun.setZixun_neirong(zixun.getZixun_neirong().substring(0, zixun.getZixun_neirong().lastIndexOf(thestt.get(70))) + "</p>");
                    } else {
                        zixun.setZixun_neirong(zixun.getZixun_neirong().substring(0, zixun.getZixun_neirong().lastIndexOf(thestt.get(thestt.size() - 1))) + "</p>");
                    }
                }
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
