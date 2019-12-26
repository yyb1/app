import React, { Component } from 'react'
import './index.scss'
export default class Zmad extends Component {
    

    pic={
        marginTop:"20px"
    }
    picsiaze={
        width:'260px'
    }

    listItem = data => {
        return data.map((item, index) => (
            (
                <p key={index}>
                    {item.job}
                    <span className="sp2">
                        {item.time}
                    </span>
                    <span className="sp1">
                        {item.city}
                    </span>

                </p>
            )
        ))
    }

    render() {

        const { data } = this.props.data && this.props.data
        
        return (
            <div className="newPosition-content">
                <div className="div1">
                    <div className="tab">
                        最新职位
                   <a>更多</a>
                    </div>
                    <div className="div2">
                        {this.listItem(data)}
                    </div>
                </div>
                <div className="div3">
                    <a className="show-pic">
                        <img className="aliy" src="https://img.alicdn.com/tfs/TB1SbxarYj1gK0jSZFOXXc7GpXa-2546-848.png"/>
                    </a>
                    <a className="show-pic" style={this.pic}>
                        <img className="aliy" src="https://img.alicdn.com/tfs/TB18tFCCH2pK1RjSZFsXXaNlXXa-240-34.svg" style={this.picsiaze}/>
                    </a>
                </div>
            </div>
        )
    }
}
