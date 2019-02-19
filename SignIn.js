/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    Image,
    View,
    TouchableNativeFeedback,
    Dimensions,
    ScrollView,
    TextInput,
    ToastAndroid
} from 'react-native';
import { Button, CheckBox, ListItem, Toast } from "native-base";
// import { Content, Container, Thumbnail, CardItem, Left, Body, Right, Footer, FooterTab, Button, Icon, Textarea, Toast } from "native-base"
import { createStackNavigator, createAppContainer } from 'react-navigation';
const { height, width, fontScale } = Dimensions.get('window');
const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stm: true,
            email: "",
            password: "",
            datacmg: "",
            auth: false,
        }
        this.Get = this.Get.bind(this);
        this.Login = this.Login.bind(this);
    }
    UNSAFE_componentWillMount() {
        this.state.auth ? this.props.navigation.navigate('MainPage') : ""
        this.Get();
        setTimeout(() => {
            this.setState({
                stm: false
            })
        }, 2500)
    }
    Get() {
        fetch('https://rotiappserver.herokuapp.com/api/drivers', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        }).then(function (response) {
            return response.json();
        }).then(data => {
            this.setState({
                datacmg: data
            })
        }
        ).catch(error => alert(error));
    }
    Login() {
        for (let i = 0; i < this.state.datacmg.length; i++) {
            if (this.state.datacmg[i].email == this.state.email) {
                if (this.state.datacmg[i].Password == this.state.password) {
                    // if (this.state.datacmg[i].ApprovedAccount == true) {
                        this.setState({
                            // auth: true,
                            email: "",
                            password: ""
                        })
                        this.props.navigation.navigate('Main',{ driverName: this.state.datacmg[i].firstname})
                        // { resName: this.state.datacmg[i].restaurantname, auth: this.state.auth }
                        break;
                    // }
                    // else {
                        // ToastAndroid.show('Account not Authorized!', ToastAndroid.SHORT);
                    //     break;
                    // }
                }
                else {
                    ToastAndroid.show('Password not match', ToastAndroid.SHORT);
                    break;
                }
            }
            else {
                ToastAndroid.show('Email not match', ToastAndroid.SHORT);
            }
        }
    }
    render() {
        return (
            this.state.stm ? <View style={styles.container}>
                <View style={{ justifyContent: "flex-end", alignItems: "center" }}>
                    <View style={{ width: width / 1.5, height: width / 2.7 }}>
                        <Image
                            source={require("./logo.png")} resizeMode="contain" style={{ height: "100%", width: "100%" }} />
                    </View>

                    <View>
                        <Text style={{ marginTop: '3.5%', color: "black", fontSize: fontScale * 20 }}>Welcome Driver!</Text>
                    </View>
                </View>
            </View> :
                <View style={styles.container}>
                    <ScrollView keyboardDismissMode="interactive" keyboardShouldPersistTaps="handled">
                        <View style={{ height: width / 3, width, alignItems: "center", display: "flex", justifyContent: "flex-end" }}>
                            <Text style={{ fontSize: 22, color: "black", justifyContent: "center" }}></Text>
                            <Text style={{ fontSize: 22, color: "black", justifyContent: "center" }}>Login to your</Text>
                            <Text style={{ fontSize: 22, color: "black", justifyContent: "center" }}>RotiApp account</Text>
                        </View>
                        <View style={{ height: width / 1.85, justifyContent: "center" }} padder>
                            <Image
                                resizeMode="contain"
                                style={{ width: width / 1.6, height: width / 1.5, alignSelf: "center" }}
                                source={require("./shakehands.png")}
                            />
                        </View>
                        <View style={{ alignSelf: "center", borderRadius: 16, height: width / 1.5, width: width / 1.1 }}>
                            <View style={{ borderTopWidth: 1, borderTopColor: "rgba(0, 0, 0, 0.25)", direction: "flex", flexDirection: "row" }}>
                                <TextInput
                                    style={{ height: width / 6, width: width / 1.3, color: "black", backgroundColor: "none", color: "f7f7f7", fontSize: fontScale * 19, paddingRight: "2%", paddingLeft: "2%" }}
                                    onChangeText={(email) => this.setState({ email })}
                                    value={this.state.email}
                                    placeholder="E-Mail"
                                    placeholderTextColor="f7f7f7"
                                    autoCapitalize='none'
                                />
                                <Image
                                    resizeMode="contain"
                                    style={{ width: width / 13, height: width / 13, alignSelf: "center" }}
                                    source={require("./email.png")}
                                />
                            </View>
                            <View style={{ borderTopWidth: 1, borderTopColor: "rgba(0, 0, 0, 0.25)", direction: "flex", flexDirection: "row" }}>
                                <TextInput
                                    style={{ height: width / 6, width: width / 1.3, color: "black", backgroundColor: "none", color: "f7f7f7", fontSize: fontScale * 19, paddingRight: "2%", paddingLeft: "2%" }}
                                    onChangeText={(password) => this.setState({ password })}
                                    value={this.state.password}
                                    placeholder="Password"
                                    placeholderTextColor="f7f7f7"
                                    secureTextEntry={true}
                                    autoCapitalize='none'
                                />
                                <Image
                                    resizeMode="contain"
                                    style={{ width: width / 13, height: width / 13, alignSelf: "center" }}
                                    source={require("./pwd.png")}
                                />
                            </View>
                            <Button style={{ height: width / 8, width: width / 1.1, backgroundColor: "#C21807", alignSelf: "center", justifyContent: "center", marginTop: "2%" }} onPress={() => this.Login()}><Text style={{ color: "#ffff", fontSize: fontScale * 20, textAlign: "center" }}>LOGIN</Text></Button>
                        </View>
                    </ScrollView>
                </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffff',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
