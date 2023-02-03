import Link from 'next/link';
import Footer from '../src/components/Footer';
import Navbar from '../src/components/Navbar';

const AboutPage = () => (
  <div>
    <Navbar />
    <div className="w-screen h-screen bg-gray-900 text-white overflow-scroll ">
      <h1 className="text-white font-bold text-center text-2xl my-10">About</h1>
      <p className="text-white mx-10 md:mx-28 text-lg">
        This is the about page for my little gallery app for a small project for
        Wild Code School. The paintings displayed are not really being sold on
        this site but if you want to support the artists, you can contact them
        through Pexels.com. The artists who have displayed work on this site
        (frontend and admin) are Min An, Steve Johnson,Alexander Ant, Pixabay
        and W W.
      </p>
      <p></p>
    </div>
    <Footer />
  </div>
);

export default AboutPage;
