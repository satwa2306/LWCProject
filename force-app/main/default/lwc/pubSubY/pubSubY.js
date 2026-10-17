import { LightningElement } from 'lwc';
import pubsub from 'c/pubsub';

export default class PubSubY extends LightningElement {
    message;
    connectedCallback() {
        this.pusblish();
    }

    pusblish() {
        pubsub.subscribe('COMPONENTA', (msg) => {
            this.message = msg;
        });
    }
}
