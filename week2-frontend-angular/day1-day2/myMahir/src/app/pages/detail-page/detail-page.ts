import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Api } from '../../services/api';
import { SharedModules } from '../../shared/shared.modules';

@Component({
  selector: 'app-detail-page',
  imports: [RouterLink, ...SharedModules],
  templateUrl: './detail-page.html',
  styleUrl: './detail-page.scss',
})
export class DetailPage implements OnInit {
  public id: any;
  public student:
    | { id: number; name: string; email: string; student_no: string; phone: string }
    | undefined;

  constructor(private activatedRoute: ActivatedRoute, private apiService: Api) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  async ngOnInit() {
    this.student = {
      id: this.id,
      name: '',
      email: '',
      student_no: '',
      phone: '',
    };

    let response: any = await this.apiService.httpGet('/students/' + this.id);
    if (response.success) {
      console.log(response.data);
      this.student = response.data;
    } else {
      console.log('Error: ', response.message);
    }
  }
}
