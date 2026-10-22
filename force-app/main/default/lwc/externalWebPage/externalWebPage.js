import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class ExternalWebPage extends NavigationMixin(LightningElement) {
    ExternalWebPage() {
        this[NavigationMixin.navigate]({
            type: 'standard__webPage',
            attributes: {
                Url: 'https://www.google.com'
            }
        });
    }
}
