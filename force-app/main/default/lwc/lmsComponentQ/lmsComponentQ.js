import { LightningElement, wire } from 'lwc';
import SAMPLEMC from '@salesforce/messageChannel/SampleMessageChannel__c';
import { MessageContext, publish } from 'lightning/messageService';
export default class LmsComponentQ extends LightningElement {
    @wire(MessageContext)
    context;

    input;

    handleOnChange(event) {
        this.input = event.target.value;
    }

    publishmessage() {
        const message = {
            lmsData: {
                value: this.input
            }
        };

        publish(this.context, SAMPLEMC, message);
    }
}
