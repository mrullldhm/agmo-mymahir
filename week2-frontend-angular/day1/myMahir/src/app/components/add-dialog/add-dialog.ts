import { Component, OnInit } from '@angular/core';
import { SharedModules } from '../../shared/shared.modules';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-dialog',
  imports: [...SharedModules],
  templateUrl: './add-dialog.html',
  styleUrl: './add-dialog.scss',
})
export class AddDialog implements OnInit {
  todoForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private dialogRef: MatDialogRef<AddDialog>) {}

  ngOnInit(): void {
    this.todoForm = this.formBuilder.group({
      title: '',
    });
  }

  onDialogCancel(): void {
    this.dialogRef.close();
  }

  onDialogAdd(): void {
    let formData = this.todoForm.value;
    if (formData.title != '') {
      this.dialogRef.close(formData.title);
    }
  }
}
