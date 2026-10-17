import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {
    fullname = 'zero to Hero';
    users = ['john', 'smith', 'peter'];
    title = 'aura';

    @track obj = {
        name: 'satwik',
        city: 'hyderabad',
        zipcode: '500010'
    };

    changeHandler(event) {
        this.title = event.target.value;
    }
    trackHandler(event) {
        this.obj.city = event.target.value;
    }

    num1 = 10;
    num2 = 20;

    get user() {
        /* return this.users[0] */

        return this.num1 * this.num2;
    }
}
