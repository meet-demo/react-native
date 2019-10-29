package com.module.method;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 * ************************************************************
 * @ProjectName:    jd
 * @Package:        com.jd
 * @ClassName:      ModulePackage
 * @Description:     注册原生模块
 * @Author:         wmf
 * @CreateDate:     2019/9/29 9:07
 * ************************************************************
 */
public class ModulePackage implements ReactPackage {

    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {

        List<NativeModule> modules = new ArrayList<>();
        modules.add(new MainModule(reactContext));//Add modules here
        return modules;
    }
    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        return Collections.emptyList();
    }
}
