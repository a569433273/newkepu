package com.liu.newkepu.action;

import org.dom4j.Document;
import org.dom4j.DocumentException;
import org.dom4j.DocumentHelper;
import org.dom4j.Element;

import java.util.Iterator;

public class test {
    public static void main(String[] args) throws DocumentException {
        Document document = DocumentHelper.createDocument();
        Element rootelement = document.addElement("Message");
        System.out.println(document.asXML());
}}
