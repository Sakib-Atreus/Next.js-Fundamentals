import styles from './About.module.css'

export const metadata = {
    title: "Next.js | About",
    description: "This is home page"
  }

const AboutPage = () => {
    return (
        <div className="bg-white">
            <h1 className={styles.heading}>This is about route page</h1>
        </div>
    );
};

export default AboutPage;