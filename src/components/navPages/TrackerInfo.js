import "./TrackerInfo.scss";

const TrackerInfo = () => {
  return (
    <div>
      <div className="section">
        <h2>Documenting the blood pressure readings</h2>
        <p>
          <ol>
            <li>click on Add new entry</li>
            <li>
              fill in the fields with the readings from your blood pressure
              measuring device
            </li>
            <li>
              click Add enty and it'll be saved as a record in the home view
            </li>
            <li>
              you have the option to edit or delete each record you enter using
              the emogies on the right side
            </li>
          </ol>
        </p>
      </div>
      <div className="section">
        <h2>Blood pressure levels at a glance</h2>
        <p>
          Blood pressure is measured in millimetres of mercury (mmHg). 1 mmHg is
          equivalent to a pressure of about 133 pascal or 0.00133 bar.
        </p>
        <p>
          There are two blood pressure readings: systolic blood pressure
          measures the maximum pressure generated during the contraction phase
          of the left ventricle of the heart. Diastolic blood pressure is the
          remaining pressure during the relaxation phase of the heart.
        </p>
        <p>
          Ideally, blood circulates at a maximum pressure of 120 over 80 mmHg.
          Up to 129/84 is considered normal; elevated blood pressure up to
          139/89 is still considered to be within the normal range. Higher
          levels may be a sign of potentially harmful high blood pressure:
          159/99 is considered slightly high blood pressure and levels over
          180/110 are considered to be severe high blood pressure.
        </p>
      </div>
      <div className="section">
        <h2>Blood pressure readings</h2>
        <div className="data-table">
          <table>
            <thead>
              <tr>
                <th>Category</th>
                <th>Systolic blood pressure</th>
                <th>Diastolic blood pressure</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Low</td>
                <td>&lt; 100</td>
                <td>&lt; 60</td>
              </tr>
              <tr>
                <td>Optimal</td>
                <td>&lt; 120</td>
                <td>&lt; 85</td>
              </tr>
              <tr>
                <td>Normal</td>
                <td>&lt; 130</td>
                <td>&lt; 85</td>
              </tr>
              <tr>
                <td>High-normal</td>
                <td>130 - 139</td>
                <td>85 - 89</td>
              </tr>
              <tr>
                <td>Stage 1 (mild hypertension)</td>
                <td>140 - 159</td>
                <td>90 - 99</td>
              </tr>
              <tr>
                <td>Stage 2 (moderate hypertension)</td>
                <td>160 - 179</td>
                <td>100 - 109</td>
              </tr>
              <tr>
                <td>Stage 3 (acute hypertension)</td>
                <td>&gt;= 180</td>
                <td>&gt;= 110</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="section">
        <h2>How to properly measure blood pressure</h2>
        <p>
          Blood pressure should be measured in a resting state, with the arm
          positioned roughly at the same height as the heart. To ensure reliable
          values, two measurements should be taken over a span of five minutes
          and then the average of the two readings calculated. Because blood
          pressure fluctuates over the course of the day, it should always be
          measured at the same time of day.
        </p>
      </div>
    </div>
  );
};

export default TrackerInfo;
