package com.liu.newkepu.dao.Impl;

import com.liu.newkepu.dao.CuxiaozhengceDao;
import com.liu.newkepu.model.Cuxiaozhengce;
import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.util.List;

@Component("CuxiaozhengceDao")
public class CuxiaozhengceDaoImpl implements CuxiaozhengceDao{
    @Resource
    private SessionFactory sessionFactory;

    @Override
    public List<Cuxiaozhengce> findByhybsandother(int hybs,String from, String arrival) {
        Query query = sessionFactory.getCurrentSession().createQuery("from Cuxiaozhengce c where c.cxzc_hybs='" + hybs + "' and c.cxzc_isstar='1'and c.cxzc_from='" + from + "' and c.cxzc_arrival='" + arrival + "'");
        return query.list();
    }
}
