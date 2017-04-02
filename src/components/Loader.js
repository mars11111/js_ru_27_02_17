import React, { PropTypes } from 'react'

function Loader(props, context) {
    return (
        <h2>{context.lang.loading}...</h2>
    )
}

Loader.propTypes = {
}

Loader.contextTypes = {
    user: PropTypes.string,
    lang: PropTypes.object
}

export default Loader