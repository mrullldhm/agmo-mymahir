import { Component } from '@angular/core';
import { SharedModules } from '../../shared/shared.modules';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Api } from '../../services/api';

@Component({
  selector: 'app-add-page',
  imports: [...SharedModules, RouterLink],
  templateUrl: './add-page.html',
  styleUrl: './add-page.scss',
})
export class AddPage {
  public studentForm: FormGroup;

  constructor(private fb: FormBuilder, private apiService: Api, private router: Router) {
    this.studentForm = this.fb.group({
      name: [''],
      student_no: [''],
      email: [''],
      phone: [''],
    });
  }

  async onSubmit() {
    try {
      const studentData: any = this.studentForm.value;
      await this.apiService.httpPost('/students/add', studentData);
      console.log('Student Data added successfully');
      this.router.navigateByUrl('/students');
    } catch (err: any) {
      console.error(err.message);
    }
  }
}
