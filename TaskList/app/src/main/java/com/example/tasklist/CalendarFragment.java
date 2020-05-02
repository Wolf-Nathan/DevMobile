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

import androidx.annotation.Nullable;
import androidx.core.app.ActivityCompat;
import androidx.fragment.app.Fragment;
import androidx.localbroadcastmanager.content.LocalBroadcastManager;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;
import java.util.TimeZone;

public class CalendarFragment extends Fragment {


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
                //Les données sont passées et peuvent être récupérées via :
                // intent.getSerializableExtra("DATA_EXTRA");
                // intent.getIntExtra("DATA_EXTRA", 2);
                //etc.
                if(ActivityCompat.checkSelfPermission(getContext(), Manifest.permission.WRITE_CALENDAR) != PackageManager.PERMISSION_GRANTED){
                    if(shouldShowRequestPermissionRationale(Manifest.permission.WRITE_CALENDAR)){

                    }
                    else{
                        requestPermissions(new String[] { Manifest.permission.WRITE_CALENDAR }, 2);
                    }

                }
                else {
                Log.d("Nathan", "Calendrier");
                String name = intent.getStringExtra("name");
                String date = intent.getStringExtra("date");
                String end = intent.getStringExtra("dateEnd");
                    String eventTime="12:00:AM 11:59:PM";
                    String[] time=eventTime.split(" ");
                    String[] execttime=time[0].split(":");
                    String eventStartDate="05 May 2020"+" " + execttime[0]+":"+execttime[1]+":00";
                    String eventEndDate="08 May 2020"+" " + execttime[0]+":"+execttime[1]+":00";
                    SimpleDateFormat sfd = new SimpleDateFormat(eventStartDate, Locale.getDefault());
                    //SimpleDateFormat sfdEnd = new SimpleDateFormat(eventEndDate, Locale.getDefault());

                    //Date jour = new Date(date);
                    Date start = new Date();
                    String[] startTab = date.split("/");
                    start.setDate(02);
                    start.setMonth(05);
                    start.setYear(2020);
                    Date fin = new Date();
                    fin.setDate(05);
                    fin.setMonth(05);
                    fin.setYear(2020);

                ContentResolver cr = getContext().getContentResolver();
                ContentValues eventValues = new ContentValues();
                eventValues.put(CalendarContract.Events.TITLE, name);
                //eventValues.put(CalendarContract.Events.EVENT_LOCATION, "location");
                //eventValues.put(CalendarContract.Events.DTSTART, jour);
                    Log.d("Nathan", date);
                eventValues.put(CalendarContract.Events.DTSTART, start.getTime());
                eventValues.put("DTSTART", start.getTime());
                eventValues.put(CalendarContract.Events.DTEND, fin.getTime());
                eventValues.put(CalendarContract.Events.CALENDAR_ID, "calendar");//Defaul calendar
                eventValues.put(CalendarContract.Events.EVENT_TIMEZONE, TimeZone.SHORT);
                Log.d("Nathan", "Jusque la tout va bien");
                //try {
                    Log.d("Nathan", eventValues.getAsString(CalendarContract.Events.DTSTART));
                    //cr.insert(CalendarContract.Events.CONTENT_URI, eventValues);
                /*}
                catch(Exception e){
                    Log.d("Nathan", "Ca marche pas");*/
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