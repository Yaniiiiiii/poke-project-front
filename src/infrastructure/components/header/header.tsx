import style from './header.module.css';

export const Header = () => {
    return (
        <>
            <header className={style.header}>
                <img src="./assets/logo.png" alt="pokemon"></img>
            </header>
        </>
    );
};
