import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components';
import {Nav, TabContent} from 'react-bootstrap'
import './App.css';
import { flushSync } from "react-dom";

function Detail(props) {

  let [tab, setTab] = useState(0);

  let Box = styled.div `
    padding : 20px;
    color : grey;
  `;

  let YellowBox = styled.div `
    background: yellow;
    padding : 10px;
    position : absolute;
    left : 100px;
    top : 100px;
  `

  let YellowBtn = styled.button`
    background : yellow;
    color : black;
    padding : 10px;
  `;

  // let [num, setNum] = useState('');



  
  let {id} = useParams();
  let findItem = props.shoes.find((x) => x.id == id);
  let [showYellowBox, setShowYellowBox] = useState(true);
  let [countDown, setCountDown] = useState(6);
  
  useEffect(() => { // 오래걸리는 반복연산, 서버에서 데이터가져오는 작업 , 
                    //  타이머 (html 렌더링 된 이후에 실행될 것들)

   let timer = setTimeout(() => {
      setShowYellowBox(false)
    }, 6000)

    let timer2 = setInterval(() => {
      countDown--;
      setCountDown(countDown);
    }, 1000);

    return () => {
      clearTimeout(timer2);
    }
  },[countDown])

  // useEffect(() => {
  //   if(isNaN(num) == true) {
  //     alert('그러지마세요');
  //   }
  // }, [num]);
  return (
    <div>
      {
        showYellowBox == true ? <YellowBox className="alert alert-warning">{countDown}초 이내 구매시 할인</YellowBox> : null
      }
      <div className="container">
        <div className="row">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        </div>
      </div>
      <div className="col-md-6 mt-4">
        <h4 className="pt-5">{findItem.title}</h4>
        <p>{findItem.content}</p>
        <p>{findItem.price}원</p>
        <button className="btn btn-danger">주문하기</button>
        {/* <input onChange={(e) => {setNum(e.target.value)}}></input> */}
      </div>

      <Nav variant="tabs"  defaultActiveKey="link0">
    <Nav.Item>
      <Nav.Link onClick={() => {setTab(0)}} eventKey="link0">버튼0</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link onClick={() => {setTab(1)}} eventKey="link1">버튼1</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link onClick={() => {setTab(2)}} eventKey="link2">버튼2</Nav.Link>
    </Nav.Item>
    </Nav>
      <TabItem tab={tab}></TabItem>
    </div>
  )
}


function TabItem(props) {

  let [fade, setFade] = useState('');

  useEffect(() => {
    flushSync(() => {setFade('end')})    
  })

  return (
    <div className={'start' + fade}>
     {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][props.tab]}
    </div>

    
  ) 

}

export default Detail;