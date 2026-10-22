import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import { encodedDefaultFieldValues } from 'lightning/pageReferenceUtils';
import FirstName from '@salesforce/schema/Contact.FirstName';
import LastName from '@salesforce/schema/Contact.LastName';
export default class NavigateToObjectPage extends LightningElement {
    NewRecord() {
        this[NavigationMixin.navigate]({
            type: 'standard__ObjectPage',
            attributes: {
                objectApiName: 'Contact',
                actionName: 'new'
            }
        });
    }

    navigatedefaultFieldValues() {
        const defaultFieldvalue = encodedDefaultFieldValues({
            FirstName: 'satwa',
            LastName: 'SS'
        });
        this[NavigationMixin.navigate]({
            type: 'standard__ObjectPage',
            attributes: {
                objectApiName: 'Contact',
                actionName: 'new'
            },
            state: {
                defaultFieldvalues: defaultFieldvalue
            }
        });
    }

    navigatetolist() {
        this[NavigationMixin.navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Contact',
                actionName: 'list'
            },
            state: {
                filter: 'Recent'
            }
        });
    }

    navigatetofiles() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',

            attributes: {
                objectApiName: 'ContentDocument',
                actionName: 'home'
            }
        });
    }
}
