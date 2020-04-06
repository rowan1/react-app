import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () =>{
    return (
        <div className = "ui container comments">
            <ApprovalCard >
                <CommentDetail author ="Rowan" timeAgo="Today at 4:45PM"/>
            </ApprovalCard>
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
    return(<div className = "ui placeholder segment"></div>);
}

ReactDOM.render(<App />, document.querySelector('#root'));