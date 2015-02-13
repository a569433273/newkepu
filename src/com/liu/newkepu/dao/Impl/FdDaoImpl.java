package com.liu.newkepu.dao.Impl;

import com.liu.newkepu.dao.FdDao;
import com.liu.newkepu.model.FD;
import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.util.List;

@Component("FdDao")
public class FdDaoImpl implements FdDao{
    @Resource
    private SessionFactory sessionFactory;

    @Override
    public List<FD> findBychengshi(String chengshi) {
        Query query = sessionFactory.getCurrentSession().createQuery("from FD f where f.fdname like '%" + chengshi + "%'");
        return query.list();
    }

    @Override
    public FD findBysanzima(String sanzima) {
        FD fd = (FD)sessionFactory.getCurrentSession().load(FD.class,sanzima);
        return fd;
    }
}
