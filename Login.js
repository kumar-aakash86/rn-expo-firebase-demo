import React from 'react';
import { StyleSheet, Alert, View, Button, Text } from 'react-native';

import firebase from "firebase";
import FirebaseApp from "./config/firebase.config";

import * as Google from "expo-google-app-auth";

const ANDROID_CLIENT_ID = 'XXXXXX';

export default class Login extends React.Component {

    state = {
        loading: false
    };



    render() {
        return <View style={styles.container}>
            {this.state.loading ? <Text>Logging you in</Text> :
                <Button full rounded success style={{ marginTop: 20 }} title="Google Login" onPress={this.signInWithGoogle} >
                </Button>}
        </View>
    }


    signInWithGoogle = async () => {
        try {
            const result = await Google.logInAsync({
                androidClientId: ANDROID_CLIENT_ID,
                androidStandaloneAppClientId: ANDROID_CLIENT_ID,
                scopes: ["profile", "email"],
            });

            this.setState({
                loading: true
            });
            if (result.type === "success") {

                this.firebaseLogin(firebase.auth.GoogleAuthProvider.credential(result.idToken, result.accessToken));

            }
        } catch (e) {
            console.log('Error with login', e);
            Alert.alert('Error', 'Could not login', [
                { text: 'CLOSE', onPress: () => { } }
            ]);

            this.setState({
                loading: false
            });
        }
    };

    firebaseLogin = (credential) => {

        FirebaseApp.auth().signInWithCredential(credential).then((result) => {

            // console.log(JSON.stringify(result));
            // This gives you a Google Access Token. You can use it to access the Google API.
            // var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            Alert.alert('Welcome', user.displayName, [
                { text: 'OK', onPress: () => console.log('error ok') }
            ]);
            this.setState({
                loading: false
            });
        }).catch((err) => {
            Alert.alert('Error', err.message, [
                { text: 'OK', onPress: () => console.log('error ok') }
            ]);
            this.setState({
                loading: false
            });
        });
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
