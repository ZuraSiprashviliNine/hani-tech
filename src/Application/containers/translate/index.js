
import React from 'react';
import {connect} from 'react-redux';

class Translate extends React.Component{
    constructor(props){
        super(props);

        this.TranslateWord = this.TranslateWord.bind(this);
        this.Divide = this.Divide.bind(this);
        this.Check = this.Check.bind(this);
    }

    Check(word = this.props.children){
        return this.props.Language.keywords[word] !== undefined;
    }

    TranslateWord(word = this.props.children){
        return this.Check(word) ? this.props.Language.keywords[word][
            this.props.Language.languages.indexOf(this.props.Language.active)
        ] : word;
    }

    Divide(_){
        let result = [];
        let _data = this.props.children.split(this.props.divider);
        _data.map(data => {
            result.push(_(data));
        });
        return result.join(' ');
    }
    
    render(){
        return this.props.divider ? 
            this.Divide(this.TranslateWord) : 
            this.Check() ? this.TranslateWord() : this.props.children;
    }
}

const States = state => {
    return {
        Language: state.Language
    }
};

const Actions = dispatch => {
    return {
    }
};

export default connect(States, Actions)(Translate);