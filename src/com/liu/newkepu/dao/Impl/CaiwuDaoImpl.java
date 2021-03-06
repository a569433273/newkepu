package com.liu.newkepu.dao.Impl;

import com.liu.newkepu.dao.CaiwuDao;
import com.liu.newkepu.model.Caiwu;
import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.util.List;

@Component("CaiwuDao")
public class CaiwuDaoImpl implements CaiwuDao {

    @Resource
    private SessionFactory sessionFactory;

    @Override
    public void save(Caiwu caiwu) {
        sessionFactory.getCurrentSession().save(caiwu);
    }

    @Override
    public void update(Caiwu caiwu) {
        sessionFactory.getCurrentSession().update(caiwu);
    }

    @Override
    public void delete(Caiwu caiwu) {
        sessionFactory.getCurrentSession().delete(caiwu);
    }

    @Override
    public List<Caiwu> findBymember_id(String member_id) {
        Query query = sessionFactory.getCurrentSession().createQuery("from Caiwu c where c.vmrecord_member_id='" + member_id + "'");
        return query.list();
    }

    @Override
    public List<Caiwu> findByorderid(String order_id) {
        Query query = sessionFactory.getCurrentSession().createQuery("from Caiwu c where c.vmrecord_orderid='" + order_id + "'");
        return query.list();
    }
}
