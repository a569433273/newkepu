package com.liu.newkepu.dao;

import com.liu.newkepu.model.FD;

import java.util.List;

public interface FdDao {
    public List<FD>  findBychengshi(String chengshi);
    public FD findBysanzima(String sanzima);
}
