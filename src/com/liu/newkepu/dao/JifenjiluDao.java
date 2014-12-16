package com.liu.newkepu.dao;

import com.liu.newkepu.model.Jifenjilu;

import java.util.List;

public interface JifenjiluDao {
    public List<Jifenjilu> findBymemberid(String memberid);
}
