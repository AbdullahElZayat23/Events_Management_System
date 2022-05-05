import { Type } from "@angular/core";

export class StudentEventsMock {
    constructor(
     public   _id: number,
     public   Title: string,
     public  Eventdate: string,
     public   MainSpeakerID: number,
     public   SubSpeakerSID: [
            { type: Number}
        ],
        public    StudentSID: [
            { type: Number}
        ],
        public   Status: string
    ){}
}
