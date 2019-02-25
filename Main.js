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
    Dimensions,
    TouchableOpacity,
    TextInput,
    ScrollView,
    BackHandler,
    Alert
} from 'react-native';
import { AsyncStorage } from 'react-native';
// import { Content, Container, Thumbnail, CardItem, Left, Body, Right, Footer, FooterTab, Button, Icon, Textarea, Toast, Header } from "native-base"
import { Container, Header, Title, Button, Left, Right, Body, Icon } from 'native-base';
const { height, width, fontScale } = Dimensions.get('window');
const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

export default class Main extends Component {
    // _didFocusSubscription;
    // _willBlurSubscription;
    constructor(props) {
        super(props);
        // this._didFocusSubscription = props.navigation.addListener('didFocus', payload =>
            // BackHandler.addEventListener('hardwareBackPress', this.onBackButtonPressAndroid));
        this.state = {
            // datacmgIn: [],
            // datacmgOrd: [],
            driverName: this.props.navigation.state.params.driverName,
        }
        this.Logout = this.Logout.bind(this);
    }

    // componentDidMount() {
    //     this._willBlurSubscription = this.props.navigation.addListener('willBlur', payload =>
    //         BackHandler.removeEventListener('hardwareBackPress', this.onBackButtonPressAndroid)
    //     );
    // }

    // onBackButtonPressAndroid = () => {
    //     if (this.isSelectionModeEnabled()) {
    //         this.disableSelectionMode();
    //         return true;
    //     } else {
    //         return false;
    //     }
    // };

    // componentWillUnmount() {
    //     this._didFocusSubscription && this._didFocusSubscription.remove();
    //     this._willBlurSubscription && this._willBlurSubscription.remove();
    // }
    // onButtonPress = () => {
    //     BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    //     // then navigate
    //     navigate('NewScreen');
    // }

    // handleBackButton = () => {
    //     Alert.alert(
    //         'Exit App',
    //         'Exiting the application?', [{
    //             text: 'Cancel',
    //             // onPress: () = > console.log('Cancel Pressed'),
    //             style: 'cancel'
    //         }, {
    //             text: 'OK',
    //             // onPress: () = > BackHandler.exitApp()
    //         },], {
    //             cancelable: false
    //         }
    //     )
    //     return true;
    // }
    // componentDidMount() {
    //     BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    // }

