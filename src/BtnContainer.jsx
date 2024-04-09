const BtnContainer = ({ data, person, setPerson }) => {
  return (
    <div className="btn-container">
      {data.map((job, index) => {
        console.log();
        return (
          <button
            key={job.id}
            type="button"
            className={index === person ? "job-btn active-btn" : "job-btn"}
            onClick={() => setPerson(index)}
          >
            {job.company}
          </button>
        );
      })}
    </div>
  );
};
export default BtnContainer;
