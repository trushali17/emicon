import { Injectable } from '@angular/core';

export interface User {
  name:string;
  email:string;
  subject:string;
  message:string;
}
@Injectable({
  providedIn: 'root'
})
export class CtrlService {

  userData:User
  constructor() { }

  
}
