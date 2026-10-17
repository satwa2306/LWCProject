import { LightningElement } from 'lwc';

export default class LifeCyclehookMoutingphase extends LightningElement {
    constructor() {
        super();
        console.log('hello from parent constructor');
    }

    connectedCallback() {
        console.log('hello from parent connectedCallback');
    }

    renderedCallback() {
        console.log('hello from parent renderedCallback');
    }
    name;
    hey(event) {
        this.name = event.target.value;
    }
}
