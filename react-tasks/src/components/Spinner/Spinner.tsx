import './Spinner.css';

const Spinner = () => {
  return (
    <div className="lds-ripple center" role="loading">
      <div></div>
      <div></div>
    </div>
  );
};

export default Spinner;
