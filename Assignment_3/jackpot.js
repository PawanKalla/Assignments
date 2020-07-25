function jackpot(arr=[4]){
    var i=0;
        if(arr[i]===arr[i+1] && arr[i]===arr[i+2] && arr[i]===arr[i+3]){
            return true;
        }
        else{
            return false;
        }


}
jackpot(["aa","aa","aa","aa"]);
