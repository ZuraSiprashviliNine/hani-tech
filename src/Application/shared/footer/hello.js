
import React from 'react';

import Translate from '../../containers/translate';

import {Dude} from '../../Components/dude';

export class Hello extends React.Component{
    render(){
        return (
            <div className="footer-hello">
                <div className="footer-hello-text bulled">
                    <Translate>
                        say hello
                    </Translate>
                </div>
                <div className="footer-hello-divider">
                    <Dude />
                </div>
                <div className="footer-hello-text">
                    <b>
                        <Translate>
                            contact@hani.tech
                        </Translate>
                    </b>
                </div>
            </div>
        )
    }
}