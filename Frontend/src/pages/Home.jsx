import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div className="relative w-screen h-screen flex justify-center items-end bg-cover bg-center" style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIdiBJvh5FfmhgPYRFxbZRD29a1yIN7N1TvEHcVSqHtI2fLE42')" }}>
      <div className="absolute top-6 left-6 text-black text-6xl font-bold">Uber</div>
      <div className="w-full bg-white p-6 rounded-t-2xl shadow-lg text-center">
        <h1 className="text-xl font-bold">Get started with Uber</h1>
        <Link to="/login" className="mt-4 w-full py-3 bg-black text-white rounded-lg flex items-center justify-center font-medium">
          Continue <span className="ml-2">→</span>
        </Link>
      </div>
    </div>
  );
};

export default Home;