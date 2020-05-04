package com.example.smsbomber;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.EditText;

import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;
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

        // define an adapter
        recyclerView.setAdapter(mAdapter);
    }

}
