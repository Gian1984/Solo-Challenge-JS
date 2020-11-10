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