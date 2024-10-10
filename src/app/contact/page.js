import styles from './Contact.module.css';

export const metadata = {
    title: "Next.js | Contact",
    description: "This is home page"
  }

const ContactUsPage = () => {
    return (
        <div className="bg-white">
            <h1 className={styles.heading}>This is our contact page!</h1>
        </div>
    );
};

export default ContactUsPage;