import React from 'react';

class Detail extends React.Component{
    constructor(){
        super()
    }
    render(){
        console.log(this.props);
        return(
            <div>
                <h1>Detail</h1>
                <h2>这是{this.props.location.query.id}号商品</h2>
                <h2>这是{this.props.location.query.name}商品</h2>
                <h2>这是{this.props.location.query.src}商品</h2>
            </div>
        )
    }
}
export default Detail;