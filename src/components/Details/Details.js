import React, { Component } from 'react';
import {ProductConsumer} from '../../Context-api'
import {Link} from 'react-router-dom'
import {ButtonContainer} from '../Button/Button'
import {Yellow_btn} from '../Button/Yellow_btn'
class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                { value => {
              const {id ,company,img, info,price,title,inCart} = value.detailProduct;
              return(
                  <div className='container py-5'>
                        {/*title */}
                        <div className='row'>
                        <div className='col-10 mx-auto text-center text-slanted text-blue my-5'>
                            <h1>
                                {title}
                            </h1>
                        </div>
                        </div>
                        {/*end title */}
                        {/* product info*/ }
                        <div className='row'>
                        {/* product image*/ }
                        <div className='col-10 mx-auto col-md-6 my-3 text-capitalize'>
                            <img src={img} className='img-fluid' alt='prodoct' />
                        </div>
                        {/* product text*/ }
                        <div className='col-10 mx-auto col-md-6 my-3 text-capitalize'>
                              <h2> model : {title}</h2>
                              <h4 className='text-title text-uppercase text-muted mt-3 mb-2' >
                              made by : <span className="text-uppercase">{company} </span>  </h4>
                              <h4 className='text-blue'> 
                              <strong>
                                  price : <span>$</span> {price}
                              </strong> </h4>
                              <p className='text-capitalize font-weight-bold mt-3 mb-0'>
                                  some info about the product:
                              </p>
                              <p className='text-muted lead'> {info}</p>
                              {/*Buttons */}
                              <div>
                                  <Link to='/'><ButtonContainer>
                                      back to products</ButtonContainer>
                                  </Link>
                                  <Yellow_btn disabled={inCart?true:false}
                                  onClick={() => {value.addToCart(id)}}>
                                      {inCart ? 'inCart' : 'add to cart'}
                                  </Yellow_btn>
                              </div>
                        </div>

                        </div>
                  </div>
              )
                }}
                
            </ProductConsumer>

        );
    }
}

export default Details;
