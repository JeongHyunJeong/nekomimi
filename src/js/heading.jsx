// @flow
import React from 'react'
import '../css/heading.css'

// props
type Props = {
    name : string
}

const Heading = (props : Props) => {
    const { name } = props;
    return <h2 className="styles.text">{`Hello ${name} world`}</h2>
}

export default Heading;