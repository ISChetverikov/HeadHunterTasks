

function get_water_volume(island) {
    
	var minHeap = new MinHeap('height');
	
    
    return 0;
};

function Point(height, x, y) {
    this.height = height;
    this.x = x;
    this.y = y;
      
    this.toString = function(){
        return height + ":" +" ("+x+", "+y+")";
    }
};

// Реализация min-heap кучи
function MinHeap(fieldName) {
    var data = [];
    var indexedFieldName = fieldName;
    
    // Метод добавления элемента в кучу
    this.enqueue = function(obj) {
        data.push(obj);
      
        var index = data.length - 1;
        while (index > 0) {
            var parent = Math.floor((index + 1) / 2) - 1;
            
            if (data[parent][indexedFieldName] > data[index][indexedFieldName]) {
                  var temp = data[parent];
                  data[parent] = data[index];
                  data[index] = temp;
            }
            else
                break;
            
            index = parent;
        }
    };
    
    // Метод извлечения минимального элемента
    this.dequeue = function() {
        if(data.length <= 0){
            return null;
        }
        if(data.length == 1){
            return data.pop();
        }
        
        var min = data[0];
        data[0] = data.pop();
        
        var index = 0;
        while (true){
            var left = 2 * index + 1;
            var right = left + 1;
            var smallestValueIndex = index;
            
            if (left < data.length && data[left][indexedFieldName] < data[smallestValueIndex][indexedFieldName])
                smallestValueIndex = left;
            if (right < data.length && data[right][indexedFieldName] < data[smallestValueIndex][indexedFieldName])
                smallestValueIndex = right;
            
            if (smallestValueIndex != index){
                var temp = data[smallestValueIndex];
                data[smallestValueIndex] = data[index];
                data[index] = temp;
                
                index = smallestValueIndex
            }
            else {
                break;
            }
        }
        return min;
    };
};



