// Подсчет количества воды, скопившейся на острове
// Поочередно добавляются граничные ячейки в очередь с приоритетом (у наименьшей ячейки наивысший приоритет),
// затем при извлечении посдчитывается какого уровня воды могут достичь еще не обработанные соседние клетки,
// которые затем сами попадают в очередь.
//
// param island - двумерный массив целых, задающий высоты ячеек острова
// return - количество скопившейся воды
function get_water_volume(island) {
    // Структура для описания ячейки острова
    function Point(height, x, y) {
        this.height = height;
        this.x = x;
        this.y = y;
    };

    // Реализация min-heap кучи, используемой в качестве очереди с приоритетом
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
    
	var minHeap = new MinHeap('height');
	var M = island.length;
    var N = island[0].length;
    
    // Двумерная маска посещенных вершин
    var visitedMask = [];
    for(var i = 0; i < M; i++){
        visitedMask[i] = [];
        for(var j =0; j < N; j++){
            visitedMask[i][j] = false;
        }
    }
    
    // Угловые ячейки ни на что не влияют
    visitedMask[0][0] = visitedMask[M-1][N-1] = visitedMask[M-1][0] = visitedMask[0][N-1] = 1;
    // Помещение граничных ячеек в очередь с приоритетом 
    // Высший приоритет у ячейки с наименьшей высотой
    for (var i = 1; i < M-1; i++){
        minHeap.enqueue(new Point(island[i][0], i, 0));
        minHeap.enqueue(new Point(island[i][N-1], i, N-1));
        visitedMask[i][0] = true;
        visitedMask[i][N-1] = true;
    }
    for (var i = 1; i < N-1; i++){
        minHeap.enqueue(new Point(island[0][i], 0, i));
        minHeap.enqueue(new Point(island[M-1][i], M-1, i));
        visitedMask[0][i] = true;
        visitedMask[M-1][i] = true;
    }
    
    var neighbours = [[1, 0],[0, 1],[-1, 0],[0, -1]];
    var waterVolume = 0;
    var point;
    // Получение из очереди ячейки и "затопление" низлежащих соседей
    // При этом идет подсчет прибывшей воды
    while ((point = minHeap.dequeue()) !== null ){
        for (var direction in neighbours){
            var x = point.x + neighbours[direction][0];
            var y = point.y + neighbours[direction][1];
            if (0 <= x && x < M && 0 <= y && y < N && !visitedMask[x][y]){
                visitedMask[x][y] = true;
                minHeap.enqueue(new Point(Math.max(point.height, island[x][y]), x, y));
                waterVolume += Math.max(0, point.height - island[x][y]);
            }
        }
    }
    
    return waterVolume;
};





