package com.liu.newkepu.action;

import net.coobird.thumbnailator.Thumbnails;

import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;

public class test {
    public static void main(String[] args) throws IOException {
        Calendar calendar = Calendar.getInstance();
        DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd hh-mm-ss");
        System.out.println(dateFormat.format(calendar.getTime()));
    }
}
