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

document.querySelector("#table2").insertAdjacentHTML('beforebegin', '<canvas id="barChart"></canvas>');

let trCountries = Array.from(document.querySelectorAll("#table2 tbody tr"));
let arCountry = [];


trCountries.forEach(function(trcountry) {
    arCountry.push(trcountry.children[1].innerText)
});

console.log(arCountry)
let arDataOne = [];
let arDataTwo = [];

trCountries.forEach(function(trcountry) {

    arDataOne.push(parseInt(trcountry.children[2].innerText))
    arDataTwo.push(parseInt(trcountry.children[3].innerText))
});

console.log(arDataTwo)
console.log(arDataOne)
let labelOne = document.querySelector("#table2 thead tr").children[2].innerText
let labelTwo = document.querySelector("#table2 thead tr").children[3].innerText


var ctx = document.getElementById('barChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: arCountry,
        datasets: [{
                label: labelOne,
                data: arDataOne,
                backgroundColor: 'rgb(65, 212, 146)'
            },
            {
                label: labelTwo,
                data: arDataTwo
            }
        ]
    },
    options: {
        legend: {
            display: true
        },
        scales: {
            xAxes: [{
                gridLines: {
                    display: false
                }
            }],
            yAxes: [{
                gridLines: {
                    display: false
                }
            }]
        }
    }
});







// 3nd exo
h1 = document.querySelector('body h1')
h1.insertAdjacentHTML('afterend', '<canvas id="myChart" width="700" height="300"></canvas>')

let dataPoints = []

function graf(data) {
    let ctx = document.getElementById("myChart");
    let myChart = new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [{
                    label: 'Chart 1',
                    data: data,
                    showLine: true,
                    fill: false,
                    borderColor: 'rgba(0, 200, 0, 1)'
                },

            ]
        },

    });

};

// function updateConfigByMutating(myChart) {
//     myChart.data.datasets[0].data = dataPoints;
//     myChart.update();
// };


setInterval(getData, 2000);

function getData() {
    dataPoints = []
    fetch('https://canvasjs.com/services/data/datapoints.php?xstart=1&ystart=' + Math.floor(Math.random() * 10) + '&length=20&type=json')
        .then(response => response.json())
        .then((data) => {
            data.forEach(function(value) {
                dataPoints.push({ x: parseInt(value[0]), y: parseInt(value[1]) });
            });
            console.log(dataPoints)
            graf(dataPoints)

        });
}




// function(response) {
//     if (response.ok) {
//         return response.json();
//     } else {
//         return Promise.reject(response);
//     }
// })