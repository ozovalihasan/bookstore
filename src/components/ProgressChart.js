import { Doughnut } from 'react-chartjs-2';
import { PropTypes } from 'prop-types';

const ProgressChart = ({ percent, onBlur, onChange }) => {
  const data = {
    labels: ['Completed', 'Uncompleted'],
    datasets: [
      {
        data: [percent, 100 - percent],
        backgroundColor: ['#36A2EB'],
        hoverBackgroundColor: ['#36A2EB'],
      },
    ],
  };

  const options = {
    animation: {
      animateScale: true,
      //   animateRotate: true,
    },
    hover: false,
    maintainAspectRatio: true,
    legend: { display: false },
    centerText: {
      display: true,
      text: '90%',
    },
    responsive: true,
    tooltips: {
    },
  };

  return (
    <div className="progress-chart percentage-container">
      <div className="progress-chart percentage-subcontainer">
        <input
          type="text"
          className="progress-chart percentage-text"
          value={percent}
          onBlur={onBlur}
          onChange={onChange}
        />
        %
      </div>
      <Doughnut
        data={data}
        options={options}
      />
    </div>
  );
};

ProgressChart.propTypes = {
  percent: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
};

export default ProgressChart;
