import React, { Component } from "react";
import axios from "axios";
// import { response } from "express";
class Post extends Component{
    constructor(props){
        super(props)
        this.state={
            userId:'',
            title:'',
            body:''
        }
    }
    changeHander=(e)=>{
         this.setState({[e.target.name]:e.target.value})
    }
    submitHandler=(e)=>{
        e.preventDefault()
            console.log(this.state);
            axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
            .then(response=>{
                console.log(response);
            }).catch(error=>{
                console.log(error);
            })

    }
    render(){
        const{userId,title,body}=this.state
        return(
            <div>
            <form onSubmit={this.submitHandler}>
            <div>
            <input type='text' name='userId' value={userId} onChange={this.changeHander}/>
            </div>
            <div>
            <input type='text' name='title' value={title}  onChange={this.changeHander}/>
            </div>
            <div>
            <input type='text' name='body' value={body} onChange={this.changeHander}/>
            </div>
            <button type="submit">Sumbit</button>
            </form>
            </div>
        )
    }
}
export default Post