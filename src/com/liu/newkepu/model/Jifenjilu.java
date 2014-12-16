package com.liu.newkepu.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "kepu_jifenjilu")
public class Jifenjilu {
    private String jifen_id;
    private int jifen_num;
    private int jifen_zjflag;
    private String jifen_beizhu;
    private String jifen_caozuoren;
    private String jifen_member_id;
    private String jifen_order_id;
    private String jifen_date;

    @Id
    public String getJifen_id() {
        return jifen_id;
    }

    public void setJifen_id(String jifen_id) {
        this.jifen_id = jifen_id;
    }

    public int getJifen_num() {
        return jifen_num;
    }

    public void setJifen_num(int jifen_num) {
        this.jifen_num = jifen_num;
    }

    public int getJifen_zjflag() {
        return jifen_zjflag;
    }

    public void setJifen_zjflag(int jifen_zjflag) {
        this.jifen_zjflag = jifen_zjflag;
    }

    public String getJifen_beizhu() {
        return jifen_beizhu;
    }

    public void setJifen_beizhu(String jifen_beizhu) {
        this.jifen_beizhu = jifen_beizhu;
    }

    public String getJifen_caozuoren() {
        return jifen_caozuoren;
    }

    public void setJifen_caozuoren(String jifen_caozuoren) {
        this.jifen_caozuoren = jifen_caozuoren;
    }

    public String getJifen_member_id() {
        return jifen_member_id;
    }

    public void setJifen_member_id(String jifen_member_id) {
        this.jifen_member_id = jifen_member_id;
    }

    public String getJifen_order_id() {
        return jifen_order_id;
    }

    public void setJifen_order_id(String jifen_order_id) {
        this.jifen_order_id = jifen_order_id;
    }

    public String getJifen_date() {
        return jifen_date;
    }

    public void setJifen_date(String jifen_date) {
        this.jifen_date = jifen_date;
    }
}
