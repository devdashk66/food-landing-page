import "./ResturentDetels.css";
import { BiTimeFive } from "react-icons/bi";
import { IoLocationSharp } from "react-icons/io5";
import { BsTelephoneFill } from "react-icons/bs";

function ResturentDetels() {
  return (
    <div className="container" id="ResturentDetels">
      <div className="time">
        <BiTimeFive />
        <h2>Today 10:0 am - 7:00 pm</h2>
        <p>Working hours</p>
      </div>
      <div className="locetion">
        <IoLocationSharp />
        <h2>Velyka Casylikivska</h2>
        <p>Get Directions</p>
      </div>
      <div className="call">
        <BsTelephoneFill />
        <h2>+1 (026)899 24 75</h2>
        <p>Call Online</p>
      </div>
    </div>
  );
}

export default ResturentDetels;
