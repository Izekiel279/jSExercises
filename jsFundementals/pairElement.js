function pairElement (str){

    let strUpperCase = str.toUpperCase();

    let twoDArr = [];

    console.log(strUpperCase);
    
    for(let i=0;i<str.length;i++){
        if(strUpperCase[i]==='A'){
            twoDArr.push( ["A","T"]);
        
        }else if(strUpperCase[i]==='T'){
            twoDArr.push( ["T","A"]);
        }else if(strUpperCase[i]==='C'){
            twoDArr.push( ["C","G"]);
        }else if(strUpperCase[i]==='G'){
            twoDArr.push( ["G","C"]);
        }

    }

    return twoDArr;
}