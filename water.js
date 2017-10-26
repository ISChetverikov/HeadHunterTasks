

function get_water_volume(island) {
    
	var minHeap = new MinHeap();
	
    
    return 0;
};

// Реализация min-heap кучи
function MinHeap() {
    var data = [];
    
    // Метод добавления элемента в кучу
    this.enqueue = function(val) {
        data.push(val);
      
        var index = data.length - 1;
        while (index > 0) {
            var parent = Math.floor((index + 1) / 2) - 1;
            
            if (data[parent] > data[index]) {
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
            
            if (left < data.length && data[left] < data[smallestValueIndex])
                smallestValueIndex = left;
            if (right < data.length && data[right] < data[smallestValueIndex])
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



