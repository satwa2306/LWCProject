import { LightningElement } from 'lwc';

export default class C2pParentcomponent extends LightningElement {
    showmodal = false;
    msg;

    handlebutton() {
        this.showmodal = true;
    }

    clickedevent(event) {
        this.msg = event.detail.msg;
        this.showmodal = false;
    }
}
