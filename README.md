![React Native](https://velog.velcdn.com/images/imysh578/post/1f54af4b-6908-44fd-9072-3542ab10fe36/image.png)

# BackHandler

```tsx
import React, {useEffect} from 'react';

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
```
