import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormBuilder, FormGroup, Validators, AbstractControl } from "@angular/forms";

@Component({
  selector: "app-id-form",
  templateUrl: "./id-form.component.html",
  styleUrls: ["./id-form.component.css"]
})
export class IdFormComponent implements OnInit {
  @Output() idEmit = new EventEmitter<string>();
  idForm: FormGroup;
  id: AbstractControl;
  submitted = 0;

  constructor(fb: FormBuilder) {
    this.idForm = fb.group({
      "ID": [null, Validators.required]
    });

    this.id = this.idForm.controls["ID"];
  }

  ngOnInit() {
  }

  onSubmit(value: string): void {
    if (value) {
      this.idEmit.emit(value);
      console.log("you submitted value:", value);
    }
  }
}
