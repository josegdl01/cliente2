export const environment = {
    jsonEqual: function (a: any, b: any) {
        return JSON.stringify(a) === JSON.stringify(b);
    },

    SeleccionarObj: function (lista: object[], obj: object) {
        var res;
        lista.forEach(valor => {
            if (environment.jsonEqual(valor, obj))
                res = valor;
        });
        return res;
    },

    SeleccionarObjArray: function (lista: Array<object>, objE: Array<object>) {
        var res = new Array();
        objE.forEach(ele => {
            lista.forEach(valor => {
                if (environment.jsonEqual(valor, ele))
                    res.push(valor);
            });
        });
        return res;
    }
};