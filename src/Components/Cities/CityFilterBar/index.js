import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Input, Item, Icon } from 'native-base'
import { getCityByName } from '../../../Store/Actions/CityActions'

class CityFilterBar extends Component {
    constructor() {
        super()
        this.handleInput = this.handleInput.bind(this)
    }

    render() {
        return (
            <Item>
                <Icon name="search"></Icon>
                <Input onChangeText={this.handleInput} placeholder="search by city.."></Input>
            </Item>
        )
    }

    handleInput(text) {
        const { dispatch } = this.props
        dispatch(getCityByName(text))
    }
}

export default connect()(CityFilterBar)
