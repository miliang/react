import React from 'react';
import Login from '../../page/Login/Login'

class Shopping extends React.Component{
    constructor(){
        super()
        this.state = {
            isLogin:false
        }
    }
    //修改状态的方法
    changeLogin=()=>{
        this.state = {
            isLogin:true
        }
    }
    render(){
        //在这一步做判断，如果登陆了就去购物车页面，如果没有就去登录页面
        return(
            <div>
                {this.state.isLogin?(<h1>shopping页面</h1>):(<Login onSetLogin={this.changeLogin}/>)}
            </div>
        )
    }
}
export default Shopping;