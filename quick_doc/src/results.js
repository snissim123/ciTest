import React from 'react'

// list of symptoms "selected"
// diagnosis w/ accuracy + doctor type
// list of doctors in area



class Result extends React.Component {
  render() {
    return (
        <div>
            <h1>Your Results</h1>

            <h3>Your symptoms entered:</h3>
            <h5>fever, sneezing</h5>

            <h3>60% Accuracy: Common Cold</h3>
            <h5>A general practitioner would be a good first stop.</h5>


            <h2>General Practitioners in Your Area</h2>
            <h3>Evanston, IL</h3>

            <div>
                <h5>Northwestern University Health Services</h5>
                <h5>635 Emerson St</h5>
                <h5>Evanston, IL</h5>
                <h5>(123) 123 - 1234</h5>
                <h5>8 am - 6 pm Mon - Fri</h5>
            </div>

            <div>
                <h5>Dr. Sally John, M.D.</h5>
                <h5>General Practitioner</h5>
                <h5>2305 Sheridan Rd</h5>
                <h5>Evanston, IL</h5>
                <h5>(111) 222 - 3333</h5>
                <h5>9 am - 5 pm Mon - Fri</h5>
            </div>

            <div>
                <h5>Dr. Joe Steve, M.D.</h5>
                <h5>General Practitioner</h5>
                <h5>1234 Davis St</h5>
                <h5>Evanston, IL</h5>
                <h5>(4444) 222 - 1111</h5>
                <h5>9 am - 5 pm Mon - Sat</h5>
            </div>

            <p>A reminder: QuickDoc is not a professional opinion and is merely intended to provide possible insight. Always go see a health care professional. If symptoms are severe, call 911 for help.</p>
        </div>
    )
  }
}
export default Result