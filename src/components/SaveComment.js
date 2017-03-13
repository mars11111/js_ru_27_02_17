import React, { Component } from 'react'

class SaveComment extends Component {
    state = {
        user: '',
        text: '',
    }

    render() {
        return (
            <div>
                <form>
                    Enter your name: <input type="text" value={this.state.user} onChange={this.handleChange('user', 10)} />
                    <br/>
                    Enter comment text: <textarea value={this.state.text} onChange={this.handleChange('text', 150)} />
                </form>
            </div>
        )
    }


    handleChange = (property, maxLength) => ev => {
        if (ev.target.value.length > maxLength) {
            //не мутируй DOM - лучше сделай что-то вроде setState({error})
            ev.target.style.color = 'red'
            return
        }

        ev.target.style.color = ''

        const newState = {}
        newState[property] = ev.target.value

        this.setState(newState)
    }
}

export default SaveComment
