package com.liu.newkepu.action;

import com.liu.newkepu.util.ZhengzeUtil;
import net.coobird.thumbnailator.Thumbnails;

import java.io.IOException;
import java.util.List;

public class test {
    public static void main(String[] args) throws IOException {
        Thumbnails.of("WebRoot/images/mPhoto_img2.jpg").size(200,300).toFile("c:/a380_200x300.jpg");
    }
}
