"# rn-expo-firebase-demo" 


1. First setup with expo & have a running react native app.
2. Install Firebase using "npm i firebase --save". [Firebase](https://www.npmjs.com/package/firebase)
3. Run "expo install expo-google-app-auth".  [About This](https://docs.expo.io/versions/latest/sdk/google/)
4. Put button for login action.
5. Setup firebase project for login in firebase console.
6. Copy the firebaseConfig of the project in "firebase.config.js" file.
7. Enable Google Authentication in Authentication > Sign-In Method
8. Create OAuth Client ID for Android from Google Console in same project (https://console.cloud.google.com/apis/credentials)
9. Note - Until your app in debugging mode, use "host.exp.exponent" as package name to use within expo client. Once your app is ready to publish change this to your app's package name.
10. Setup OAuth Consent Screen in Google Console.
11. Copy the OAuth Client ID & replace with on "Login.js" in "const ANDROID_CLIENT_ID = 'XXXXXX';"
12. Run the project with "expo start"

###

NOTE - Until your app in debugging mode, use "host.exp.exponent" as package name to use within expo client. Once your app is ready to publish change this to your app's package name.


