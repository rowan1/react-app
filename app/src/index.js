import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const AppFunction = () =>{

    return (
        <div className = "ui container comments">
            <Segment>
            <ApprovalCard >
                <CommentDetail author ="Rowan" timeAgo="Today at 4:45PM"/>
            </ApprovalCard>
            </Segment>
            
            <ApprovalCard >
                <CommentDetail author ="Dalia" timeAgo="Today at 2:00PM"/>
            </ApprovalCard>
            <ApprovalCard >
                <CommentDetail author ="Yousef" timeAgo="Today at 4:00AM"/>
            </ApprovalCard>
        </div>
    );
}

const Segment = (props) =>{
    return(<div className = "ui placeholder segment">
        {props.children}
    </div>);
}

class App extends React.Component {
    // constructor(props){
    //     super(props);

    //     this.state = {
    //         lat:null,
    //         errorMessage: ''
    //     }
    // }
    state = { lat: null, errorMessage: ''}

    componentDidMount(){
        console.log("The component was rendered")
        window.navigator.geolocation.getCurrentPosition(
            (position)=> this.setState({lat: position.coords.latitude}), 
            (err)=>this.setState({errorMessage: err.message})
        );
    }

    componentDidUpdate(){
        console.log("My component was just updated - it rerendered")
    }
    
    render(){
        if(this.state.errorMessage && !this.state.lat){
            return (
                <div>
                    Error: {this.state.errorMessage}
                </div>
                );
        }
        if(!this.state.errorMessage && this.state.lat){
            return (
                <div>
                    Latitued: {this.state.lat} 
                </div>
                );
        }else{
            return(
                <div>
                    Loading! 
                </div>
            )
        }
        
    }
}
ReactDOM.render(<App />, document.querySelector('#root'));