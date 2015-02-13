package com.liu.newkepu.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "flight_name")
public class Flightname {

    private String B;
    private String C;
    private String D;

        public String getB() {
        return B;
    }

    public void setB(String b) {
        B = b;
    }

    @Id
    public String getC() {
        return C;
    }

    public void setC(String c) {
        C = c;
    }

    public String getD() {
        return D;
    }

    public void setD(String d) {
        D = d;
    }
}
