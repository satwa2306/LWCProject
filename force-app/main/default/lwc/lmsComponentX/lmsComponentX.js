import { LightningElement, wire } from 'lwc';
import SAMPLEMC from '@salesforce/messageChannel/SampleMessageChannel__c';
import { APPLICATION_SCOPE, MessageContext, subscribe, unsubscribe } from 'lightning/messageService';
export default class LmsComponentX extends LightningElement {
    @wire(MessageContext)
    context;
    receviedMessage;
    subcription;
    connectedCallback() {
        this.subcribeMessage();
    }

    subcribeMessage() {
        this.subcription = subscribe(
            this.context,
            SAMPLEMC,
            (message) => {
                this.handleMessage(message);
            },
            { scope: APPLICATION_SCOPE }
        );
    }

    handleMessage(message) {
        this.receviedMessage = message.lmsData.value ? message.lmsData.value : 'NO MESSAGE RECEVIED';
    }

    handleOnClick() {
        unsubscribe(this.subcription);
        this.subcription = null;
    }
}
