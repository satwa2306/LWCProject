import { LightningElement, api } from 'lwc';

export default class P2cAltertComponent extends LightningElement {
    @api message;
    @api title;
    @api isvalid;
    @api number;
}
