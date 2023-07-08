import React from 'react'
import img1 from './img1.jpeg'
function CardLeft() {
  return ( 
    <div className='container-fluid'>
        <div className="card mb-3" style={{"max-width" :" 540px;"}}>
  <div className="row g-0">
    <div className="col-sm-4">
      <img src={img1} className="img-fluid rounded-start cardleftsize my-2 mx-3" alt="..." />
    </div>
    <div className="col-md-6 mx-4">
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default CardLeft