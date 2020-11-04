import React from 'react'

function Student(props) {
    console.log(props.firstname)
    return (
        <div>
            <h1> Welcome {props.firstname}</h1>
        </div>
    )
}
export default Student
