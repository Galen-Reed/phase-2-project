import React from "react";
import { CCard, CCardBody, CCardTitle, CCardText } from "@coreui/react";
import '@coreui/coreui/dist/css/coreui.min.css'
import './DriverCard.css';


function DriverCard({ drivers }) {
  return (
    <div className="card-grid">
          {drivers.map((driver) => (
            <CCard key={driver.id} className="ccard" style={{ width: '18rem', margin: '1rem' }}>
              <CCardBody>
                <CCardTitle>{driver.name}</CCardTitle>
                <br />
                <CCardText>
                  <strong>Points:</strong> {driver.points}
                </CCardText>
                <CCardText>
                  <strong>Nationality:</strong> {driver.nationality}
                </CCardText>
              </CCardBody>
            </CCard>
          ))}
        </div>
  );
}

export default DriverCard;

