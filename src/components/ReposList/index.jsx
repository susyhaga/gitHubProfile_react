import { useState, useEffect } from 'react';
import styles from './ReposList.module.css';

const RepoList = ({userName}) => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);

    useEffect(() => {
        fetch(`https://api.github.com/users/${userName}/repos`)
            .then(res => res.json()) 
            .then(resJson => {
                setTimeout(() => {
                    setEstaCarregando(false);
                    setRepos(resJson);
                }, 3000);
            });
    }, [userName]); 

    return (
        <div className='container'>
            {estaCarregando ? (
                <h1>Carregando...</h1>
            ):(
                <ul className={styles.list}>
                    {repos.map(({ id, name, language, html_url }) => (
                        <li className={styles.listItem} key={id}>
                            <div className={styles.itemName}>
                                <b>Name:</b> {name}
                            </div>
                            <div className={styles.itemLanguage}>
                                <b>Language:</b> {language}
                            </div>
                            <a className={styles.itemLink} target='_blank' rel='noopener noreferrer' href={html_url}>
                                Visit on github
                            </a>
                        </li>
                    ))}
                </ul> 
            )}
        </div>
    );
}

export default RepoList;
