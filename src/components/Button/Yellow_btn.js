import styled from 'styled-components'



export const  Yellowbtn = styled.button ` 
text-transform:capitalize;
font-size:1.4rem;
background: transparent;
border:0.05rem solid gold;
color: gold;
border-radius:0.5rem;
padding: 0.2rem 0.5rem;
cursor:pointer;
margin:0.2rem 0.5rem 0.2rem 0;
transition:all 0.5s linear;
&:hover{
    background:yellow;
    color:#FFBD33;
}
&:focus {
    outline:none
}`