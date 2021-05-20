import React, { useState } from 'react'
import {userLogin} from '../../setting/config'
import '../../assets/scss/Layout/login.scss'


export default function Login(props) {


    let accounts = [{
        taiKhoan: "user",
        matKhau: "user123",
        loaiNguoiDung: "user"
    }, 
    {
        taiKhoan: "admin",
        matKhau: "admin123",
        loaiNguoiDung: "admin"
    },
    {
        taiKhoan: "clerk",
        matKhau: "clerk123",
        loaiNguoiDung: "clerk"
    },
    {
        taiKhoan: "chef",
        matKhau: "chef123",
        loaiNguoiDung: "chef"
    },
    ]

    let [state, setState] = useState({
        values: {
            taiKhoan: '',
            matKhau: '',
        }
    });

    const handleChange = (event) => {
        let { name, value } = event.target;
        const newValues = { ...state.values, [name]: value };
        //Gọi set lại state của hook
        setState(
            {
                values: newValues,
            })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let index = accounts.findIndex(account => state.values.taiKhoan === account.taiKhoan && state.values.matKhau === account.matKhau)
        if(index != -1) {
            localStorage.setItem(userLogin, JSON.stringify(state.values.taiKhoan))
            alert("login success");
            if(accounts[index].loaiNguoiDung == "user") {
                props.history.push('/')
            }
            else if (accounts[index].loaiNguoiDung == "admin") {
                props.history.push('/admin')
            }
            else if (accounts[index].loaiNguoiDung == "clerk") {
                props.history.push('/clerk')
            }
            else if (accounts[index].loaiNguoiDung == "chef") {
                props.history.push('/chef')
            }   
        }
        else {
            alert("wrong info");
        }
    }

    const customer = () => {
        props.history.push('/customer')
    }

    return (
        <div className="login">
            <header>Welcome Back</header>
            <form onSubmit={handleSubmit}>
                <div className="input-field">
                    <input name="taiKhoan" type="text" required onChange={handleChange}/>
                    <label>Email or Username</label>
                </div>
                <div className="input-field">
                    <input name="matKhau" className="pswrd" type="password" required onChange={handleChange}/>
                    <span className="show">SHOW</span>
                    <label>Password</label>
                </div>
                <div className="button">
                    <div className="inner">
                    </div>
                    <button>LOGIN</button>
                </div>
            </form>
            <div>
                <div className="button">
                    <div className="inner">
                    </div>
                    <button onClick={customer}>CUSTOMER</button>
                </div>
            </div>
            <div className="signup">
                Not a member? <a href="#">Signup now</a>
            </div>
        </div>
    )
}
