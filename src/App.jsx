import React from 'react';
import './App.css';

function App() {
  const results = [
    { code: '23K312', title: 'ENVIRONMENTAL SCIENCE', credit: 0, grade: 'Completed', result: 'Pass' },
    { code: '23O305', title: 'ENGINEERING ECONOMICS', credit: 4, grade: '9 A+', result: 'Pass' },
    { code: '23Q313', title: 'BUILDING COMMUNICATION SKILLS', credit: 1, grade: '8 A', result: 'Pass' },
    { code: '23TC01', title: 'HERITAGE OF TAMILS', credit: 1, grade: '9 A+', result: 'Pass' },
    { code: '23Z301', title: 'LINEAR ALGEBRA', credit: 4, grade: '7 B+', result: 'Pass' },
    { code: '23Z302', title: 'COMPUTER ORGANIZATION AND ARCHITECTURE', credit: 4, grade: '8 A', result: 'Pass' },
    { code: '23Z303', title: 'DATA STRUCTURES', credit: 3, grade: '7 B+', result: 'Pass' },
    { code: '23Z304', title: 'DISCRETE STRUCTURES', credit: 4, grade: '7 B+', result: 'Pass' },
    { code: '23Z310', title: 'OBJECT ORIENTED PROGRAMMING LABORATORY', credit: 2, grade: '9 A+', result: 'Pass' },
    { code: '23Z311', title: 'DATA STRUCTURES LABORATORY', credit: 2, grade: '8 A', result: 'Pass' },
    { code: '23Z315', title: 'ACTIVITY POINT PROGRAMME', credit: 0, grade: 'Completed', result: 'Pass' },
  ];

  return (
    <div className="main-container">
      {/* Top Bar Row 1: Student Zone */}
      <div className="top-header-zone">
        Student Zone
      </div>

      {/* Top Bar Row 2: Info Strip */}
      <div className="info-strip">
        <div className="strip-left">
          <span className="date">05 February 2026</span>
          <span className="leave">Leave</span>
        </div>
        <div className="strip-right">
          <span className="student-name">PRASANNA B ( 24Z251 )</span>
          <a href="#" className="sign-out">Sign Out</a>
        </div>
      </div>

      {/* College Header */}
      <div className="college-header">
        PSG COLLEGE OF TECHNOLOGY
      </div>

      {/* Main Content */}
      <div className="content">
        <div className="exam-title-section">
          <h3>SEMESTER EXAMINATIONS RESULT NOV 2025 - JAN 2026</h3>
          <h2>Results (Provisional)</h2>
        </div>

        <div className="student-info-section">
          <div className="info-block left">
            <div className="info-row">
              <span className="info-label">Name</span>
              <span className="info-separator">:</span>
              <span className="info-value">PRASANNA B</span>
            </div>
            <div className="info-row">
              <span className="info-label">Programme</span>
              <span className="info-separator">:</span>
              <span className="info-value">BE COMPUTER SCIENCE & ENGINEERING</span>
            </div>
          </div>
          <div className="info-block right">
            <div className="info-row">
              <span className="info-label">Roll No</span>
              <span className="info-separator">:</span>
              <span className="info-value">24Z251</span>
            </div>
          </div>
        </div>

        <div className="results-container">
          <div className="table-wrapper">
            <table className="results-table">
              <thead>
                <tr>
                  <th className="th-sem">Sem/Trim</th>
                  <th className="th-course">Course</th>
                  <th className="th-title">Title</th>
                  <th className="th-credit">Credit</th>
                  <th className="th-grade">Grade/Remark</th>
                  <th className="th-result">Result</th>
                </tr>
              </thead>
              <tbody>
                {results.map((row, index) => (
                  <tr key={index}>
                    {index === 0 && (
                      <td rowSpan={results.length} className="td-sem">3</td>
                    )}
                    <td className="td-course">{row.code}</td>
                    <td className="td-title">{row.title}</td>
                    <td className="td-credit">{row.credit}</td>
                    <td className="td-grade">{row.grade}</td>
                    <td className="td-result">{row.result}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="sidebar-link">
            <a href="#">Revaluation Circular</a>
          </div>
        </div>

        <div className="disclaimer">
          Disclaimer : Grades alloted are tentative and likely to change after final processing.
        </div>

        <div className="actions">
          <button className="btn-ok">Ok</button>
        </div>
      </div>
    </div>
  );
}

export default App;
