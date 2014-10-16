package com.liu.newkepu.action;

import com.liu.newkepu.dao.MemberDao;
import com.liu.newkepu.model.Member;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.util.Calendar;
import java.util.List;

@Component("test")
public class test {

    @Resource
    private MemberDao memberDao;

    @Scheduled(cron = "0 0/5 * * * ?")
    public void mytest() {
        Calendar calendar = Calendar.getInstance();
        System.out.println(calendar.getTime());
        System.out.println("我执行了");
        List<Member> members = memberDao.findBynameandpassword("liujian","123456");
        System.out.println(members.get(0).getMember_id());
    }
}
