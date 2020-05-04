package com.example.smsbomber;

import android.Manifest;
import android.content.ContentResolver;
import android.content.pm.PackageManager;
import android.database.Cursor;
import android.os.Bundle;
import android.provider.ContactsContract;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import androidx.annotation.Nullable;
import androidx.core.app.ActivityCompat;
import androidx.fragment.app.Fragment;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import java.util.ArrayList;

public class ContactFragment extends Fragment {
    private ArrayList<Contact> listContact = new ArrayList<Contact>();
    private ContactListAdapter mAdapter = new ContactListAdapter(listContact);
    private Boolean creation = true;

    public ContactFragment() {
        // Required empty public constructor
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        return inflater.inflate(R.layout.fragment_contact, container, false);

    }

    @Override
    public void onViewCreated(View view, @Nullable Bundle savedInstanceState) {
        super.onViewCreated(view, savedInstanceState);

        //recycler
        RecyclerView recyclerView = view.findViewById(R.id.recycler_view);
        RecyclerView.LayoutManager layoutManager = new LinearLayoutManager(getContext());
        recyclerView.setLayoutManager(layoutManager);

        if(creation) {
            this.retrieveContacts(getContext().getContentResolver());
            mAdapter.notifyDataSetChanged();
            creation = false;
        }

        // define an adapter
        recyclerView.setAdapter(mAdapter);
    }

    private void retrieveContacts(ContentResolver contentResolver)
    {
        if(ActivityCompat.checkSelfPermission(getContext(), Manifest.permission.READ_CONTACTS) != PackageManager.PERMISSION_GRANTED){
            if(shouldShowRequestPermissionRationale(Manifest.permission.READ_CONTACTS))
            {
                //expliquer pourquoi l'autorisation est nécessaire
            }
            else
            {
                this.askForPermission();
            }
        }
        else {
            final Cursor cursor = contentResolver.query(ContactsContract.CommonDataKinds.Phone.CONTENT_URI, null, null, null, null);
            //final Cursor cursor = contentResolver.query(ContactsContract.Contacts.CONTENT_URI, new String[]{ContactsContract.Data.DISPLAY_NAME, ContactsContract.Data._ID}, null, null, null);

            if (cursor == null) {
                return;
            }
            if (cursor.moveToFirst()) {
                do {
                    final long id = cursor.getLong(cursor.getColumnIndex(ContactsContract.Data._ID));
                    final int hasPhoneNumber = cursor.getInt(cursor.getColumnIndex(ContactsContract.Data.HAS_PHONE_NUMBER));
                    if (hasPhoneNumber > 0) {
                        String name = cursor.getString(cursor.getColumnIndex(ContactsContract.Data.DISPLAY_NAME));
                        String phone = cursor.getString(cursor.getColumnIndex(ContactsContract.CommonDataKinds.Phone.NUMBER));
                        Log.d("Nathan", phone);
                        Contact contact = new Contact(name, phone);
                        listContact.add(contact);
                    }

                } while (cursor.moveToNext());
            }
            cursor.close();
        }
    }

    private void askForPermission()
    {
        requestPermissions(new String[] {Manifest.permission.READ_CONTACTS }, 2);
    }



}
