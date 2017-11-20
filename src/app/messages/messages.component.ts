import { Component, OnInit } from '@angular/core';
import {MessageService} from '../message.service';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
  providers: [MessageService]
})
export class MessagesComponent implements OnInit {

  constructor(public messageService:MessageService,
              public heroService:HeroService) { }
 
  ngOnInit() {
      }
  add()
  {
    console.log("hekki");
    this.heroService.add();
  }

}
