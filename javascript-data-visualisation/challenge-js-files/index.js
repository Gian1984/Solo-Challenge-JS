function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

h3 = document.querySelector('body h3')
h3.insertAdjacentHTML('afterend', '<canvas id="line-chart" width="800" height="450"></canvas>')

let dates = document.querySelectorAll('#table1 tbody tr')[0];
let labelsTableOne = []
Array.from(dates.children).forEach(function(date) { //Array.from obbliga js a vedere dater come un array
    if (date.innerText.length > 0) { //verifichiamo che le th siano piene e le trasformiamo in testo
        labelsTableOne.push(parseInt(date.innerText)) //isoliamo le date dal tag e convertiamo in testo
    }
});

let dataSetTableOne = []
dataset = Array.from(document.querySelectorAll('#table1 tbody tr'))
dataset.shift()

dataset.forEach(function(datas) {
    let object = {}
    let arData = []
    data = Array.from(datas.children)
    data.shift()
    data.shift()
    data.forEach(function(y) {
        arData.push(parseInt(y.innerText))
    })
    object.data = arData
    object.label = datas.children[1].innerText
    object.borderColor = getRandomColor()
    object.fill = false
    dataSetTableOne.push(object)
})





new Chart(document.getElementById("line-chart"), {
    type: 'line',
    data: {
        labels: labelsTableOne,
        datasets: dataSetTableOne,
    },
    options: {
        title: {
            display: true,
            text: 'European Country:'
        }
    }
});

//exo2

document.querySelector("#table2").insertAdjacentHTML('beforebegin', '<canvas id="graph2"></canvas>');

let labelDatesTwo = Array.from(document.querySelectorAll("#table2 thead tr ")[0].children);
labelDatesTwo.shift();
labelDatesTwo.shift();
let arrayDatesTwo = [];

labelDatesTwo.forEach(function(years) {
    if (years.innerText.length > 0) {
        arrayDatesTwo.push(years.innerText)
    }
})


let datasetsTwo = Array.from(document.querySelectorAll("#table2 tbody tr"));
datasetsTwo.shift();
let datasetsHomicide = [];

datasetsTwo.forEach(function(trTwo) {
    let object = {};
    let dataTwo = Array.from(trTwo.children);
    let arrDataTwo = [];
    dataTwo.shift();
    dataTwo.shift();
    dataTwo.forEach(function(y) {
        arrDataTwo.push(parseInt(y.innerText))
    });
    object.data = arrDataTwo;
    object.label = trTwo.children[1].innerText;
    object.backgroundColor = getRandomColor();
    datasetsHomicide.push(object);
})

new Chart(document.getElementById("graph2"), {
    type: 'bar',
    data: {
        labels: arrayDatesTwo,
        datasets: datasetsHomicide
    },
    options: {
        title: {
            display: true,
            text: 'Crimes in Europe:'
        }
    }
});








// 3nd exo
// h1 = document.querySelector('body h1')
// h1.insertAdjacentHTML('afterend', '<canvas id="line-chart1" width="800" height="450"></canvas>')

// let dataPoints = [];

// let xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://canvasjs.com/services/data/datapoints.php');
// xhr.send(null);

// xhr.onreadystatechange = function() {
//     let DONE = 4; // readyState 4 means the request is done.
//     let OK = 200; // status 200 is a successful return.
//     if (xhr.readyState === DONE) {
//         if (xhr.status === OK) {
//             console.log(xhr.responseText);
//             Array.from(xhr.responseText).forEach(function(key, value) {
//                 dataPoints.push({ x: parseInt(value[0]), y: parseInt(value[1]).innerText });
//             });

//         } else {
//             console.log('Error: ' + xhr.status); // An error occurred during the request.
//         }
//     }
// };
// setInterval(xhr.onreadystatechange, 1000); // get new data every 3 seconds
// console.log(dataPoints)