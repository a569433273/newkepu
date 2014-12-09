package com.liu.newkepu.action;

import net.coobird.thumbnailator.Thumbnails;

import java.io.IOException;

public class test {
    public static void main(String[] args) throws IOException {
        Thumbnails.of("WebRoot/images/559.jpg").size(106,106).toFile("c:/a380_200x300.jpg");
    }
}
