import { environment } from "../../environments/environment.development"

export class Endpoints{
    public account= {
        login: `${environment.ApiBaseUrl}/api/Account/Login`
    }

    public cards = {}
}