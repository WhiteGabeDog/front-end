import { header, data } from '../mockData';
import ScrollH from '../components/scrollH';
import Navbar from '../components/Navbar';

const MyGame = () => {
  return (
    <>
      <Navbar/>
      <ScrollH data={data}/>
    </>
  );
}
  
export default MyGame;