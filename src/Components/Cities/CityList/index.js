import React from 'react'
import City from '../City'
import { Text } from 'react-native'
import { Content, H3, CardItem, List, ListItem } from 'native-base'
import { Divider } from 'react-native-material-ui'

function CityList({ citylist, foundCity }) {
    return (
        <Content>
            {citylist ? (
                <List>
                    {foundCity ? (
                        <>
                            <ListItem>
                                <H3>Found a city with your search</H3>
                            </ListItem>
                            <Divider></Divider>
                            <City cityData={foundCity} />
                        </>
                    ) : (
                        <></>
                    )}

                    <CardItem>
                        <H3>Places of interest</H3>
                    </CardItem>
                    <Divider></Divider>

                    {citylist.map((cityElement) => (
                        <City key={cityElement.id} cityData={cityElement} />
                    ))}
                </List>
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
