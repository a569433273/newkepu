package com.liu.newkepu.action;


import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;

public class test {
    public static void main(String[] args) {
        Calendar calendar = Calendar.getInstance();
        DateFormat xiaoshiformat = new SimpleDateFormat("HHmm");
        calendar.add(Calendar.HOUR, 2);
        String TicketLimitTime = xiaoshiformat.format(calendar.getTime());
        System.out.println(TicketLimitTime);
    }
}
