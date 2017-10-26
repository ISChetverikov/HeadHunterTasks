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
  
  emptyHeapDequeue();
  usedHeapDequeue();
  for(var i = 0; i < 100; i++){
    var count = Math.floor(Math.random() * 250) + 1;
    makeTest(count);
  }
    
  
  
});