package com.liu.newkepu.dao;

import java.util.List;

import com.liu.newkepu.model.User;

public interface UserDao {
	public List<User> findBynameandword(String username, String password);
}
