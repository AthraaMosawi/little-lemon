import "./Reservation.scss";
import Image from "../assets/chef.jpg";
import Image2 from "../assets/restaurant.jpg";
import { useState } from "react";

const Reservation = () => {
  const [occasion, setOccasion] = useState("");
  const [preferences, setPreferences] = useState("");
  const [comments, setComments] = useState("");

  return (
    <section className="reservation">
      {/* <div className="container"> */}
      <section className="reservation-wrap">
        <div className="form-wrap">
          <h1 className="title">Little Lemon</h1>
          <h2 className="subTitle">Chicago</h2>
          <form action="/confirmed">
            <section className="personal-details">
              <h2 className="section-heading">
                Find a table for any occasion{" "}
              </h2>
              <div className="img-wrap">
                <img src={Image2} alt="Restaurant" />
                <img src={Image} alt="Chef" />
              </div>
              <div className="dateTimeContainer">
                <input
                  type="date"
                  name="date"
                  id="date"
                  placeholder="Date"
                  required
                />
                <select id="res-time">
                  <option disabled selected>
                    Time
                  </option>
                  <option>17:00</option>
                  <option>18:00</option>
                  <option>19:00</option>
                  <option>20:00</option>
                  <option>21:00</option>
                  <option>22:00</option>
                </select>
              </div>
              <div>
                <input
                  type="number"
                  name="number"
                  id="number"
                  min="2"
                  max="20"
                  placeholder="Number of Diners"
                  required
                />
              </div>
              <div>
                <select
                  id="occasion"
                  value={occasion}
                  onChange={(e) => setOccasion(e.target.value)}
                  className="occasions"
                >
                  <option disabled selected>
                    Occasion
                  </option>
                  <option>BabyShower</option>
                  <option>Birthday</option>
                  <option>Anniversary</option>
                  <option>Engagement</option>
                  <option>Wedding</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="radioBtnContainer">
                <label htmlFor="preferences">Seating preferences:</label>
                {/* <select
                    id="preferences"
                    value={preferences}
                    onChange={(e) => setPreferences(e.target.value)}
                  >
                    <option>None</option>
                    <option>Indoors</option>
                    <option>Outdoor (Patio)</option>
                    <option>Outdoor (Sidewalk)</option>
                  </select> */}
                <input
                  type="radio"
                  name="preferences"
                  value={preferences}
                  id="Standard"
                  onChange={(e) => setPreferences(e.target.value)}
                  style={{ marginTop: 0 }}
                />
                <label htmlFor="Standard">Standard</label>

                <input
                  type="radio"
                  name="preferences"
                  value={preferences}
                  id="Outside"
                  onChange={(e) => setPreferences(e.target.value)}
                  style={{ marginTop: 0 }}
                />
                <label htmlFor="Outside">Outside</label>
              </div>
            </section>

            <section className="personal-details">
              <h2 className="section-heading">Sign in to collect points </h2>

              <input
                type="text"
                name="FullName"
                id="fullname"
                maxLength="30"
                required
                placeholder="Full Name"
              />
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="E-mail Id"
                maxLength="30"
              />
              <input
                type="text"
                name="mobile"
                id="mobile"
                minLength="5"
                maxLength="10"
                placeholder="(+1) Mobile Number"
                required
              />
              <div>
                <textarea
                  id="comments"
                  rows={8}
                  cols={50}
                  placeholder="Add a special requests (optional)"
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                ></textarea>
              </div>
            </section>
            <br></br>
            <div className="btnReceive">
              <button type="submit">Confirm Reservation</button>
            </div>
          </form>
        </div>
      </section>
      {/* </div> */}
    </section>
  );
};

export default Reservation;
