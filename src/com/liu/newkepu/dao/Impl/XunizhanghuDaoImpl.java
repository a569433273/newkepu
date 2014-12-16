package com.liu.newkepu.dao.Impl;

import com.liu.newkepu.dao.XunizhanghuDao;
import com.liu.newkepu.model.Xunizhanghu;
import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.util.List;

@Component("XunizhanghuDao")
public class XunizhanghuDaoImpl implements XunizhanghuDao {
    @Resource
    private SessionFactory sessionFactory;

    @Override
    public List<Xunizhanghu> findBymemberid(String memberid) {
        Query query = sessionFactory.getCurrentSession().createQuery("from Xunizhanghu x where x.vmoney_member_id='" + memberid + "'");
        return query.list();
    }
}
