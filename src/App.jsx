import { useState, useEffect } from 'react'
import Perfil from './components/Perfil'
import RepoList from './components/ReposList'


function App() {
  const [userName, setUserName] = useState('');
  return (
    <>
      <div className='inputContainer'>
        <h1 className='title'>GitHub Profile</h1>
        <p className='p'>Type a username GitHub</p>
        <input className='input' type="text" onBlur={(e)=>setUserName(e.target.value)}/>
        {userName.length>4 &&(
          <>
            <Perfil userName={userName} className=''></Perfil>
            <RepoList userName={userName}></RepoList>
          </>
        )}
      </div>
    </>
  )
}

export default App





