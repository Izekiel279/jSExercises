function convertHTML(str){
    let str1 = str;

let str2 = str1.replaceAll("&","&amp;");
let str3 = str2.replaceAll("<","&lt;");
let str4 = str3.replaceAll(">","&gt;");
let str5 = str4.replaceAll("\"","&quot;");
let str6 = str5.replaceAll("'","&apos;");

return str6;

}