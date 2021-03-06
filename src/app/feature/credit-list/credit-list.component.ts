import { Component, OnInit } from '@angular/core';
import { Credit } from 'src/app/model/credit.class';
import { JsonResponse } from 'src/app/model/json-response';
import { CreditService } from 'src/app/service/credit.service';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-credit-list',
  templateUrl: './credit-list.component.html',
  styleUrls: ['./credit-list.component.css']
})
export class CreditListComponent extends BaseComponent implements OnInit {
  title: string = "Credit-List";
  credit: Credit[] = [];
  jr: JsonResponse;

  constructor(private creditSvc: CreditService) {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
    this.creditSvc.list().subscribe(jresp => {
      this.jr = jresp;
      this.credit = this.jr.data as Credit[];
      console.log(this.credit);
    });
  }

}
