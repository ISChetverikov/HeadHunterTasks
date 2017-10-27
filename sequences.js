
function find_sequence(A) {
    var pattern = A;
    
    var generateIntegerSequence = function* (){
        for(var i = 1;; i++){
            var str = String(i);
            for(var j = 0; j < str.length; j++)
                yield str.charAt(j);
        }
    }
    
    var pi = [];
    pi[0] = 0;
    
    for (var i=1; i < pattern.length; ++i) 
    {
        var j = pi[i-1];
        while ((j > 0) && (pattern[i] != pattern[j])) 
            j = pi[j-1];			
        if (pattern[i] == pattern[j]) 
            ++j; 
        pi[i] = j;
    }
    console.log(pi);
    
    var generator = generateIntegerSequence();
    var j=0; // длина префикса для последнего обработанного элемента
    for (var i=0;; i++) 
    {
        var c = generator.next().value;
        
        while ((j > 0) && (c != pattern[j])) // символ строки не совпал с символом в образце
            j = pi[j-1];					    // берем ранее рассчитанное значение (начиная с максимально возможных)
        if (c == pattern[j])				// есть совпадение 
            ++j;							// увеличиваем длину префикса на 1
        if (j==pattern.length)
            break;			// образец найден, вызовем функцию обработки
    }
    
    return i - (pattern.length - 1) + 1;
}


