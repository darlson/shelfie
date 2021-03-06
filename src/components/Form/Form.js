import React, {Component} from 'react'

export default class Form extends Component {
    constructor () {
        super()
        this.state = {
            inventory: [],
            name: '',
            price: '',
            img : ''
        }
    }

    handleChange(e) {
        const {name, value} = e.target
        this.setState({ [name]: value })
    }
    clearFields(e) {
        this.setState({
            name: '',
            price: '',
            img: ''
        })
    }

    render () {
        return (
            <div>
                <input name='name' placeholder='Name' onChange={e => this.handleChange(e)} />
                <input name='price' placeholder='Price' onChange={e => this.handleChange(e)} />
                <input name='img' placeholder='Image URL' onChange={e => this.handleChange(e)} />
                <button onClick={e => this.clearFields(e)} >Cancel</button>
                <button>Add to Inventory</button>
            </div>
        )
    }
}