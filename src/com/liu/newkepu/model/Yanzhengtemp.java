package com.liu.newkepu.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Yanzhengtemp {
    private int id;
    private String shoujihao;
    private String yanzhengma;
    private int fenzhong;

    @Id
    @GeneratedValue
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getShoujihao() {
        return shoujihao;
    }

    public void setShoujihao(String shoujihao) {
        this.shoujihao = shoujihao;
    }

    public String getYanzhengma() {
        return yanzhengma;
    }

    public void setYanzhengma(String yanzhengma) {
        this.yanzhengma = yanzhengma;
    }

    public int getFenzhong() {
        return fenzhong;
    }

    public void setFenzhong(int fenzhong) {
        this.fenzhong = fenzhong;
    }
}
