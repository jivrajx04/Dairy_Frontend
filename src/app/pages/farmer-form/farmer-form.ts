import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, MaxValidator, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-farmer-form',
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './farmer-form.html',
  styleUrl: './farmer-form.scss',
})
export class FarmerForm {
  farmerForm: FormGroup;
  pricePerLiter = 40;

  constructor(private fb: FormBuilder){
    this.farmerForm = this.fb.group({
      farmerId: [{value: this.generateFarmerId(), disabled:true}],
      farmerName: ['',Validators.required],
      farmerMobile:['',[Validators.required,Validators.pattern('^[0-9]{10}$'),Validators.minLength(10),Validators.maxLength(10)]],
      address:['',Validators.required],
      date:['',Validators.required],
      milkDispatch:['',[Validators.required,Validators.min(0.1)]],
      totalAmount:[{value:'',disabled:true}]
    });

    this.farmerForm.get('milkDispatch')?.valueChanges.subscribe(value => {
      const total = value * this.pricePerLiter;
      this.farmerForm.get('totalAmount')?.setValue(total || 0);
    });
  }

   generateFarmerId(): number{
      return Math.floor(1000 + Math.random()* 9000);
    }

    onSubmit(){
      console.log(this.farmerForm);
      
    }
}
