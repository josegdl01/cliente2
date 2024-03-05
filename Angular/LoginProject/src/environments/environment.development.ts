import { HttpHeaders } from "@angular/common/http";

export const environment = {
    API_URL_SERV : "http://localhost/serviciosWeb/login/servidor.php",
    API_URL_LOGIN : "http://localhost/serviciosWeb/login/login.php",

    header: function(){
        let headers = { headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + localStorage["JWT"]
        })};
        console.log(headers);
        return headers;
    }
};
