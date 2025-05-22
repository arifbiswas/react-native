# Step-by-Step Guide: Setting Up and Verifying Deep Linking in React Native

## 1. Configure Deep Linking in `AndroidManifest.xml`
Edit your `android/app/src/main/AndroidManifest.xml` file to add an intent filter for deep linking:

```xml
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.nite">

    <uses-permission android:name="android.permission.INTERNET" />
    <application
        android:name=".MainApplication"
        android:label="@string/app_name"
        android:icon="@mipmap/ic_launcher"
        android:allowBackup="false"
        android:theme="@style/AppTheme">
        
        <activity android:name=".MainActivity"
            android:launchMode="singleTask"
            android:exported="true">
            
            <!-- Deep Link Intent Filter -->
            <intent-filter android:autoVerify="true">
                <action android:name="android.intent.action.VIEW" />
                <category android:name="android.intent.category.DEFAULT" />
                <category android:name="android.intent.category.BROWSABLE" />
                <data android:scheme="https" android:host="nightclubapp.web.app" android:pathPrefix="/" />
            </intent-filter>

            <!-- Main Launcher -->
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />
                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>
    </application>
</manifest>
```

## 2. Generate and Retrieve App Fingerprint
To link your app to a website, you need the SHA-256 fingerprint. Run the following command:

```sh
cd android && ./gradlew signingReport
```

Find the SHA-256 fingerprint under your app’s debug or release section:

```
SHA-256: FA:C6:17:45:DC:09:03:78:6F:B9:ED:E6:2A:96:2B:39:9F:73:48:F0:BB:6F:89:9B:83:32:66:75:91:03:3B:9C
```

## 3. Set Up `assetlinks.json` on Your Website
Create a `.well-known/assetlinks.json` file in your website’s public folder:

```json
[
  {
    "relation": ["delegate_permission/common.handle_all_urls"],
    "target": {
      "namespace": "android_app",
      "package_name": "com.nite",
      "sha256_cert_fingerprints": [
        "FA:C6:17:45:DC:09:03:78:6F:B9:ED:E6:2A:96:2B:39:9F:73:48:F0:BB:6F:89:9B:83:32:66:75:91:03:3B:9C"
      ]
    }
  }
]
```

Upload this file to your website at:

```
https://nightclubapp.web.app/.well-known/assetlinks.json
```

## 4. Verify Deep Linking Setup
Run the following command to check if deep linking is correctly set up:

```sh
adb shell pm verify-app-links --re-verify com.nite
adb shell pm get-app-links com.nite
```

Expected output:
```
com.nite:
  Domain verification state:
    nightclubapp.web.app: verified
```

## 5. Test Deep Linking
Use ADB to test a deep link manually:

```sh
adb shell am start -a android.intent.action.VIEW -d "https://nightclubapp.web.app/test" com.nite
```

If your app opens, deep linking is working.

## 6. Handle Deep Links in React Native App
Modify `App.js` to listen for deep links:

```js
import { Linking } from 'react-native';
import { useEffect } from 'react';

useEffect(() => {
  Linking.getInitialURL().then(url => {
    if (url) {
      console.log("App Opened with URL:", url);
    }
  });

  const handleDeepLink = (event) => {
    console.log("Deep Link Triggered:", event.url);
  };

  Linking.addEventListener('url', handleDeepLink);

  return () => {
    Linking.removeEventListener('url', handleDeepLink);
  };
}, []);
```

## 7. Debugging Issues
If deep linking is not working, check logs:

```sh
adb logcat | grep deep
adb shell dumpsys package com.nite | grep android.intent.action.VIEW
```

If `assetlinks.json` is not accessible, fix file permissions and ensure the correct SHA-256 is used.

## 8. Final Steps
- Uninstall and reinstall the app after changes:
  ```sh
  adb uninstall com.nite
  react-native run-android
  ```
- Test deep links from a browser: `https://nightclubapp.web.app/test`

Following these steps ensures deep linking is correctly configured and verified in your React Native app. 🚀

