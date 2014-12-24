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
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.List;

@Component("meetingopen")
public class meetingopen extends ActionSupport implements ModelDriven<Object> {

    private searchInfo searchInfo = new searchInfo();

    @Resource
    private MeetingDao meetingDao;

    private List<Meeting> meetings;

    @Override
    public String execute() throws Exception {
        //TODO 给所有的方法上加上member_id检测，失效就返回首页
        Meeting meeting = new Meeting();
        boolean chongfu = true;
        String theid = "NP" + String.valueOf(Math.random()).substring(2, 8);
        while (chongfu == true) {
            meetings = meetingDao.findbymeeting_id(theid);
            if (meetings.size() > 0) {
                theid = "NP" + String.valueOf(Math.random()).substring(2, 8);
            } else {
                chongfu = false;
            }
        }
        meeting.setMeeting_id(theid);
        meeting.setMeeting_zzdw(searchInfo.getMinti_depart());
        meeting.setMeeting_name(searchInfo.getMinti_name());
        meeting.setMeeting_city(searchInfo.getMinti_city());
        meeting.setMeeting_hoteladdress(searchInfo.getMinti_where());
        meeting.setMeeting_count(searchInfo.getMinti_pnum());
        meeting.setMeeting_bddate(searchInfo.getMinti_date());
        meeting.setMeeting_daycount(searchInfo.getMinti_dnum());
        meeting.setMeeting_price(searchInfo.getMinti_money());
        HttpServletRequest request = ServletActionContext.getRequest();
        if (request.getSession().getAttribute("member_id").toString().equals("") || request.getSession().getAttribute("member_id").toString().isEmpty()) {
            return "faild";
        }
        meeting.setMeeting_member_id(request.getSession().getAttribute("member_id").toString());
        Calendar calendar = Calendar.getInstance();
        DateFormat fenzhongformat = new SimpleDateFormat("YYYY-MM-DD");
        String timenow = fenzhongformat.format(calendar.getTime());
        meeting.setMeeting_cjdate(timenow);
        meetingDao.save(meeting);
        meetings = meetingDao.findbymeeting_id(theid);
        request.getSession().setAttribute("meeting_id",theid);
        return "success";
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
