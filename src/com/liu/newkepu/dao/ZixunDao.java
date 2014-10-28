package com.liu.newkepu.dao;

import com.liu.newkepu.model.Zixun;

import java.util.List;

public interface ZixunDao {
    public void save(Zixun zixun);
    public List<Zixun> findBymember_id(String member_id);
}
