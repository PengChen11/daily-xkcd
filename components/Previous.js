import Link from 'next/link';
import styles from './Previous.module.scss'

class Previous extends React.Component{

    listItem(num){

        return (
            <li key={num} className='p-2 d-inline-block'>
                <Link href="/comics/[num]" as={`/comics/${num}`}>
                    <a>#{num}</a>
                </Link>
            </li>
        )
    }

    render(){
        let lists = [];
        for (let i = this.props.data-1; i>this.props.data-11; i--){
            lists.push(i);
        }
        return (
            <>
            <div className='row m-3'>
                <h3 className="mx-auto col-auto">Previous 10 comics</h3>
            </div>
            {/* <div className="row"> */}
            <div className={styles.previous}>
                <ul className="mx-auto col-auto">
                    {lists.map(num => this.listItem(num))}
                </ul>
            </div>
            </>
        )}
}


export default Previous;



