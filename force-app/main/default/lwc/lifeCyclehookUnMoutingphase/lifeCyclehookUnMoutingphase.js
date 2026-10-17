import { LightningElement } from 'lwc';

export default class LifeCyclehookUnMoutingphase extends LightningElement {
    showchild = false;
    handleClick() {
        this.showchild = !this.showchild;
    }

    constructor() {
        super();
        console.log('hello from parent constructor');
    }

    connectedCallback() {
        console.log('hello from parent connectedCallback');

        /*  throw new Error('loading child') */
    }

    renderedCallback() {
        console.log('hello from parent renderedCallback');
    }
    /*     errorCallback(error,stack){

        console.log(error.message)
        console.log(stack)

    } */
}
