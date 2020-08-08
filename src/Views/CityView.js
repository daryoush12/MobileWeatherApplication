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
    Card,
    CardItem,
} from 'native-base'

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
                <Card>
                    <CardItem>
                        <H3>Main Information</H3>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Text>Temperature: {cityDetails.main.temp} °C</Text>
                            <Text>Humidity: {cityDetails.main.humidity}</Text>
                            <Text>Feel: {cityDetails.main.feels_like} °C</Text>
                        </Body>
                    </CardItem>
                    <CardItem>
                        <H3>Weather</H3>
                    </CardItem>
                    {cityDetails.weather.map((weather) => (
                        <CardItem key={weather.id}>
                            <Image
                                style={{ width: 50, height: 50 }}
                                source={{
                                    uri: 'http://openweathermap.org/img/w/' + weather.icon + '.png',
                                }}
                            />
                            <Text>{weather.description}</Text>
                        </CardItem>
                    ))}
                </Card>
            </Content>
        </Container>
    )
}
