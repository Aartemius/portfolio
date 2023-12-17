import styles from './ProjectItem.module.scss';

const ProjectItem = ({ project, onMouseEnter, onMouseLeave, onMouseMove }) => {
  
  return (
    <div className={ styles.project } onMouseEnter={ onMouseEnter } onMouseLeave={ onMouseLeave } onMouseMove={ onMouseMove } >
      <h4>{ project.title }</h4>
      <p className={ styles.projectDescription }>{ project.description }</p>
      <p className={ styles.usedTechnologies }>
        <strong>Used technologies: </strong>{ project.used_technologies }
      </p>
      <div className={ styles.linksWrap }>
        <a
          target="_blank"
          href={ project.url }
          rel="noreferrer"
          className={ styles.externalLink }
        >
          <span>View</span>
          <img
            src="images/external-link.png"
            alt={ `view ${ project.url }` }
          />
          <div className={ styles.projectPopup }>
            <img src={ project.img.url } alt={ project.img.title } />
          </div>
        </a>
        <a
          target="_blank"
          href={ project.repo_link }
          rel="noreferrer"
          className={ styles.externalLink }
        >
          <span>Repository</span>
          <img
            src="images/external-link.png"
            alt={ `view ${ project.url }` }
          />
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;