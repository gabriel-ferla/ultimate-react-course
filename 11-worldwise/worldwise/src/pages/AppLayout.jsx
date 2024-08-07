// import AppNav from "../components/AppNav"
import Sidebar from "../components/Sidebar"
import Map from "../components/Map"

// CSS
import styles from "./AppLayout.module.css"

const AppLayout = () => {
  return (
    <div className={styles.app}>
        <Sidebar />
        <Map />
    </div>
  )
}

export default AppLayout