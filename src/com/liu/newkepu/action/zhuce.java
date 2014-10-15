package com.liu.newkepu.action;


import com.liu.newkepu.dao.MemberDao;
import com.liu.newkepu.dao.YanzhengtempDao;
import com.liu.newkepu.model.Member;
import com.liu.newkepu.model.Yanzhengtemp;
import com.liu.newkepu.util.Faduanxin;
import com.liu.newkepu.vo.searchInfo;
import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.ModelDriven;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.List;
import java.util.UUID;

@Component("zhuce")
public class zhuce extends ActionSupport implements ModelDriven<Object> {

    private searchInfo searchInfo = new searchInfo();

    private int zhuce = 0;

    @Resource
    private MemberDao memberDao;

    @Resource
    private YanzhengtempDao yanzhengtempDao;

    @Override
    public String execute() throws Exception {
        if (searchInfo.getU_weck() == null) {
            List<Member> members = memberDao.findBymember_phone(searchInfo.getU_tel());
            if (members.size() <= 0) {
                String yanzhenma = String.valueOf(Math.random()).substring(2, 8);
                String message = "短信验证码：" + yanzhenma + "，请勿泄露验证码！验证码有效时间为5分钟。";
                System.out.println(new Faduanxin().faduanxin(searchInfo.getU_tel(), message));
                Yanzhengtemp yanzhengtemp = new Yanzhengtemp();
                yanzhengtemp.setShoujihao(searchInfo.getU_tel());
                yanzhengtemp.setYanzhengma(yanzhenma);
                yanzhengtempDao.save(yanzhengtemp);
            } else {
                zhuce = 1;
                return "faild";
            }
        } else {
            savemember();
            zhuce = 0;
            return "success";
        }
        return null;
    }

    public void savemember() {
        Member member = new Member();
        member.setMember_id(UUID.randomUUID().toString());
        member.setMember_realname(searchInfo.getU_name());
        member.setMember_frequency(0);
        Calendar calendar = Calendar.getInstance();
        DateFormat member_timeFormat = new SimpleDateFormat("yyyy-MM-dd");
        member.setMember_time(member_timeFormat.format(calendar.getTime()));
        member.setMember_sex("");
        member.setMember_email("");
        member.setMember_birth("");
        member.setMember_accountnum(searchInfo.getU_name());
        member.setMember_accountpass(searchInfo.getU_pwd());
        member.setMember_paypass(searchInfo.getU_pwd());
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
        member.setMember_yqm(searchInfo.getU_weck());
        member.setMember_hyyqm("");
        memberDao.save(member);
    }

    @Override
    public Object getModel() {
        return searchInfo;
    }

    public int getZhuce() {
        return zhuce;
    }

    public void setZhuce(int zhuce) {
        this.zhuce = zhuce;
    }
}
