package com.liu.newkepu.dao.Impl;

import com.liu.newkepu.dao.HuiyijinjitongzhiDao;
import com.liu.newkepu.model.Huiyijinjitongzhi;
import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.util.List;

@Component("HuiyijinjitongzhiDao")
public class HuiyijinjitongzhiDaoImpl implements HuiyijinjitongzhiDao{

    @Resource
    private SessionFactory sessionFactory;

    @Override
    public List<Huiyijinjitongzhi> findBymeeting_id(String meeting_id) {
        Query query = sessionFactory.getCurrentSession().createQuery("from Huiyijinjitongzhi h where h.hyjjtz_meeting_id='" + meeting_id + "'");
        return query.list();
    }
}
