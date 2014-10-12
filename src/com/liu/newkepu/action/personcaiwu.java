package com.liu.newkepu.action;

import com.liu.newkepu.vo.searchInfo;
import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.ModelDriven;
import org.springframework.stereotype.Component;

@Component("personcaiwu")
public class personcaiwu extends ActionSupport implements ModelDriven<Object>{

    private searchInfo searchInfo = new searchInfo();

    @Override
    public String execute() throws Exception {
        return null;
    }

    @Override
    public Object getModel() {
        return searchInfo;
    }
}
