import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import Title from '@salesforce/schema/Contact.Title';

export default class ToastEvent extends LightningElement {
    handleOnClick() {
        let toast = new ShowToastEvent({
            Title: 'Success',
            message: 'Success',
            variant: 'success'
        });
        this.this.dispatchEvent(toast);
    }
}
