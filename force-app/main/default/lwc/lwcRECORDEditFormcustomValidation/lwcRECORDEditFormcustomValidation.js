import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class LwcRECORDEditFormcustomValidation extends LightningElement {
    inputValue = '';

    handleChange(event) {
        this.inputValue = event.target.value;
    }

    handleSubmit(event) {
        event.preventDefault();

        const inputCmp = this.template.querySelector('lightning-input');
        const value = inputCmp.value;

        if (!value || !value.includes('Australia')) {
            inputCmp.setCustomValidity("The account name must include 'Australia'.");
            inputCmp.reportValidity();
            return;
        }

        inputCmp.setCustomValidity('');
        inputCmp.reportValidity();

        const fields = event.detail.fields;
        fields.Name = value;

        this.template.querySelector('lightning-record-edit-form').submit(fields);
    }

    handleSuccess(event) {
        this.showToast('Success', 'Account saved successfully! ' + event.detail.id, 'success');

        console.log('Saved Account ID:', event.detail.id);
    }

    handleError(event) {
        this.showToast('Error', event.detail.message || 'Unable to save the account.', 'error');
    }

    showToast(title, message, variant) {
        const toastEvent = new ShowToastEvent({
            title: title,
            message: message,
            variant: variant
        });

        this.dispatchEvent(toastEvent);
    }
}
