export const environment = {
    API_URL : "http://localhost/serviciosWeb/petclinic/servicios.php",

    jsonEqual: function(object:object, object2: object){
        return (JSON.stringify(object) == JSON.stringify(object2));
    },

    selectObjectFromArray: function(list:Array<Object>, objects:Array<object>){
        var res = new Array();
        objects.forEach(e => {
            list.forEach(el => {
                if(environment.jsonEqual(e, el)){
                    res.push(el);
                }
            });
        });
    }
};
