import React, { Component, PropTypes } from 'react'
import MenuItem from './MenuItem'

class Menu extends Component {
    static propTypes = {

    };

    static contextTypes = {
        lang: PropTypes.object
    }

    render() {
        return (
            <div>
                <h3>{this.context.lang.menu}</h3>
                {this.props.children}
            </div>
        )
    }
}

export { MenuItem }
export default Menu