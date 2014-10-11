package com.liu.newkepu.dao.Impl;


import com.liu.newkepu.dao.MemberDao;
import com.liu.newkepu.model.Member;
import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.util.List;

@Component("MemberDao")
public class MemberDaoImpl implements MemberDao {

    @Resource
    private SessionFactory sessionFactory;

    @Override
    public void save(Member member) {
        sessionFactory.getCurrentSession().save(member);
    }

    @Override
    public List<Member> findBynameandpassword(String name, String password) {
        Query query = sessionFactory.getCurrentSession().createQuery("from Member m where m.member_accountnum='" + name + "' and m.member_accountpass='" + password + "'");
        return query.list();
    }

    @Override
    public List<Member> findBymember_id(String member_id) {
        Query query = sessionFactory.getCurrentSession().createQuery("from Member m where m.member_id='" + member_id + "'");
        return query.list();
    }
}
