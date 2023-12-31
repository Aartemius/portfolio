import { useState } from "react";
import styles from './FooterItem.module.scss';

const FooterItem = ({
  descriptionText,
  link,
  isTargetBlank,
  iconUrl,
  altText
}) => {
  const [isDescriptionShown, setIsDescriptionShown] = useState(false);
  const [description, setDescription] = useState({
    text: descriptionText,
    isCopyIconShown: true
  });

  const handleOpenItemDetails = () => {
    setDescription({
      text: descriptionText,
      isCopyIconShown: true
    });
    setIsDescriptionShown(true);
  }

  const handleDescriptionClick = () => {
    navigator.clipboard.writeText(descriptionText)
    .then(() => {
      setDescription({
        text: 'Copied to clipboard',
        isCopyIconShown: false
      });
      setTimeout(() => setIsDescriptionShown(false), 1000);
    })
    .catch((err) => {
      setDescription({
        text: 'Unable to copy text to clipboard',
        isCopyIconShown: false
      });
      console.error('Unable to copy text to clipboard', err);
    });
  }

  return (
    <div
      className={ styles.footerItem }
      onMouseEnter={ handleOpenItemDetails }
      onMouseLeave={ () => setIsDescriptionShown(false) }
    >
      {isDescriptionShown && 
        <div 
        className={ styles.linkDetails }
        onClick={ handleDescriptionClick }
        >
          <span>
            { description.text }
          </span>
          { description.isCopyIconShown &&
            <img src="images/copy.svg" alt="copy text" />
          }
        </div>
      }
      <a 
        href={ link }
        target={ isTargetBlank ? '_blank' : undefined }
        rel={ isTargetBlank ? 'noreferrer' : undefined }
      >
        <img 
          src={ iconUrl } 
          alt={ altText } 
        />
      </a>
    </div>
  );
}

export default FooterItem;