package com.liu.newkepu.action;

import com.liu.newkepu.util.Des3;

public class test {
    public static void main(String[] args) {
        try {
            System.out.println(Des3.encode("13520891564"));
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
