package com.example.smsbomber;

public class Sms {
    private String author;

    public Sms (String author){
        this.author = author;
    }

    public String getAuthor () {
        return this.author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }
}
