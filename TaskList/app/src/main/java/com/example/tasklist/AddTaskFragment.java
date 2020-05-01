package com.example.tasklist;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.EditText;

import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;

public class AddTaskFragment extends Fragment implements View.OnClickListener {


    public AddTaskFragment() {
        // Required empty public constructor
    }

    @Override
    public void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        return inflater.inflate(R.layout.fragment_add_task, container, false);
    }

    @Override
    public void onViewCreated(View view, @Nullable Bundle savedInstanceState) {
        super.onViewCreated(view, savedInstanceState);
        final View vip = view;

        // Button
        Button addButton = (Button) view.findViewById(R.id.add_button);
        //addButton.setOnClickListener(this);
        addButton.setOnClickListener(new View.OnClickListener()
        {
            @Override
            public void onClick(View v)
            {
                EditText txtName = vip.findViewById(R.id.edit_name);
                EditText txtDate = vip.findViewById(R.id.edit_date);

                Task task = new Task(txtName.getText().toString(), txtDate.getText().toString());
                txtName.setText("");
                txtDate.setText("");
            }
        });
    }

    @Override
    public void onClick(View v){
        EditText txtName = v.findViewById(R.id.edit_name);
        EditText txtDate = v.findViewById(R.id.edit_date);

        Task task = new Task(txtName.getText().toString(), txtDate.getText().toString());
        txtName.setText("");
        txtDate.setText("");
        //TextView view = findViewById(R.id.text_view);
        //RecyclerView recyclerView = findViewById(R.id.recycler_view);

        //view.setText(txt.getText() + " - " + (new Date().toString()));
        //recyclerView.addItemDecoration();
    }

}