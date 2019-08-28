import React from 'react';
import './commentBox.css';
import List from './../commentList/commentList';
import CommentForm from './../commentForm/commentForm';

class  CommentBox extends React.Component{
    constructor(){
        super()
        this.state = {
            data:[
                {id:1,authod:"张三",content:"我打江南走过，那等在季节里的容颜如莲花的开落",date:"三天前"},
                {id:2,authod:"李四",content:"轻轻的我来了正如我轻轻地走，我挥一挥衣袖不带走一片云彩",date:"三天前"},
                {id:3,authod:"王五",content:"君当作磐石妾当作蒲苇",date:"三天前"},
                {id:4,authod:"赵六",content:"浔阳江头夜送客，枫叶荻花秋瑟瑟。",date:"三天前"},
            ]
        }
    }
    myUpdate(obj){
        console.log(obj);
        let currentData = this.state.data;
        currentData.push(obj);
        this.setState({
            data:currentData
        })
    }
    render(){
        //box组件需要list组件和form组件
        return(
            <div className="myBox">
                <div>
                    <h1>评论</h1>
                </div>
                <CommentForm onUpdate={this.myUpdate.bind(this)}/>
                <List data={this.state.data}/>
            </div>
        )
    }
}
export default CommentBox;
