package com.liu.newkepu.action;

import com.liu.newkepu.dao.MemberDao;
import com.liu.newkepu.model.Member;
import com.liu.newkepu.util.Des3;
import com.liu.newkepu.vo.searchInfo;
import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.ModelDriven;
import org.apache.struts2.ServletActionContext;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Component("personmessage")
@Scope("prototype")
public class personmessage extends ActionSupport implements ModelDriven<Object> {

    private searchInfo searchInfo = new searchInfo();

    @Resource
    private MemberDao memberDao;

    private List<Member> members;

    @Override
    public String execute() throws Exception {
        HttpServletRequest request = ServletActionContext.getRequest();
        String tmember_id = request.getSession().getAttribute("member_id").toString();
        members = memberDao.findBymember_id(tmember_id);
        jiemi();
        if (searchInfo.getPu_name() == null || searchInfo.getPu_name().equals("")) {
            return "success";
        } else {
            Member member = memberDao.load(tmember_id);
            member.setMember_realname(searchInfo.getPu_name());
            member.setMember_papers_type(String.valueOf(searchInfo.getPu_crdtp()));
            switch (searchInfo.getPu_crdtp()) {
                case 0:
                    member.setMember_papers_num(Des3.encode(searchInfo.getPu_card()));
                    break;
                case 1:
                    member.setMember_hz_num(Des3.encode(searchInfo.getPu_card()));
                    break;
                case 2:
                    member.setMember_jug_num(Des3.encode(searchInfo.getPu_card()));
                    break;
                case 3:
                    member.setMember_jingu_num(Des3.encode(searchInfo.getPu_card()));
                    break;
                case 4:
                    member.setMember_ga_num(Des3.encode(searchInfo.getPu_card()));
                    break;
                case 5:
                    member.setMember_qt_num(Des3.encode(searchInfo.getPu_card()));
                    break;
                default:
                    break;
            }
            if (searchInfo.getPu_tsex().equals("男")) {
                member.setMember_sex("male");
            } else {
                member.setMember_sex("female");
            }
            member.setMember_tel(searchInfo.getPu_ztel());
            member.setMember_birth(searchInfo.getPu_date());
            member.setMember_workname(searchInfo.getPu_resu());
            member.setMember_phone(Des3.encode(members.get(0).getMember_phone()));
            member.setMember_workname(searchInfo.getPu_resu());
            member.setMember_workaddress(Des3.encode(searchInfo.getPu_job()));
            memberDao.update(member);
            members = memberDao.findBymember_id(tmember_id);
            jiemi();
            return "success";
        }
    }

    private void jiemi() throws Exception {
        String type = members.get(0).getMember_papers_type();
        switch (Integer.valueOf(type)) {
            case 0:
                members.get(0).setMember_papers_num(Des3.decode(members.get(0).getMember_papers_num()));
                break;
            case 1:
                members.get(0).setMember_hz_num(Des3.decode(members.get(0).getMember_hz_num()));
                break;
            case 2:
                members.get(0).setMember_jug_num(Des3.decode(members.get(0).getMember_jug_num()));
                break;
            case 3:
                members.get(0).setMember_jingu_num(Des3.decode(members.get(0).getMember_jingu_num()));
                break;
            case 4:
                members.get(0).setMember_ga_num(Des3.decode(members.get(0).getMember_ga_num()));
                break;
            case 5:
                members.get(0).setMember_qt_num(Des3.decode(members.get(0).getMember_qt_num()));
                break;
            default:
                break;

        }
        members.get(0).setMember_phone(Des3.decode(members.get(0).getMember_phone()));
        members.get(0).setMember_workaddress(Des3.decode(members.get(0).getMember_workaddress()));
        if (members.get(0).getMember_sex().equals("male")) {
            members.get(0).setMember_sex("男");
        } else {
            members.get(0).setMember_sex("女");
        }
    }

    @Override
    public Object getModel() {
        return searchInfo;
    }

    public List<Member> getMembers() {
        return members;
    }

    public void setMembers(List<Member> members) {
        this.members = members;
    }
}
