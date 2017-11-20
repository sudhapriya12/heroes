import { Injectable } from '@angular/core';

@Injectable()
export class MessageService
{
messages:string[]=['sudha','priya','singh'];
message:string="hello";
add(message:string)
{
  console.log("abc");
   console.log(message);
  this.messages.push(message);
  console.log(this.messages);
}

clear()
{
  this.messages.length = 1;
}
}
