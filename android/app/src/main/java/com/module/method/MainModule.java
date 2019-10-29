package com.module.method;

import android.view.Gravity;
import android.widget.Toast;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.HashMap;
import java.util.Map;

/**
 * ************************************************************
 * @ProjectName:    jd
 * @Package:        com.jd
 * @ClassName:      MainModule
 * @Description:     ReactNative调用原生模块(方法)  ReactNative的跨语言访问是异步进行的
 * @Author:         wmf
 * @CreateDate:     2019/9/29 9:07
 * ************************************************************
 */
public class MainModule extends ReactContextBaseJavaModule {

    private static final String DURATION_TOP_KEY = "TOP";
    private static final String DURATION_BOTTOM_KEY = "BOTTOM";
    private static final String DURATION_CENTER_KEY = "CENTER";

    public MainModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }
    @Override
    public String getName() {
        return "Method";
    }//ReactNative可调用的名称

    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap();
        constants.put(DURATION_TOP_KEY, Gravity.TOP);
        constants.put(DURATION_BOTTOM_KEY, Gravity.BOTTOM);
        constants.put(DURATION_CENTER_KEY,Gravity.CENTER);
        return constants;
    }
    /**
     * ************************************************************
     * @method  ShowToast 导出一个方法给ReactNative使用，Java方法需要使用注解@ReactMethod。
     * @description Toast 消息提示
     * @date: 2019/9/29 11:23
     * @author: wmf
     * @param: msg 提示的内容
     * @return void
     * ************************************************************
     */
    @ReactMethod
    public void ShowToast(String msg,int duration){
        Toast toast = Toast.makeText(getReactApplicationContext(), msg,Toast.LENGTH_SHORT);
        toast.setGravity(duration, 0, 0);
        toast.show();
    }
}

