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
    ScrollView
} from 'react-native';
import { Content, Container, Thumbnail, CardItem, Left, Body, Right, Footer, FooterTab, Button, Icon, Textarea, Toast } from "native-base"
import { createStackNavigator, createAppContainer } from 'react-navigation';
const { height, width, fontScale } = Dimensions.get('window');
const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

// type Props = {};
export default class updateprofile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // avatarSource: "https://firebasestorage.googleapis.com/v0/b/sugarandspice-34c66.appspot.com/o/posts%2Fbiryani.jpg?alt=media&token=1683cab5-2fbf-4d06-b155-4ff570ab7b77",
            location: "",
            restaurantname: "",
            firstname: "",
            lastname: "",
            yourtitle: "",
            phoneno: "",
            email: "",
            Password: "",
            noOflocations: "",
            typeOfCuisine: "",
            EstimatedWeeklyOrder: "",
            CurrentlyOfferDelivery: false,
            zipcode: "",
            approved: false,
            id:"",
            checking: this.props.navigation.state.params.ordered1,
            datm: {}
        }
        this.Upload = this.Upload.bind(this);
        this.Get = this.Get.bind(this);
    }
    UNSAFE_componentWillMount() {
        this.Get();
    }
    Get() {
        fetch(`https://rotiappserver.herokuapp.com/api/restaurants/${this.state.checking}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        }).then(function (response) {
            return response.json();
        }).then(data => {
            this.setState({
                datm: data,
                location: data.location,
                restaurantname: data.restaurantname,
                firstname: data.firstname,
                lastname: data.lastname,
                yourtitle: data.yourtitle,
                phoneno: data.phoneno,
                email: data.email,
                Password: data.Password,
                noOflocations: data.noOflocations,
                typeOfCuisine: data.typeOfCuisine,
                EstimatedWeeklyOrder: data.EstimatedWeeklyOrder,
                CurrentlyOfferDelivery: data.CurrentlyOfferDelivery,
                zipcode: data.zipcode,
                id:data._id
            })
        }
        ).catch(error => alert(error));
    }

    Upload() {
        if (this.state.location.length > 4) {
            if (this.state.restaurantname.length > 3) {
                if (this.state.firstname && this.state.lastname && this.state.zipcode && this.state.yourtitle && this.state.phoneno && this.state.email && this.state.Password && this.state.noOflocations && this.state.typeOfCuisine && this.state.noOflocations) {
                    let payload = {
                        "CurrentlyOfferDelivery": this.state.CurrentlyOfferDelivery,
                        "ApprovedAccount": this.state.approved,
                        "location": `${this.state.location}`,
                        "restaurantname": `${this.state.restaurantname}`,
                        "zipcode": `${this.state.zipcode}`,
                        "firstname": `${this.state.firstname}`,
                        "lastname": `${this.state.lastname}`,
                        "yourtitle": `${this.state.yourtitle}`,
                        "phoneno": `${this.state.phoneno}`,
                        "email": `${this.state.email}`,
                        "Password": `${this.state.Password}`,
                        "noOflocations": `${this.state.noOflocations}`,
                        "typeOfCuisine": `${this.state.typeOfCuisine}`,
                        "EstimatedWeeklyOrder": `${this.state.EstimatedWeeklyOrder}`
                    }
                    fetch(`https://rotiappserver.herokuapp.com/api/restaurants/${this.state.id}`, {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(payload)
                    }).then(function (response) {
                        return response.json();
                    }).then(data => {
                        this.setState({
                            location: "",
                            restaurantname: "",
                            firstname: "",
                            lastname: "",
                            yourtitle: "",
                            phoneno: "",
                            email: "",
                            noOflocations: "",
                            typeOfCuisine: "",
                            EstimatedWeeklyOrder: "",
                            CurrentlyOfferDelivery: false,
                            zipcode: "",
                            approved: false,
                            Password: ""
                        })
                        alert("Changes Applied");
                        this.Get();
                        // this.props.navigation.navigate('SignIn')
                    }
                    ).catch(error => alert(error));
                }
                else {
                    alert("you have not completed the form");
                }
            }
            else {
                alert("Enter Valid Restrurant Name");
            }
        }
        else {
            alert("Enter Valid Location");
        }

    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{ display: 'flex', flexDirection: 'row', width: width / 1.1, height: width / 7, alignSelf: "center" }}>
                    <TextInput
                        style={{ fontWeight: "bold", height: width / 7, backgroundColor: "rgba(100,200,150,0.5)", width: width / 2.1, color: "#ffffff", fontSize: fontScale * 25, paddingRight: "2%", paddingLeft: "2%" }}
                        onChangeText={(location) => this.setState({ location })}
                        value={this.state.location}
                        placeholder="location"
                        placeholderTextColor="#ffffff"
                        autoCapitalize='none'
                    />
                    <TextInput
                        style={{ fontWeight: "bold", height: width / 7, width: width / 2.3, backgroundColor: "rgba(100,200,150,0.5)", color: "#ffffff", fontSize: fontScale * 25, paddingRight: "2%", paddingLeft: "2%" }}
                        onChangeText={(restaurantname) => this.setState({ restaurantname })}
                        value={this.state.restaurantname}
                        placeholder="restaurantname"
                        placeholderTextColor="#ffffff"
                        autoCapitalize='none'
                    />
                </View>
                <View style={{ marginTop: 2, display: 'flex', flexDirection: 'row', width: width / 1.1, height: width / 7, alignSelf: "center" }}>
                    <TextInput
                        style={{ fontWeight: "bold", height: width / 7, backgroundColor: "rgba(100,200,150,0.5)", width: width / 2.1, color: "#ffffff", fontSize: fontScale * 25, paddingRight: "2%", paddingLeft: "2%" }}
                        onChangeText={(firstname) => this.setState({ firstname })}
                        value={this.state.firstname}
                        placeholder="firstname"
                        placeholderTextColor="#ffffff"
                        autoCapitalize='none'
                    />
                    <TextInput
                        style={{ fontWeight: "bold", height: width / 7, width: width / 2.3, backgroundColor: "rgba(100,200,150,0.5)", color: "#ffffff", fontSize: fontScale * 25, paddingRight: "2%", paddingLeft: "2%" }}
                        onChangeText={(lastname) => this.setState({ lastname })}
                        value={this.state.lastname}
                        placeholder="lastname"
                        placeholderTextColor="#ffffff"
                        autoCapitalize='none'
                    />
                </View>
                <View style={{ marginTop: 2, display: 'flex', flexDirection: 'row', width: width / 1.1, height: width / 7, alignSelf: "center" }}>
                    <TextInput
                        style={{ fontWeight: "bold", height: width / 7, backgroundColor: "rgba(100,200,150,0.5)", width: width / 2.1, color: "#ffffff", fontSize: fontScale * 25, paddingRight: "2%", paddingLeft: "2%" }}
                        onChangeText={(yourtitle) => this.setState({ yourtitle })}
                        value={this.state.yourtitle}
                        placeholder="yourtitle"
                        placeholderTextColor="#ffffff"
                        autoCapitalize='none'
                    />
                    <TextInput
                        style={{ fontWeight: "bold", height: width / 7, width: width / 2.3, backgroundColor: "rgba(100,200,150,0.5)", color: "#ffffff", fontSize: fontScale * 25, paddingRight: "2%", paddingLeft: "2%" }}
                        onChangeText={(phoneno) => this.setState({ phoneno })}
                        value={this.state.phoneno}
                        placeholder="phoneno"
                        placeholderTextColor="#ffffff"
                        autoCapitalize='none'
                    />
                </View>
                <View style={{ marginTop: 2, display: 'flex', flexDirection: 'row', width: width / 1.1, height: width / 7, alignSelf: "center" }}>
                    <TextInput
                        style={{ fontWeight: "bold", height: width / 7, backgroundColor: "rgba(100,200,150,0.5)", width: width / 2.1, color: "#ffffff", fontSize: fontScale * 25, paddingRight: "2%", paddingLeft: "2%" }}
                        onChangeText={(email) => this.setState({ email })}
                        value={this.state.email}
                        placeholder="email"
                        placeholderTextColor="#ffffff"
                        autoCapitalize='none'
                    />
                    <TextInput
                        style={{ fontWeight: "bold", height: width / 7, width: width / 2.3, backgroundColor: "rgba(100,200,150,0.5)", color: "#ffffff", fontSize: fontScale * 25, paddingRight: "2%", paddingLeft: "2%" }}
                        onChangeText={(noOflocations) => this.setState({ noOflocations })}
                        value={this.state.noOflocations}
                        placeholder="noOflocations"
                        placeholderTextColor="#ffffff"
                        autoCapitalize='none'
                    />
                </View>
                <View style={{ marginTop: 2, display: 'flex', flexDirection: 'row', width: width / 1.1, height: width / 7, alignSelf: "center" }}>
                    <TextInput
                        style={{ fontWeight: "bold", height: width / 7, backgroundColor: "rgba(100,200,150,0.5)", width: width / 2.3, color: "#ffffff", fontSize: fontScale * 25, paddingRight: "2%", paddingLeft: "2%" }}
                        onChangeText={(typeOfCuisine) => this.setState({ typeOfCuisine })}
                        value={this.state.typeOfCuisine}
                        placeholder="typeOfCuisine"
                        placeholderTextColor="#ffffff"
                        autoCapitalize='none'
                    />
                    <TextInput
                        style={{ fontWeight: "bold", height: width / 7, width: width / 2.1, backgroundColor: "rgba(100,200,150,0.5)", color: "#ffffff", fontSize: fontScale * 25, paddingRight: "2%", paddingLeft: "2%" }}
                        onChangeText={(EstimatedWeeklyOrder) => this.setState({ EstimatedWeeklyOrder })}
                        value={this.state.EstimatedWeeklyOrder}
                        placeholder="EstimatedWeeklyOrder"
                        placeholderTextColor="#ffffff"
                        autoCapitalize='none'
                    />
                </View>
                <View style={{ marginTop: 2, display: 'flex', flexDirection: 'row', width: width / 1.1, height: width / 7, alignSelf: "center" }}>
                    <TextInput
                        style={{ fontWeight: "bold", height: width / 7, backgroundColor: "rgba(100,200,150,0.5)", width: width / 2.1, color: "#ffffff", fontSize: fontScale * 25, paddingRight: "2%", paddingLeft: "2%" }}
                        onChangeText={(CurrentlyOfferDelivery) => this.setState({ CurrentlyOfferDelivery })}
                        value={this.state.CurrentlyOfferDelivery}
                        placeholder="CurrentlyOfferDelivery"
                        placeholderTextColor="#ffffff"
                        autoCapitalize='none'
                    />
                    <TextInput
                        style={{ fontWeight: "bold", height: width / 7, width: width / 2.3, backgroundColor: "rgba(100,200,150,0.5)", color: "#ffffff", fontSize: fontScale * 25, paddingRight: "2%", paddingLeft: "2%" }}
                        onChangeText={(zipcode) => this.setState({ zipcode })}
                        value={this.state.zipcode}
                        placeholder="zipcode"
                        placeholderTextColor="#ffffff"
                        autoCapitalize='none'
                    />
                </View>
                <View style={{ marginTop: 2, display: 'flex', flexDirection: 'row', width: width / 1.1, height: width / 7, alignSelf: "center" }}>
                    <TextInput
                        style={{ fontWeight: "bold", height: width / 7, backgroundColor: "rgba(100,200,150,0.5)", width: width / 2.1, color: "#ffffff", fontSize: fontScale * 25, paddingRight: "2%", paddingLeft: "2%" }}
                        onChangeText={(Password) => this.setState({ Password })}
                        value={this.state.Password}
                        placeholder="Password"
                        placeholderTextColor="#ffffff"
                        autoCapitalize='none'
                    />
                </View>
                <Button onPress={() => this.Upload()} style={{ backgroundColor: "rgb(180,180,180)", height: width / 7, width: width / 4, borderRadius: 100, alignSelf: "center", paddingLeft: "5%" }}><Text style={{ color: "#ffffff", fontWeight: "bold" }}>Upload</Text></Button>
                <View style={{ flexDirection: "row", alignSelf: "center", marginTop: "5%" }}><Text style={{ color: "#ffffff", fontSize: fontScale * 22, fontWeight: "bold" }}>Dont Have an Account? </Text><Text onPress={() => this.props.navigation.navigate("SignIn")} style={{ textDecorationLine: 'underline', color: "#ffffff", fontSize: fontScale * 22 }}>Sign Up</Text></View>
            </View>
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