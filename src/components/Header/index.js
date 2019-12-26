import React, { Component } from 'react'
import './index.scss'

export default class Header extends Component {
    render() {
        return (
            <div className="Header">
                <div className="menu">
                    <img src='https://img.alicdn.com/tfs/TB1Zv8_lxSYBuNjSspjXXX73VXa-390-63.png' alt="Logo"/>
                    <i className="Head-i">|</i>
                    <i className="sheZ">社招官网</i>
                    <a className="active">首&nbsp;&nbsp;页</a>
                    <a>社会招聘</a>
                    <a>校园招聘</a>
                    <a>了解阿里</a>
                    <a>个人中心</a>
                    <div className="login">
                        欢迎来到阿里巴巴集团招聘! &nbsp;
                        <a>登录</a>
                        |
                        <a>注册</a>
                    </div>
                </div>
            </div>
        )
    }
}
