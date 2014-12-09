package com.liu.newkepu.action;

import com.liu.newkepu.vo.searchInfo;
import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.ModelDriven;
import org.apache.struts2.ServletActionContext;
import org.springframework.stereotype.Component;

import java.io.*;

@Component("uploadimages")
public class uploadimages extends ActionSupport implements ModelDriven<Object> {
    private searchInfo searchInfo = new searchInfo();

    private File upload;
    private String fileName;
    private String uploadContentType;

    @Override
    public String execute() throws Exception {
        String lujing = ServletActionContext.getRequest().getSession().getServletContext().getRealPath("/upload");
        //带http://localhost:8080/TEST/test 类似的地址
        ServletActionContext.getRequest().getRequestURL();
        InputStream is = new FileInputStream(upload);
        OutputStream os = new FileOutputStream(lujing + "/" + fileName);
        byte buffer[] = new byte[8192];
        int count = 0;
        while ((count = is.read(buffer)) > 0) {
            os.write(buffer, 0, count);
        }
        os.close();
        is.close();
        return "success";
    }

    public String getUploadFileName() {
        return fileName;
    }

    public void setUploadFileName(String fileName) {
        this.fileName = fileName;
    }

    public File getUpload() {
        return upload;
    }

    public void setUpload(File upload) {
        this.upload = upload;
    }

    public void setUploadContentType(String contentType) {
        this.uploadContentType = contentType;
    }

    public String getUploadContentType() {
        return this.uploadContentType;
    }

    @Override
    public Object getModel() {
        return searchInfo;
    }
}
