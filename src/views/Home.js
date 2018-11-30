import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Toast, Button, Text, Card, Form, Input, Item } from 'native-base';
import * as Expo from 'expo';
import { FontAwesome } from '@expo/vector-icons';
import User from '../components/Users';


class Home extends Component {


    static navigationOptions = {
        title: 'Home',


    }


    constructor(props) {
        super(props);


        this.state = {
            loading: true
        }

        console.disableYellowBox = true;

    }




    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
        });

        this.setState({ loading: false });
    }




    render() {


        if (this.state.loading) {
            return <Expo.AppLoading />;
        }


        return (
            <Container>
                <User props={this.props} title="Home" />

               <Text>Hola desde home</Text>

            </Container>
        );
    }
    

}




export default Home;