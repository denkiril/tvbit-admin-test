import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() modalTitle = 'Default title';
  @Output() close = new EventEmitter<void>();

  form: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      serial: new FormControl('', Validators.required),
    });
  }

  submit() {
    console.log('-submit-');
    if (this.form.valid) {
      console.log('Form:', this.form);
      const formData = {...this.form.value}
  
      console.log('Form Data:', formData);

      this.form.reset()
    }
  }

}
