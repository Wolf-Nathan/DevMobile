package com.example.tasklist;

import android.Manifest;
import android.content.BroadcastReceiver;
import android.content.ContentResolver;
import android.content.ContentValues;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.content.pm.PackageManager;
import android.os.Bundle;
import android.provider.CalendarContract;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.CalendarView;

import androidx.annotation.Nullable;
import androidx.core.app.ActivityCompat;
import androidx.fragment.app.Fragment;
import androidx.localbroadcastmanager.content.LocalBroadcastManager;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;
import java.util.TimeZone;

public class CalendarFragment extends Fragment {
    private int calendarId;


    public CalendarFragment() {
        // Required empty public constructor
    }

    @Override
    public void onCreate(@Nullable Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
        LocalBroadcastManager.getInstance(getContext()).registerReceiver(broadcastReceiver, new IntentFilter("DATA_ACTION"));
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        return inflater.inflate(R.layout.fragment_calendar, container, false);
    }

    private final BroadcastReceiver broadcastReceiver = new BroadcastReceiver()
    {
        @Override
        public void onReceive(Context context, Intent intent)
        {
            if ("DATA_ACTION".equals(intent.getAction()))
            {
                if(ActivityCompat.checkSelfPermission(getContext(), Manifest.permission.WRITE_CALENDAR) != PackageManager.PERMISSION_GRANTED){
                    if(shouldShowRequestPermissionRationale(Manifest.permission.WRITE_CALENDAR)){

                    }
                    else{
                        requestPermissions(new String[] { Manifest.permission.WRITE_CALENDAR }, 2);
                    }

                }
                else {
                    String name = intent.getStringExtra("name");
                    String date = intent.getStringExtra("date");
                    String end = intent.getStringExtra("dateEnd");
                    Date start = new Date();
                    if(!date.equals("") && !end.equals("")) {
                        String[] startTab = date.split("/");
                        start.setDate(Integer.parseInt(startTab[0]));
                        start.setMonth(Integer.parseInt(startTab[1]));
                        start.setYear(Integer.parseInt(startTab[2]));
                        Date fin = new Date();
                        String[] endTab = end.split("/");
                        fin.setDate(Integer.parseInt(endTab[0]));
                        fin.setMonth(Integer.parseInt(endTab[1]));
                        fin.setYear(Integer.parseInt(endTab[2]));

                        ContentResolver cr = getContext().getContentResolver();
                        ContentValues eventValues = new ContentValues();
                        eventValues.put(CalendarContract.Events.TITLE, name);
                        eventValues.put(CalendarContract.Events.DTSTART, start.getTime());
                        eventValues.put("dtstart", start.getTime());
                        eventValues.put(CalendarContract.Events.DTEND, fin.getTime());
                        eventValues.put(CalendarContract.Events.CALENDAR_ID, R.id.calendar);
                        eventValues.put(CalendarContract.Events.EVENT_TIMEZONE, TimeZone.SHORT);
                        cr.insert(CalendarContract.Events.CONTENT_URI, eventValues);
                    }
            }

            }
        }
    };

    @Override
    public void onDestroy()
    {
        super.onDestroy();
        LocalBroadcastManager.getInstance(getContext()).unregisterReceiver(broadcastReceiver);
    }

}