package com.liu.newkepu.dao;

import com.liu.newkepu.model.Order;

import java.util.List;

public interface OrderDao {
    public void save(Order order);
    public List<Order> findByorder_id(String order_id);
    public List<Order> findBymember_id(String member_id);
    public Order loadByorder_id(String order_id);
    public void update(Order order);
}
