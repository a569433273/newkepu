package com.liu.newkepu.dao.Impl;

import com.liu.newkepu.dao.MyflightDao;
import com.liu.newkepu.model.Myflight;
import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.util.List;

@Component("MyflightDao")
public class MyflightDaoImpl implements MyflightDao{

    @Resource
    private SessionFactory sessionFactory;

    @Override
    public List<Myflight> findBymember_id(String member_id) {
        Query query = sessionFactory.getCurrentSession().createQuery("from Myflight m where m.Myflight_member_id='" + member_id + "'");
        return query.list();
    }
}
