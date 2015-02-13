package com.liu.newkepu.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "kepu_member")
public class Member {
    private String member_id;
    private String member_realname;
    private int member_frequency;
    private String member_time;
    private String member_sex;
    private String member_email;
    private String member_birth;
    private String member_workaddress;
    private String member_accountnum;
    private String member_remark;
    private String member_accountpass;
    private String member_paypass;
    private String member_staffmessage_id;
    private String member_phone;
    private String member_papers_type;
    private String member_papers_num;
    private String member_hz_num;
    private String member_jug_num;
    private String member_jingu_num;
    private String member_ga_num;
    private String member_qt_num;
    private String member_workname;
    private String member_sheng;
    private String member_shi;
    private int member_fandian;
    private int member_bnum;
    private String member_yqm;
    private String member_hyyqm;
    private String member_shzhanghao;
    private int member_shstate;
    private String member_tel;
    private int member_level;
    private String member_ismoth;

    @Id
    public String getMember_id() {
        return member_id;
    }

    public void setMember_id(String member_id) {
        this.member_id = member_id;
    }

    public String getMember_realname() {
        return member_realname;
    }

    public void setMember_realname(String member_realname) {
        this.member_realname = member_realname;
    }

    public int getMember_frequency() {
        return member_frequency;
    }

    public void setMember_frequency(int member_frequency) {
        this.member_frequency = member_frequency;
    }

    public String getMember_time() {
        return member_time;
    }

    public void setMember_time(String member_time) {
        this.member_time = member_time;
    }

    public String getMember_sex() {
        return member_sex;
    }

    public void setMember_sex(String member_sex) {
        this.member_sex = member_sex;
    }

    public String getMember_email() {
        return member_email;
    }

    public void setMember_email(String member_email) {
        this.member_email = member_email;
    }

    public String getMember_birth() {
        return member_birth;
    }

    public void setMember_birth(String member_birth) {
        this.member_birth = member_birth;
    }

    public String getMember_workaddress() {
        return member_workaddress;
    }

    public void setMember_workaddress(String member_workaddress) {
        this.member_workaddress = member_workaddress;
    }

    public String getMember_accountnum() {
        return member_accountnum;
    }

    public void setMember_accountnum(String member_accountnum) {
        this.member_accountnum = member_accountnum;
    }

    public String getMember_remark() {
        return member_remark;
    }

    public void setMember_remark(String member_remark) {
        this.member_remark = member_remark;
    }

    public String getMember_accountpass() {
        return member_accountpass;
    }

    public void setMember_accountpass(String member_accountpass) {
        this.member_accountpass = member_accountpass;
    }

    public String getMember_paypass() {
        return member_paypass;
    }

    public void setMember_paypass(String member_paypass) {
        this.member_paypass = member_paypass;
    }

    public String getMember_staffmessage_id() {
        return member_staffmessage_id;
    }

    public void setMember_staffmessage_id(String member_staffmessage_id) {
        this.member_staffmessage_id = member_staffmessage_id;
    }

    public String getMember_phone() {
        return member_phone;
    }

    public void setMember_phone(String member_phone) {
        this.member_phone = member_phone;
    }

    public String getMember_papers_type() {
        return member_papers_type;
    }

    public void setMember_papers_type(String member_papers_type) {
        this.member_papers_type = member_papers_type;
    }

    public String getMember_papers_num() {
        return member_papers_num;
    }

    public void setMember_papers_num(String member_papers_num) {
        this.member_papers_num = member_papers_num;
    }

    public String getMember_hz_num() {
        return member_hz_num;
    }

    public void setMember_hz_num(String member_hz_num) {
        this.member_hz_num = member_hz_num;
    }

    public String getMember_jug_num() {
        return member_jug_num;
    }

    public void setMember_jug_num(String member_jug_num) {
        this.member_jug_num = member_jug_num;
    }

    public String getMember_jingu_num() {
        return member_jingu_num;
    }

    public void setMember_jingu_num(String member_jingu_num) {
        this.member_jingu_num = member_jingu_num;
    }

    public String getMember_ga_num() {
        return member_ga_num;
    }

    public void setMember_ga_num(String member_ga_num) {
        this.member_ga_num = member_ga_num;
    }

    public String getMember_qt_num() {
        return member_qt_num;
    }

    public void setMember_qt_num(String member_qt_num) {
        this.member_qt_num = member_qt_num;
    }

    public String getMember_workname() {
        return member_workname;
    }

    public void setMember_workname(String member_workname) {
        this.member_workname = member_workname;
    }

    public String getMember_sheng() {
        return member_sheng;
    }

    public void setMember_sheng(String member_sheng) {
        this.member_sheng = member_sheng;
    }

    public String getMember_shi() {
        return member_shi;
    }

    public void setMember_shi(String member_shi) {
        this.member_shi = member_shi;
    }

    public int getMember_fandian() {
        return member_fandian;
    }

    public void setMember_fandian(int member_fandian) {
        this.member_fandian = member_fandian;
    }

    public int getMember_bnum() {
        return member_bnum;
    }

    public void setMember_bnum(int member_bnum) {
        this.member_bnum = member_bnum;
    }

    public String getMember_yqm() {
        return member_yqm;
    }

    public void setMember_yqm(String member_yqm) {
        this.member_yqm = member_yqm;
    }

    public String getMember_hyyqm() {
        return member_hyyqm;
    }

    public void setMember_hyyqm(String member_hyyqm) {
        this.member_hyyqm = member_hyyqm;
    }

    public String getMember_shzhanghao() {
        return member_shzhanghao;
    }

    public void setMember_shzhanghao(String member_shzhanghao) {
        this.member_shzhanghao = member_shzhanghao;
    }

    public int getMember_shstate() {
        return member_shstate;
    }

    public void setMember_shstate(int member_shstate) {
        this.member_shstate = member_shstate;
    }

    public String getMember_tel() {
        return member_tel;
    }

    public void setMember_tel(String member_tel) {
        this.member_tel = member_tel;
    }

    public int getMember_level() {
        return member_level;
    }

    public void setMember_level(int member_level) {
        this.member_level = member_level;
    }

    public String getMember_ismoth() {
        return member_ismoth;
    }

    public void setMember_ismoth(String member_ismoth) {
        this.member_ismoth = member_ismoth;
    }
}
