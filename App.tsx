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
    backgroundColor: '#fff',
  },
});

export default App;
