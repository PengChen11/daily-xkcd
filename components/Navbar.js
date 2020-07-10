import Link from 'next/link';
import styles from './Navbar.module.scss';

// const Navbar = () => (
//     <nav className="navbar navbar-expand navbar-dark bg-dark mb-4">
//         <div className="container">
//             <a className="navbar-brand" href="#">Peng's Comics</a>
//             <div className="collapse navbar-collapse">
//                 <ul className="navbar-nav ml-auto">
//                     <li className="nav-item">
//                         <Link href="/"><a className="nav-link">Home</a></Link>
//                     </li>
//                     <li className="nav-item">
//                         <Link href="/about"><a className="nav-link">About</a></Link>
//                     </li>
//                 </ul>
//             </div>
//         </div>
//     </nav>
// )

const Navbar = () => (
    <nav className={styles.navbar}>
        <div className={styles.brand}>
            <a href="#">Peng's Comics</a>
        </div>
        <div className={styles.uls}>
            <ul>
                <li>
                <Link href="/"><a className="nav-link">Home</a></Link>
                </li>
                <li>
                <Link href="/about"><a className="nav-link">About</a></Link>
                </li>
            </ul>
        </div>

    </nav>

)



export default Navbar;
