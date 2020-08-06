import React from 'react'
import { connect } from 'react-redux'
import City from '../City'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { FahrenheitToCelsius } from '../../Utils/DataConversion'

const styles = StyleSheet.create({
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})

function CityList({ citylist }) {
    console.log('CityList Render')
    console.log(citylist)
    return (
        <View>
            {citylist ? (
                <FlatList
                    data={citylist}
                    renderItem={({ item }) => (
                        <Text style={styles.item}>
                            {item.name}
                            {FahrenheitToCelsius(item.main.temp)} °C
                            {item.weather.description}
                        </Text>
                    )}
                />
            ) : (
                <Text> No Cities were found</Text>
            )}
        </View>
    )
}

CityList.defaultProps = {
    citylist: [],
}

export default CityList
