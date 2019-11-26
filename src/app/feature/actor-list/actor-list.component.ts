import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/model/actor.class';
import { JsonResponse } from 'src/app/model/json-response';
import { ActorService } from 'src/app/service/actor.service';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.css']
})
export class ActorListComponent implements OnInit {
  title: string = "Actor-List";
  actor: Actor[] = [];
  jr: JsonResponse;

  constructor(private actorSvc: ActorService) { }

  ngOnInit() {
    this.actorSvc.list().subscribe(jresp => {
      this.jr = jresp;
      this.actor = this.jr.data as Actor[];
      console.log(this.actor);
    });
  }

}
