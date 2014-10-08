package com.liu.newkepu.dao.Impl;

import java.util.List;

import javax.annotation.Resource;

import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.springframework.stereotype.Component;

import com.liu.newkepu.dao.UserDao;
import com.liu.newkepu.model.User;

@Component("UserDao")
public class UserDaoImpl implements UserDao {

    @Resource
    private SessionFactory sessionFactory;

    @Override
    public List<User> findBynameandword(String username, String password) {
        Query query = sessionFactory.getCurrentSession().createQuery("from User u where u.username='" + username + "' and u.password='" + password + "'");
        return query.list();
    }

}
