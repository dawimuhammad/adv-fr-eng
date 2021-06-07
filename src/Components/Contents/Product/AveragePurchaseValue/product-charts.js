import { Bar } from 'react-chartjs-2';

const netpurchasevaluedataset = [800, 300, 200, 200, 1000, 900, 950, 900];
const grosspurchasevaluedataset = [8000, 7000, 5000, 7400, 8200, 8300, 7000];
const totalvaluedataset = netpurchasevaluedataset.map((value, index) => {
  return grosspurchasevaluedataset[index] + value;
})

const genData = () =>  ({
  labels: ['Jan 12', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'dataset line',
      type: 'line',
      data: totalvaluedataset,
      borderColor: '#FFE854',
      borderSize: 2,
      backgroundColor: '#FFE854',
      order: 0
    },
    {
      type: 'bar',
      label: "Gross Value",
      backgroundColor: `#289E45`,
      fill: false,
      data: grosspurchasevaluedataset,
      stack: 'combined',
      order: 2
    },
    {
      type: 'bar',
      label: "Net Purchase Value",
      backgroundColor: `#37B04C`,
      data: netpurchasevaluedataset,
      stack: 'combined',
      order: 3
    }
  ],
});

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
  plugins: {
    legend: {
      display: false
    }
  },
  responsive: true
};

const Crazy = () => {
  const data = genData()

  return (
    <Bar data={data} options={options} />
  );
};

export default Crazy;