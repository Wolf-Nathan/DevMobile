package com.example.tasklist;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.LinearLayout;
import android.widget.TextView;
import android.widget.Toast;

import androidx.recyclerview.widget.RecyclerView;

import java.util.ArrayList;

public class MyListAdapter extends RecyclerView.Adapter<MyListAdapter.ViewHolder>{
    //private Task[] listdata;
    private ArrayList<Task> listdata;

    // RecyclerView recyclerView;
    public MyListAdapter(ArrayList<Task> listdata) {
        this.listdata = listdata;
    }
    @Override
    public ViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        LayoutInflater layoutInflater = LayoutInflater.from(parent.getContext());
        View listItem= layoutInflater.inflate(R.layout.fragment_tasks_item, parent, false);
        //ViewHolder viewHolder = new ViewHolder(listItem);
        return new ViewHolder(listItem);
    }

    @Override
    public void onBindViewHolder(ViewHolder holder, final int position) {
        //final Task myListData = listdata[position];
        //holder.textView.setText(listdata[position].getDescription());
        final Task task = listdata.get(position);
        final MyListAdapter adapter = this;
        holder.textView.setText(listdata.get(position).getName());
        holder.dateView.setText(listdata.get(position).getDate());
        holder.linearLayout.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                //Toast.makeText(view.getContext(),"click on item: "+myListData.getName(),Toast.LENGTH_LONG).show();
            }
        });
        holder.processButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                task.setProcess(true);
                adapter.notifyDataSetChanged();
            }
        });
        holder.finishButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                listdata.remove(position);
                adapter.notifyDataSetChanged();
            }
        });
    }


    @Override
    public int getItemCount() {
        return listdata.size();
    }

    public static class ViewHolder extends RecyclerView.ViewHolder {
        public TextView textView;
        public TextView dateView;
        public Button processButton;
        public Button finishButton;
        public LinearLayout linearLayout;
        public ViewHolder(View itemView) {
            super(itemView);
            this.textView = (TextView) itemView.findViewById(R.id.fragment_main_item_title);
            this.dateView = (TextView) itemView.findViewById(R.id.fragment_tasks_item_date);
            this.processButton = (Button) itemView.findViewById(R.id.processs_button);
            this.finishButton = (Button) itemView.findViewById(R.id.finish_button);
            linearLayout = (LinearLayout)itemView.findViewById(R.id.linearLayout);
        }
    }
}
