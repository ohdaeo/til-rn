![React Native](https://velog.velcdn.com/images/imysh578/post/1f54af4b-6908-44fd-9072-3542ab10fe36/image.png)

# Web View

- [Web View](https://www.npmjs.com/package/react-native-webview)
- `npm i react-native-webview`

### 기본예제

```tsx
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import WebView from 'react-native-webview';

/*
  SafeAreaView - 상단 툴바(시간, 배터리 용량을 나타내는 부분)를 제외한 스크린 사이즈를 의미
  View - UI를 구축하는 데 가장 기본적인 구성 요소

 */

const App = (): JSX.Element => {
  const webViewUrl = 'http://naver.com/';

  return (
    <SafeAreaView style={styles.container}>
      <WebView source={{uri: webViewUrl}} style={styles.webview} />
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
});

export default App;
```

### 응용예제 (로딩화면 구현)

[데이터 로딩 UI](https://velog.io/@ttoottie/RN-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EB%A1%9C%EB%94%A9-UI%EB%A5%BC-%EC%9E%90%EC%97%B0%EC%8A%A4%EB%9F%BD%EA%B2%8C-%EA%B5%AC%EC%84%B1%ED%95%B4%EB%B3%B4%EC%9E%90)

```tsx
import React from 'react';
import {ActivityIndicator, SafeAreaView, StyleSheet, View} from 'react-native';
import WebView from 'react-native-webview';

/*
  SafeAreaView - 상단 툴바(시간, 배터리 용량을 나타내는 부분)를 제외한 스크린 사이즈를 의미
  View - UI를 구축하는 데 가장 기본적인 구성 요소
  startInLoadingState - 웹 콘텐츠가 로딩되는 동안 로딩을 표시할지 여부를 결정
  renderLoading - 웹 콘텐츠가 로딩되는 동안 표시할 로딩 인디케이터 컴포넌트를 반환하는 함수
 */

const App = (): JSX.Element => {
  const webViewUrl = 'http://naver.com/';

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
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});

export default App;
```
