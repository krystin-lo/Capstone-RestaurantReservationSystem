import React, { useState } from "react";
import ErrorAlert from "../layout/ErrorAlert";
import { listReservations } from "../utils/api";
import ReservationRow from "../dashboard/ReservationRow";

/**
 * Search a reservation by phone numbers.
 */
export default function Search() {
  const [mobileNumber, setMobileNumber] = useState("");
  const [reservations, setReservations] = useState([]);
  const [error, setError] = useState(null);

  /**
   * Update the state when the user edits the form.
   */
  function handleChange({ target }) {
    setMobileNumber(target.value);
  }

  /**
   * Validates and makes the API call when a form is submitted.
   */
  function handleSubmit(event) {
    event.preventDefault();

    const abortController = new AbortController();

    setError(null);

    listReservations({ mobile_number: mobileNumber }, abortController.signal)
      .then(setReservations)
      .catch(setError);

    return () => abortController.abort();
  }

  const searchResultsJSX = () => {
    return reservations.length > 0 ? (
      reservations.map((reservation) => (
        <ReservationRow
          key={reservation.reservation_id}
          reservation={reservation}
        />
      ))
    ) : (
      <tr>
        <td>No reservations found</td>
      </tr>
    );
  };

  return (
    <main className="main">
      <form className="searchForm">
        <ErrorAlert error={error} />

        <label c htmlFor="mobile_number">
          Enter a customer's phone number:
        </label>
        <input
          name="mobile_number"
          id="mobile_number"
          type="tel"
          onChange={handleChange}
          value={mobileNumber}
          required
        />
        <div className="searchButton">
          {" "}
          <button type="submit" onClick={handleSubmit}>
            Find
          </button>
        </div>
      </form>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Mobile Number</th>
            <th>Date</th>
            <th>Time</th>
            <th>People</th>
            <th>Status</th>
            <th>Edit</th>
            <th>Cancel</th>
            <th>Seat</th>
          </tr>
        </thead>

        <tbody>{searchResultsJSX()}</tbody>
      </table>
    </main>
  );
}