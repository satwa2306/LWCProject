import { LightningElement } from 'lwc';

export default class ConditionalRendering extends LightningElement {
    con = false;
    word = '';

    handleClick() {
        this.con = true;
    }
    checkHandler(event) {
        this.word = event.target.value;
    }
    get hellomethod() {
        return this.word === 'hello';
    }
}
