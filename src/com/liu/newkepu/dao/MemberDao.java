package com.liu.newkepu.dao;


import com.liu.newkepu.model.Member;

import java.util.List;
import java.util.Map;

public interface MemberDao {
    public void save(Member member);

    public List<Member> findBynameandpassword(String name, String password);

    public List<Member> findBymember_id(String member_id);

    public List<Member> findBymember_phone(String member_phone);

    public List<String> findThenumofyqm(String member_yqm);

    public List<Map> findThesecond(String member_yqm);

    public Member load(String member_id);

    public void update(Member member);
}
