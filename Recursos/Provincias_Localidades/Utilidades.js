function llenarSelect(op, jsonArray){
    op.options.length = 0;
    for(var i = 0 ;i<jsonArray.length ;i++ ){
      op.options[op.options.length] = new Option(jsonArray[i].NOMBRE, jsonArray[i].CODIGO);
    }
  }