package com.example.smsbomber;

public class AutomaticAnswer {
    private String receiveMessage;
    private String answer;

    public AutomaticAnswer(String receiveMessage, String answer){
        this.receiveMessage = receiveMessage;
        this.answer = answer;
    }

    public String getReceiveMessage(){
        return this.receiveMessage;
    }

    public void setReceiveMessage(String receiveMessage){
        this.receiveMessage = receiveMessage;
    }

    public String getAnswer(){
        return this.answer;
    }

    public void setAnswer(String answer){
        this.answer = answer;
    }
}
