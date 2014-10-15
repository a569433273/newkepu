package com.liu.newkepu.dao.Impl;

import com.liu.newkepu.dao.YanzhengtempDao;
import com.liu.newkepu.model.Yanzhengtemp;
import org.hibernate.SessionFactory;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;

@Component("YanzhengtempDao")
public class YanzhengtempDaoImpl implements YanzhengtempDao {
    @Resource
    private SessionFactory sessionFactory;

    @Override
    public void save(Yanzhengtemp yanzhengtemp) {
        sessionFactory.getCurrentSession().save(yanzhengtemp);
    }
}
