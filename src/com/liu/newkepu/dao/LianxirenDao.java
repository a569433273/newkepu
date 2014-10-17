package com.liu.newkepu.dao;

import com.liu.newkepu.model.Lianxiren;

import java.util.List;

public interface LianxirenDao {
    public void save(Lianxiren lianxiren);

    public List<Lianxiren> findBymember_id(String member_id);
}
