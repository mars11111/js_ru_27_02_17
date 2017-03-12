import React, {PropTypes, Component} from 'react'

export default (CustomComponent) => class DecoratedComponent extends React.Component {
    state = {
        openId: null
    }

    toggleOpen = openId => ev => {
        this.setState({
            openId
        })
    }

    render() {
        return <CustomComponent {...this.props} {...this.state} toggleOpen={this.toggleOpen} />
    }
}