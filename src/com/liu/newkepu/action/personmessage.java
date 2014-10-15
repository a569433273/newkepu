package com.liu.newkepu.action;

import com.liu.newkepu.dao.MemberDao;
import com.liu.newkepu.model.Member;
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
        if (searchInfo.getPu_name() == null || searchInfo.getPu_name().equals("")) {
            return "success";
        } else {
            Member member = memberDao.load(tmember_id);
            member.setMember_realname(searchInfo.getPu_name());
            member.setMember_papers_type(searchInfo.getPu_crdtp());
            member.setMember_papers_num(searchInfo.getPu_card());
            member.setMember_sex(searchInfo.getPu_tsex());
            member.setMember_zuoji(searchInfo.getPu_ztel());
            member.setMember_birth(searchInfo.getPu_date());
            member.setMember_workname(searchInfo.getPu_resu());
            memberDao.update(member);
            members = memberDao.findBymember_id(tmember_id);
            return "success";
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
