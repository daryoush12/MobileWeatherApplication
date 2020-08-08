import React from 'react'
import { CardItem, Text, Right, Button, ListItem, Body, Left } from 'native-base'
import { StyleSheet, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function City({ cityData }) {
    const navigation = useNavigation()
    return (
        <ListItem>
            <Left>
                {cityData.weather[0] ? (
                    <Image
                        style={{ width: 50, height: 50 }}
                        source={{
                            uri:
                                'http://openweathermap.org/img/w/' +
                                cityData.weather[0].icon +
                                '.png',
                        }}
                    />
                ) : (
                    <></>
                )}
                <Text style={styles.cityTitle}>{cityData.name}</Text>
            </Left>
            <Body></Body>
            <Button
                transparent
                onPress={() => navigation.navigate('CityView', { cityDetails: cityData })}
            >
                <Text>View</Text>
            </Button>
        </ListItem>
    )
}

const styles = StyleSheet.create({
    cityTitle: {
        fontSize: 20,
        width: 150,
    },
    weatherIcon: {
        width: 50,
        height: 50,
    },
})
