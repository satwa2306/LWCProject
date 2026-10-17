import { LightningElement, api } from 'lwc';

export default class SetterChild extends LightningElement {
    Userdetail;

    @api get detail() {
        return this.Userdetail;
    }

    set detail(data) {
        let Amount = data.amount * 2;
        this.Userdetail = { ...data, amount: Amount, location: 'india' };
    }
}
