describe("MinHeap", function() {

  function makeTest(elementsCount) {
    var minHeap = new MinHeap();
    var testData = [];
    for(var i = 0; i < elementsCount; i++){
        testData.push(Math.floor(Math.random() * 1000) + 1);
    }
    
    for (var i = 0; i < testData.length; i++){
        minHeap.enqueue(testData[i]);
    }
    
    var comparator = function(a, b){
        return a - b;
    }
    testData.sort(comparator);
    
    var extractTestData = [];
    for(var i = 0; i < testData.length; i++){
        extractTestData.push(minHeap.dequeue());
    }
    
    it("Проверка отсортированности извлекаемых значений " + extractTestData.join(", "), function() {
        for(var i = 0; i < testData.length; i++){
            assert.equal(extractTestData[i], testData[i], extractTestData[i]+" равно "+testData[i]);
        }
    });
  }

  function emptyHeapDequeue(){
      var minHeap = new MinHeap();
      var element = minHeap.dequeue();
      
      it("При попытке извлечения из пустой непользованной кучи вернется " + element, function() {
         assert.isNull(element);
      });
  }
  
  function usedHeapDequeue(){
      var minHeap = new MinHeap();
      minHeap.enqueue(1);
      minHeap.dequeue();
      var element = minHeap.dequeue();
      
      it("При попытке извлечения из пустой использованной кучи вернется " + element, function() {
         assert.isNull(element);
      });
  }
  
  emptyHeapDequeue();
  usedHeapDequeue();
  for(var i = 0; i < 100; i++){
    var count = Math.floor(Math.random() * 250) + 1;
    makeTest(count);
  }
    
  
  
});