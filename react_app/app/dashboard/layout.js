import styles from './dashboard.module.css'

export default function DashboardLayout({ children }) {
    return (
        <>
            <aside className={styles.aside}>
                <a href="#">Account</a>
                <a href="#">Orders</a>
                <a href="#">Wishlist</a>
                <a href="#">Settings</a>
            </aside>
            <div className={styles.dashboard_content}>
                {children}
            </div>
        </>
    )
  }