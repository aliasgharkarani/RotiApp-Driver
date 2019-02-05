import React from "react";
import { View, Text, Button } from "react-native";
// import { Drawer } from 'native-base';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Main from './Main'
import NewOrders from './NewOrder'
import InProcessOrders from './InProcess'
import CompletedOrders from './Delivered'
// import SignUp from './SignUp'
// import AddProduct from './AddProduct'
// import ViewProduct from './ViewProduct'
// import Orders from './Orders'
// import EditProduct from './EditProduct'
// import SideBar from './SideBar';
class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // restaurantName: this.props.navigation.state.params.resName
    }
  }
  // closeDrawer = () => {
  //   this.drawer._root.close()
  // };
  // openDrawer = () => {
  //   this.drawer._root.open()
  // };
  render() {
    return (
      // <Drawer
      //   navigation={this.props.navigation}
      //   ref={(ref) => { this.drawer = ref; }}
      //   content={<SideBar navigator={this.navigator} navigation={this.props.navigation} onclose={this.closeDrawer} />}
      //   panOpenMask={50}
      //   onClose={() => this.closeDrawer()} >
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>ABC</Text>
        {/* <Text style={{ fontSize: 27, fontWeight: "bold" }} onPress={this.openDrawer}>Open Drawer</Text>
          <Text style={{ fontSize: 27, fontWeight: "bold" }} onPress={() => this.props.navigation.navigate('AddProduct')}>Add Product</Text>
          <Text style={{ fontSize: 27, fontWeight: "bold" }} onPress={() => this.props.navigation.navigate('ViewProduct')}>View Product</Text>
          <Text style={{ fontSize: 27, fontWeight: "bold" }} onPress={() => this.props.navigation.navigate('Orders')}>View Orders</Text> */}
      </View>
      // </Drawer>
    );
  }
}
const AppNavigator = createStackNavigator({
  Main: {
    screen: Main,
    navigationOptions: {
      header: null,
    }
  },
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      header: null,
    }
  },
  NewOrders: {
    screen: NewOrders,
    navigationOptions: {
      header: null,
    }
  },
  InProcessOrders: {
    screen: InProcessOrders,
    navigationOptions: {
      header: null,
    }
  },
  CompletedOrders: {
    screen: CompletedOrders,
    navigationOptions: {
      header: null,
    }
  }
});

export default createAppContainer(AppNavigator);