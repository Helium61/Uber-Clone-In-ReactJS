
import { Link } from 'react-router-dom'; // Corrected import

const ConfirmRidePopUp = (props) => {

  return (
    <>
      {/* Header with arrow icon */}
      <h5 className="p-2 text-center">
        <i
          className="text-4xl text-gray-200 ri-arrow-down-wide-line cursor-pointer"
          onClick={() => {
            props.setFinishRidePanel(false);
          }}
        ></i>
      </h5>
      <h3 className="text-2xl font-bold mb-6 text-center">Finish This Ride</h3>

      {/* Driver, fare, and distance info */}
      <div className="flex flex-col p-4 bg-yellow-100 rounded-xl mt-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-4">
            <img
              className="h-14 w-14 rounded-full object-cover"
              src="https://i.pinimg.com/236x/af/26/28/af26280b0ca305be47df0b799ed1b12b.jpg"
              alt=""
            />
            <div>
              <h2 className="text-xl font-semibold capitalize">HELIUM</h2>
              <p className="text-base text-gray-600">Cash</p>
            </div>
          </div>
          <div className="text-right">
            <h3 className="text-2xl font-semibold">$25.00</h3>
            <h5 className="text-xl font-semibold">2.2 km</h5> {/* Moved outside div and adjusted margin */}
          </div>
        </div>
      </div>

      {/* Pickup and Drop-off info */}
      <div className="flex flex-col gap-3 mt-6">
        <div className="flex items-center gap-4 p-4 border-b-2 border-gray-200">
          <i className="ri-map-pin-user-fill text-xl"></i>
          <div>
            <h3 className="text-lg font-semibold">562/11-A</h3>
            <p className="text-sm text-gray-600">Saroba garden</p>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4 border-b-2 border-gray-200">
          <i className="ri-map-pin-2-fill text-xl"></i>
          <div>
            <h3 className="text-lg font-semibold">562/11-A</h3>
            <p className="text-sm text-gray-600">Muslim Town</p>
          </div>
        </div>
      </div>

      {/* OTP Input and Buttons */}
      <div className="mt-6 w-full">
        <form>
          
          <div className="mt-6 w-full flex gap-4">
           
            <Link
              to="/captain-home" // Corrected 't0' to 'to'
              className="bg-green-600 w-full justify-center flex text-white text-lg font-semibold py-3 px-8 rounded-xl hover:bg-green-700 transition-colors"
            >
              Confirm
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default ConfirmRidePopUp;