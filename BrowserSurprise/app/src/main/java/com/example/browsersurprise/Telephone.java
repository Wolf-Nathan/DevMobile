package com.example.browsersurprise;

import android.app.Activity;
import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;

public class Telephone extends Activity implements View.OnClickListener {
    public void onCreate(Bundle savedInstanceState){
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        ((Button)this.findViewById(R.id.call_button)).setOnClickListener(this);
    }

    public void onClick (View v){
        Log.i("===", "onClick tel");
        Intent intent = new Intent(Intent.ACTION_DIAL, Uri.parse("tel:911"));
        startActivity(intent);
    }
}
