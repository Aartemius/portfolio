import styles from './App.module.scss';
import ProjectItem from './components/ProjectItem';
import { projects } from './projects-model';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {

  return (
    <>
    <Header />
      <div className={styles.app}>
        <h3>Some of my pet-projects</h3>
        <ul>
          {projects.map((project, index) => (
            <ProjectItem
              key={index}
              project={project} />
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
}

export default App;
