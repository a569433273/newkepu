package com.liu.newkepu.dao;

import com.liu.newkepu.model.Huiyitongzhi;

import java.util.List;

public interface HuiyitongzhiDao {
    public void sava(Huiyitongzhi huiyitongzhi);

    public List<Huiyitongzhi> findBymember_id(String member_id);
}
