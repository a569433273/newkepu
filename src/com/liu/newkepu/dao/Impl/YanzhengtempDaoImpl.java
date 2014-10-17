package com.liu.newkepu.dao.Impl;

import com.liu.newkepu.dao.YanzhengtempDao;
import com.liu.newkepu.model.Yanzhengtemp;
import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.util.List;

@Component("YanzhengtempDao")
public class YanzhengtempDaoImpl implements YanzhengtempDao {
    @Resource
    private SessionFactory sessionFactory;

    @Override
    public void save(Yanzhengtemp yanzhengtemp) {
        sessionFactory.getCurrentSession().save(yanzhengtemp);
    }

    @Override
    public void update(Yanzhengtemp yanzhengtemp) {
        sessionFactory.getCurrentSession().update(yanzhengtemp);
    }

    @Override
    public void delete(Yanzhengtemp yanzhengtemp) {
        sessionFactory.getCurrentSession().delete(yanzhengtemp);
    }

    @Override
    public List<Yanzhengtemp> findByshoujihao(String shoujihao) {
        Query query = sessionFactory.getCurrentSession().createQuery("from Yanzhengtemp y where y.shoujihao='" + shoujihao + "'");
        return null;
    }

    @Override
    public List<Yanzhengtemp> fingall() {
        Query query = sessionFactory.getCurrentSession().createQuery("from Yanzhengtemp y");
        return query.list();
    }
}
