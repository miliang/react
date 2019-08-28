import React from 'react';
import './commentList.css';
import Item from './../commentItem/commentItem'

// let ItemArray = [{id:1,authod:"张三",content:"我打江南走过，那等在季节里的容颜如莲花的开落",data:"三天前"},
//     {id:2,authod:"李四",content:"轻轻的我来了正如我轻轻地走，我挥一挥衣袖不带走一片云彩",data:"三天前"},
//     {id:3,authod:"王五",content:"君当作磐石妾当作蒲苇",data:"三天前"},
//     {id:4,authod:"赵六",content:"浔阳江头夜送客，枫叶荻花秋瑟瑟。",data:"三天前"},
// ]
class  CommentList extends React.Component{
    //定义一个方法 ，从服务器获得数据
    // constructor(){
    //     super()
    // }
    // getInitialState 作用于组件的实例，在实例创建时调用一次，
    // 用于初始化每个实例的state，此时可以访问this.props
    getInitialState(){
        this.getData();
    }
    getData(){
        console.log('向服务器发起请求');
    }
    render(){
        let list = this.props.data.map((item)=>{
            return(<Item key={item.id} date={item.date} authod={item.authod}>{item.content}</Item>)
        })
        return(
            <div className="myList">
                <h2>我是List</h2>
                {list}
            </div>
        )
    }
}
export default CommentList;

