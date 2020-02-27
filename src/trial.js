

import React, { Component } from 'react'

 class trial extends Component {
    constructor(props){
        super(props);
        this.state={name:""}
    }

    setName=(e) =>{
        this.setState({name:e.target.value});

    }

    handleSubmit=(e)=>{
        e.preventDefault();
        alert("Hello am your dear host" +this.state.name)
    }




    render() {
        return (
            <div>
                <h1>Name</h1>
                <form>
                    <input type="text" name="name" 
                    value={this.state.name}
                    onChange={this.setState.name} />
                    <button type="submit">
                        Submit name
                    </button>

                </form>
                
            </div>
        )
    }
}

export default trial
