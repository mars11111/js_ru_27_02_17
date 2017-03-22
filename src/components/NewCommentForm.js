import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'
import {addComment} from '../AC'

class NewCommentForm extends Component {
    static propTypes = {
    }

    state = {
        text: '',
        user: '',
        disableSubmit: true
    }

    handleChange = field => ev => {
        const {value} = ev.target
        if (!validators[field](value)) return

        const disableSubmit = value.length === 0 // чтобы было

        this.setState({
            [field]: value,
            disableSubmit: disableSubmit
        })


    }

    handleSubmit = ev => {
        ev.preventDefault()

        const { addComment, articleId } = this.props
        addComment(articleId, { user: this.state.user, text: this.state.text }) // ??? Это нормально, что у компонента свой стейт, не пересекающийся со store?
        //да, абсолютно
        this.setState({
            user: '',
            text: '',
            disableSubmit: true
        })
    }

    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                comment: <input type="text" value={this.state.text} id = "text" onChange = {this.handleChange('text')}/>
                user: <input type="text" value={this.state.user} id = "user" onChange = {this.handleChange('user')}/>
                <input type = "submit" disabled={this.state.disableSubmit} />
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
