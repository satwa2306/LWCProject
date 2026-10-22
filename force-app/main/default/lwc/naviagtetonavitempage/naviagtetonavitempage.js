import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class NavigatetoRecordpage extends LightningElement {
    navitempage() {
        this[NavigationMixin.navigate]({
            type: 'standard__navItemPage',
            attributes: {
                apiName: 'Quiz_App'
            }
        });
    }
}
