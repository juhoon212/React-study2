import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Navbar, Container, Nav} from 'react-bootstrap'
import data from './data.js';
import { useState } from 'react';
import Detail from './Detail.js'
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components';




function App() {

  let [shoes, setShoes] = useState(data);
  let [clickButton, setClickButton] = useState(1);
  let [showButton, setShowButton] = useState(true);


  
  

  return (
    <div className='App'>

      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={
          <>
           <div>
           <div className="main-bg"></div>
         </div>
         <div className="container">
           <div className="row">
             {
               shoes.map((a, i) => {
                 return(
                   <Item shoes={shoes[i]} i={i+1} />
                 )
               })
             }
           </div>

           <Link to="/detail">상세정보</Link>
           <div>
            {
              showButton == true ? <button onClick={() => {
            
                if(clickButton == 1) {
                  axios.get('https://codingapple1.github.io/shop/data2.json').then((result) => {
                  let copy = [...shoes, ...result.data];
                  setShoes(copy);
                  clickButton++;
                setClickButton(clickButton);
                  
                }).catch(() => {
                    alert('실패함');
                })
                } else if(clickButton == 2) {
                  axios.get('https://codingapple1.github.io/shop/data3.json').then((result) => {
                    let copy = [...shoes, ...result.data];
                    setShoes(copy);
                    setShowButton(false);
                  })
                } 

               }}>더 보기</button> : null
            }
           </div>
           
         </div>
         </>
        }/>
        <Route path='/detail/:id' element={<Detail shoes={shoes}/>}></Route>

      <Route path='/about' element={<About/>}>
        <Route path='member' element={<div>멤버들</div>}/>
        <Route path='location' element={<div>회사위치</div>}/>
      </Route>

      <Route path='/event' element={<Event/>}>
        <Route path='one' element={<div>첫 주문 시 양배추즙 서비스</div>}/>
        <Route path='two' element={<div>생일기념 쿠폰받기</div>}/>
      </Route>

      </Routes>

      





      
     
    </div>

    
  );

  // <img src={process.env.PUBLIC_URL + '/logo192.png'} />  
  //  => public폴더 파일 배포할때 권장되는 방식
}

    function Item(props) {
      return(
        <div className="col-md-4">
          <img src={`https://codingapple1.github.io/shop/shoes${props.i}.jpg`} width="80%" />
          <h4>{props.shoes.title}</h4>
          <p>{props.shoes.price}</p>
        </div>
      )
    }

export default App;

    function About() {
      return(
        <div>
          <h4>about페이지임</h4>
          <Outlet></Outlet>
        </div>
      )
    }

    function Event() {
      
      return(
        <div>
          <h2 id='event'>오늘의 이벤트</h2>
          <Outlet />
        </div>
      ) 
    }
    
