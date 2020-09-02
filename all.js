var ctx = document.getElementById('myChart').getContext('2d');
let value =document.getElementById('cars');
let Product = ['Red', 'Blue', 'Pink', 'Green', 'Purple', 'Orange'];
let aaa=['456'];
function showValue(e){
    console.log(Product);
}

function AddValue(){
    
    aaa.push('123');
    console.log(aaa);
}
AddValue();
value.addEventListener("change",showValue,false);


var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: Product,
        datasets: [{
            label: '#標準',
            data: [85, 90, 77, 86, 100, 89],
            borderColor:"red",
            fill:false,
            pointRadius:5,
            pointBackgroundColor:"red",
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    min:0,
                    max:120,
                    stepSize:20,
                    callback: function(value,index,values){
                        return value + "%" ;
                    }
                }
            }]
        },
        title :{
            display:true,
            text: "每日良率",
            fontColor:"blue",
            fontSize:'30',
            position:"top",
        }
    }
});
