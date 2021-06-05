import React, { Component } from "react";
import { Button } from "antd";
import './paymentUI2.css'
export default class PaymentUI2 extends Component {
  render() {
    return (
      <div id="payment2"class="container">
           <h3 class="bg-dark p-5 text-center text-white">
         Thanh toán
        </h3>
        <p>Chọn phương thức thanh toán</p>
        <input type="radio" name="thanhtoan"/>
        <span>Thanh toán bằng tiền mặt</span>
        <br/>
        <input type="radio" name="thanhtoan"/>
        <span>Thanh toán bằng thẻ ngân hàng</span>
        <div id = "btn"><Button type="primary">Xác nhận</Button></div>
      </div>
    );
  }
}
