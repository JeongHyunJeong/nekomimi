// @flow
import React from 'react';
import ReactDom from 'react-dom';
import Heading from './heading';
import '../css/index.css'

export class Render {
    constructor(targetId : string){
        const target = document.getElementById(targetId);
        if (target !== null) {
            this.render(target);
        }
    }

    render(target : HTMLElement){
        ReactDom.render(<Heading name="Nekomimi"/>, target);
    }
}

export default new Render('nekochan');