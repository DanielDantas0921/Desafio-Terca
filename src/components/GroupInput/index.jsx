import styles from "./styles.module.css"

export function GroupInput(props){

    return(
        <div className={styles.groupInput}>
            <label htmlFor={props.forId}>{props.children}</label>
            <input type="text" id={props.forId} />
        </div>
    )

}