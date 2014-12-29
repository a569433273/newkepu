package com.liu.newkepu.action;

import com.liu.newkepu.dao.NewsDao;
import com.liu.newkepu.model.News;
import com.liu.newkepu.vo.searchInfo;
import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.ModelDriven;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

@Component("kepunews")
public class kepunews extends ActionSupport implements ModelDriven<Object>{
    private searchInfo searchInfo = new searchInfo();

    @Resource
    private NewsDao newsDao;

    private List<News> kepunewses = new ArrayList<News>();

    private List<News> shangyenewses = new ArrayList<News>();

    @Override
    public String execute() throws Exception{
        //窠浦新闻0，商业新闻1
        kepunewses.clear();
        shangyenewses.clear();
        List<News> kepunewsestemp = newsDao.findBytype("0");
        List<News> shangyenewsestemp = newsDao.findBytype("1");
        if (kepunewsestemp.size() > 7) {
            for (int i=0;i<7;i++) {
                kepunewses.add(kepunewsestemp.get(i));
            }
        } else {
            kepunewses = kepunewsestemp;
        }

        if (shangyenewsestemp.size() > 7) {
            for (int i=0;i<7;i++) {
                shangyenewses.add(shangyenewsestemp.get(i));
            }
        } else {
            shangyenewses = shangyenewsestemp;
        }
        return "success";
    }

    @Override
    public Object getModel() {
        return searchInfo;
    }

    public List<News> getKepunewses() {
        return kepunewses;
    }

    public void setKepunewses(List<News> kepunewses) {
        this.kepunewses = kepunewses;
    }

    public List<News> getShangyenewses() {
        return shangyenewses;
    }

    public void setShangyenewses(List<News> shangyenewses) {
        this.shangyenewses = shangyenewses;
    }
}
