import React from 'react'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <a className="navbar-brand" href="./#/task1">{props.title}</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="./">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./">{props.about}</a>
            </li>
          </ul>
        </div>
        <div className={`custom-control custom-switch text-${props.mode === 'light'? 'dark' : 'light'}`}>
            <input type="checkbox" className="custom-control-input" id="customSwitches" onClick={props.toggleMode} />
            <label className="custom-control-label" htmlFor="customSwitches">Enable {props.mode === 'light'? 'dark' : 'light'} Mode</label>
        </div>
      </nav>
      
  )
}