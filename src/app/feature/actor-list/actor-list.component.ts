import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/model/actor.class';
import { JsonResponse } from 'src/app/model/json-response';
import { ActorService } from 'src/app/service/actor.service';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.css']
})
export class ActorListComponent extends BaseComponent implements OnInit {
  title: string = "Actor-List";
  actor: Actor[] = [];
  jr: JsonResponse;

  constructor(private actorSvc: ActorService) {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
    this.actorSvc.list().subscribe(jresp => {
      this.jr = jresp;
      this.actor = this.jr.data as Actor[];
      console.log(this.actor);
    });
  }

}
