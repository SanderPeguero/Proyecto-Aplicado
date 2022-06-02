import Navbar from '../Navbar/Navbar'
import Card from '../Card/Card'
import styles from './Store.module.css'


const Store = ({ ItemCount, setItemCount }) => {
  return (
    <ul className={styles.ul}>
      <li className={styles.li}>
        <Card ItemCount={ItemCount} setItemCount = {setItemCount}/>
      </li>
      <li className={styles.li}>
        <Card ItemCount={ItemCount} setItemCount = {setItemCount}/>
      </li>
      <li className={styles.li}>
        <Card ItemCount={ItemCount} setItemCount = {setItemCount}/>
      </li>
      <li className={styles.li}>
        <Card ItemCount={ItemCount} setItemCount = {setItemCount}/>
      </li>
      <li className={styles.li}>
        <Card ItemCount={ItemCount} setItemCount = {setItemCount}/>
      </li>
      <li className={styles.li}>
        <Card ItemCount={ItemCount} setItemCount = {setItemCount}/>
      </li>
      <li className={styles.li}>
        <Card ItemCount={ItemCount} setItemCount = {setItemCount}/>
      </li>
      <li className={styles.li}>
        <Card ItemCount={ItemCount} setItemCount = {setItemCount}/>
      </li>
      <li className={styles.li}>
        <Card ItemCount={ItemCount} setItemCount = {setItemCount}/>
      </li>
      <li className={styles.li}>
        <Card ItemCount={ItemCount} setItemCount = {setItemCount}/>
      </li>
      <li className={styles.li}>
        <Card ItemCount={ItemCount} setItemCount = {setItemCount}/>
      </li>
      <li className={styles.li}>
        <Card ItemCount={ItemCount} setItemCount = {setItemCount}/>
      </li>


    </ul>
  )

}

export default Store
