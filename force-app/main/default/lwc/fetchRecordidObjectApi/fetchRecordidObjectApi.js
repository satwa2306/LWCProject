import { LightningElement, api } from 'lwc';

export default class FetchRecordidObjectApi extends LightningElement {
    @api recordId;
    @api objectApiName;
}
