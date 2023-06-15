import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components';

function Detail(props) {

  useEffect(() => { 
    // 여기적은 것들은 컴포넌트 로드 & 업데이트 마다 실행(함수의 주요기능 빼고 이 함수안에 작성)
    // html렌더링 이후 실행될 코드!!
    console.log('안녕');
  })

  let {id} = useParams();
  let findItem = props.shoes.find((x) => x.id == id);

  return (
    <div>
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