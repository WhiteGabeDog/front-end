import ScrollH from '../components/scrollH';
import { header, data } from '../mockData';
import './index.css';

const Home = () => {
  return (
    <>
      <img 
        className='w-full h-[440px] object-cover'
        src='https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2607&q=80'
        alt=''>
      </img>
      <h2>{header}</h2>
      <ScrollH data={data}/>
      <h2>{header}</h2>
      <ScrollH data={data}/>
      <h2>{header}</h2>
      <ScrollH data={data}/>
      <h2>{header}</h2>
      <ScrollH data={data}/>
    </>
  );
}
  
export default Home;