package com.liu.newkepu.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "kepu_fd")
public class FD {
    private String fdname;
    private String fdyw;
    private String fdpy;
    private String fdsx;
    private String fdszm1;
    private String fdszm2;
    private String fdisgn;

    @Id
    public String getFdname() {
        return fdname;
    }

    public void setFdname(String fdname) {
        this.fdname = fdname;
    }

    public String getFdyw() {
        return fdyw;
    }

    public void setFdyw(String fdyw) {
        this.fdyw = fdyw;
    }

    public String getFdpy() {
        return fdpy;
    }

    public void setFdpy(String fdpy) {
        this.fdpy = fdpy;
    }

    public String getFdsx() {
        return fdsx;
    }

    public void setFdsx(String fdsx) {
        this.fdsx = fdsx;
    }

    public String getFdszm1() {
        return fdszm1;
    }

    public void setFdszm1(String fdszm1) {
        this.fdszm1 = fdszm1;
    }

    public String getFdszm2() {
        return fdszm2;
    }

    public void setFdszm2(String fdszm2) {
        this.fdszm2 = fdszm2;
    }

    public String getFdisgn() {
        return fdisgn;
    }

    public void setFdisgn(String fdisgn) {
        this.fdisgn = fdisgn;
    }
}