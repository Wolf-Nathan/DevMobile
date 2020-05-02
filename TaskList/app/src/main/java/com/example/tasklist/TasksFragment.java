package com.example.tasklist;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.os.Bundle;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;
import androidx.localbroadcastmanager.content.LocalBroadcastManager;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import java.lang.reflect.Array;
import java.util.ArrayList;

import butterknife.BindView;

public class TasksFragment extends Fragment {
@BindView(R.id.recycler_view) RecyclerView recyclerView;
private ArrayList<Task> listData = new ArrayList<>();
private MyListAdapter mAdapter = new MyListAdapter(listData);

    public TasksFragment() {
        // Required empty public constructor
    }

    @Override
    public void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        LocalBroadcastManager.getInstance(getContext()).registerReceiver(broadcastReceiver, new IntentFilter("DATA_ACTION"));
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


        //final ArrayList<Task> listData = new ArrayList<>();
        Task task1 = new Task("Ménage", "29 Mai 2020");
        Task task2 = new Task("Chantier", "8 juin 2020");
        listData.add(task1);
        listData.add(task2);
        //MyListAdapter mAdapter = new MyListAdapter(listData);
        mAdapter.notifyDataSetChanged();
        Log.d("Nathan", mAdapter.toString());
        // define an adapter
        recyclerView.setAdapter(mAdapter);
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
                String name = intent.getStringExtra("name");
                String date = intent.getStringExtra("date");
                listData.add(new Task(name, date));
                mAdapter.notifyDataSetChanged();
                Log.d("Nathan", mAdapter.toString());

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
