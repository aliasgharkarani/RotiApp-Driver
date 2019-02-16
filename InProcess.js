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
export default class InProcessOrders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // checking: this.props.navigation.state.params.ordered1,
            filtered1: []
        }
        this.Get = this.Get.bind(this);
        this.Accepted = this.Accepted.bind(this);
    }
    UNSAFE_componentWillMount() {
        this.Get();
    }
    Get() {
        fetch(`https://dry-coast-84806.herokuapp.com/api/orders/DeliveryStarted`, {
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
        //     "OrderStatus": "Delivered",
        //     "OrderData": `${OrderData}`,
        //     "OrderNo": `${OrderNo}`,
        //     "OrderDetails": `${OrderDetails}`,
        //     "OrderRestaurant": `${OrderRestaurant}`
        // }
        fetch(`https://dry-coast-84806.herokuapp.com/api/orders/${data._id}/Delivered`, {
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
                            return (
                                <Card style={{ flex: 0 }}>
                                    <CardItem>
                                        <Left>
                                            <Body>
                                                <Text>
                                                    Order Driver: {data.OrderDriver}
                                                </Text>
                                                <Text>
                                                    Order Status: {data.OrderStatus}
                                                </Text>
                                            </Body>
                                        </Left>
                                    </CardItem>
                                    <CardItem>
                                        <Body>
                                            {data.OrderItems && data.OrderItems.map((d, i) => {
                                                return (
                                                    <Text>Name:{d.name} - Quantity:{d.quantity} - Price:{d.price}</Text>
                                                )
                                            })}
                                        </Body>
                                    </CardItem>
                                    <CardItem>
                                        <Left>
                                            <Button textStyle={{ color: '#87838B' }} onPress={() => this.Accepted(data)} >
                                                <Text>Delivered</Text>
                                                {/* <Icon name="logo-github" /> */}
                                            </Button>
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
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});