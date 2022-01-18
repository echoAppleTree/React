import React from 'react';
import ReactDOM from 'react-dom';
import ApprovalCard from './ApprovalCard';
import CommentDetail from './CommentDetail';
import faker from 'faker';

const App = ()=> {
    return (
        <div className='ui container comments'>
            <ApprovalCard>
                <CommentDetail 
                    author="David" 
                    timeAgo="Today at 6:00PM" 
                    content="Gougou vient ici!" 
                    avatar={faker.image.image()}
                />
            </ApprovalCard> 
            <ApprovalCard>
                <CommentDetail 
                    author="Sabrina" 
                    timeAgo="Today at 6:55PM" 
                    content="On mange!" 
                    avatar={faker.image.image()}
                />
            </ApprovalCard> 
            <ApprovalCard>
                <CommentDetail 
                    author="Gougou" 
                    timeAgo="Today at 7:55PM" 
                    content="Qui veut jouer à la cachette?" 
                    avatar={faker.image.image()}
                />
            </ApprovalCard> 
        </div>            
    );
};

ReactDOM.render(
  <App />,
  document.getElementById('root')  
);