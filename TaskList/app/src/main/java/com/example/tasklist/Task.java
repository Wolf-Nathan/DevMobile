package com.example.tasklist;

import java.util.Date;

public class Task {
    private String name;
    private String date;

    public Task(String taskName, String taskDate) {
        this.name = taskName;
        this.date = taskDate;

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

    public void setDate (String taskDate) {
        this.date = taskDate;
    }

}
