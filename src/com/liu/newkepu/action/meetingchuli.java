package com.liu.newkepu.action;

import com.liu.newkepu.dao.MeetingDao;
import com.liu.newkepu.model.Meeting;
import com.liu.newkepu.vo.searchInfo;
import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.ModelDriven;
import org.apache.struts2.ServletActionContext;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Component("meetingchuli")
public class meetingchuli extends ActionSupport implements ModelDriven<Object> {

    private searchInfo searchInfo = new searchInfo();

    @Resource
    private MeetingDao meetingDao;

    private List<Meeting> meetings;

    @Override
    public String execute() throws Exception {
        HttpServletRequest request = ServletActionContext.getRequest();
        //0为update
        if (searchInfo.getChuliid() == 0) {
            meetings = meetingDao.findbymeeting_id(request.getSession().getAttribute("meeting_id").toString());
            Meeting meeting = meetings.get(0);
            meeting.setMeeting_zzdw(searchInfo.getMdet_depart());
            meeting.setMeeting_name(searchInfo.getMdet_name());
            meeting.setMeeting_city(searchInfo.getMdet_city());
            meeting.setMeeting_hoteladdress(searchInfo.getMdet_where());
            meeting.setMeeting_count(searchInfo.getMdet_pnum());
            meeting.setMeeting_bddate(searchInfo.getMdet_report());
            meeting.setMeeting_daycount(searchInfo.getMdet_partnum());
            meeting.setMeeting_price(searchInfo.getMdet_money());
            meetingDao.update(meeting);
            meetings = meetingDao.findbymeeting_id(request.getSession().getAttribute("meeting_id").toString());
            return "success";
        }
        return null;
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
