![React Native](https://velog.velcdn.com/images/imysh578/post/1f54af4b-6908-44fd-9072-3542ab10fe36/image.png)

# Splash Screen

[splash screen](https://til-choonham.tistory.com/530)
[github splash screen](https://github.com/crazycodeboy/react-native-splash-screen)
[npm splash screen](https://www.npmjs.com/package/react-native-splash-screen)

```bash
npm i react-native-splash-screen
```

### android (MainActivity.java) 수정

- android\app\src\main\java\com\앱이름\MainActivity.java

```java
package com.rntil;

import android.os.Bundle; // here

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint;
import com.facebook.react.defaults.DefaultReactActivityDelegate;

// react-native-splash-screen >= 0.3.1
import org.devio.rn.splashscreen.SplashScreen; // here

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "rntil";
  }

  /**
   * Returns the instance of the {@link ReactActivityDelegate}. Here we use a util class {@link
   * DefaultReactActivityDelegate} which allows you to easily enable Fabric and Concurrent React
   * (aka React 18) with two boolean flags.
   */
  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new DefaultReactActivityDelegate(
        this,
        getMainComponentName(),
        // If you opted-in for the New Architecture, we enable the Fabric Renderer.
        DefaultNewArchitectureEntryPoint.getFabricEnabled());
  }
  // here
  @Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this);  // here
        super.onCreate(savedInstanceState);
    }
}

```

### Splash Screen 이미지

- 900 \* 900 .png
- android\app\src\main\res\drawable\launch_screen.png
  저장

**launch_screen.xml 파일 생성 및 배치**

- android/app/src/main/res/layout 폴더 생성
- android/app/src/main/res/layout/launch_screen.xml 파일 생성

```xml
<?xml version="1.0" encoding="utf-8"?>
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:orientation="vertical" android:layout_width="match_parent"
    android:layout_height="match_parent">
    <ImageView android:layout_width="match_parent" android:layout_height="match_parent" android:src="@drawable/launch_screen" android:scaleType="centerCrop" />
</RelativeLayout>
```

**colors.xml 파일 생성 및 배치**

- android/app/src/main/res/values/colors.xml

```xml
<?xml version="1.0" encoding="utf-8"?>
<resources>
    <color name="primary_dark">#000000</color>
</resources>
```

### App.tsx 적용

```tsx
import React from 'react';
import {ActivityIndicator, SafeAreaView, StyleSheet, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import WebView from 'react-native-webview';

/*
  SafeAreaView - 상단 툴바(시간, 배터리 용량을 나타내는 부분)를 제외한 스크린 사이즈를 의미
  View - UI를 구축하는 데 가장 기본적인 구성 요소
  startInLoadingState - 웹 콘텐츠가 로딩되는 동안 로딩을 표시할지 여부를 결정
  renderLoading - 웹 콘텐츠가 로딩되는 동안 표시할 로딩 인디케이터 컴포넌트를 반환하는 함수
 */

const App = (): JSX.Element => {
  const webViewUrl = 'http://naver.com/';

  // Splash Screen 적용

  return (
    <SafeAreaView style={styles.container}>
      <WebView
        source={{uri: webViewUrl}}
        startInLoadingState={true}
        renderLoading={() => (
          // 웹뷰 로딩 중일 때 표시될 로딩 인디케이터 컴포넌트
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#0000ff" />
            {/* 로딩 스피너 컴포넌트 */}
          </View>
        )}
        // 로딩 완료
        onLoad={() => {
          console.log('로딩완료');
          setTimeout(() => {
            SplashScreen.hide();
          }, 1000);
        }}
        style={styles.webview}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  webview: {
    flex: 1,
  },
  loadingContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default App;
```
