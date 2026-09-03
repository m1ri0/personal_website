import './certificates.css';

export default function Certificates() {
  return (
    <section className="certificates-section">
      <div className="bachelor-container">
        <div className="bachelor-header">
          <h3>Bachelor's Degree in Computer Science</h3>
          <p>UNESP, 2023 - Present</p>
        </div>
        <div className="bachelor-body">
          <p>Relevant coursework: Data Structures, Algorithms, Object-Oriented Programming, Database Systems</p>
        </div>
      </div>
      
      <div className="technical-container">
        <div className="technical-header">
          <h3>Technical Course in Systems Development</h3>
          <p>ETEC, 2020 - 2022</p>
        </div>
        <div className="technical-body">
          <p>Relevant coursework: Programming, Web Development, Database Management, Networking</p>
        </div>
      </div>

      <div className="english-container">
        <div className="english-header">
          <h3>Structured English Language Course</h3>
          <p>Language Studies Center, 2021</p>
        </div>
        <div className="english-body">
          <p>Completed coursework in reading, writing, speaking, and listening skills.</p>
        </div>
      </div>

    </section>
  );
}