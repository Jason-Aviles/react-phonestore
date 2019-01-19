import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../../logo.svg';
import {ButtonContainer} from  '../Button/Button'
import styled from 'styled-components'

class NavBar extends Component {
    render() {
        return (
          <NavWrapper className='navbar navbar-expand-sm  navbar-dark px-sm-5'>
            {/* 
                https://www.iconfinder.com/icons/1243689/call_phone_icon
                Creative Commons (Attribution 3.0 Unported);
                https://www.iconfinder.com/Makoto_msk */}

                {/*<div>Icons made by <a href="https://www.flaticon.com/authors/linh-pham" title="Linh Pham">Linh Pham</a> from <a href="https://www.flaticon.com/" 	
                		    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			
                                title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div> */}
                                
                <Link to='/'>
                      <img src={logo} alt='store' style={{width:'12%'}} className='navbar-brand container-fluid'></img>
                </Link>
                  <ul className='navbar-nav align-items-center'>
                    <li className='nav-item ml-5'>
                        <Link to='/' className='nav-link'>
                            Phones
                        </Link>
                    </li>

                  </ul>
                  <Link to='/cart' className='ml-auto'>
                     <ButtonContainer>
                     <span className='mr-2'></span>
                          <i className='fas fa-cart-plus'></i>
                          my cart
                     </ButtonContainer>
                  </Link>
          </NavWrapper>
        );
    }
}

const NavWrapper = styled.nav `
background:black;
.nav-link{
    color:var(--mainWhite)!important;
    font-size:1.3rem;
    text-transform:capitalize !important;
}

`




export default NavBar;
