# React Native

- React를 기반으로 만들어진 `javascript` 기반의 프레임워크로, 크로스 플랫폼 앱 개발에 사용된다.
- Native 는 각 운영 체제(Android, ios)에 맞춰 따로 개발 및 운영이 필요하다 (Java, Kotlin, Object-C, Swift)
- 크로스 플랫폼은 하나의 소스 코드로 Android, ios에서 똑같이 작동하는 앱을 의미하며,
  대표적으로 `React Native`, `Flutter`가 있다
- React Native CLI, Expo CLI

## 시작 전

- Node.js 설치
- Chocolatey 설치
- Android Studio 설치
- Android Studio SDK 설치

## 환경설정

1. React Native CLI 설치

- [React Native CLI](https://reactnative.dev/docs/0.72/environment-setup)
  : 0.72가 안정함 (2025.02.25 기준)
- ![React Native CLI](https://github.com/user-attachments/assets/db15a30a-edd9-426c-87c3-204713552a33)
- 해당 이미지 확인 후 Windows PowerShell 관리자 모드로 실행 후 넣기

2. Chocolatey 설치

- [Installing Chocolatey](https://chocolatey.org/install).
- ![시작 전](https://github.com/user-attachments/assets/7647e5ab-3e41-4d32-bcf6-774209eca88b)

  > Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))

  : Windows PowerShell 관리자 모드로 실행 후 해당 문구를 넣는다
  : 설치 완료후 `choco` 를 넣고 버전 확인

**예시**

```bash
Chocolatey v2.4.2
Please run 'choco -?' or 'choco <command> -?' for help menu.
```

3. Node, JDK 설치

```bash
choco install -y nodejs-lts microsoft-openjdk17
```

: 해당 문구는 텍스트 에디터의 터미널에다가 넣으면 빠르게 설치된다.

4. Node 환경 변수 등록

- 모르겠다.

5. JDK 환경 변수 등록

- 기억안남

6. Android Studio 설치

- [안드로이드 스튜디오 공식사이트(한글)](https://developer.android.com/studio?hl=ko)
  : 설치 하자. 이거 맞음? 싶은게 맞으니까 그냥 동의하고 설치하면 된다.

7. Android Studio 환경 변수 등록
   ![사용자 변수 등록](https://velog.velcdn.com/images/it-ju/post/a9843c39-29ff-419e-b2a3-a7958ab7b3a6/image.png)

   > 변수 이름 ANDROID_HOME
   > 변수 값 sdk 설치경로

   ![Platform-tool](https://github.com/user-attachments/assets/1a49d53a-77aa-43e0-a125-a0ac93c4273f)

   ![Platform-tool path에 새로 등록](https://github.com/user-attachments/assets/105f4299-d1bc-4348-b173-99d7c95f071e)

   - 윈도우 하단 툴바의 검색창에서 `시스템 환경 변수` 검색 후 진입
   - `환경 변수 버튼` 클릭
   - 새로 만들기
     - 변수 명 : `ANDROID_HOME`
     - 변수 값 : `C:\Users\Administrator\AppData\Local\Android\Sdk`
   - 수정 및 추가
   - `path` 항목 더블클릭
   - 항목 추가 : `%ANDROID_HOME%\platform-tools`

```
C:\Users\Administrator\AppData\Local\Android\Sdk
```

- Android SDK
  ![Android Studio 키자마자](https://github.com/user-attachments/assets/e7dddc4c-d4a2-4836-a9d4-f782c7ed5c86)
  : More Actions 를 누른다.
  ![SDK Manager](https://github.com/user-attachments/assets/5e6e6890-e0f1-45b5-a2c4-7ac2845d7b65)

- Android SDK Platform
  : API Level 35
  : Android API 35("VanillaIceCream")

  ```
    Android SDK Platform 35
    ARM 64 v8a System Image
    Intel x86_64 Atom System Image
    Google APIs ARM 64 v8a System Image
    Google APIs Intel x86_64 Atom System Image
    Google Play ARM 64 v8a System Image
    Google Play Intel x86_64 Atom System Image
  ```

  : ![API Level 35 체크 목록](https://github.com/user-attachments/assets/d1e0460e-f479-408a-9979-637ae9fee52e)
  : API Level 34
  : Android 14.0("UpsideDownCake")

  ```
  Android SDK Platform 34
  Source for Android 34
  ARM 64 v8a System Image
  Intel x86_64 Atom System Image
  Google APIs ARM 64 v8a System Image
  Google APIs Intel x86_64 Atom System Image
  Google Play ARM 64 v8a System Image
  Google Play Intel x86_64 Atom System Image
  ```

  : ![API Level 34 체크 목록](https://github.com/user-attachments/assets/e34e6acb-41ed-4e04-8b83-c55f0a172341)
  : API Level 33
  : Android 13.0("Tiramisu")

  ```
  Android SDK Platform 33
  ARM 64 v8a System Image
  Intel x86_64 Atom System Image
  Google APIs ARM 64 v8a System Image
  Google APIs Intel x86_64 Atom System Image
  Google Play ARM 64 v8a System Image
  Google Play Intel x86_64 Atom System Image
  ```

  : ![API Level 33 체크 목록](https://github.com/user-attachments/assets/2fc0f885-01e0-4033-92fd-4a2c994a85d0)

- Android SDK Tools
  :![Android SDK Tools 체크목록](https://github.com/user-attachments/assets/19f0737b-8f0f-4050-b8c7-cb988f246a15)

  - Android SDK Buil-Tools 36-rc5
  - NDK
  - CMake
  - Android Emulator
  - Android Emulator hypervisor driver
  - Android SDK Platform-Tools
  - Google Play Service

- Android Virtual Device
  ![Android Virtual Device](https://github.com/user-attachments/assets/e7c945ff-bb67-4ff7-8df9-ae1261751308)
  ![Pixcel 7](https://github.com/user-attachments/assets/cda60ce8-c0b5-45f9-932d-32e3f7f2c137)
  ![Image](https://github.com/user-attachments/assets/40df10ce-257b-4012-b10e-d4093545fabf)

### 설치 확인

> Windows PowerShell 관리자 모드로 실행 후 해당 문구를 넣는다

- `Get-ChildItem -Path Env:\`
  : CLI에서 환경 변수 확인하기

- `adb --version`
  : 안드로이드 환경 변수 확인하기

## 프로젝트 생성

**주의**

- 폴더 경로, 폴더 이름에는 한글이 포함되선 안된다.
- 특수기호가 들어 가서도 안된다.

```bash
npx react-native@0.72.6 init 앱이름 --version 0.72.6
```

**실행 실패 시 확인사항**

- `cd android` 로 anodroid 폴더로 이동
- 터미널에 `./gradlew clean` 으로 프로젝트 다시 초기화
- 완료 후 `cd ..` 상위폴더 이동
- 다시 `npm run start` 실행 후 결과 확인
- 그래도 안되면 `npx react-native doctor` 명령으로 현재 상태 확인 후 조치

## 프로젝트 시작

```bash
npm run start
a # run on Android 란 의미
```

### Web View

- [Web View](https://www.npmjs.com/package/react-native-webview)
- `npm i react-native-webview`
