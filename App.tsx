import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  Alert,
  BackHandler,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
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

  useEffect(() => {
    const backAction = () => {
      Alert.alert('앱 종료', '앱을 종료 하시겠습니까?', [
        {text: '취소', onPress: () => null, style: 'cancel'},
        {text: '종료', onPress: () => BackHandler.exitApp()},
      ]);
      return true; // 뒤로가기 방지
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove(); // 앱 종료시 이벤트 리스너 정리
  }, []);

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
