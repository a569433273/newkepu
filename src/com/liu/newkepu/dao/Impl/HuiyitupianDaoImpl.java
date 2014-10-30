package com.liu.newkepu.dao.Impl;

import com.liu.newkepu.dao.HuiyitupianDao;
import com.liu.newkepu.model.Huiyitupian;
import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.util.List;

@Component("HuiyitupianDao")
public class HuiyitupianDaoImpl implements HuiyitupianDao {

    @Resource
    private SessionFactory sessionFactory;

    @Override
    public void save(Huiyitupian huiyitupian) {
        sessionFactory.getCurrentSession().save(huiyitupian);
    }

    @Override
    public List<Huiyitupian> findBymeeting_id(String meeting_id) {
        Query query = sessionFactory.getCurrentSession().createQuery("from Huiyitupian h where h.hytp_meeting_id='" + meeting_id + "'");
        return query.list();
    }
}
