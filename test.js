describe("MinHeap", function() {

  function makeTest(elementsCount) {
    var minHeap = new MinHeap('height');
    var testData = [];
    for(var i = 0; i < elementsCount; i++){
        testData.push(new Point(Math.floor(Math.random() * 1000) + 1, 0, 0));
    }
    
    for (var i = 0; i < testData.length; i++){
        minHeap.enqueue(testData[i]);
    }
    
    var comparator = function(a, b){
        return a.height - b.height;
    }
    testData.sort(comparator);
    
    var extractTestData = [];
    for(var i = 0; i < testData.length; i++){
        extractTestData.push(minHeap.dequeue());
    }
    
    it("Проверка отсортированности извлекаемых значений " + extractTestData.join(", "), function() {
        for(var i = 0; i < testData.length; i++){
            assert.equal(extractTestData[i].height, testData[i].height, extractTestData[i].height+" равно "+testData[i].height);
        }
    });
  }

  function emptyHeapDequeue(){
      var minHeap = new MinHeap('height');
      var element = minHeap.dequeue();
      
      it("При попытке извлечения из пустой непользованной кучи вернется " + element, function() {
         assert.isNull(element);
      });
  }
  
  function usedHeapDequeue(){
      var minHeap = new MinHeap('height');
      minHeap.enqueue(new Point(1, 0, 0));
      minHeap.dequeue();
      var element = minHeap.dequeue();
      
      it("При попытке извлечения из пустой использованной кучи вернется " + element, function() {
         assert.isNull(element);
      });
  }
  
  /*emptyHeapDequeue();
  usedHeapDequeue();
  for(var i = 0; i < 100; i++){
    var count = Math.floor(Math.random() * 250) + 1;
    makeTest(count);
  } */
});


describe("Water task", function () {
        
    it("Воды на острове [[4,5,4],[3,1,5],[5,4,1]] нормально - 2", function() {
        var island1 = [[4,5,4],[3,1,5],[5,4,1]];
        assert.equal(get_water_volume(island1), 2);
    });
    
    it("Воды на острове [[5,3,4,5],[6,2,1,4],[3,1,1,4],[8,5,4,3]] нормально - 7", function() {
        var island2 = [[5,3,4,5],[6,2,1,4],[3,1,1,4],[8,5,4,3]];
        assert.equal(get_water_volume(island2), 7);
    });
    
    it("Воды на острове [[2,2,2],[2,1,2],[2,1,2],[2,1,2]] нормально - 0", function() {
        var island3 = [[2,2,2],[2,1,2],[2,1,2],[2,1,2]];
        assert.equal(get_water_volume(island3), 0);
    });
    
    it("Воды на острове [[5,7,4,10,16],[28,1,1,3,400],[999,100,100,100,500],[18,2,2,10,158],[28,14,32,48,11]] нормально - 35", function() {
        var island4 = [[5,7,4,10,16],[28,1,1,3,400],[999,100,100,100,500],[18,2,2,10,158],[28,14,32,48,11]];
        assert.equal(get_water_volume(island4), 35);
    });
    
    it("Воды на острове [[1]] нормально - 0", function() {
        var island5 = [[1]];
        assert.equal(get_water_volume(island5), 0);
    });
});
describe("Sequence task", function () {
    
    it("Запуск последовательность 213 на позиции 15", function() {
        assert.equal(find_sequence('213'), 15);
    });
    
    it("Запуск последовательность 100 на позиции 190", function() {
        assert.equal(find_sequence('100'), 190);
    });
    
    it("Запуск последовательность 1 на позиции 1", function() {
        assert.equal(find_sequence('1'), 1);
    });
    
    it("Запуск последовательность 1 на позиции 1", function() {
        assert.equal(find_sequence('100000'), 488890);
    });
});

