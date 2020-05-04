package com.example.smsbomber;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

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

        //recycler
        RecyclerView recyclerView = view.findViewById(R.id.settings_recycler_view);
        RecyclerView.LayoutManager layoutManager = new LinearLayoutManager(getContext());
        recyclerView.setLayoutManager(layoutManager);

        // define an adapter
        recyclerView.setAdapter(mAdapter);
    }

}
