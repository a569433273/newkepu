package com.liu.newkepu.util;

public class riqizhuan {
    public String switchriqi(String nianyueri) {
        String riqi = "";
        String nian = nianyueri.substring(5, 7);
        String yuefen = nianyueri.substring(2, 5);
        String ri = nianyueri.substring(0, 2);

        switch (TimeZhuan.getTimezhuan(yuefen)) {
            case JAN:
                yuefen = "01";
//                if (ri.equals("31")) {
//                    yuefen = "02";
//                    ri = "01";
//                } else {
//                    ri = String.valueOf(Integer.valueOf(ri) + 1);
//                    if (Integer.valueOf(ri) < 10) {
//                        ri = "0" + ri;
//                    }
//                }
                riqi = "20" + nian + "-" + yuefen + "-" + ri;
                break;
            case FEB:
                yuefen = "02";
//                if (ri.equals("28")) {
//                    yuefen = "03";
//                    ri = "01";
//                } else {
//                    ri = String.valueOf(Integer.valueOf(ri) + 1);
//                    if (Integer.valueOf(ri) < 10) {
//                        ri = "0" + ri;
//                    }
//                }
                riqi = "20" + nian + "-" + yuefen + "-" + ri;
                break;
            case MAR:
                yuefen = "03";
//                if (ri.equals("31")) {
//                    yuefen = "04";
//                    ri = "01";
//                } else {
//                    ri = String.valueOf(Integer.valueOf(ri) + 1);
//                    if (Integer.valueOf(ri) < 10) {
//                        ri = "0" + ri;
//                    }
//                }
                riqi = "20" + nian + "-" + yuefen + "-" + ri;
                break;
            case APR:
                yuefen = "04";
//                if (ri.equals("30")) {
//                    yuefen = "05";
//                    ri = "01";
//                } else {
//                    ri = String.valueOf(Integer.valueOf(ri) + 1);
//                    if (Integer.valueOf(ri) < 10) {
//                        ri = "0" + ri;
//                    }
//                }
                riqi = "20" + nian + "-" + yuefen + "-" + ri;
                break;
            case MAY:
                yuefen = "05";
//                if (ri.equals("31")) {
//                    yuefen = "06";
//                    ri = "01";
//                } else {
//                    ri = String.valueOf(Integer.valueOf(ri) + 1);
//                    if (Integer.valueOf(ri) < 10) {
//                        ri = "0" + ri;
//                    }
//                }
                riqi = "20" + nian + "-" + yuefen + "-" + ri;
                break;
            case JUN:
                yuefen = "06";
//                if (ri.equals("30")) {
//                    yuefen = "07";
//                    ri = "01";
//                } else {
//                    ri = String.valueOf(Integer.valueOf(ri) + 1);
//                    if (Integer.valueOf(ri) < 10) {
//                        ri = "0" + ri;
//                    }
//                }
                riqi = "20" + nian + "-" + yuefen + "-" + ri;
                break;
            case JUL:
                yuefen = "07";
//                if (ri.equals("31")) {
//                    yuefen = "08";
//                    ri = "01";
//                } else {
//                    ri = String.valueOf(Integer.valueOf(ri) + 1);
//                    if (Integer.valueOf(ri) < 10) {
//                        ri = "0" + ri;
//                    }
//                }
                riqi = "20" + nian + "-" + yuefen + "-" + ri;
                break;
            case AUG:
                yuefen = "08";
//                if (ri.equals("31")) {
//                    yuefen = "09";
//                    ri = "01";
//                } else {
//                    ri = String.valueOf(Integer.valueOf(ri) + 1);
//                    if (Integer.valueOf(ri) < 10) {
//                        ri = "0" + ri;
//                    }
//                }
                riqi = "20" + nian + "-" + yuefen + "-" + ri;
                break;
            case SEP:
                yuefen = "09";
//                if (ri.equals("30")) {
//                    yuefen = "10";
//                    ri = "01";
//                } else {
//                    ri = String.valueOf(Integer.valueOf(ri) + 1);
//                    if (Integer.valueOf(ri) < 10) {
//                        ri = "0" + ri;
//                    }
//                }
                riqi = "20" + nian + "-" + yuefen + "-" + ri;
                break;
            case OCT:
                yuefen = "10";
//                if (ri.equals("31")) {
//                    yuefen = "11";
//                    ri = "01";
//                } else {
//                    ri = String.valueOf(Integer.valueOf(ri) + 1);
//                }
                riqi = "20" + nian + "-" + yuefen + "-" + ri;
                if (Integer.valueOf(ri) < 10) {
                    ri = "0" + ri;
                }
                break;
            case NOV:
                yuefen = "11";
//                if (ri.equals("30")) {
//                    yuefen = "12";
//                    ri = "01";
//                } else {
//                    ri = String.valueOf(Integer.valueOf(ri) + 1);
//                    if (Integer.valueOf(ri) < 10) {
//                        ri = "0" + ri;
//                    }
//                }
                riqi = "20" + nian + "-" + yuefen + "-" + ri;
                break;
            case DEC:
                yuefen = "12";
//                if (ri.equals("31")) {
//                    yuefen = "01";
//                    ri = "01";
//                } else {
//                    ri = String.valueOf(Integer.valueOf(ri) + 1);
//                    if (Integer.valueOf(ri) < 10) {
//                        ri = "0" + ri;
//                    }
//                }
                riqi = "20" + nian + "-" + yuefen + "-" + ri;
                break;
            default:
                break;
        }

        return riqi;
    }
}
