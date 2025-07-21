import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-form',
  imports: [NgIf,ReactiveFormsModule],
  templateUrl: './customer-form.html',
  styleUrl: './customer-form.scss'
})
export class CustomerForm {
customerForm! : FormGroup;
private pricePerLiter: number = 40;
private previousOutstanding : number = 240;

constructor(private fb: FormBuilder){
  this.customerForm= this.fb.group({
    customerId: [{ value: this.generateCustomerId(), disabled: true }], // Read-only
      customerName: ['', Validators.required],
      customerMobileNo: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      customerAddress: ['', Validators.required],
      customerLocation: ['', Validators.required],
      date: [new Date().toISOString().slice(0, 10), Validators.required], // Default to current date
      milkDemand: ['', [Validators.required, Validators.min(0.1)]], // Min 0.1 liters
      todaysOutstanding: [{ value: 0, disabled: true }], // Read-only
      overallOutstanding: [{ value: 0, disabled: true }] // Read-only
  });
}
  ngOnInit():void{
    this.customerForm.get('milkDemand')?.valueChanges.subscribe(value => {
        this.calculateOutstanding(value);
    });
  }

  private generateCustomerId(): number {
    return Math.floor(1000 + Math.random()* 9000);
  }

  private calculateOutstanding(milkDemand: number):void{
    const todaysAmt = (milkDemand * this. pricePerLiter);
    const overallAmt = todaysAmt + this.previousOutstanding;

    this.customerForm.patchValue({
      todaysOutstanding: todaysAmt.toFixed(2),
      overallOutstanding: overallAmt.toFixed(2)
    })
  }

 

onSubmit():void{
  if(this.customerForm.valid){
    console.log('Customer Form SUbmitted.',this.customerForm.value);
    alert('customer details has been saved for :'+ this.customerForm.get('customerName')?.value);
    this.resetForm();
  }
  else{
    this.customerForm.markAllAsTouched();
    alert("fill in all required fields correctly");
  }
}

resetForm(): void{
  this.customerForm.reset({
    customerId: this.generateCustomerId(),
    date: new Date().toISOString().slice(0, 10),
    milkDemand: '',
    todaysOutstanding: 0,
    overallOutstanding: 0
  });
  this.customerForm.get('customerId')?.disable();
  this.customerForm.get('todaysOutstanding')?.disable();
  this.customerForm.get('overallOutstanding')?.disable();
}

}
