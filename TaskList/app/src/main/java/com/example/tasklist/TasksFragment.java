package com.example.tasklist;

import android.os.Bundle;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import java.util.ArrayList;

import butterknife.BindView;

public class TasksFragment extends Fragment {
@BindView(R.id.recycler_view) RecyclerView recyclerView;

    public TasksFragment() {
        // Required empty public constructor
    }

    @Override
    public void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
    }
    

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup viewGroup, Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.fragment_tasks, viewGroup, false);
        return view;
    }

    @Override
    public void onViewCreated(View view, @Nullable Bundle savedInstanceState) {
        super.onViewCreated(view, savedInstanceState);

        //recycler
        RecyclerView recyclerView = view.findViewById(R.id.recycler_view);
        RecyclerView.LayoutManager layoutManager = new LinearLayoutManager(getContext());
        recyclerView.setLayoutManager(layoutManager);


        final ArrayList<Task> listData = new ArrayList<>();
        Task task1 = new Task("Ménage", "29 Mai 2020");
        Task task2 = new Task("Chantier", "8 juin 2020");
        listData.add(task1);
        listData.add(task2);
        MyListAdapter mAdapter = new MyListAdapter(listData);
        // define an adapter
        recyclerView.setAdapter(mAdapter);
    }

}
