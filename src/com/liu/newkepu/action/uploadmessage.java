package com.liu.newkepu.action;

import com.liu.newkepu.vo.searchInfo;
import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.ModelDriven;
import org.springframework.stereotype.Component;

@Component("uploadmessage")
public class uploadmessage extends ActionSupport implements ModelDriven<Object>{
    private searchInfo searchInfo = new searchInfo();

    @Override
    public String execute() throws Exception {
        String ss = searchInfo.getEditor();
        System.out.println(ss);
        return "success";
    }

    @Override
    public Object getModel() {
        return searchInfo;
    }
}
