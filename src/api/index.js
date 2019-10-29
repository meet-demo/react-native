import React, { Component } from 'react';
import { NativeModules, Platform } from 'react-native';
const methonds = NativeModules.Method;
module.exports = {
    Toast(msg = `当前运行环境为：${Platform.OS}`, duration = 17) { //17 CENTER 80 BOTTOM 48 TOP
        methonds.ShowToast(msg, duration);
    }
}