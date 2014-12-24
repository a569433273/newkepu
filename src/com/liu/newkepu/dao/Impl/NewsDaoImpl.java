package com.liu.newkepu.dao.Impl;

import com.liu.newkepu.dao.NewsDao;
import com.liu.newkepu.model.News;
import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.util.List;

@Component("NewsDao")
public class NewsDaoImpl implements NewsDao{
    @Resource
    private SessionFactory sessionFactory;

    @Override
    public List<News> findBytype(String new_type) {
        Query query = sessionFactory.getCurrentSession().createQuery("from News n where n.new_type='" + new_type +"'");
        return query.list();
    }
}
