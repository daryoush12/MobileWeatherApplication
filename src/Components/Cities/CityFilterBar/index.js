import React from 'react'
import { connect } from 'react-redux'
import { Input, Item, Icon } from 'native-base'

function CityFilterBar() {
    return (
        <Item>
            <Icon name="search"></Icon>
            <Input placeholder="search by city.."></Input>
        </Item>
    )
}

export default CityFilterBar
