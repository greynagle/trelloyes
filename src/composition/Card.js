import React from 'react';
import './Card.css';

class CardClass extends React.Component {
    render(){
        let cardList = this.props.data.cardsList.map(val => {
            return (
                <div className="Card">
                    <button type="button">delete</button>
                    <h3>{this.props.data.allCards[val].title}</h3>
                    <p>{this.props.data.allCards[val].content}</p>
                </div>
            )    
        })

        
        return(
            <div className="List-cards">
                {cardList}
            </div>
        )  
    }
}

export default CardClass;