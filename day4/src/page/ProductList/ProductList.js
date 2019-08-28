import React from 'react';
import {Link} from 'react-router-dom'
import iceCream from '../../images/iceCream.png'
import cookie from '../../images/cookie.png'
import loveCup from '../../images/loveCup.png'
import dessert from '../../images/dessert.png'


class ProductList extends React.Component{
    constructor(){
        super()
        this.state = {
            data:[
                {id:1,src:"require('../../images/iceCream.png')",name:"冰淇淋",time:"刚上架"},
                {id:2,src:"require('../../images/iceCream.png')",name:"小饼干",time:"三天前"},
                {id:3,src:"require('../../images/iceCream.png')",name:"情侣杯",time:"刚上架"},
                {id:4,src:"require('../../images/iceCream.png')",name:"曲奇",time:"三天前"}
            ]
        }
    }
    render(){
        return(
            <div>
                <h1>product页面</h1>
                {this.state.data.map((item,index)=>{
                    return(
                    <div key={item.id}>
                        <Link to={
                            {pathname:"/Detail",query:{
                            id:item.id,name:item.name
                            }}}>
                            <div>
                                {/*<img src={require('../../images/iceCream.png')} alt="" />*/}
                                <img src={dessert} alt=""/>
                                <img src={item.src} alt=""/>
                            </div>
                            <h1>商品名称：{item.name}</h1>
                        </Link>
                        <h2>上架时间:{item.time}</h2>
                    </div>)
            })}
            </div>
        )
    }
}
export default ProductList;