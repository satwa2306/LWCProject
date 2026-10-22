import { LightningElement } from 'lwc';
import LAST_NAME from '@salesforce/schema/Contact.LastName';
import FIRST_NAME from '@salesforce/schema/Contact.FirstName';
import EMAIL from '@salesforce/schema/Contact.Email';
import ACCOUNT_ID from '@salesforce/schema/Contact.AccountId';
import DESCRIP from '@salesforce/schema/Contact.Description';

export default class LightningRecordEditForm extends LightningElement {
    objectapi = 'Contact';
    fields = { LAST_NAME, FIRST_NAME, EMAIL, ACCOUNT_ID, DESCRIP };

    Handleclick() {
        const Inpfields = this.template.querySelectorAll('lightning-input-field');
        if (Inpfields) {
            Array.from(Inpfields).forEach((field) => {
                field.reset();
            });
        }
    }
}
