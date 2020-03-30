import React from 'react';
import './List.css';
import Card from './Card.js'

class ListClass extends React.Component {
    
    render(){
        let column = this.props.data.lists;
        let listArray = column.map((val) => {
            return (
                <div>
                    <section className = "List">
                        <header className = "List-header">
                            <h2>{val.header}</h2>
                        </header>
                    </section>
                    <Card data={{allCards:this.props.data.allCards,cardsList:val.cardIds}}/>
                </div>    
            )
        })
        
        console.log(listArray)
        return(
            <div className="App-list">
                {listArray}
            </div> 
        )  
    }
}

export default ListClass