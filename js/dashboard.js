// Pageviews Bar Chart
const ctxPageviews = document.getElementById('pageviewsChart').getContext('2d');
const pageviewsChart = new Chart(ctxPageviews, {
  type: 'bar',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      label: 'Pageviews',
      data: [4000, 4500, 4800, 4600, 5000, 5200, 5300, 5400, 5600, 5800, 6000, 6200],
      backgroundColor: '#10b981',
      barPercentage: 0.6,
      categoryPercentage: 0.6,
      borderRadius: 2,
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      }
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      }
    }
  }
});

// Monthly Users Dotted Line Chart
const ctxMonthlyUsers = document.getElementById('monthlyUsersChart').getContext('2d');
const monthlyUsersChart = new Chart(ctxMonthlyUsers, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      label: 'Monthly Users',
      data: [2200, 2400, 2600, 2500, 2700, 2900, 3100, 3200, 3300, 3400, 3600, 3800],
      borderColor: '#fbbf24',
      backgroundColor: 'rgba(251, 191, 36, 0.3)',
      fill: false,
      tension: 0.3,
      pointRadius: 0,
      pointHoverRadius: 4,
      borderWidth: 2,
      borderDash: [6, 4],  // This makes the line dotted
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      }
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      }
    },
    elements: {
      line: {
        borderJoinStyle: 'round',
      }
    }
  }
});
