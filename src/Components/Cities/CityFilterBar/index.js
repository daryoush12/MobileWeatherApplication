import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Input, Item, Icon, Button, Text } from 'native-base'
import { getCityByName } from '../../../Store/Actions/CityActions'

class CityFilterBar extends Component {
    constructor() {
        super()
        this.handleInput = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            searchValue: '',
        }
    }

    render() {
        return (
            <Item>
                <Icon name="search"></Icon>
                <Input
                    onChangeText={this.handleInput}
                    value={this.state.searchValue}
                    placeholder="search by city or country.."
                ></Input>
                <Button transparent onPress={this.handleSubmit}>
                    <Text>Search</Text>
                </Button>
            </Item>
        )
    }

    handleInput(text) {
        this.setState({ searchValue: text })
    }

    handleSubmit() {
        const { dispatch } = this.props
        dispatch(getCityByName(this.state.searchValue))
    }
}

export default connect()(CityFilterBar)
