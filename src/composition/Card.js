import React from 'react';
import './Card.css';

class CardClass extends React.Component {
    render(){
        let cardList = this.props.children.cardsList.reduce((cur, val) => {
            console.log(val)
            console.log(this.props.children.allCards[val].id)
            return cur += 
                <div className="Card">
                    <button type="button">delete</button>
                    <h3>{this.props.children.allCards[val].title}</h3>
                    <p>{this.props.children.allCards[val].content}</p>
                </div>
        },'')

        console.log(cardList)
        return(
            <div className="List-cards">
                {cardList}
            </div>
        )  
    }
}

export default CardClass;