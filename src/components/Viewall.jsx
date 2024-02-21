import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import axios from 'axios';

const Viewall = () => {
    const [Shoppingdata, changeData] = useState([])
    const fetchData=()=>{
        axios.get("https://fakestoreapi.com/products").then(
           (response) =>{
            changeData(response.data)
           }
           )
 }
 useEffect( () =>{fetchData()},[])

    return (
        <div>
            <Nav/>
            <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        {Shoppingdata.map((value,index)=>{
                         return (
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3 d-flex allign-items-stretch">
                            <div class="card">
                                <img src={value.image} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">{value.price}</h5>
                                    <p class="card-text">{value.description}</p>
                                    <p class="card-text">{value.category}</p>
                                    <a href="#" class="btn btn-primary">Buy NOW</a>
                                </div>
                            </div>
                        </div>
                        )
                        }

                    )
}







                    </div>
                </div>
            </div>
        </div>

        </div>

    )
}



export default Viewall