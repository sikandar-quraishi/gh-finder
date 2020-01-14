import React from 'react'
import PropTypes from 'prop-types';


const ReposItem = ({repo}) => {
    return (
        <div className='card' >
            <h1>
                <a href={repo.html_url} >{repo.name}</a>
            </h1>
            
        </div>
    )
}


ReposItem.prototype = {
    repo: PropTypes.object.isRequired
}

export default ReposItem
