import axios from "axios";
import React, { Component } from 'react'

class PostList extends  Component{
    constructor(){
        super()
        this.state={
            ApiData:[]
        }
    }
    Apiget=()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{
            console.log(response);
            this.setState({ApiData:response.data})
        })
    }
    render(){
        let {ApiData}=this.state
        return(
             <div>
             <button  className="button" onClick={this.Apiget()}>button</button>
             <div>{ApiData.map((ApiData)=>{
                 return(
                     <div>
                    {<pre className="data">{JSON.stringify(ApiData,null,3)}</pre>}
                     </div>
                 )
             })}</div>

             </div>
        )
    }
}
export default PostList











// .then((response)=>{
//     console.log(response);
// })                                      
