package com.liu.newkepu.action;

import com.liu.newkepu.model.Huiyitongzhi;
import net.coobird.thumbnailator.Thumbnails;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class test {
    public static void main(String[] args) throws IOException {
        Thumbnails.of("WebRoot/images/123.jpg").size(200, 300).toFile("WebRoot/images/123s.jpg");
    }
}
