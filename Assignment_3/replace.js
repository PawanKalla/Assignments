function replaceVowel(string){

    for(i=0;i<string.length;i++){
        if(string.charAt(i)==="a"){
            var str=string.replace(/a/g,"1");
             return str;
        }
        if(string.charAt(i)==="e"){
            var str=string.replace(/e/g,"2");
             return str;
        }

    }

}
replaceVowel("aeiou");
