package com.liu.newkepu.dao.Impl;

import com.liu.newkepu.dao.HuiyitongzhiDao;
import com.liu.newkepu.model.Huiyitongzhi;
import org.hibernate.SessionFactory;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;

@Component("HuiyitongzhiDao")
public class HuiyitongzhiDaoImpl implements HuiyitongzhiDao{

    @Resource
    private SessionFactory sessionFactory;

    @Override
    public void sava(Huiyitongzhi huiyitongzhi) {
        sessionFactory.getCurrentSession().save(huiyitongzhi);
    }
}
