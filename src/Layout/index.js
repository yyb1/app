import React, { Component,Fragment } from 'react'
import Header from '../components/Header'
import Content from '../components/Content'
import {Zmad} from '../zyframert_zhang'
import Footer from '../components/Footer'

export default class Layout extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: [
                {
                    id: '1',
                    job: 'AliExpress-资深Java开发工程师/专家-无线技术',
                    city: '杭州',
                    time: '9分钟前'
                },
                {
                    id: '2',
                    job: 'AliExpress-广告算法专家-全球化商业智能&用户增长',
                    city: '杭州',
                    time: '5分钟前'
                },
                {
                    id: '3',
                    job: '供应链平台事业部-数据运营专家-杭州',
                    city: '杭州',
                    time: '8分钟前'
                },
                {
                    id: '4',
                    job: '国际化中台-高级产品专家',
                    city: '杭州',
                    time: '5分钟前'
                },
                {
                    id: '5',
                    job: '阿里集团-Global Technical Support Expert',
                    city: '杭州',
                    time: '2分钟前'
                },
                {
                    id: '6',
                    job: '新零售客户服务-高级客户顾问-关键体验保障',
                    city: '杭州',
                    time: '3分钟前'
                },
                {
                    id: '7',
                    job: '供应链平台事业部-C/C++技术专家-杭州',
                    city: '杭州',
                    time: '7分钟前'
                },
                {
                    id: '8',
                    job: 'AliExpress-资深Java开发工程师/专家-无线技术',
                    city: '杭州',
                    time: '6分钟前'
                },
                {
                    id: '9',
                    job: '阿里集团-Global Technical Support Expert',
                    city: '杭州',
                    time: '15分钟前'
                },
                {
                    id: '10',
                    job: '供应链平台事业部-C/C++技术专家-杭州',
                    city: '杭州',
                    time: '5分钟前'
                },

            ]
        }
    }
    render() {
        const data = this.state
        return (
            <Fragment>
                <Header/>
                <Content/>
                <Zmad data={data}/>
                <Footer/>
            </Fragment>
            
        )
    }
}
