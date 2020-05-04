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

public class AnswerListAdapter extends RecyclerView.Adapter<AnswerListAdapter.ViewHolder>{
    private ArrayList<AutomaticAnswer> listdata;

    public AnswerListAdapter(ArrayList<AutomaticAnswer> listdata) {
        this.listdata = listdata;
    }
    @Override
    public ViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        LayoutInflater layoutInflater = LayoutInflater.from(parent.getContext());
        View listItem= layoutInflater.inflate(R.layout.fragment_settings_items, parent, false);
        return new ViewHolder(listItem);
    }

    @Override
    public void onBindViewHolder(ViewHolder holder, final int position) {
        final AutomaticAnswer answer = listdata.get(position);
        final AnswerListAdapter adapter = this;
        holder.textView.setText(answer.getReceiveMessage());
        holder.textAnswer.setText(answer.getAnswer());
    }


    @Override
    public int getItemCount() {
        return listdata.size();
    }

    public static class ViewHolder extends RecyclerView.ViewHolder {
        public TextView textView;
        public TextView textAnswer;
        public LinearLayout linearLayout;
        public ViewHolder(View itemView) {
            super(itemView);
            this.textView = (TextView) itemView.findViewById(R.id.fragment_settings_message);
            this.textAnswer = (TextView) itemView.findViewById(R.id.fragment_settings_answer);
            linearLayout = (LinearLayout)itemView.findViewById(R.id.linearLayout);
        }
    }
}