package com.liu.newkepu.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity()
@Table(name = "kepu_jc")
public class Hangkonggs {
    private String code;
    private String jcname;
    private String pyname;

    @Id
    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getJcname() {
        return jcname;
    }

    public void setJcname(String jcname) {
        this.jcname = jcname;
    }

    public String getPyname() {
        return pyname;
    }

    public void setPyname(String pyname) {
        this.pyname = pyname;
    }
}
