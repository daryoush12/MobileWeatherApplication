import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCities } from '../Store/Actions/CityActions'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Container, Header, Left, Body, Right, Title, Content } from 'native-base'
import CityList from '../Components/Cities/CityList'
import CityFilterBar from '../Components/Cities/CityFilterBar'

class CityWeathersView extends Component {
    /*
        Was not aware of the cycle functions deprecating 
        will have to do with this for now:  
    */
    componentWillMount() {
        const { dispatch } = this.props
        dispatch(getCities())
    }

    render() {
        const { weatherData } = this.props
        console.log(weatherData)
        return (
            <Container>
                <Header>
                    <Body>
                        <Title>Weather Application</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <CityFilterBar></CityFilterBar>
                    <CityList
                        citylist={
                            weatherData.filteredData ? weatherData.filteredData : weatherData.list
                        }
                    ></CityList>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

const mapStateToProps = (state) => ({
    weatherData: state.cities,
})

export default connect(mapStateToProps)(CityWeathersView)
