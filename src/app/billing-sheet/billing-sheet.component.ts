import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { BillingSheet } from "./billing-sheet.model"

@Component({
  selector: 'app-billing-sheet',
  templateUrl: './billing-sheet.component.html',
  styleUrls: ['./billing-sheet.component.css']
})

export class BillingSheetComponent implements OnInit {

  billingForm: FormGroup;

  ngOnInit() {
    this.billingForm = new FormGroup({
      'csvPath': new FormControl(null, {
        validators: [Validators.required]
      }),
      'templateUrl': new FormControl(null, {
        validators: [Validators.required]
      }),
      'outputFile': new FormControl(null, {
        validators: [Validators.required]
      })
    });
  }

  onProcessBilling() {
    if(this.billingForm.invalid) {
      return;
    }
    const billing: BillingSheet = {
      csvFilePath: this.billingForm.value.csvPath,
      templateUrl: this.billingForm.value.templateUrl,
      outputFile: this.billingForm.value.outputFile
    }
    alert('Billing Processed');
  }
}
