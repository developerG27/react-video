import React, {PureComponent} from 'react';
import PropTypes from 'prop-types'; //Importo il validatore delle proprietà
import './media.css';


//Componente delle cards
class Media extends PureComponent{
  state = {
    author: 'Gian Pumayalla'
  }

  //la funzione che parte al click di media
  handleClick = (event) => {
    this.props.openModal(this.props); //apre il modale
  } 

  render(){
    return(
    <div className="Media" onClick={this.handleClick /*al click fai partire la funzione handleClick*/} >
        <div className="Media-cover">
          <img 
            src={this.props.cover}
            alt=""
            width={240}
            height={160}
            className="Media-image"
          />
          <h3 className="Media-title">{this.props.title}</h3>
          <p className="Media-author">{this.props.author}</p>
        </div>
      </div>
    )
  }
}


// Validazione del tipo di proprietà: string, number, object, func, array, bool, symbol
Media.propTypes = {
  cover: PropTypes.string, //stringa
  title: PropTypes.string.isRequired, //stringa.obbigatoria
  author: PropTypes.string, //stringa
  type: PropTypes.oneOf(['video','audio']), //una dei due: video o audio
}

export default Media; //esporto componente Media