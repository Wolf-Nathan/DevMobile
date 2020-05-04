package com.example.smsbomber;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.LinearLayout;
import android.widget.TextView;
import android.widget.Toast;

import androidx.recyclerview.widget.RecyclerView;

import java.util.ArrayList;

public class SmsListAdapter extends RecyclerView.Adapter<SmsListAdapter.ViewHolder>{
    private ArrayList<Sms> listdata;

    public SmsListAdapter(ArrayList<Sms> listdata) {
        this.listdata = listdata;
    }
    @Override
    public ViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        LayoutInflater layoutInflater = LayoutInflater.from(parent.getContext());
        View listItem= layoutInflater.inflate(R.layout.fragment_contact_items, parent, false);
        return new ViewHolder(listItem);
    }

    @Override
    public void onBindViewHolder(ViewHolder holder, final int position) {
        final Sms sms = listdata.get(position);
        final SmsListAdapter adapter = this;
        //holder.textView.setText(listdata.get(position).getAuthor());
    }


    @Override
    public int getItemCount() {
        return listdata.size();
    }

    public static class ViewHolder extends RecyclerView.ViewHolder {
        public TextView textView;
        public LinearLayout linearLayout;
        public ViewHolder(View itemView) {
            super(itemView);
            this.textView = (TextView) itemView.findViewById(R.id.fragment_sms_item);
            linearLayout = (LinearLayout)itemView.findViewById(R.id.linearLayout);
        }
    }
}