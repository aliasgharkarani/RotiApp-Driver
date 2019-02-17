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
export default class NewOrders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // checking: this.props.navigation.state.params.dname,
            filtered1: [],
            Drivername: this.props.navigation.state.params.dname
        }
        this.Get = this.Get.bind(this);
        this.Accepted = this.Accepted.bind(this);
    }
    UNSAFE_componentWillMount() {
        this.Get();
    }
    Get() {
        fetch(`https://dry-coast-84806.herokuapp.com/api/orders/AcceptedbyRestaurant`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        }).then(function (response) {
            return response.json();
        }).then(data => {
            this.setState({
                filtered1: data
            })
        }
        ).catch(error => alert("No Orders"));
    }
    Accepted(data) {
        // let payload = {
        //     "Cancel": Cancel,
        //     "SNo": `${SNo}`,
        //     "OrderStatus": `${OrderStatus}`,
        //     "OrderDriver": "Ali",
        //     "OrderData": `${OrderData}`,
        //     "OrderNo": `${OrderNo}`,
        //     "OrderDetails": `${OrderDetails}`,
        //     "OrderRestaurant": `${OrderRestaurant}`,
        // }
        // console.log(payload);
        fetch(`https://dry-coast-84806.herokuapp.com/api/order/${data._id}/${this.state.Drivername}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            // body: JSON.stringify(payload)
        }).then(function (response) {
        }).then(data => this.Get()
        ).catch(error => alert(error));
    }
    render() {
        return (
            <ScrollView>
                <Container>
                    <Content>
                        {this.state.filtered1.map((data, i) => {
                            // console.log(data, " data");
                            return (
                                <Card style={{ flex: 0 }}>
                                    <CardItem>
                                        <Left>
                                            <Body>
                                                <Text>
                                                    DeliveryAddress: {data.DeliveryAddress}
                                                </Text>
                                                <Text>UserId:{data.UserId}</Text>
                                                <Text>
                                                    Order Status: {data.OrderStatus}
                                                </Text>
                                            </Body>
                                        </Left>
                                    </CardItem>
                                    <CardItem>
                                        <Body>
                                            {data.OrderData && data.OrderData.map((d, i) => {
                                                return (
                                                    <Text>Res Name:{d.RestaurantName} - No.Of Items:{d.OrderItems.length} - Cost:{d.Cost}</Text>
                                                )
                                            })}
                                        </Body>
                                    </CardItem>
                                    <CardItem>
                                        <Left>
                                            {this.state.Drivername != data.OrderDriver ?
                                                <Button textStyle={{ color: '#87838B' }} onPress={() => this.Accepted(data)} >
                                                    <Text>Accepted</Text>
                                                    {/* <Icon name="logo-github" /> */}
                                                </Button> : <Text>You have Accepted!</Text>
                                            }
                                            {/* <Button textStyle={{ color: '#87838B' }}> */}
                                            {/* <Text>Delivery Started</Text> */}
                                            {/* </Button> */}
                                        </Left>
                                    </CardItem>
                                </Card>
                            )
                        })}
                    </Content>
                </Container>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});