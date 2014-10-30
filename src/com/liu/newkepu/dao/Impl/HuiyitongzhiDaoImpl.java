package com.liu.newkepu.dao.Impl;

import com.liu.newkepu.dao.HuiyitongzhiDao;
import com.liu.newkepu.model.Huiyitongzhi;
import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.util.List;

@Component("HuiyitongzhiDao")
public class HuiyitongzhiDaoImpl implements HuiyitongzhiDao {

    @Resource
    private SessionFactory sessionFactory;

    @Override
    public void sava(Huiyitongzhi huiyitongzhi) {
        sessionFactory.getCurrentSession().save(huiyitongzhi);
    }

    @Override
    public List<Huiyitongzhi> findBymember_id(String member_id) {
        Query query = sessionFactory.getCurrentSession().createQuery("from Huiyitongzhi h where h.hytz_meeting_id='" + member_id + "'");
        return query.list();
    }
}
