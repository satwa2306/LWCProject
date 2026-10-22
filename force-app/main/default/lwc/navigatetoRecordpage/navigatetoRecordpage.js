import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class NavigatetoRecordpage extends LightningElement {
    Recordpageview() {
        this[NavigationMixin.navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: '',
                objectApiName: 'Account',
                actionName: 'view'
            }
        });
    }

    Recordpageedit() {
        this[NavigationMixin.navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: '',
                objectApiName: 'Account',
                actionName: 'edit'
            }
        });
    }
}
