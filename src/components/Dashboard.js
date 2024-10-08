import React, { useState } from 'react';
import './scss/_dashboard.scss';
import './scss/_global.scss';
import Sidebar from './Sidebar';
import Header from './Header';
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  // Invoice statistics
  const totalInvoices = 1135;
  const paidPercentage = 50; // For #4B58D2
  const overduePercentage = 27; // For #18222C
  const unpaidPercentage = 20; // For #E2EBF2

  return (
    <div className="dashboard">
      <Header toggleSidebar={toggleSidebar} />
      <div className="layout">
        <Sidebar isOpen={isSidebarOpen} />
        <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : ''}`}>
          {/* Cards first section */}
          <div className="cards">
            <div className="card">
              <h3>Customers</h3>
              <p>1000</p>
            </div>
            <div className="card">
              <h3>Revenue</h3>
              <p>$50,000</p>
            </div>
            <div className="card">
              <h3>Profit</h3>
              <p>$20,000</p>
            </div>
            <div className="card">
              <h3>Invoices</h3>
              <p>150</p>
            </div>
          </div>
          {/* End first section */}

          {/* Cards second section */}
          <div className="statics">
            <div className="row">
              <div className="col col-5 invoice-stats">
                <div className="row">
                <div className="invoice-details col col-3">
  <div className="stat">
    <h4>Total Paid</h4>
    <p>$40,000</p>
  </div>
  <div className="stat">
    <h4>Total Overdue</h4>
    <p>$5,000</p>
  </div>
  <div className="stat">
    <h4>Total Unpaid</h4>
    <p>$10,000</p>
  </div>
                  </div>
                  <div className="circle-graph col col-3">
                  <CircularProgressbarWithChildren
                  value={80} // Set to 100 for full circle
                  styles={buildStyles({
                    pathColor: "#000", // Background circle color
                    trailColor: "#eee", // Background trail color
                    strokeLinecap: "butt",
                  })}
                >
                  <div style={{ position: 'relative', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                    <CircularProgressbar
                      value={40}
                      styles={buildStyles({
                        pathColor: "#4B58D2", // Path color for 40%
                        trailColor: "#eee", // Trail color for 40%
                        strokeLinecap: "butt",
                      })}
                    />
                  </div>
                  <div className="invoices" style={{ fontSize: '20px', color: '#000', marginTop: '10px' }}>
                    {totalInvoices} invoices
                  </div>
                </CircularProgressbarWithChildren>


                  </div>

                </div>
              </div>

              <div className="col col-7">
                {/* Additional content can go here */}
              </div>
            </div>
          </div>
          {/* End second section */}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
