import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'
import {addComment} from '../AC'

class NewCommentForm extends Component {
    static propTypes = {
    }

    state = {
        text: '',
        user: ''
    }

    handleChange = field => ev => {
        const {value} = ev.target
        if (!validators[field](value)) return

        this.setState({
            [field]: value
        })
    }

    handleSubmit = ev => {
        ev.preventDefault()

        const { addComment, articleId } = this.props
        addComment(articleId, this.state) // ??? Это нормально, что у компонента свой стейт, не пересекающийся со store?

        this.setState({
            user: '',
            text: ''
        })
    }

    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                comment: <input type="text" value={this.state.text} id = "text" onChange = {this.handleChange('text')}/>
                user: <input type="text" value={this.state.user} id = "user" onChange = {this.handleChange('user')}/>
                <input type = "submit"/>
            </form>
        )
    }
}

const validators = {
    text: (text) => text.length < 150,
    user: (text) => text.length < 10
}

// посчитал, что содержимое store здесь не нужно, передал null вместо mapStateToProps
export default connect(null, { addComment })(NewCommentForm)