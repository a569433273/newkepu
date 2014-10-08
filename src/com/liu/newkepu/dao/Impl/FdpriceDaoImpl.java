package com.liu.newkepu.dao.Impl;

import java.util.List;

import javax.annotation.Resource;

import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.springframework.stereotype.Component;

import com.liu.newkepu.dao.FdpriceDao;
import com.liu.newkepu.model.Fdprice;

@Component("FdpriceDao")
@SuppressWarnings("all")
public class FdpriceDaoImpl implements FdpriceDao {

    @Resource
    private SessionFactory sessionFactory;

    @Override
    public List<Fdprice> findByqifeianddaoda(String qifei, String daoda) {
        Query query = sessionFactory.getCurrentSession().createQuery("from Fdprice f where f.qifei='" + qifei + "' and daoda='" + daoda + "'");
        return query.list();
    }
}
