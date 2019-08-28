import React from 'react';
import './commentItem.css';

class CommentItem extends React.Component{
    render(){
        console.log(this.props);
        return(
            <div className="myItem">
                <h2>我是Item</h2>
                <h3>评论人：{this.props.authod}</h3>
                <h4>评论时间：{this.props.date}</h4>
                <p>评论内容：{this.props.children}</p>
            </div>
        )

    }
}
export default CommentItem;
