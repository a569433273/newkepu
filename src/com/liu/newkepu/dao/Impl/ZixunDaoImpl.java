package com.liu.newkepu.dao.Impl;

import com.liu.newkepu.dao.ZixunDao;
import com.liu.newkepu.model.Zixun;
import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.util.List;

@Component("ZixunDao")
public class ZixunDaoImpl implements ZixunDao {

    @Resource
    private SessionFactory sessionFactory;

    @Override
    public void save(Zixun zixun) {
        sessionFactory.getCurrentSession().save(zixun);
    }

    @Override
    public List<Zixun> findBymember_id(String member_id) {
        Query query = sessionFactory.getCurrentSession().createQuery("from Zixun z where z.zixun_meeting_id=" + member_id + "'");
        return query.list();
    }
}
