import styles from './Header.module.scss'

const Header = () => {
  const handleContactsClick = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  };

  return (
    <header className={ styles.header }>
      <h1>Pet-projects</h1>
      <h3>Author: Artem Antonov, { ' ' }
        <span className={ styles.contactLink } onClick={ handleContactsClick }>contacts <img src="images/arrow-down.svg" alt="contacts" /> </span>
      </h3>
    </header>
  );
}

export default Header;