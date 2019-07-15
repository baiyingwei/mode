import React from 'react';
export default function Home(props){
    const toDetail = () => {
        console.log(props)
        props.history.push('detail')
    }
    return (
        <div onClick={toDetail}>首页啦啦啦啦啦所看见的刷卡积分的肌肤</div>
    )
}