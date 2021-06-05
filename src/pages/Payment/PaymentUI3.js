import React, { Component } from "react";
import './PaymentUI3.css';
import { Button } from "antd";
export default class PaymentUI3 extends Component {
  render() {
    return (
      <div class="container">
        <h3 class="bg-dark p-5 text-center text-white">Thanh toán</h3>
        <div class="nganhang">
        <p>Vui lòng chọn ngân hàng liên kết</p>
        <select>
            <option>Ngân hàng Phương Đông (OCB)</option>
            <option>Ngân hàng Công Thương Việt Nam (ViettinBank)</option>
            <option>Ngân hàng Á Châu (ACB)</option>
            <option>Ngân Hàng TMCP Tiên Phong (TPBank)</option>
        </select>
        <p>Nhập số thẻ: </p>
        <input type="text"></input>
        <p>Nhập tên chủ sở hữu: </p>
        <input type="text"></input>
        <p>Nhập password: </p>
        <input type="text"></input>
        <div id = "btn"><Button type="primary">Xác nhận</Button></div>
        </div>
      </div>
      
    );
  }
}
