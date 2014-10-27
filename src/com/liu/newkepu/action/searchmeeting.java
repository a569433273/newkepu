package com.liu.newkepu.action;

import com.liu.newkepu.dao.MeetingDao;
import com.liu.newkepu.model.Meeting;
import com.liu.newkepu.vo.searchInfo;
import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.ModelDriven;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.util.List;

@Component("searchmeeting")
public class searchmeeting extends ActionSupport implements ModelDriven<Object>{

    private searchInfo searchInfo = new searchInfo();

    @Resource
    private MeetingDao meetingDao;

    private  List<Meeting> meetings;

    @Override
    public String execute() throws Exception {
        meetings = meetingDao.findbymeeting_id(searchInfo.getMt_nm());
        if (meetings.size() > 0) {
            return "success";
        }
        return "faild";
    }

    @Override
    public Object getModel() {
        return searchInfo;
    }

    public List<Meeting> getMeetings() {
        return meetings;
    }

    public void setMeetings(List<Meeting> meetings) {
        this.meetings = meetings;
    }
}
