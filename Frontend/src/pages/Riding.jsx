import { Link } from 'react-router-dom';

const Riding = () => {
  return (
    <div className='h-screen overflow-hidden'> {/* Prevent scrolling */}
      <Link to='/home' className='fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full'>
        <i className="text-lg font-medium ri-home-5-line"></i>
      </Link>
      {/* Map Section */}
      <div
        className='h-2/3 bg-cover bg-center'
        style={{
          backgroundImage:
            "url('https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif')",
        }}
      ></div>
      {/* Bottom Section */}
      <div className='h-1/3 p-4'>
        <div className='flex items-center justify-between'>
          <img
            className='h-16'
            src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"
            alt=""
          />
          <div className='text-right'>
            <h2 className='text-xl font-medium capitalize'>hello</h2>
            <h4 className='text-xl font-semibold -mt-1 -mb-1'>1427921394921</h4>
            <p className='text-sm text-gray-600'>Maruti Suzuki Alto</p>
          </div>
        </div>
        <div className='flex flex-col items-center mt-5'>
          <div className='w-full'>
            <div className='flex items-center gap-5 p-3 border-b-2'>
              <i className="text-lg ri-map-pin-2-fill"></i>
              <div>
                <h3 className='text-lg font-medium'>562/11-A</h3>
                <p className='text-sm -mt-1 text-gray-600'>muslim town</p>
              </div>
            </div>
            <div className='flex items-center gap-5 p-3'>
              <i className="ri-currency-line"></i>
              <div>
                <h3 className='text-lg font-medium'>100000</h3>
                <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
              </div>
            </div>
          </div>
        </div>
        <button className='w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg'>
          Make a Payment
        </button>
      </div>
    </div>
  );
};

export default Riding;
