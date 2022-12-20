import React from 'react'

const Bio = ({bio}) => {
    return (
        <div style={{width:"600px",

            marginTop: "-200px",
            marginLeft:"200px"
        }}>
            <h4>Bio: {bio.Bio} </h4>
        </div>
    )
}

export default Bio