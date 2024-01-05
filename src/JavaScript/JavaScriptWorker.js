
this.onmessage = function (e) {
    if (e.data.addThis !== undefined) {
        this.postMessage({ result: e.data.num1 + e.data.num2 });
    }
}

//Web Worker
if (windows.Worker) {
    let myWorker = new Worker('file_path');
    let message = {
        addThis: { num1: 1, num2: 2 }
    }
    myWorker.postMessage(message);

    myWorker.onmessge = function (e) {
        console.log(e.data.result)
    }
}

//Event bubbling
