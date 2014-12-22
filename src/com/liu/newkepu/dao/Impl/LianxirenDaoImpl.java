package com.liu.newkepu.dao.Impl;

import com.liu.newkepu.dao.LianxirenDao;
import com.liu.newkepu.model.Lianxiren;
import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.util.List;

@Component("LianxirenDao")
public class LianxirenDaoImpl implements LianxirenDao {
    @Resource
    private SessionFactory sessionFactory;

    @Override
    public void save(Lianxiren lianxiren) {
        sessionFactory.getCurrentSession().save(lianxiren);
    }

    @Override
    public List<Lianxiren> findBymember_id(String member_id) {
        Query query = sessionFactory.getCurrentSession().createQuery("from Lianxiren l where l.lianxiren_member_id='" + member_id + "'");
        return query.list();
    }

    @Override
    public List<Lianxiren> fingThechongfu(String member_id, String lianxiren_name, String lianxiren_phone) {
        Query query = sessionFactory.getCurrentSession().createQuery("from Lianxiren l where l.lianxiren_member_id='" + member_id + "' and lianxiren_name='" + lianxiren_name + "' and lianxiren_phone='" + lianxiren_phone + "'");
        return query.list();
    }
}
