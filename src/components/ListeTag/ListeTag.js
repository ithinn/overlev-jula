import React from "react";

class ListeTag extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    //Array med listeitems
    listUtListeTags() {
        let listeItems = ["Første", "andre", "tredje"];  
        listeItems.forEach((el, i) => {
            console.log(el);
            return (
                <div>
                    <input type="checkbox" id={el.i} />
                    <label for={el.i}>{el}</label>
                </div>
            );
        })  
    }
    
    render() {
        console.log(this.listUtListeTags);
        return (
        <div id="tagDiv">{this.listUtListeTags}</div>
        )
    }

}

export default ListeTag;