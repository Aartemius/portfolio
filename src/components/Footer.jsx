import styles from './Footer.module.scss';
import FooterItem from './FooterItem';

const Footer = () => {

  return (
    <footer id="contacts" className={ styles.footer }>
      <h2>Contacts:</h2>
      <div className={ styles.footerWrap }>
        <FooterItem 
          descriptionText="artfront88@gmail.com"
          link="mailto:artfront88@gmail.com"
          iconUrl="images/mail.svg"
          altText="email"
        />
        <FooterItem 
          descriptionText="+380636619256"
          link="tel:380636619256"
          iconUrl="images/phone.svg"
          altText="telephone"
        />
        <FooterItem 
          descriptionText="https://t.me/Artem_Sweet_N_Sour"
          link="https://t.me/Artem_Sweet_N_Sour"
          isTargetBlank
          iconUrl="images/telegram.png"
          altText="telegram"
        />
        <FooterItem 
          descriptionText="https://www.linkedin.com/in/artem-antonov-3741b7249/"
          link="https://www.linkedin.com/in/artem-antonov-3741b7249/"
          isTargetBlank
          iconUrl="images/linkedin.png"
          altText="linkedin"
        />
      </div>
    </footer>
  );
}

export default Footer;