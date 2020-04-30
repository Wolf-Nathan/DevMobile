package com.example.browsersurprise;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.webkit.WebView;
import android.widget.Button;
import android.widget.EditText;

public class MainActivity extends AppCompatActivity implements View.OnClickListener{

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        WebView webview = (WebView) findViewById(R.id.webView);
        webview.loadUrl("https://www.google.fr");
        //((WebView)this.findViewById(R.id.webView)).loadUrl("https://www.google.fr");
        //((Button)this.findViewById(R.id.call_button))
        Button btn = (Button) findViewById(R.id.button);
        btn.setOnClickListener(this);
        //String text = ((EditText)this.findViewById(R.id.editText)).getText();
    }

    public void onClick(View v) {
        EditText txt = findViewById(R.id.editText);
        ((WebView)this.findViewById(R.id.webView)).loadUrl("https://www." + txt.getText().toString());
        //txt.getText().toString();
    }
}

