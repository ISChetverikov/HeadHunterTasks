

function get_water_volume(island) {
    
	var minHeap = new MinHeap();
	
    minHeap.enqueue(17);
    minHeap.enqueue(15);
    minHeap.enqueue(13);
    minHeap.enqueue(10);
    minHeap.enqueue(2);
    minHeap.enqueue(4);
    minHeap.enqueue(6);
    
    return minHeap.show();
};

function MinHeap() {
    var data = [];
    
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
            var smallest = index;
            
            if (left < data.length && data[left] < data[smallest])
                smallest = left;
            if (right < data.length && data[right] < data[smallest])
                smallest = right;
            
            if (smallest != index){
                var temp = data[smallest];
                data[smallest] = data[index];
                data[index] = temp;
                
                index = smallest
            }
            else {
                break;
            }
        }
        return min;
    };
};



