import { LightningElement } from 'lwc';
import USER_ID from '@salesforce/user/Id';
import USER_GUEST from '@salesforce/user/isGuest';

export default class CurrentUserdetails extends LightningElement {
    userid = USER_ID;
    userguest = USER_GUEST;
}
