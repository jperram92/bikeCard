// selector.js
import { LightningElement, wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import Id from '@salesforce/user/Id';
import NAME_FIELD from '@salesforce/schema/User.Name';

const fields = [NAME_FIELD];

export default class Selector extends LightningElement {
  selectedProductId;
  
  handleProductSelected(evt) {
    this.selectedProductId = evt.detail;
  }

  // Fetch current user's ID
  userId = Id;

  // Wire service to get user record
  @wire(getRecord, { recordId: '$userId', fields })
  user;

  // Getter to get the user's name
  get name() {
    return getFieldValue(this.user.data, NAME_FIELD);
  }
}