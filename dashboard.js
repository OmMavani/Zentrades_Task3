
const randomData = (size, multiplier) => Array.from({ length: size }, () => Math.floor(Math.random() * multiplier));

const locationLabels = randomData(10, 100).map((_, i) => `Location ${i + 1}`);
const locationData = randomData(10, 100); 

const jobTypeLabels = randomData(20, 100).map((_, i) => `Job Type ${i + 1}`);
const jobTypeData = randomData(20, 200);

// Configuration for Revenue by Job Location chart
const revenueByLocationCtx = document.getElementById('revenue-by-location').getContext('2d');
new Chart(revenueByLocationCtx, {
  type: 'bar',
  data: {
    labels: locationLabels,
    datasets: [{
      label: 'Revenue for November 2019',
      data: locationData,
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1
    }]
  },
  options: {
    indexAxis: 'y',
    scales: {
      x: {
        beginAtZero: true
      }
    }
  }
});

// Configuration for Revenue by Job Types chart
const revenueByJobTypeCtx = document.getElementById('revenue-by-job-type').getContext('2d');
new Chart(revenueByJobTypeCtx, {
  type: 'bar',
  data: {
    labels: jobTypeLabels,
    datasets: [{
      label: 'Revenue for November 2019',
      data: jobTypeData,
      backgroundColor: 'rgba(153, 102, 255, 0.2)',
      borderColor: 'rgba(153, 102, 255, 1)',
      borderWidth: 1
    }]
  },
  options: {
    indexAxis: 'y',
    scales: {
      x: {
        beginAtZero: true
      }
    }
  }
});
