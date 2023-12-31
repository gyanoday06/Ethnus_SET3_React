import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

export default function Idx() {
  return (
    <div className="index-container">
      <h1 className="index-title">Index</h1>
      <div className="table-container">
        <table className="table--index">
          <caption>
            <h2>React Tasks</h2>
          </caption>
          <tbody>
            {generateTaskRows('React_Tasks', 6)}
          </tbody>
        </table>
      </div> <br />
      <center>
      <h5>
        Repository link - <a href="https://github.com/gyanoday06/Ethnus_SET3_React.git">https://github.com/gyanoday06/Ethnus_SET3_React.git</a>
      </h5>
      <br />
        <h5>
          • I have deployed in Github because I have used HashRouter and its not getting deployed in vercel
        </h5>
      </center>
    </div>
  );
}

function generateTaskRows(folder, rowCount) {
  const rows = [];
  for (let i = 1; i <= rowCount; i++) {
    rows.push(
      <tr key={i}>
        <td>{i}</td>
        <td>Task {i}</td>
        <td>
          <Link to={`/task${i}`}>Link</Link>
        </td>
      </tr>
    );
  }
  return rows;
}
