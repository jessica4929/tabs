import JobDuties from "./JobDuties";

const JobInfo = ({ id, title, dates, duties, company }) => {
  return (
    <article className="">
      <h3>{title}</h3>
      <span className="job-company">{company}</span>
      <div className="job-date">{dates}</div>
      <JobDuties duties={duties} />
    </article>
  );
};
export default JobInfo;
