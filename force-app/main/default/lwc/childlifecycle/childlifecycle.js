import { LightningElement } from 'lwc';

export default class Childlifecycle extends LightningElement {
    constructor() {
        super();
        console.log('hello from child constructor');
    }

    connectedCallback() {
        console.log('hello from child connectedCallback');
    }

    renderedCallback() {
        console.log('hello from child renderedCallback');
    }
    disconnectedCallback() {
        console.log('hello from parent disconnectedCallback');
    }
}
