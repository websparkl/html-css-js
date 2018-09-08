
function show(width,height){
    try{
        if( (typeof width !== "number")||(typeof height !== "number") ){
            throw new NumberException("Provide only numbers...")
        }
        else{
            // my stuff
        }
    }
    catch(e){
        alert("Exception name : " + e.name + "\n" + "Exception message :" + e.msg);
    }
}

function NumberException(msg){
    this.msg = msg;
    this.name = "NumberException";
}

show("55",6);