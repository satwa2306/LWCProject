import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class NavigateToHome_Chatter extends LightningElement {
    NavigatetoHome() {
        this[NavigationMixin.navigate]({
            type: 'standard__namedPage',
            attributes: {
                pageName: 'home'
            }
        });
    }
    NavigatetoChatter() {
        this[NavigationMixin.navigate]({
            type: 'satndard__namedPage',
            attributes: {
                pageName: 'Chatter'
            }
        });
    }
}
