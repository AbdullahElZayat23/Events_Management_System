export class CurrentUser {
    constructor(public emailORuserName:string,public type:string,public isLogged:boolean,public id:number) { }
    private static instance: CurrentUser;
    //set
    public static setInstance(user: CurrentUser) {
        CurrentUser.instance = user;
    }
    public static setEmailORuserName(emailORuserName: string) {
        CurrentUser.getInstance().emailORuserName = emailORuserName;
    }
    public static setType(type: string) {
        CurrentUser.getInstance().type = type;
    }
        public static SetID(id: number) {
        CurrentUser.getInstance().id = id;
    }

    public static setISlogged(isLogged: boolean) {
        CurrentUser.getInstance().isLogged = isLogged;
    }
    //get
    public static getInstance(): CurrentUser {
        if (!CurrentUser.instance) {
            CurrentUser.instance = new CurrentUser("", "", false, 0);
        }
        return CurrentUser.instance;
    }
    public static getID(): number {
        return CurrentUser.getInstance().id;
    }
    public static getEmailORuserName(): string {
        return CurrentUser.getInstance().emailORuserName;
    }
    public static getIsLogged(): boolean {
        return CurrentUser.getInstance().isLogged;
    }
    public static getType(): string {
        return CurrentUser.getInstance().type;
    }
   

    //destroy instance
    public static destroyInstance() {
        CurrentUser.setEmailORuserName("");
        CurrentUser.setType("");
        CurrentUser.SetID(0);
        CurrentUser.setISlogged(false);
    }

    
        

   

}
