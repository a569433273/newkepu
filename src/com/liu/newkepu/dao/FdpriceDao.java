package com.liu.newkepu.dao;

import java.util.List;

import com.liu.newkepu.model.Fdprice;

public interface FdpriceDao {
    public List<Fdprice> findByqifeianddaoda(String qifei, String daoda);
}
