import React, {Component} from 'react';
import InputPanel from './InputPanel'

class InfoPanel extends Component {

    constructor(props) {
        super(props);

        let api_key = 'RGAPI-019f31fb-b8e3-4b10-ad3e-a5777abf93ce';

        this.state = {
            key: api_key,
        }
    }

    fetchData = (inputValue, serverValue) => {
        fetch(`https://cors-anywhere.herokuapp.com/https://${serverValue}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${inputValue}?api_key=${this.state.key}`)
        .then(function(response) {
            return response.json();
      })
        .then(function(myJson) {
            console.log(JSON.stringify(myJson));
      });
    }

    render() {
        return(
            <InputPanel setPlayerName={this.fetchData}/>
        );
    }
    
}

export default InfoPanel;