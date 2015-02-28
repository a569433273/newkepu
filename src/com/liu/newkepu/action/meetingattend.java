package com.liu.newkepu.action;

import com.liu.newkepu.dao.MeetingrenDao;
import com.liu.newkepu.dao.MemberDao;
import com.liu.newkepu.model.Meetingren;
import com.liu.newkepu.model.Member;
import com.liu.newkepu.vo.searchInfo;
import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.ModelDriven;
import org.apache.struts2.ServletActionContext;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;

@Component("meetingattend")
public class meetingattend extends ActionSupport implements ModelDriven<Object> {

    private searchInfo searchInfo = new searchInfo();

    @Resource
    private MeetingrenDao meetingrenDao;

    @Resource
    private MemberDao memberDao;

    private List<Member> memberscanjia = new ArrayList<Member>();

    private List<Member> membersfaqi = new ArrayList<Member>();

    private List<Member> membersguanli = new ArrayList<Member>();

    private List<Member> membersxieban = new ArrayList<Member>();

    @Override
    public String execute() throws Exception {
        membersfaqi.clear();
        memberscanjia.clear();
        membersxieban.clear();
        membersguanli.clear();
        HttpServletRequest request = ServletActionContext.getRequest();
        List<Meetingren> meetingrens = meetingrenDao.findBymeeting_id(request.getSession().getAttribute("meeting_id").toString());
        for (Meetingren meetingren : meetingrens) {
            Member member = memberDao.findBymember_id(meetingren.getMember_id()).get(0);
            if (meetingren.getIsflag() == 0) {
                membersfaqi.add(member);
            } else {
                if (meetingren.getIsgrant() == 1) {
                    membersguanli.add(member);
                } else if (meetingren.getIsgrant() == 2) {
                    membersxieban.add(member);
                } else {
                    memberscanjia.add(member);
                }
            }
        }
        return "success";
    }

    @Override
    public Object getModel() {
        return searchInfo;
    }

    public List<Member> getMemberscanjia() {
        return memberscanjia;
    }

    public void setMemberscanjia(List<Member> memberscanjia) {
        this.memberscanjia = memberscanjia;
    }

    public List<Member> getMembersfaqi() {
        return membersfaqi;
    }

    public void setMembersfaqi(List<Member> membersfaqi) {
        this.membersfaqi = membersfaqi;
    }

    public List<Member> getMembersguanli() {
        return membersguanli;
    }

    public void setMembersguanli(List<Member> membersguanli) {
        this.membersguanli = membersguanli;
    }

    public List<Member> getMembersxieban() {
        return membersxieban;
    }

    public void setMembersxieban(List<Member> membersxieban) {
        this.membersxieban = membersxieban;
    }
}
