import React, { Component } from 'react'
import './index.scss'
import { Input } from 'antd';

export default class Content extends Component {
    style1={
        fontSize:' 54px',
        color:' #fff',
        lineHeight:' 56px',
        fontFamily: 'Rufina-Bold'
    }
    style2={
        fontSize:' 54px',
        color:' #fff',
        lineHeight:' 56px',
        fontFamily: 'Rufina-Bold'
    }
    style3={
        fontSize:' 34px',
        marginBottom:'38px',
        color:' #fff',
        lineHeight:' 48px',
        fontFamily: 'Rufina-Bold'
    }
    
    render() {
        return (
            <div className="content">
                <img className="index-img" src="https://img.alicdn.com/tfs/TB14TEEm7CWBuNjy0FaXXXUlXXa-1440-478.png"/>
                <div className="mengban"></div>
                <div className="index-mid-box">
                    <div className="float-mid">
                        <p style={this.style1}>If not now, when?</p>
                        <p style={this.style2}>If not me, who? </p>
                        <p style={this.style3}>此时此刻，非我莫属！</p>
                        <div className="search-box">
                            {/* <span className="search-topic">请输入职位关键词</span> */}
                            <div className="search-m"></div>
                            <input type="text" maxLength="30" placeholder="请输入职位关键词"  className="search-text" />
                            <input type="submit" className="search-btn"/>
                        </div>
                        <div className="hot-text">
                            热门搜索：
                            <a className="search-key">JAVA</a>
                            <a className="search-key">IOS</a>
                            <a className="search-key">数据</a>
                            <a className="search-key">安全</a>
                            <a className="search-key">搜索</a>
                            <a className="search-key">算法</a>
                            <a className="search-key">运营</a>
                            <a className="search-key">视觉</a>
                            <a className="search-key">交互</a>
                            <a className="search-key">前端</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

