package com.liu.newkepu.dao;


import com.liu.newkepu.model.Member;

import java.util.List;

public interface MemberDao {
    public void save(Member member);

    public List<Member> findBynameandpassword(String name, String password);
}
