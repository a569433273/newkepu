package com.liu.newkepu.dao.Impl;

import com.liu.newkepu.dao.JifenjiluDao;
import com.liu.newkepu.model.Jifenjilu;
import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.util.List;

@Component("JifenjiluDao")
public class JifenjiluDaoImpl implements JifenjiluDao{
    @Resource
    private SessionFactory sessionFactory;

    @Override
    public List<Jifenjilu> findBymemberid(String memberid) {
        Query query = sessionFactory.getCurrentSession().createQuery("from Jifenjilu j where j.jifen_member_id='" + memberid + "'");
        return query.list();
    }
}
