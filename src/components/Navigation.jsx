import styles from './Navigation.module.css'

function Navigation() {
    return (
        <div className={styles.navigation}>
            <img src="./images/logo.svg" alt="" />
            <ul>
                <li>Features</li>
                <li>Team</li>
                <li>Sign In</li>
            </ul>
        </div>
    )
}

export default Navigation
