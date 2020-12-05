import { Doughnut } from 'react-chartjs-2';
import { PropTypes } from 'prop-types';

const PieChart = ({ percentage }) => {
  const data = {
    labels: ['Completed', 'Uncompleted'],
    datasets: [{
      data: [percentage, 100 - percentage],
      backgroundColor: ['#36A2EB'],
      hoverBackgroundColor: ['#36A2EB'],

    }],
  };

  const options = {
    animation: { animateScale: true },
    hover: false,
    maintainAspectRatio: true,
    legend: { display: false },
    centerText: {
      display: true,
      text: '90%',
    },

  };

  return (
    <div>
      <Doughnut data={data} options={options} />
    </div>
  );
};

PieChart.propTypes = {
  percentage: PropTypes.string.isRequired,
};

export default PieChart;
