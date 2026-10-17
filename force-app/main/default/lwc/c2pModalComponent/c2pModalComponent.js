import { LightningElement } from 'lwc';

export default class C2pModalComponent extends LightningElement {
    closehandler() {
        const myevent = new CustomEvent('close', {
            bubbles: true,
            detail: {
                msg: 'hellofromeventcustom'
            }
        });

        this.dispatchEvent(myevent);
    }
    footerevent() {
        console.log('footer called');
    }
}
