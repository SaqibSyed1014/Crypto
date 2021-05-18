<template>
  <div class="chart mx-auto">
    <canvas id="myChart"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js/auto';
export default {
  name: "Chart",
  mounted() {
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        datasets: [{
          label: 'GitHub Commits',
          backgroundColor: 'black',
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1,
          data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11],
        }]
      },
        options: {
          title: {
            display: true,
            text: 'Covid-19 all across the world'
          },
          // maintainAspectRatio: false,
          responsive: true,
        }


    })
    console.log(myChart)
  }
}
</script>

<style scoped>
.chart{
  width: 50%;
  height: 50%;
}
</style>