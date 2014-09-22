package com.liu.newkepu.dao;

import java.util.List;

import com.liu.newkepu.model.Flightname;

public interface FlightnameDao {
	public List<Flightname> findBychengshi(String chengshi);
	public Flightname findBysanzima(String sanzima);
}
