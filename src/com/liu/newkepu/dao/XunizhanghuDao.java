package com.liu.newkepu.dao;

import com.liu.newkepu.model.Xunizhanghu;

import java.util.List;

public interface XunizhanghuDao {
    public List<Xunizhanghu> findBymemberid(String memberid);
}
