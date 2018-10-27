
import React from 'react';

import {Follow} from './follow';
import {Hello} from './hello';

class Footer extends React.Component{
    render(){
        return (
            <footer className="footer" id="footer">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 col-12 footer-content">
                            <Follow />
                            <Hello />
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;