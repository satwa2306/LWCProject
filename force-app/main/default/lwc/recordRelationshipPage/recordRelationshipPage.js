import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class RecordRelationshipPage extends LightningElement {
    recordrelationshippage() {
        this[NavigationMixin.navigate]({
            type: 'standard__recordRelationshipPage',
            attributes: {
                recordId: '',
                objectApiName: 'Account',
                relationshipApiName: 'Contacts',
                actionName: 'view'
            }
        });
    }
}
