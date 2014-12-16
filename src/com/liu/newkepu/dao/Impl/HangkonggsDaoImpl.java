package com.liu.newkepu.dao.Impl;

import com.liu.newkepu.dao.HangkonggsDao;
import com.liu.newkepu.model.Hangkonggs;
import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.util.List;

@Component("HangkonggsDao")
public class HangkonggsDaoImpl implements HangkonggsDao {

    @Resource
    private SessionFactory sessionFactory;

    @Override
    public List<Hangkonggs> findBycode(String code) {
        Query query = sessionFactory.getCurrentSession().createQuery("from Hangkonggs h where h.code='" + code + "'");
        return query.list();
    }
}
