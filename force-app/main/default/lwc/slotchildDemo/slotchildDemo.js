import { LightningElement } from 'lwc';

export default class SlotchildDemo extends LightningElement {
    handlechange() {
        let tem = this.template.querySelector('.slds-card__footer');

        if (tem) {
            tem.classList.remove('slds-hide');
        }
    }
}
