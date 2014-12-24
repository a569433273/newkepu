package com.liu.newkepu.action;

import com.liu.newkepu.dao.HuiyitupianDao;
import com.liu.newkepu.model.Huiyitupian;
import com.liu.newkepu.vo.searchInfo;
import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.ModelDriven;
import net.coobird.thumbnailator.Thumbnails;
import org.apache.struts2.ServletActionContext;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.io.*;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.UUID;

@Component("uploadimages")
public class uploadimages extends ActionSupport implements ModelDriven<Object> {
    private searchInfo searchInfo = new searchInfo();

    private File upload;
    private String fileName;
    private String uploadContentType;

    @Resource
    private HuiyitupianDao huiyitupianDao;

    @Override
    public String execute() throws Exception {
        HttpServletRequest request = ServletActionContext.getRequest();
        String lujing = request.getSession().getServletContext().getRealPath("/upload");
        String yuantulujing = lujing + "/images/meeting/" + request.getSession().getAttribute("meeting_id").toString() + "/Yuan/" + fileName;
        InputStream is = new FileInputStream(upload);
        OutputStream os = new FileOutputStream(yuantulujing);
        byte buffer[] = new byte[8192];
        int count = 0;
        while ((count = is.read(buffer)) > 0) {
            os.write(buffer, 0, count);
        }
        os.close();
        is.close();
        Thumbnails.of(yuantulujing).scale(1.00f).toFile(lujing + "/images/meeting/" + request.getSession().getAttribute("meeting_id").toString() + "/Mobile/" + fileName);
        Thumbnails.of(yuantulujing).size(106, 106).toFile(lujing + "/images/meeting/" + request.getSession().getAttribute("meeting_id").toString() + "/IOS/" + fileName);
        Thumbnails.of(yuantulujing).size(106, 106).toFile(lujing + "/images/meeting/" + request.getSession().getAttribute("meeting_id").toString() + "/Android/" + fileName);
        Thumbnails.of(yuantulujing).size(135, 100).toFile(lujing + "/images/meeting/" + request.getSession().getAttribute("meeting_id").toString() + "/Suo/" + fileName);

        Huiyitupian huiyitupian = new Huiyitupian();
        huiyitupian.setHytp_id(UUID.randomUUID().toString());
        huiyitupian.setHytp_meeting_id(request.getSession().getAttribute("meeting_id").toString());
        huiyitupian.setHytp_url("http://58.132.171.39:8080/newkepu/upload/images/meeting/" + request.getSession().getAttribute("meeting_id").toString() + "/Mobile/" + fileName);
        huiyitupian.setHytp_iosurl("http://58.132.171.39:8080/newkepu/upload/images/meeting/" + request.getSession().getAttribute("meeting_id").toString() + "/IOS/" + fileName);
        huiyitupian.setHytp_andurl("http://58.132.171.39:8080/newkepu/upload/images/meeting/" + request.getSession().getAttribute("meeting_id").toString() + "/Android/" + fileName);
        huiyitupian.setHytp_weburl("http://58.132.171.39:8080/newkepu/upload/images/meeting/" + request.getSession().getAttribute("meeting_id").toString() + "/Suo/" + fileName);
        huiyitupian.setHytp_webyuanurl("http://58.132.171.39:8080/newkepu/upload/images/meeting/" + request.getSession().getAttribute("meeting_id").toString() + "/Yuan/" + fileName);
        Calendar calendar = Calendar.getInstance();
        DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd hh-mm-ss");
        huiyitupian.setHytp_time(dateFormat.format(calendar.getTime()));
        huiyitupian.setHytp_tpname(fileName);
        huiyitupian.setHytp_isdel(0);
        huiyitupianDao.save(huiyitupian);
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
