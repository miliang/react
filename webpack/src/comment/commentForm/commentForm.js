import React from 'react';
import './commentForm.css';
//day1代码
class CommentForm extends React.Component{
    addObj(x){
    //    现在获取表单内容
        console.log('执行add函数');
        //refs 就是下面的ref
        console.log(this.refs.authodName.value);
        console.log(this.refs.content.value);
    //    需要组装对象
        let newComment = {
            id:new Date().toLocaleDateString(),
            authod:this.refs.authodName.value,
            content:this.refs.content.value,
            date:new Date().toLocaleDateString()
        }
    //    执行box父组件的自定义事件
        this.props.onUpdate(newComment)
        //console.log(this.props.onUpDate(newComment))
    }
    render(){
        return(
        <div>
            <h2>评论表单</h2>
            <label>内容</label>
            {/* ref 给从 render 返回的东西分配 ref 属性*/}
            <textarea ref="content" type="myText" cols="30" rows="10"></textarea>
            <label>评论人</label>
            <input ref="authodName" type="text"/>
            <button onClick={this.addObj.bind(this)}>提交</button>
        </div>
        )
    }
}
export default CommentForm;
// import React from 'react'
// import './commentForm.css'
////day2代码
// class CommentForm extends React.Component{
//
//
//     addObj(x){
//         // 现在获取表单内容
//         console.log('执行add函数')
//         console.log(this.refs.authodName.value)
//         console.log(this.refs.content.value)
//         // 需要组装对象
//         let newComment = {
//             id:new Date().toLocaleTimeString(),
//             author:this.refs.authodName.value,
//             content:this.refs.content.value,
//             date:new Date().toLocaleTimeString()
//         }
//         // 执行box父组件的自定义事件
//         this.props.onUpdate(newComment)
//         // console.log(this.props.onUpDate(newComment))
//     }
//     render(){
//         return(
//             <div>
//                 <h2>评论表单</h2>
//                 <label >内容</label>
//                 <textarea ref="content" name="mytext" cols="30" rows="10"></textarea>
//                 <label>评论人</label>
//                 <input ref="authodName" type="text"/>
//                 <button onClick={this.addObj.bind(this)}>提交</button>
//             </div>
//         )
//     }
// }
// export default CommentForm