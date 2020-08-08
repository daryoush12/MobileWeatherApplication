import React from 'react'
import {
    Container,
    Header,
    Left,
    Body,
    Right,
    Title,
    Content,
    Button,
    Icon,
    Text,
    H3,
} from 'native-base'

import { StyleSheet, Image } from 'react-native'
import { Divider } from 'react-native-material-ui'

export default function CityView({ route, navigation }) {
    const { cityDetails } = route.params
    return (
        <Container>
            <Header>
                <Left>
                    <Button transparent onPress={() => navigation.goBack()}>
                        <Icon name="arrow-back" />
                    </Button>
                </Left>
                <Body>
                    <Title>{cityDetails.name}</Title>
                </Body>
                <Right />
            </Header>
            <Content>
                <H3>Main Information</H3>
                <Text>Temperature: {cityDetails.main.temp} °C</Text>
                <Text>Humidity: {cityDetails.main.humidity}</Text>
                <Text>Temperature feel: {cityDetails.main.feels_like} °C</Text>

                <H3>Weather</H3>
                {cityDetails.weather.map((weather) => (
                    <Content key={weather.id}>
                        <Image
                            style={{ width: 50, height: 50 }}
                            source={{
                                uri: 'http://openweathermap.org/img/w/' + weather.icon + '.png',
                            }}
                        />
                        <Text>{weather.description}</Text>
                    </Content>
                ))}
            </Content>
        </Container>
    )
}

const styles = StyleSheet.create({
    tiny: {
        width: 50,
        height: 50,
    },
})
