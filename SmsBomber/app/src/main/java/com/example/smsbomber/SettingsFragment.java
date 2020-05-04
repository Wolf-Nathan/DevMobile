package com.example.smsbomber;

import android.app.PendingIntent;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.os.Bundle;
import android.telephony.SmsManager;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.EditText;

import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;
import androidx.localbroadcastmanager.content.LocalBroadcastManager;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import java.util.ArrayList;

public class SettingsFragment extends Fragment {
    private ArrayList<AutomaticAnswer> listAnswer = new ArrayList<AutomaticAnswer>();
    private AnswerListAdapter mAdapter = new AnswerListAdapter(listAnswer);

    public SettingsFragment() {
        // Required empty public constructor
    }

    @Override
    public void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        LocalBroadcastManager.getInstance(getContext()).registerReceiver(broadcastReceiver, new IntentFilter("AUTOMATIC_ANSWER"));
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        return inflater.inflate(R.layout.fragment_settings, container, false);

    }

    @Override
    public void onViewCreated(View view, @Nullable Bundle savedInstanceState) {
        super.onViewCreated(view, savedInstanceState);
        final View vip = view;

        //recycler
        RecyclerView recyclerView = view.findViewById(R.id.settings_recycler_view);
        RecyclerView.LayoutManager layoutManager = new LinearLayoutManager(getContext());
        recyclerView.setLayoutManager(layoutManager);

        Button addAnswer = (Button) view.findViewById(R.id.add_answer);
        addAnswer.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                EditText messageReceive = vip.findViewById(R.id.message_receive);
                EditText messageAnswer = vip.findViewById(R.id.message_answer);
                String message = messageReceive.getText().toString();
                String answer = messageAnswer.getText().toString();
                if (!message.equals("") && !answer.equals("")) {
                    AutomaticAnswer autoAnswer = new AutomaticAnswer(message, answer);
                    listAnswer.add(autoAnswer);
                    mAdapter.notifyDataSetChanged();
                    messageReceive.setText("");
                    messageAnswer.setText("");
                }
            }
        });

        Button bomber = (Button) view.findViewById(R.id.make_bomber);
        bomber.setOnClickListener(new View.OnClickListener() {
           @Override
           public void onClick(View v){
               EditText messageBomber = vip.findViewById(R.id.message_bomber);
               EditText phoneNumber = vip.findViewById(R.id.message_bomber_phone_number);
               EditText messageNumber = vip.findViewById(R.id.message_bomber_number);
               String message = messageBomber.getText().toString();
               String phone = phoneNumber.getText().toString();
               String number = messageNumber.getText().toString();
               if (!message.equals("") && !phone.equals("") && !number.equals("")){
                   Integer n = Integer.parseInt(number);
                   sendSMS(phone, message, n);
                   messageBomber.setText("");
                   phoneNumber.setText("");
                   messageNumber.setText("");
               }
           }
        });

        // define an adapter
        recyclerView.setAdapter(mAdapter);
    }

    public void sendSMS(String phoneNumber, String message, int number)
    {
        PendingIntent pi = PendingIntent.getActivity(getContext(), 0,
                new Intent("SEND_SMS"), 0);
        SmsManager sms = SmsManager.getDefault();
        for(int i = 0; i < number; i++) {
            sms.sendTextMessage(phoneNumber, null, message, pi, null);
        }
    }

    private final BroadcastReceiver broadcastReceiver = new BroadcastReceiver()
    {
        @Override
        public void onReceive(Context context, Intent intent)
        {
            if ("AUTOMATIC_ANSWER".equals(intent.getAction()))
            {
                String message = intent.getStringExtra("message");
                String phone = intent.getStringExtra("phone");
                if(!(message == null || message.equals("")) && !(phone == null || phone.equals(""))) {
                    for (int i = 0; i < listAnswer.size(); i++) {
                        if (message.equals(listAnswer.get(i).getReceiveMessage())) {
                            sendSMS(phone, listAnswer.get(i).getAnswer(), 1);
                        }
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
