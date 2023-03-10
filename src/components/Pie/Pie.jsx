import React from "react";
import "./Pie.css";

function Pie() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}

          <div className="col">
            <h4>THICC MEMES INC</h4>
            <ul className="p-list list-unstyled">
              <li>342-420-6969</li>
              <li>Moscow, Russia</li>
              <li>123 Streeet South North</li>
            </ul>
          </div>

          {/* Column2 */}
          <div className="col">
            <h4>Stuff</h4>
            <ul className="p-list list-unstyled">
              <li>DANK MEMES</li>
              <li>OTHER STUFF</li>
              <li>GUD STUFF</li>
            </ul>
          </div>


          {/* Column3 */}
          <div className="col">
            <h4>WELL ANOTHER COLUMN</h4>
            <ul className="p-list list-unstyled">
              <li>DANK MEMES</li>
              <li>OTHER STUFF</li>
              <li>GUD STUFF</li>
            </ul>
          </div>



        </div>
        <hr />
        <div className="row">
          <p className="p-pie col-sm">
            &copy;{new Date().getFullYear()} THICC MEMES | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Pie;