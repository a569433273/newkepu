package com.liu.newkepu.dao;

import com.liu.newkepu.model.Cuxiaozhengce;

import java.util.List;

public interface CuxiaozhengceDao {
    public List<Cuxiaozhengce> findByhybsandother(int hybs, String from, String arrival);
}
