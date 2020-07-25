function charCount(string,char){
    var charCount = 0;
    for(var i=0;i<=string.length;i++){
        if(string.charAt(i) == char.toLowerCase()){
            charCount += 1;
        }


    }
    return charCount;
}
charCount("pawan","p");
