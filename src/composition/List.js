import React from 'react';
import './List.css';
import Card from './Card.js'

class ListClass extends React.Component {
    
    render(){
        let column = this.props.children.lists;
        let listArray = column.reduce((cur,val) => {
            return cur +=
                <div>
                    <section className = "List">
                        <header className = "List-header">
                            <h2>{val.header}</h2>
                        </header>
                    </section>
                    <Card>{{allCards:this.props.children.allCards,cardsList:val.cardIds}}</Card>            
                </div>    
        },'')
        
        console.log(listArray)
        return(
            <div className="App-list">
                {listArray}
            </div> 
        )  
    }
}

export default ListClass