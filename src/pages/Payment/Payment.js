import React, { Component } from 'react'
import { Button } from 'antd';
export default class Payment extends Component {
   
    constructor(props){
        super(props);
        this.state = {
            mangSanPham: [
                {maSP:1,tenSP:'Beef steak',gia:200000,ghichu: 'none',},
                {maSP:2,tenSP:'Salad',gia:50000,ghichu:'none'},
                {maSP:3,tenSP:'Cocacola',gia:20000,ghichu:'none'},
            ]
        }
    }
    tinhTongTien = ()=>
    {
        let totalPrice = 0;
        let j = 0;
        for(j=0;j<this.state.mangSanPham.length;j++)
        {
            totalPrice = totalPrice + parseInt(this.state.mangSanPham[j].gia);
        }
        console.log(totalPrice);
        return totalPrice;
    }
    

    renderSanPham = () =>
    {
        let contentTable = [];
        for(let i=0;i<this.state.mangSanPham.length;i++)
        {
            const sanPham = this.state.mangSanPham[i];
            contentTable.push(<tr><td>{sanPham.maSP}</td><td>{sanPham.tenSP}</td><td>{sanPham.gia}đ</td><td>{sanPham.ghichu}</td></tr>);
        }
        return contentTable;

    }
    render() {
    
        return (
            <div className="container">
                <h3 class="bg-dark p-5 text-center text-white">Danh sách món ăn đã đặt</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Mã món ăn</th>
                            <th>Tên món ăn</th>
                            <th>Giá</th>
                            <th>Ghi chú</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderSanPham()}
                    </tbody>
                </table>
                <Button type="primary">Thanh toán</Button>
         
            </div>
        )
    }
}
