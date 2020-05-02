package com.example.tasklist;

import java.util.Date;

public class Task {
    private String name;
    private String date;
    private Boolean process;

    public Task(String taskName, String taskDate) {
        this.name = taskName;
        this.date = taskDate;
        this.process = false;

    }

    public String getName() {
        return this.name;
    }

    public void setName(String taskName) {
        this.name = taskName;
    }

    public String getDate() {
        return this.date;
    }

    public void setDate(String taskDate) {
        this.date = taskDate;
    }

    public Boolean getProcess () {
        return this.process;
    }

    public void setProcess (Boolean process) {
        this.process = process;
    }

}
