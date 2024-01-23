import './App.css';
// import LikeImage from './components/LikeImage';
// import LikePost from './components/LikePost';
import LikeImageHOC from './components/HOC/LikeImageHOC';
import LikePostHOC from './components/HOC/LikePostHOC';
import LikeImageProps from './components/RenderProps/LikeImageProps';
import LikePostProps from './components/RenderProps/LikePostProps';

function App() {
  return (
    <div>
      {/* <h3>Some Blog</h3>
      <div className='buttons'>
        <LikePost/>
        <LikeImage/>
      </div> */}

      {/* Part I - HOC Logic */}
      <h1>Blog Using HOC</h1>
      <div className='buttons'>
          <LikeImageHOC/>
          <LikePostHOC/>
      </div>

      {/* Part II - Props Logic */}
      <h1>Blog Using Props</h1>
      <div className='buttons'>
          <LikeImageProps/>
          <LikePostProps/>
      </div>
    </div>
  );
}

export default App;
