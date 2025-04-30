import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import "../css/dashboard.css";


const Dashboard = ({ studentData, setStudentData, userName }) => {
  // Group data to one entry per subject with average marks
  const groupedData = studentData.reduce((acc, item) => {
    const existing = acc.find((entry) => entry.subjectName === item.subjectName);
    if (existing) {
      existing.total += item.marks;
      existing.count += 1;
    } else {
      acc.push({ subjectName: item.subjectName, total: item.marks, count: 1 });
    }
    return acc;
  }, []);

  const chartData = groupedData.map((item) => ({
    subjectName: item.subjectName,
    marks: (item.total / item.count).toFixed(2),
  }));

  const uniqueSubjects = [...new Set(studentData.map((item) => item.subjectName))];

  const totalTests = studentData.length;
  const totalSubjects = uniqueSubjects.length;
  const averageScore =
    totalTests > 0
      ? (
          studentData.reduce((sum, item) => sum + item.marks, 0) / totalTests
        ).toFixed(2)
      : 0;

  const calculateAverage = () => {
    const subjectMarks = {};
    studentData.forEach((item) => {
      if (!subjectMarks[item.subjectName]) {
        subjectMarks[item.subjectName] = [];
      }
      subjectMarks[item.subjectName].push(item.marks);
    });

    let highestAvgSubject = "";
    let highestAvg = 0;

    for (const subject in subjectMarks) {
      const marksArray = subjectMarks[subject];
      const avg = marksArray.reduce((a, b) => a + b, 0) / marksArray.length;
      if (avg > highestAvg) {
        highestAvg = avg;
        highestAvgSubject = subject;
      }
    }

    return { highestAvgSubject, highestAvg: highestAvg.toFixed(2) };
  };

  const { highestAvgSubject, highestAvg } = calculateAverage();

  const handleRemoveTest = (indexToRemove) => {
    console.log("Removing index:", indexToRemove);
    const updatedData = [...studentData]; 
    updatedData.splice(indexToRemove, 1); 
    setStudentData(updatedData); 
  };
  

  return (
    <div className="dashboard-section">
      <div className="animated-bg"></div>
      <br />
      <h2 className="dashboard-title">Welcome {userName || "Student"}!</h2>

      {/* Summary Cards */}
      <div className="summary-cards">
        <div className="summary-card">
          <h3>Total Tests</h3>
          <p>{totalTests}</p>
        </div>
        <div className="summary-card">
          <h3>Average Score</h3>
          <p>{averageScore}</p>
        </div>
        <div className="summary-card">
          <h3>Total Subjects</h3>
          <p>{totalSubjects}</p>
        </div>
      </div>

      {/* Best Subject */}
      <div className="average-info">
        <h3>📚 Best Subject</h3>
        <p>
          <strong>{highestAvgSubject}</strong> with average marks of{" "}
          <strong>{highestAvg}</strong>
        </p>
      </div>

      <br />

      {studentData.length > 0 ? (
        <>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="subjectName" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="marks" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Table for Test Data */}
          <div className="subject-list-container">
            <h3>📋 Test Data</h3>
            <table className="test-data-table">
              <thead>
                <tr>
                  <th>Test Name</th>
                  <th>Subject</th>
                  <th>Marks</th>
                  <th>Action</th> 
                </tr>
              </thead>
              <tbody>
                {studentData.map((data, index) => (
                  <tr key={index}>
                    <td>{data.testName}</td>
                    <td>{data.subjectName}</td>
                    <td>{data.marks}</td>
                    <td>
                      <button onClick={() => handleRemoveTest(index)} className="remove-btn">
                        ❌ Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <p className="no-data-text">No data available. Please add some.</p>
      )}

    </div>
  );
};

export default Dashboard;

