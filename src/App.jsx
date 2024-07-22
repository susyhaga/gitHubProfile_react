import { useState, useEffect } from 'react'
import Perfil from './components/Perfil'
import RepoList from './components/ReposList'


function App() {
  const [userName, setUserName] = useState('');
  return (
    <>
    <input type="text" onBlur={(e)=>setUserName(e.target.value)}/>
    {userName.length>4 &&(
      <>
        <Perfil userName={userName} className=''></Perfil>
        <RepoList userName={userName}></RepoList>
      </>
    )}
    </>
  )
}

export default App





