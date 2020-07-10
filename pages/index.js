import Layout from '../components/Layout';
import Comic from '../components/Comic';
import Previous from '../components/Previous';


const Home = (props) => (
    <Layout>
        <div className='container'>
            <div className='row'>
                <h1 className='mx-auto col-lg-auto'>Welcome to Peng's XKCD comics</h1>
            </div>
            <Comic data={props.data}/>
            <Previous data={props.data.num}/>

        </div>
    </Layout>
)

export async function getServerSideProps (context){

    const url = 'http://xkcd.com/info.0.json';
    const response = await fetch(url);
    const data = await response.json();

    return {
        props: {
            data : data,
        },
    }
}

export default Home;
