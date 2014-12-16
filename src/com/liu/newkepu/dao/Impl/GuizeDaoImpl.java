package com.liu.newkepu.dao.Impl;

import com.liu.newkepu.dao.GuizeDao;
import com.liu.newkepu.model.Guize;
import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.util.List;

@Component("GuizeDao")
public class GuizeDaoImpl implements GuizeDao{
    @Resource
    private SessionFactory sessionFactory;

    @Override
    public List<Guize> findBygzid(String gzid) {
        Query query = sessionFactory.getCurrentSession().createQuery("from Guize g where g.gz_id='" + gzid + "'");
        return query.list();
    }
}
