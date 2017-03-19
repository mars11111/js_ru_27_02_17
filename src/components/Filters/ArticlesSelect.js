import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'
import Select from 'react-select'
import {setIds} from '../../AC/index'

import 'react-select/dist/react-select.css'

class SelectFilter extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    handleChange = selected => {
        this.props.setIds(selected)
    }

    render() {
        const { selected, articles } = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return <Select
            options={options}
            value={selected}
            multi={true}
            onChange={this.handleChange}
        />
    }
}

const mapStateToProps = state => {
    return {
        selected: state.ids,
        articles: state.articles
    }
}

export default connect(mapStateToProps, { setIds })(SelectFilter)