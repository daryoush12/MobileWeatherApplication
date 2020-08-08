import React from 'react'
import City from '../City'
import { Text } from 'react-native'
import { Content, Card } from 'native-base'

function CityList({ citylist, navigation }) {
    return (
        <Content>
            {citylist ? (
                <Card>
                    {citylist.map((cityElement) => (
                        <City key={cityElement.id} cityData={cityElement} navigation={navigation} />
                    ))}
                </Card>
            ) : (
                <Text> No Cities were found</Text>
            )}
        </Content>
    )
}

CityList.defaultProps = {
    citylist: [],
}

export default CityList
