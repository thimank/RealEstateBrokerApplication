import React from 'react'

function CustomerSlider() {
  return(
  <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">  
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img className="d-block w-100 h" src="\img\search.jpg" alt="First slide" />
          <div className="carousel-caption d-md-block">
            <h1>Search your Dream Place</h1>
            <p>Search your dream place based on the category you like</p>
          </div>
      </div>
      <div className="carousel-item">
        <img className="d-block w-100" src="\img\real-estate-broker.jpg" alt="Second slide" />
          <div className="carousel-caption d-md-block">
            <h1>Search your Dream Place</h1>
            <p>Search your dream place based on the category you like</p>
          </div>
      </div>
      <div className="carousel-item">
        <img className="d-block w-100" src="\img\real-estate-broker.jpg" alt="Third slide" />
          <div className="carousel-caption d-md-block">
            <h1>Search your Dream Place</h1>
            <p>Search your dream place based on the category you like</p>
          </div>
      </div>
    </div>
  <a className="carousel-control-prev"  role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next"  role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
  )
}

export default CustomerSlider
