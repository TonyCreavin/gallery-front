import Link from 'next/link';
import axios from 'axios';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import Card from '../src/components/Card';
import { useEffect, useState } from 'react';

type Painting = {
  id: string;
  name: string;
  content: string;
  imageUrl: string;
  price: string;
  isSold: boolean;
  categoryId: string;
};

type Category = {
  id: string;
  name: string;
};

const IndexPage = () => {
  const [image, setImage] = useState([]);
  const [painting, setPainting] = useState<Painting[]>([]);
  const [category, setCategory] = useState<Category[]>([]);

  const getAllImages = async () => {
    const { data } = await axios.get('http://localhost:5001/api/v1/paintings');
    setImage(data);
    console.log(image);
  };

  // useEffect(() => {
  //   axios
  //     .get<Category[]>('http://localhost:5001/api/v1/category')
  //     .then((res) => setCategory(res.data));
  //   axios
  //     .get<Painting[]>('http://localhost:5001/api/v1/painting')
  //     .then((res) => setPainting(res.data));
  // }, []);

  useEffect(() => {
    getAllImages();
  }, []);
  return (
    <div className="flex flex-col ">
      <Navbar />
      <div className="w-screen h-full bg-gray-900 text-white overflow-scroll ">
        <h1 className="text-white pt-5 font-bold text-2xl text-center md:pb-6 ">
          My Paintings
        </h1>
        <div className="flex flex-row gap-20 jusify-around flex-wrap mx-5">
          {image.map((painting) => (
            <Card painting={painting} />
          ))}
          {/* {painting.map((painting) => (
          <Card />
        ))}
        {category.map((category) => (
          <Card />
        ))} */}
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default IndexPage;
