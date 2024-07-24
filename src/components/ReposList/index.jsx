import { useState, useEffect } from 'react';
import styles from './ReposList.module.css';

const RepoList = ({userName}) => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setEstaCarregando(true);
        setError(null);

        fetch(`https://api.github.com/users/${userName}/repos`)
        .then(res => {
            if (!res.ok) {
                throw new Error('User not found');
            }
            return res.json();
        })
        .then(resJson => {
            setTimeout(() => {
                setEstaCarregando(false);
                setRepos(resJson);
            }, 3000);
        })
        .catch(err => {
            setEstaCarregando(false);
            setError(err.message);
        });

    }, [userName]); 

    return (
        <div className='container'>
            {error ? (
                <h1>{error}</h1>
            ) : estaCarregando ? (
                <h1>Loading...</h1>
            ) : (
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
