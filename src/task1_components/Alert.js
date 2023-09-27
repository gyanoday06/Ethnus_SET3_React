import React from 'react'

function Alert(props) {
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible`}>
        <a href="/" className="close" data-dismiss="alert" aria-label="close">&times;</a>
        <strong>{props.alert.text}</strong>
    </div>
  )
}

export default Alert