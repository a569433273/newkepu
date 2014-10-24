package com.liu.newkepu.dao.Impl;

import com.liu.newkepu.dao.HuiyitupianDao;
import com.liu.newkepu.model.Huiyitupian;
import org.hibernate.SessionFactory;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;

@Component("HuiyitupianDao")
public class HuiyitupianDaoImpl implements HuiyitupianDao{

    @Resource
    private SessionFactory sessionFactory;

    @Override
    public void save(Huiyitupian huiyitupian) {
        sessionFactory.getCurrentSession().save(huiyitupian);
    }
}
