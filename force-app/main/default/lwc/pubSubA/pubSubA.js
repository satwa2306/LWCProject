import { LightningElement } from 'lwc';
import pubsub from 'c/pubsub';
export default class PubSubA extends LightningElement {
    msg;
    handlechnage(event) {
        this.msg = event.target.value;
    }

    publishE() {
        pubsub.publish('COMPONENTA', this.msg);
    }
}
