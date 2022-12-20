import React from 'react'
import './Image.css'
const Image = ({ children }) => {
    return (
        <div style={{
        marginLeft:"700px",
        marginTop:"80px"
        }}>
            {children}
        </div>
    )
}
export default Image