import React from 'react'
import City from '../City'
import { Text } from 'react-native'
import { Content, Card, H3, CardItem } from 'native-base'
import { Divider } from 'react-native-material-ui'

function CityList({ citylist, foundCity, navigation }) {
    return (
        <Content>
            {citylist ? (
                <Card>
                    {foundCity ? (
                        <>
                            <CardItem>
                                <H3>Found a city with your search</H3>
                            </CardItem>
                            <Divider></Divider>
                            <City cityData={foundCity} navigation={navigation} />
                        </>
                    ) : (
                        <></>
                    )}

                    <CardItem>
                        <H3>Places of interest</H3>
                    </CardItem>
                    <Divider></Divider>

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
    foundCity: null,
}

export default CityList
