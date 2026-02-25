function titleCase(str){

    let lowerCase =str.toLowerCase();

    let strArray = lowerCase.split(" ");

    for(let i=0;i<strArray.length;i++){

        let selectedE = strArray[i];
        let splitEArr = selectedE.split("");
        splitEArr[0] = splitEArr[0].toUpperCase();
        let nRejoin = splitEArr.join("");

        strArray[i]=nRejoin;




    }

    let tCaseStr = strArray.join(" ");

    return tCaseStr;
    
}
