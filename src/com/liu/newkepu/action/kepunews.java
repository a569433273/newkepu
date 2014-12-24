package com.liu.newkepu.action;

import com.liu.newkepu.dao.NewsDao;
import com.liu.newkepu.model.News;
import com.liu.newkepu.vo.searchInfo;
import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.ModelDriven;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.util.List;

@Component("kepunews")
public class kepunews extends ActionSupport implements ModelDriven<Object>{
    private searchInfo searchInfo = new searchInfo();

    @Resource
    private NewsDao newsDao;

    private List<News> kepunewses;

    private List<News> shangyenewses;

    @Override
    public String execute() throws Exception{
        //窠浦新闻0，商业新闻1
        kepunewses = newsDao.findBytype("0");
        shangyenewses = newsDao.findBytype("1");

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
