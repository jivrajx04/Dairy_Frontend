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
  farmerForm!: FormGroup;
  pricePerLiter = 40;

  constructor(private fb: FormBuilder){
    this.farmerForm = this.fb.group({
      farmerId: [{value: this.generateFarmerId(), disabled:true}],
      farmerName: ['',Validators.required],
      farmerMobile:['',[Validators.required,Validators.pattern('^[0-9]{10}$'),Validators.minLength(10),Validators.maxLength(10)]],
      address:['',Validators.required],
      date: [new Date().toISOString().slice(0, 10), Validators.required],
      milkDispatch:['',[Validators.required,Validators.min(0.1)]],
      totalAmount:[{value:'',disabled:true}]
    });

    this.farmerForm.get('milkDispatch')?.valueChanges.subscribe(value => {
      const total = value * this.pricePerLiter;
      this.farmerForm.get('totalAmount')?.setValue(total || 0);
    });
  }

   generateFarmerId(){
      return Math.floor(1000 + Math.random()* 9000);
    }

    onSubmit():void{
      if(this.farmerForm.valid){
        console.log('Farmer Form submitted',this.farmerForm.value);
        alert('Farmer Details Saved For : '+this.farmerForm.get('farmerName')?.value);
        this.resetForm();
      }else{
        this.farmerForm.markAllAsTouched();
      alert("fill in all required fields correctly");
      }
    }

    resetForm(): void{
    this.farmerForm.reset({
    farmerId: this.generateFarmerId(),
    date: new Date().toISOString().slice(0, 10),
    milkDispatch: '',
    totalAmount: 0,
  });
  this.farmerForm.get('farmerId')?.disable();
  this.farmerForm.get('totalAmount')?.disable();
}
}
