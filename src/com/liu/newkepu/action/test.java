package com.liu.newkepu.action;

public class test {
    public static void main(String[] args) {
        String ftime = "23:45";
        String atime = "0050+1";
        String[] aftime = ftime.split(":");
        int a = Integer.valueOf(aftime[0]);
        int b = Integer.valueOf(aftime[1]);
        int c =0;
        int d =0;
        if (atime.endsWith("+1")) {
            c = 0;
            d = Integer.valueOf(atime.substring(2,4));
            System.out.println(d);
        } else {
            String[] aatime = atime.split(":");
            c = Integer.valueOf(aatime[0]);
            d = Integer.valueOf(aatime[1]);
        }
        if (c < a) {
            c = c + 24;
        }
        int jieguo = (a * 60 + b) - (c * 60 + d);
        if (jieguo <= 0) {
            jieguo = -jieguo;
        }
    }
}
