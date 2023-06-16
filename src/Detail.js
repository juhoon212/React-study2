import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components';

function Detail(props) {

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

  
  let {id} = useParams();
  let findItem = props.shoes.find((x) => x.id == id);
  let [showYellowBox, setShowYellowBox] = useState(true);
  let [countDown, setCountDown] = useState(6);
  
  useEffect(() => {

    

    setInterval(() => {
      countDown--;
      setCountDown(countDown)
    }, 1000);

    setInterval(() => {
      setShowYellowBox(false)}, 6000);
  })

  

  return (
    <div>
      {
        showYellowBox == true ? <YellowBox>{countDown}초 이내 구매시 할인</YellowBox> : null
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
      </div>
      
    </div>
  )
}
export default Detail;