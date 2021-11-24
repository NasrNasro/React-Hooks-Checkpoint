import React from "react";
import {MDBContainer, MDBFooter } from "mdbreact";

function Footer() {
  return (
    <MDBFooter color="orange" className="font-small pt-4 mt-4">
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: Nassreddine Hnana
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}
export default Footer