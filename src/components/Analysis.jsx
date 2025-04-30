import React, { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts";
import "../css/analysis.css";

const Analysis = ({ studentData }) => {
  if (!studentData || studentData.length === 0) {
    return (
      <div className="analysis-section no-data">
        <div className="analysis-bg" />
        <h2 className="analysis-title">📊 Student Performance Analysis</h2>
        <div className="no-data-container">
          <p>No data available for analysis. Please add some data.</p>
        </div>
      </div>
    );
  }

  const groupedBySubject = {};
  studentData.forEach((item, index) => {
    if (!groupedBySubject[item.subjectName]) {
      groupedBySubject[item.subjectName] = [];
    }
    groupedBySubject[item.subjectName].push({
      test: item.testName?.toUpperCase() || `Test ${index + 1}`,
      marks: item.marks,
    });
  });

  const sortedByMarks = [...studentData].sort((a, b) => b.marks - a.marks);
  const topTests = sortedByMarks.slice(0, 3);
  const bottomTests = sortedByMarks.slice(-3);

  const analysisRef = useRef();

  const handleDownloadPDF = () => {
    const input = analysisRef.current;
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("student_analysis.pdf");
    });
  };

  return (
    <div className="analysis-section">
      <div className="analysis-bg" />
      <br />
      <br />
      <h2 className="analysis-title">📊 Student Performance Analysis</h2>

      <div ref={analysisRef}>
        <section className="chart-grid">
          {Object.entries(groupedBySubject).map(([subject, tests], index) => (
            <div key={index} className="chart-card">
              <h3>{subject}</h3>
              <ResponsiveContainer width="100%" height={240}>
                <BarChart data={tests}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="test" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="marks" fill="#00C49F" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          ))}
        </section>

        <section className="performance-section">
          <h2 className="section-heading">🏆 Top 3 Performances</h2>
          <ul className="performance-list top">
            {topTests.map((item, index) => (
              <li key={index}>
                <span>{item.testName.toUpperCase()}</span> — <strong>{item.marks} Marks</strong>
              </li>
            ))}
          </ul>

          <h2 className="section-heading">📉 Bottom 3 Performances</h2>
          <ul className="performance-list bottom">
            {bottomTests.map((item, index) => (
              <li key={index}>
                <span>{item.testName.toUpperCase()}</span> — <strong>{item.marks} Marks</strong>
              </li>
            ))}
          </ul>
        </section>

        <button className="download-btn" onClick={handleDownloadPDF}>
          📥 Download PDF
        </button>
      </div>
    </div>
  );
};

export default Analysis;
