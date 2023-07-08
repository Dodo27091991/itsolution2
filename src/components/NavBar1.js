import React from 'react'
//import { Link } from 'react-router-dom'
export default function NavBar1(props) {
  return ( 
    <div className=' fixed-top mynavbarstickey'>
        <div className={`card mynavbarstickey bg-${props.mode}`}>
  <div className={`card-body mynavbarstickey container  `}>
    <div className='container mynavbarstickey'>
      <div className='row'>
        <div className='col sm-3'><h3 className={`text-${props.mode==="dark"?"light":"dark"}`}>DODO IT Solution.</h3></div>
        <div className='col sm-6'><strong className={`text-${props.mode==="dark"?"light":"dark"}`}>Looking for a better IT partner. Contact us...</strong></div>
        <div className='col sm-3'><p className={`text-${props.mode==="dark"?"light":"dark"}`}>asdasdasdf </p></div>
      </div>
      </div>
    
      <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>





        
  <div className="container-fluid">
    <a className={`navbar-brand mx-3 text-${props.mode==="dark"?"light":"dark"}`} href="/">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className={`nav-link mx-3 text-${props.mode==="dark"?"light":"dark"}`}  aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link mx-3 text-${props.mode==="dark"?"light":"dark"}`} href="/about">About us</a>
        </li>
        
        <li className="nav-item">
          <a className={`nav-link mx-3 text-${props.mode==="dark"?"light":"dark"}`} href='/projects'>Projects</a>
        </li>

        <li className="nav-item">
          <a className={`nav-link mx-3 text-${props.mode==="dark"?"light":"dark"}`} href='/'>Colloboration</a>
        </li>

        <li className="nav-item">
          <a className={`nav-link mx-3 text-${props.mode==="dark"?"light":"dark"}`} href='/'>Carrier</a>
        </li>

        <li className="nav-item">
          <a className={`nav-link mx-3 text-${props.mode==="dark"?"light":"dark"}`} href='/'>Contact us</a>
        </li>
      </ul>
    </div>
  </div>


  <div className="form-check form-switch">
  <input className="form-check-input" onChange={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
  <label className={`form-check-label text-${props.mode==="dark"?"light":"dark"}`} for="flexSwitchCheckDefault" >Enable Dark Mode</label>
</div>


</nav>




  </div>
</div>



    </div>
  )
}
