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
