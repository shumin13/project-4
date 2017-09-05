package com.wzsm.project4;

import android.support.multidex.MultiDexApplication;

import com.facebook.react.ReactPackage;

import com.rhaker.reactnativesmsandroid.RNSmsAndroidPackage;

import java.util.Arrays;
import java.util.List;

// Needed for `react-native link`
// import com.facebook.react.ReactApplication;

public class MainApplication extends MultiDexApplication {

  // Needed for `react-native link`
  public List<ReactPackage> getPackages() {
    return Arrays.<ReactPackage>asList(

        new RNSmsAndroidPackage()

    );
  }
}
