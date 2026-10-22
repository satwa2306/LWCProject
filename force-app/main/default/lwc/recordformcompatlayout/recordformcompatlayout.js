import { LightningElement, api } from 'lwc';
import ACCOUNT from '@salesforce/schema/Account';
import ACCOUNT_NAME from '@salesforce/schema/Account.Name';
import ACCOUNT_REVENUE from '@salesforce/schema/Account.AnnualRevenue';
import ACCOUNT_TYPE from '@salesforce/schema/Account.Type';
import ACCOUNT_INDUSTRY from '@salesforce/schema/Account.Industry';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class Recordformcompatlayout extends LightningElement {
    @api objectApiName;
    @api recordId;
    Object = ACCOUNT;
    fieldslist = [ACCOUNT_NAME, ACCOUNT_REVENUE, ACCOUNT_TYPE, ACCOUNT_INDUSTRY];

    successhandler(event) {
        console.log('record ID + ', event.detail.id);

        const ToastEvent = new ShowToastEvent({
            title: 'Account Created',
            message: 'Record ID ' + event.detail.id,
            variant: 'success'
        });
        this.dispatchEvent(ToastEvent);
    }
}
