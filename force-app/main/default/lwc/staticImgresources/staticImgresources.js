import { LightningElement } from 'lwc';
import USER_IMG from '@salesforce/resourceUrl/userimg';
import USER_ST from '@salesforce/resourceUrl/userimgs';

export default class StaticImgresources extends LightningElement {
    userimg = USER_IMG;
    userst = USER_ST;
}
