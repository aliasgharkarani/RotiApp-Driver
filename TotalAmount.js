// TotalAmount
// ThisWeekIncome

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
    Image,
    View,
    Dimensions,
    TouchableOpacity,
    TextInput,
    ScrollView
} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import { createStackNavigator, createAppContainer } from 'react-navigation';
const { height, width, fontScale } = Dimensions.get('window');
const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});
export default class TotalAmount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checking: this.props.navigation.state.params.ordered1,
            filtered1: {},
            total: 0
        }
        this.Get = this.Get.bind(this);
        this.DateFormatted = this.DateFormatted.bind(this);
        this.Update = this.Update.bind(this);
    }
    UNSAFE_componentWillMount() {
        // console.log(this.state.checking);
        this.Get();
    }
    Get() {
        fetch(`https://rotiappserver.herokuapp.com/api/drivers/${this.state.checking}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        }).then(function (response) {
            return response.json();
        }).then(data => {
            console.log(data);
            this.setState({
                filtered1: data
            })
            this.Update(data);
        }
        ).catch(error => alert("No Orders"));
    }
    Update(all) {
        let tot = 0;
        for (let i = 0; i < all.CompletedOrders.length; i++) {
            tot += all.CompletedOrders[i].OrderAmount;
        }
        this.setState({
            total: tot
        })
    }
    DateFormatted(datecon) {
        let d = new Date(datecon).getDate();
        let m = new Date(datecon).getMonth();
        let y = new Date(datecon).getFullYear();
        return (d + "/" + (m+1) + "/" + y);
    }
    render() {
        return (
            this.state.filtered1.CompletedOrders?
            <ScrollView>
                <Container>
                    <Content>
                        {this.state.filtered1.CompletedOrders.map((data, i) => {
                            return (
                                <Card style={{ flex: 0 }}>
                                    <CardItem>
                                        <Left>
                                            <Body>
                                                <Text>
                                                    Amount: {data.Cost}
                                                </Text>
                                                <Text>
                                                    OrderDeliveryDate: {this.DateFormatted(data.OrderDeliveryDate)}
                                                </Text>
                                                <Text>
                                                    OrderPlacementDate: {this.DateFormatted(data.OrderPlacementDate)}
                                                </Text>
                                            </Body>
                                        </Left>
                                    </CardItem>
                                </Card>
                            )
                        })}
                        <Card style={{ flex: 0 }}>
                            <CardItem>
                                <Left>
                                    <Body>
                                        <Text>
                                            Total: {this.state.total}
                                        </Text>
                                    </Body>
                                </Left>
                            </CardItem>
                        </Card>
                    </Content>
                </Container>
            </ScrollView>
            :
            <View>
            <Text>No Orders</Text>
        </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});
