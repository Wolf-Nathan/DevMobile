package com.example.tasklist;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;
import androidx.localbroadcastmanager.content.LocalBroadcastManager;
import androidx.recyclerview.widget.RecyclerView;

public class AddTaskFragment extends Fragment {


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
        addButton.setOnClickListener(new View.OnClickListener()
        {
            @Override
            public void onClick(View v)
            {
                EditText txtName = vip.findViewById(R.id.edit_name);
                EditText txtDate = vip.findViewById(R.id.edit_date);
                EditText txtDateEnd = vip.findViewById(R.id.edit_date_end);
                TextView wrongForm = vip.findViewById(R.id.wrong_form);
                String name = txtName.getText().toString();
                String date = txtDate.getText().toString();
                String dateEnd = txtDate.getText().toString();
                if(!name.equals("") && !date.equals("") && !dateEnd.equals("")) {
                    String regex = "([0-9]{2})/([0-9]{2})/([0-9]{4})";
                    if(date.matches(regex) && dateEnd.matches(regex)) {
                        //On envoie les données au fragment au click sur le bouton
                        final Intent intent = new Intent("DATA_ACTION");
                        intent.putExtra("name", name);
                        intent.putExtra("date", date);
                        intent.putExtra("dateEnd", dateEnd);
                        LocalBroadcastManager.getInstance(getContext()).sendBroadcast(intent);
                        txtName.setText("");
                        txtDate.setText("");
                        txtDateEnd.setText("");
                    }
                    else {
                        wrongForm.setText(R.string.form_wrong_date);
                    }
                }
                else {
                    wrongForm.setText(R.string.form_wrong_missing);
                }
            }
        });
    }

}