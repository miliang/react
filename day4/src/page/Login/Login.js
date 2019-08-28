
import React from 'react';

class Login extends React.Component{
    constructor(){
        super()
    }
    setLogin = () => {
        console.log(123)
    //    触发父组件的事件，然后改变状态
        this.props.onSetLogin()
    }
    render(){
        return(
            <div>
                <h1>login页面</h1>
                <button onClick={this.setLogin}>登录</button>
            </div>
        )
    }
}
export default Login;