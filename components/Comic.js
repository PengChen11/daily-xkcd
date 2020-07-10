import styles from './Comic.module.scss'

const Comic = (props) => (
    <>
    <div className='row'>
        <h3 className='mx-auto col-auto'>{props.data.title}</h3>
    </div>
    {/* <div className='row'> */}
    <div className={styles.img}>
        <img className='mx-auto col-auto' src={props.data.img} alt={props.data.alt} />
    </div>
    </>
)

export default Comic;
