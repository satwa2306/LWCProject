import { LightningElement, track } from 'lwc';

export default class Learn1 extends LightningElement {
    role = '';
    value1 = '';
    fullname = 'satwik';
    num1 = 10;
    num2 = 20;
    @track users = ['arin', 'bain', 'cerry', 'siri'];

    changeup(event) {
        this.role = event.target.value;
    }

    onchangeup(event) {
        this.obj.city = event.target.value;
    }

    @track obj = {
        name1: 'satwa',
        rollno: 100,
        city: 'hyderbad'
    };

    onchangeup(event) {
        /* this.obj.city=event.target.value */
        this.obj = { ...this.obj, city: event.target.value };
        /*   this.user[0]=event.target.value */
    }

    get arry() {
        return this.users[0];
    }
    get muktipy() {
        return this.num1 * this.num2;
    }

    onchangeup1(event) {
        this.value1 = event.target.value;
    }

    get value() {
        return this.value1 === 'hello';
    }

    cars = ['hundai', 'audi', 'porche', 'lambo', 'maruthi'];
}
