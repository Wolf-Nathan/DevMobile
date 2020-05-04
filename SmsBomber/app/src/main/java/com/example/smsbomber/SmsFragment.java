package com.example.smsbomber;

import android.Manifest;
import android.content.ContentResolver;
import android.content.pm.PackageManager;
import android.database.Cursor;
import android.net.Uri;
import android.os.Bundle;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import androidx.annotation.Nullable;
import androidx.core.app.ActivityCompat;
import androidx.fragment.app.Fragment;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.google.android.material.snackbar.Snackbar;

import java.util.ArrayList;

public class SmsFragment extends Fragment {
    private ArrayList<Sms> listSms = new ArrayList<Sms>();
    private SmsListAdapter mAdapter = new SmsListAdapter(listSms);
    private Boolean creation = true;

    public SmsFragment() {
        // Required empty public constructor
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        return inflater.inflate(R.layout.fragment_sms, container, false);

    }

    @Override
    public void onViewCreated(View view, @Nullable Bundle savedInstanceState) {
        super.onViewCreated(view, savedInstanceState);

        //recycler
        RecyclerView recyclerView = view.findViewById(R.id.sms_recycler_view);
        RecyclerView.LayoutManager layoutManager = new LinearLayoutManager(getContext());
        recyclerView.setLayoutManager(layoutManager);

        if(creation) {
            this.retrieveMessages(getContext().getContentResolver());
            mAdapter.notifyDataSetChanged();
            creation = false;
        }

        // define an adapter
        recyclerView.setAdapter(mAdapter);
    }

    private void retrieveMessages(ContentResolver contentResolver)
    {
        Log.d("Nathan", "la");
        if (ActivityCompat.checkSelfPermission(getContext(), Manifest.permission.READ_SMS) != PackageManager.PERMISSION_GRANTED) {
            if(shouldShowRequestPermissionRationale(Manifest.permission.READ_CONTACTS))
            {
                //expliquer pourquoi l'autorisation est nécessaire
                Log.d("Nathan", "mwoh");
            }
            else
            {
                Log.d("Nathan", "hmmm");
                this.askForPermission();
            }
        }
        else {
            final Cursor cursor = contentResolver.query(Uri.parse("content://sms/inbox"), null, null, null, null);
            Log.d("Nathan", "weeee");
            if (cursor == null) {
                Log.d("Nathan", "Shit aucun message");
                return;
            }
            Log.d("Nathan", "Hopla");
            if (cursor.moveToFirst()) {
                do {
                    Log.d("Nathan", "Au moins un");
                    String message = cursor.getString(cursor.getColumnIndexOrThrow("body"));
                    String phone = cursor.getString(cursor.getColumnIndexOrThrow("address"));
                    Sms sms = new Sms(phone, message);
                    Log.d("Nathan", message);
                    Log.d("Nathan", phone);
                    listSms.add(sms);

                } while (cursor.moveToNext());
            }
            cursor.close();
        }
    }

    private void askForPermission()
    {
        this.requestPermissions(new String[] {Manifest.permission.READ_SMS }, 1);
        /*ActivityCompat.requestPermissions(getActivity(),
                new String[]{Manifest.permission.READ_SMS},
                3);*/
        Log.d("Nathan", "alors");
    }



}