    // componentWillUnmount() {
    //     alert("Unmont");
    //     BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    // }
    // Logout() {
    //     this.setState({
    //         auth: false
    //     })
    //     this.props.navigation.navigate('SignIn')
    // }
    Logout() {
        // this.setState({
        //     auth: false
        // })
        this.props.navigation.navigate('SignIn')
        AsyncStorage.removeItem('name');
        // AsyncStorage.setItem('auth', 0);            
    }
    render() {
        return (
            <Container>
                <View style={{ height: width / 8, backgroundColor: "#C21807", display: "flex", flexDirection: "row" }}>
                    <View style={{ width: "25%", height: width / 8 }}></View>
                    <View style={{ width: "50%", height: width / 8, display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
                        <Text style={{ fontSize: 23, color: "white" }}>My dashboard</Text>
                    </View>
                    <View style={{ width: "25%", height: width / 8 }}></View>
                </View>

                <ScrollView>

                    <TouchableOpacity activeOpacity={1} style={{ height: width / 8, display: "flex", flexDirection: "row", backgroundColor: "#f7f7f7" }}>
                        <View style={{ width: "70%", height: width / 8, display: "flex", justifyContent: "center", marginLeft: "4%" }}>
                            <Text style={{ fontSize: 20, color: "#C21807" }}>Order Management</Text>
                        </View>
                        <View style={{ width: "30%", height: width / 8 }}></View>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('NewOrders',{dname:this.state.driverName})} style={{ marginTop: "1%", height: width / 8, backgroundColor: "#f7f7f7", display: "flex", flexDirection: "row" }}>
                        <View style={{ width: "15%", height: width / 8 }}></View>
                        <View style={{ width: "70%", height: width / 8, display: "flex", justifyContent: "center" }}>
                            <Text style={{ fontSize: 20, color: "#C21807" }}>New orders</Text>
                        </View>
                        <View style={{ width: "15%", height: width / 8 }}></View>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('InProcessOrders')} style={{ marginTop: "1%", height: width / 8, backgroundColor: "#f7f7f7", display: "flex", flexDirection: "row" }}>
                        <View style={{ width: "15%", height: width / 8 }}></View>
                        <View style={{ width: "70%", height: width / 8, display: "flex", justifyContent: "center" }}>
                            <Text style={{ fontSize: 20, color: "#C21807" }}>In-process orders</Text>
                        </View>
                        <View style={{ width: "15%", height: width / 8 }}></View>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('CompletedOrders')} style={{ marginTop: "1%", height: width / 8, backgroundColor: "#f7f7f7", display: "flex", flexDirection: "row" }}>
                        <View style={{ width: "15%", height: width / 8 }}></View>
                        <View style={{ width: "70%", height: width / 8, display: "flex", justifyContent: "center" }}>
                            <Text style={{ fontSize: 20, color: "#C21807" }}>Completed orders</Text>
                        </View>
                        <View style={{ width: "15%", height: width / 8 }}></View>
                    </TouchableOpacity>
{/* 
                    <View style={{ marginTop: "1%", height: width / 8, display: "flex", flexDirection: "row", backgroundColor: "#f7f7f7" }}>
                        <View style={{ width: "70%", height: width / 8, alignSelf: "center", display: "flex", justifyContent: "center", marginLeft: "4%" }}>
                            <Text style={{ fontSize: 20, color: "#C21807" }}>Menu Management</Text>
                        </View>
                        <View style={{ width: "30%", height: width / 8 }}></View>
                    </View>

                    <TouchableOpacity activeOpacity={1} style={{ marginTop: "1%", height: width / 8, backgroundColor: "#f7f7f7", display: "flex", flexDirection: "row" }}>
                        <View style={{ width: "15%", height: width / 8 }}></View>
                        <View style={{ width: "70%", height: width / 8, display: "flex", justifyContent: "center" }}>
                            <Text style={{ fontSize: 20, color: "#C21807" }}>My menu list</Text>
                        </View>
                        <View style={{ width: "15%", height: width / 8 }}></View>
                    </TouchableOpacity> */}

                    <View style={{marginTop: "1%", height: width / 8, display: "flex", flexDirection: "row", backgroundColor: "#f7f7f7" }}>
                        <View style={{ width: "70%", height: width / 8, alignSelf: "center", display: "flex", justifyContent: "center", marginLeft: "4%" }}>
                            <Text style={{ fontSize: 20, color: "#C21807" }}>My Earnings</Text>
                        </View>
                        <View style={{ width: "30%", height: width / 8 }}></View>
                    </View>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('ThisWeekIncome', { ordered1: this.props.navigation.state.params.driverName})} style={{ marginTop: "1%", height: width / 8, backgroundColor: "#f7f7f7", display: "flex", flexDirection: "row" }}>
                        <View style={{ width: "15%", height: width / 8 }}></View>
                        <View style={{ width: "70%", height: width / 8, display: "flex", justifyContent: "center" }}>
                            <Text style={{ fontSize: 20, color: "#C21807" }}>This week's income</Text>
                        </View>
                        <View style={{ width: "15%", height: width / 8 }}></View>
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('ThisMonthIncome', { ordered1: this.props.navigation.state.params.driverName})} style={{ marginTop: "1%", height: width / 8, backgroundColor: "#f7f7f7", display: "flex", flexDirection: "row" }} style={{ marginTop: "1%", height: width / 8, backgroundColor: "#f7f7f7", display: "flex", flexDirection: "row" }}>
                        <View style={{ width: "15%", height: width / 8 }}></View>
                        <View style={{ width: "70%", height: width / 8, display: "flex", justifyContent: "center" }}>
                            <Text style={{ fontSize: 20, color: "#C21807" }}>This Months income</Text>
                        </View>
                        <View style={{ width: "15%", height: width / 8 }}></View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('TotalAmount', { ordered1: this.props.navigation.state.params.driverName})} style={{ marginTop: "1%", height: width / 8, backgroundColor: "#f7f7f7", display: "flex", flexDirection: "row" }}>
                        <View style={{ width: "15%", height: width / 8 }}></View>
                        <View style={{ width: "70%", height: width / 8, display: "flex", justifyContent: "center" }}>
                            <Text style={{ fontSize: 20, color: "#C21807" }}>Total income</Text>
                        </View>
                        <View style={{ width: "15%", height: width / 8 }}></View>
                    </TouchableOpacity>

                    <View style={{ marginTop: "1%",height: width / 8, display: "flex", backgroundColor: "#f7f7f7", flexDirection: "row" }}>
                          <View style={{ width: "70%", height: width / 8, display: "flex", justifyContent: "center", alignSelf: "center", marginLeft: "4%" }}>
                            <Text style={{ fontSize: 20, color: "#C21807" }}>My Profile</Text>
                        </View>
                        <View style={{ width: "30%", height: width / 8 }}></View>
                    </View>

                    <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('updateprofile', { ordered1: this.props.navigation.state.params.driverName})} style={{ marginTop: "1%", height: width / 8, backgroundColor: "#f7f7f7", display: "flex", flexDirection: "row" }} style={{ marginTop: "1%", height: width / 8, backgroundColor: "#f7f7f7", display: "flex", flexDirection: "row" }}>
                        <View style={{ width: "15%", height: width / 8 }}></View>
                        <View style={{ width: "70%", height: width / 8, display: "flex", justifyContent: "center" }}>
                            <Text style={{ fontSize: 20, color: "#C21807" }}>Update profile</Text>
                        </View>
                        <View style={{ width: "15%", height: width / 8 }}></View>
                    </TouchableOpacity>

                    <View style={{ marginTop: "1%",height: width / 8, display: "flex", backgroundColor: "#f7f7f7", flexDirection: "row" }}>
                        <View style={{ width: "70%", height: width / 8, display: "flex", justifyContent: "center", alignSelf: "center", marginLeft: "4%" }}>
                            <Text style={{ fontSize: 20, color: "#C21807" }}>Help and support</Text>
                        </View>
                        <View style={{ width: "30%", height: width / 8 }}></View>
                    </View>

                    <TouchableOpacity activeOpacity={1} onPress={() => this.Logout()} style={{ marginTop: "1%",height: width / 8, display: "flex", backgroundColor: "#f7f7f7", flexDirection: "row" }}>
                        <View style={{ width: "70%", height: width / 8, display: "flex", justifyContent: "center", alignSelf: "center", marginLeft: "4%" }}>
                            <Text style={{ fontSize: 20, color: "#C21807" }}>Log out</Text>
                        </View>
                        <View style={{ width: "30%", height: width / 8 }}></View>
                    </TouchableOpacity>

                    <View style={{ marginTop: "1%", height: width / 8, backgroundColor: "#f7f7f7", display: "flex", flexDirection: "row" }}>
                        <View style={{ width: "25%", height: width / 8 }}></View>
                        <View style={{ width: "50%", height: width / 8 }}>
                        </View>
                        <View style={{ width: "25%", height: width / 8 }}></View>
                    </View>

                    <View style={{ marginTop: "1%", height: width / 8, backgroundColor: "#f7f7f7", display: "flex", flexDirection: "row" }}>
                        <View style={{ width: "25%", height: width / 8 }}></View>
                        <View style={{ width: "50%", height: width / 8 }}>
                        </View>
                        <View style={{ width: "25%", height: width / 8 }}></View>
                    </View>


                </ScrollView>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
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