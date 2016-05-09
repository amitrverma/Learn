function insertionSort(numbersTobeSorted){
        var inputArray = new Array();
        for(var i=0; i<numbersTobeSorted.length; i++){
            if(numbersTobeSorted.charAt(i) != ","){
                inputArray.push(parseInt(numbersTobeSorted.charAt(i)));
            }
        }
        alert(typeof(inputArray));
}