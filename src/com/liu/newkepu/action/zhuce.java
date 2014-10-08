package com.liu.newkepu.action;


import com.liu.newkepu.dao.MemberDao;
import com.liu.newkepu.model.Member;
import com.liu.newkepu.vo.searchInfo;
import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.ModelDriven;

import javax.annotation.Resource;

public class zhuce extends ActionSupport implements ModelDriven<Object> {

    private searchInfo searchInfo = new searchInfo();

    @Resource
    private MemberDao memberDao;

    @Override
    public String execute() throws Exception {
        return null;
    }

    public void savemember() {
        Member member = new Member();
        member.setMember_id("");
        member.setMember_realname("");
        member.setMember_frequency(0);
        member.setMember_time("");
        member.setMember_sex("");
        member.setMember_email("");
        member.setMember_birth("");
        member.setMember_accountnum("");
        member.setMember_accountpass("");
        member.setMember_paypass("");
        member.setMember_staffmessage_id("");
        member.setMember_phone("");
        member.setMember_papers_type(0);
        member.setMember_papers_num("");
        member.setMember_hz_num("");
        member.setMember_qt_num("");
        member.setMember_sheng("");
        member.setMember_shi("");
        member.setMember_fandian(0);
        member.setMember_workname("");
        member.setMember_yqm("");
        member.setMember_hyyqm("");
        memberDao.save(member);
    }

    @Override
    public Object getModel() {
        return searchInfo;
    }
}
