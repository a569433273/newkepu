package com.liu.newkepu.dao;

import com.liu.newkepu.model.Caiwu;

import java.util.List;

public interface CaiwuDao {
    public void save(Caiwu caiwu);
    public void update(Caiwu caiwu);
    public List<Caiwu> findBymember_id(String member_id);
}
