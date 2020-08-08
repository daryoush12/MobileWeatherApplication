import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCities } from '../Store/Actions/CityActions'
import { Container, Header, Body, Right, Title, Content } from 'native-base'
import CityList from '../Components/Cities/CityList'
import CityFilterBar from '../Components/Cities/CityFilterBar'

class CityWeathersView extends Component {
    /*
        Was not aware of the cycle functions deprecating 
        will have to do with this for now:  
    */
    UNSAFE_componentWillMount() {
        const { dispatch } = this.props
        dispatch(getCities())
    }

    render() {
        const { weatherData } = this.props
        const { navigation } = this.props
        return (
            <Container>
                <Header>
                    <Body>
                        <Title>Weather Application</Title>
                    </Body>

                    <Right></Right>
                </Header>
                <CityFilterBar></CityFilterBar>
                <Content>
                    <CityList
                        foundCity={weatherData.foundCity}
                        citylist={weatherData.data ? weatherData.data.list : undefined}
                    ></CityList>
                </Content>
            </Container>
        )
    }
}

const mapStateToProps = (state) => ({
    weatherData: state.cities,
})

export default connect(mapStateToProps)(CityWeathersView)
