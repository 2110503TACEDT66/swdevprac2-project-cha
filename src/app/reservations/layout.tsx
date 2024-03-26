import styles from './reservations.module.css'

export default function Reservations ( {children} : {children: React.ReactNode} ){
    return (
        <div className={styles.sectionlayout}>
            {children}
        </div>
    );
}