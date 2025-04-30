import React, { useState } from "react";
import "../css/addDatapage.css";


const AddDataPage = ({ studentData, setStudentData }) => {
  const [showForm, setShowForm] = useState(false);
  const [testName, setTestName] = useState("");
  const [subjectName, setSubjectName] = useState("");
  const [marks, setMarks] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (testName && subjectName && marks) {
      const newEntry = {
        testName,
        subjectName,
        marks: parseInt(marks),
      };

      setStudentData([...studentData, newEntry]);


      setTestName("");
      setSubjectName("");
      setMarks("");
      setShowForm(false);
    }
  };

  return (
    <div className="adddata-section">
      <div className="animated-bg"></div>

      <h2 className="adddata-title">Add Student Data</h2>

      {!showForm && (
        <button className="add-data-button" onClick={() => setShowForm(true)}>
          Add Data
        </button>
      )}

      {showForm && (
        <form className="adddata-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Test Name"
            value={testName}
            onChange={(e) => setTestName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Subject Name"
            value={subjectName}
            onChange={(e) => setSubjectName(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Marks"
            value={marks}
            onChange={(e) => setMarks(e.target.value)}
            required
          />
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      )}
      <h1 className="fixed-bottom-title">Tip : Add More Data for better Understanding</h1>
    </div>
  );
};

export default AddDataPage;
