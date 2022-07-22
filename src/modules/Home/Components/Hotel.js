import React from 'react'

const Hotel = () => {
    return (
        <div className="container-fluid col rounded hotel">
            <div className="card hotel-detail" >
                <img className="card-img-top" src="https://picsum.photos/seed/picsum/200/300" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            
        </div>
    )
}

export default Hotel