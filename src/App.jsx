import { useState, useEffect } from 'react'
import Perfil from './components/Perfil'
import RepoList from './components/ReposList'


function App() {
  const [userName, setUserName] = useState('');
  const [isFullScreen, setIsFullScreen] = useState(true);

  const handleInputBlur = (e) => {
    setUserName(e.target.value);
    if (e.target.value.length > 4) {
      setIsFullScreen(false);
    } else {
      setIsFullScreen(true);
    }
  };

  return (
    <>
      <div className={`inputContainer ${isFullScreen ? 'fullscreen' : 'shrink'}`}>
        <h1 className='title'>GitHub Profile</h1>
        <p className='p'>Type a username GitHub</p>
        <input className='input' type="text" onBlur={handleInputBlur} />
      </div>
        {userName.length > 4 && (
          <>
            <Perfil userName={userName} className='' />
            <RepoList userName={userName} />
          </>
        )}
  
    </>
  );
}

export default App





