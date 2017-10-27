// Поиск последовательности цифр в бесконечной последовательности,
// составленной из подряд идущих натуральных чисел
// 
// Реализовано с помощью алгоритма Кнута-Морриса-Пратта
//
// param A - искомая последовательность
// return - позиция начала искомой последовательности в бесконечной последовательности
function find_sequence(A) {
    var pattern = A;
    
    // Генератор бесконечной последовательности
    var generateIntegerSequence = function* (){
        for(var i = 1;; i++){
            var str = String(i);
            for(var j = 0; j < str.length; j++)
                yield str.charAt(j);
        }
    }
    var generator = generateIntegerSequence();
    
    var prefixes = []; // Массив значений префикс функции 
    prefixes[0] = 0;
    
    for (var i=1; i < pattern.length; ++i) 
    {
        // Рассчет текущего значения префикс функции для символа искомой строки
        var p = prefixes[i-1]; 
        while ((p > 0) && (pattern[i] != pattern[p])) 
            p = prefixes[p-1];			
        if (pattern[i] == pattern[p]) 
            ++p; 
        prefixes[i] = p;
    }
   
    var p=0;
    for (var i=0;; i++) 
    {
        var c = generator.next().value;
        
        // Нахождение значений префикс функции для символа бесконечной последовательности
        while ((p > 0) && (c != pattern[p])) 
            p = prefixes[p-1];					    
        if (c == pattern[p])				
            ++p;					
        if (p==pattern.length)
            break;			// Строка найдена, если значение префикс функции равно длине искомой строки
    }
    
    // Было найдено вхождение последнего символа => следует вычесть длину оставшихся символов
    // и добавить 1 по требованию задания
    return i - (pattern.length - 1) + 1;
}


