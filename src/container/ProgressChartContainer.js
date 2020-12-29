import { PropTypes } from 'prop-types';
import { useState } from 'react';
// import { useDispatch } from 'react-redux';
import { useDispatch } from 'react-redux';
import ProgressChart from '../components/ProgressChart';
import { fetchBooksUpdateProgress } from '../redux';

// import { fetchBooksUpdateProgress } from '../redux';

const ProgressChartContainer = ({ percentage, bookId }) => {
  // const dispatch = useDispatch();
  const dispatch = useDispatch();

  const [percent, setPercent] = useState(percentage);

  const onChange = e => {
    if (e.target.value >= 0
    && e.target.value <= 100
    && e.target.value.length <= 4
    ) { setPercent(e.target.value); }
  };

  return (
    <ProgressChart
      onBlur={() => {
        if (percent === '') setPercent(0);
        dispatch(fetchBooksUpdateProgress(bookId, percent));
      }}
      onChange={onChange}
      percent={percent}
    />
  );
};

ProgressChartContainer.propTypes = {
  percentage: PropTypes.string.isRequired,
  bookId: PropTypes.number.isRequired,
};

export default ProgressChartContainer;
