import React from 'react'
import { CardItem, Text, Icon, Right, Button } from 'native-base'
import { StyleSheet, Image } from 'react-native'

export default function City({ cityData, navigation }) {
    return (
        <CardItem>
            <Text style={styles.itemTitle}>{cityData.name}</Text>

            <Right>
                <Button
                    transparent
                    onPress={() => navigation.navigate('CityView', { cityDetails: cityData })}
                >
                    <Icon name="arrow-forward" />
                </Button>
            </Right>
        </CardItem>
    )
}

const styles = StyleSheet.create({
    itemTitle: {
        fontSize: 20,
        width: 150,
    },
    weatherIcon: {
        width: 50,
        height: 50,
    },
})
