package com.liu.newkepu.action;


import com.liu.newkepu.dao.MemberDao;
import com.liu.newkepu.model.Member;
import com.liu.newkepu.vo.searchInfo;
import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.ModelDriven;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.util.UUID;

@Component("zhuce")
public class zhuce extends ActionSupport implements ModelDriven<Object> {

    private searchInfo searchInfo = new searchInfo();

    @Resource
    private MemberDao memberDao;

    @Override
    public String execute() throws Exception {
        savemember();
        return null;
    }

    public void savemember() {
        Member member = new Member();
        member.setMember_id(UUID.randomUUID().toString());
        member.setMember_realname("刘健");
        member.setMember_frequency(0);
        member.setMember_time("2014-10-10");
        member.setMember_sex("男");
        member.setMember_email("");
        member.setMember_birth("1990-06-22");
        member.setMember_accountnum("liujian");
        member.setMember_accountpass("123456");
        member.setMember_paypass("123456");
        member.setMember_staffmessage_id("");
        member.setMember_phone("13691535010");
        member.setMember_papers_type(0);
        member.setMember_papers_num("11022419900622141X");
        member.setMember_hz_num("");
        member.setMember_qt_num("");
        member.setMember_sheng("");
        member.setMember_shi("");
        member.setMember_fandian(0);
        member.setMember_workname("");
        member.setMember_yqm("1VTEDT");
        member.setMember_hyyqm("25SETD");
        memberDao.save(member);
    }

    @Override
    public Object getModel() {
        return searchInfo;
    }
}
