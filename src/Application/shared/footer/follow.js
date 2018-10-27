
import React from 'react';

import FontAwesome from 'react-fontawesome';

import Translate from '../../containers/translate';

import {Dude} from '../../Components/dude';

export class Follow extends React.Component{
    render(){
        return (
            <div className="footer-follow">
                <div className="footer-follow-item">
                    <a href="#">
                        <FontAwesome
                            name="linkedin"/>
                    </a>
                </div>
                <div className="footer-follow-item">
                    <a href="#">
                        <FontAwesome
                            name="facebook"/>
                    </a>
                </div>
                <div className="footer-follow-item">
                    <a href="#">
                        <FontAwesome
                            name="instagram"/>
                    </a>
                </div>
                <div className="footer-follow-item">
                    <a href="#">
                        <FontAwesome
                            name="twitter"/>
                    </a>
                </div>
                <div className="footer-follow-divider">
                    <Dude />
                </div>
                <div className="footer-follow-text">
                    <b>
                        <Translate>
                            follow us
                        </Translate>
                    </b>
                </div>
            </div>
        )
    }
}