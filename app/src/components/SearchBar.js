import React from "react";

class SearchBar extends React.Component{
    state = { term: ''};

    onInputchange(event){
        console.log(event.target.value);
    }

    onInputclick(event){
        console.log('Input was clicked');
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }
render(){
    return(
        <div className = "ui segment">
            <form 
            onSubmit={(event)=> this.onFormSubmit(event) }
            className = "ui form"
            >
                <div className = "field">
                    <label>Image search</label>
                    <input 
                        type = "text" 
                        value = {this.state.term}
                        // onClick={(event)=> console.log(event.target.value)} 
                        onChange = {(event)=> this.setState({term: event.target.value})}
                    />
                </div>
            </form>      
        </div>
    );
    }
}
export default SearchBar;