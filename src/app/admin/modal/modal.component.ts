import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ServerService } from '../server.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() modalTitle = 'Default title';
  @Output() close = new EventEmitter<void>();

  form: FormGroup;
  showWarning = false;

  constructor(
    private serverService: ServerService
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      serial: new FormControl('', Validators.required),
    });
  }

  submit() {
    // console.log('-submit-');
    this.showWarning = !this.form.valid;

    if (this.form.valid) {
      // console.log('Form:', this.form);
      // const formData = {...this.form.value};
      // console.log('Form Data:', formData);

      this.serverService.postSerial(this.form.value.serial).subscribe();

      this.form.reset()
    }
  }

}
