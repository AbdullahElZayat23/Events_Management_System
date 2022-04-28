// import { Injectable } from '@angular/core';
// import { CurrentUser } from '../_models/current-user';
// @Injectable({
//   providedIn: 'root'
// })
// export class CurrentUserService {
//     private  instance: CurrentUser;
//     constructor() { 
//         this.instance = new CurrentUser("", "", false, 0);
//     }
//   //set
//   public  setInstance(user: CurrentUser) {
//     this.instance = user;
// }
// public  setEmailORuserName(emailORuserName: string) {
//     this.getInstance().emailORuserName = emailORuserName;
// }
// public  setType(type: string) {
//     this.getInstance().type = type;
// }
//     public  SetID(id: number) {
//     this.getInstance().id = id;
// }
// public  setISlogged(isLogged: boolean) {
//     this.getInstance().isLogged = isLogged;
// }
// //get
// public  getInstance(): CurrentUser {
//     return this.instance;
// }
// public  getID(): number {
//     return this.getInstance().id;
// }
// public  getEmailORuserName(): string {
//     return this.getInstance().emailORuserName;
// }
// public  getIsLogged(): boolean {
//     return this.getInstance().isLogged;
// }
// public  getType(): string {
//     return this.getInstance().type;
// }
// //destroy instance
// public  destroyInstance() {
//     this.setEmailORuserName("");
//     this.setType("");
//     this.SetID(0);
//     this.setISlogged(false);
// }

// }
