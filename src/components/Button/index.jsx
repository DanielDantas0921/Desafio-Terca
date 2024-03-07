import styles from "./styles.module.css"

export function Button(props){

    return <button className={styles.btn}>{props.children}</button>
}