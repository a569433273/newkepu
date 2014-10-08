package com.liu.newkepu.dao;

import java.util.List;

import com.liu.newkepu.model.Hangban;

public interface HangbanDao {
    public void save(Hangban hangban);

    public List<Hangban> findByqifeianddaodaandriqi(String qifei, String daoda, String riqi);
}
