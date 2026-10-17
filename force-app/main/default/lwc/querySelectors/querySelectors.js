import { LightningElement } from 'lwc';

export default class QuerySelectors extends LightningElement {
    usernames = ['satwa', 'satwik', 'chintu', 'vinay'];

    fetchdetails() {
        const elem = this.template.querySelector('h1');
        elem.style.border = '1px solid red';
        console.log(elem.innerText);
        console.log(elem);

        const username = this.template.querySelectorAll('.hey');

        Array.from(username).forEach((item) => {
            this.setAttribute('title', item.innerText);
            console.log(item.innerText);
        });

        const elem1 = this.template.querySelector('.lwcdom');
        elem1.innerHTML = '<p>hello form inner html LWC DOM</p>';
    }
}
