var colors = [];
var percent = [];

for (let i = 0; i < target.length; i++) {
    colors.push("#" + Math.floor(Math.random() * 2 ** 24).toString(16).padStart(6, 0));
    percent.push(1);
}

const ctx = document.getElementById('myChart').getContext('2d');

const myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: target,
        datasets: [{
            data: percent,
            backgroundColor: colors,
            hoverOffset: 5
        }],
    },
    options: {
        events: [],
        plugins: {
            legend: {
                display: false
            },
            labels: {
                render: (args) => {
                    if(args.percentage > 10){
                        return `${args.label}`
                    }
                },
                arc: true,
                position: 'border',
                fontSize: 20,
                fontColor: function (data) {
                    var rgb = hexToRgb(data.dataset.backgroundColor[data.index]);
                    var threshold = 140;
                    var luminance = 0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b;
                    return luminance > threshold ? 'black' : 'white';
                },
            },
            tooltip: false
        }
    }
});

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
}

var text = [];
text.push('<ul class="list-group legend-ul">');

var ds = myChart.data.datasets[0];
var sum = ds.data.reduce(function add(a, b) {
    return a + b;
}, 0);

for (var i = 0; i < ds.data.length; i++) {
    text.push('<li class="list-group-item" title="Click to add/remove this name">');
    var perc = Math.round(100 * ds.data[i] / sum, 0);
    text.push('<span style="background-color:' + ds.backgroundColor[i] + '">' + '</span>' + myChart.data.labels[i] + ' (' + perc + '%)');
    text.push('</li>');
}

text.push('</ul>');
document.querySelector(".legend").innerHTML = text.join("");

var legendItems = document.querySelector(".legend").getElementsByTagName('li');
for (var i = 0; i < legendItems.length; i += 1) {
    legendItems[i].addEventListener("click", legendClickCallback, false);
}

function legendClickCallback(event) {
    event = event || window.event;

    var target = event.target || event.srcElement;
    while (target.nodeName !== 'LI') {
    target = target.parentElement;
    }
    var parent = target.parentElement;
    var index = Array.prototype.slice.call(parent.children).indexOf(target);

    var meta = myChart.getDatasetMeta(0);
    var item = meta.data[index];

    if (item.hidden === true) {
        target.classList.remove('text-danger');
        target.classList.remove('legend-hidden');
        item.hidden = null;
    } else {
        target.classList.add('text-danger');
        target.classList.add('legend-hidden');
        item.hidden = true;
    }
    myChart.update();
}

document.querySelector(".wheel-button").addEventListener("click", function() {
    document.querySelector(".wheel-circle").style.transform = "rotate(" + (Math.random() * 5000 + 500) + "deg)"
})