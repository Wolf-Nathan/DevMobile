package com.example.tasklist;

import android.content.Context;

import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentManager;
import androidx.fragment.app.FragmentPagerAdapter;

public class MyAdapter extends FragmentPagerAdapter {

    private Context myContext;
    int totalTabs;

    public MyAdapter(Context context, FragmentManager fm, int totalTabs) {
        super(fm);
        myContext = context;
        this.totalTabs = totalTabs;
    }

    // this is for fragment tabs
    @Override
    public Fragment getItem(int position) {
        switch (position) {
            case 0:
                TasksFragment tasksFragment = new TasksFragment();
                return tasksFragment;
            case 1:
                AddTaskFragment addTaskFragment = new AddTaskFragment();
                return addTaskFragment;
            case 2:
                CalendarFragment calendarFragment = new CalendarFragment();
                return calendarFragment;
            default:
                return null;
        }
    }
    // this counts total number of tabs
    @Override
    public int getCount() {
        return totalTabs;
    }

    @Override
    public CharSequence getPageTitle(int position) {
        switch (position){
            case 0: //Page number 1
                return "Tâches";
            case 1: //Page number 2
                return "Ajouter une tâche";
            case 2: //Page number 3
                return "Calendrier";
            default:
                return null;
        }
    }
}
