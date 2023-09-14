import Chart from 'chart.js/auto'

new Chart(
    document.getElementById('op'),
    {
      type: 'radar',
      data: {
        labels: [
            'Ownership',
            'Autonomy',
            'Expertise',
            'Strategy & Vision',
            'Leadership',
            'Product & Competition',
            'Customer understanding',
            'Strategy & Vision',
            'Commercial thinking',
            'Values & Principles',
            'Communication',
            'Feedback',
            'Efficiency & Progress',
            'Helping people & Teams',
            'Growth mindset',
            'Leadership',
            'Understanding problems',
            'Research',
            'System design',
            'Diverging & converging',
            'Interaction design',
            'UX design',
            'Prototyping',
            'Shipping',
          ],
        datasets: [{
            label: "Team Member 01",
            data: [65, 59, 90, 81, 56, 55, 40, 20, 40, 40, 80, 60, 90, 30, 60, 65, 59, 90, 81, 56, 55, 40, 20, 10],
            fill: true,
            backgroundColor: 'rgba(124, 82, 255, 0.2)',
            borderColor: 'rgb(124, 82, 255, 0.5)',
            pointBackgroundColor: '124, 82, 255)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(124, 82, 255)'
          }, {
            label: 'Team Member 02',
            data: [15, 79, 20, 96, 86, 95, 20, 80, 10, 30, 90, 70, 30, 50, 40, 85, 89, 90, 81, 86, 35, 20, 90, 90],
            fill: true,
            backgroundColor: 'rgba(171, 126, 255, 0.2)',
            borderColor: 'rgb(171, 126, 255, 0.5)',
            pointBackgroundColor: '171, 126, 255)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(171, 126, 255)'
          }]
      }
    }
);