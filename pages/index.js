import Layout from '../components/Layout';
import Comic from '../components/Comic';
import Previous from '../components/Previous';

const Home = (props) => (
    <Layout>
        <div className='mian_body'>
            <h1>Welcome to Peng's XKCD comics</h1>
            <Comic data={props.data}/>
            <Previous data={props.data}/>

        </div>
    </Layout>
)

export async function getStaticProps() {

    const url = 'http://xkcd.com/info.0.json';
    // const url = 'http://localhost:3001/api/comics';
    const response = await fetch(url);
    const data = await response.json();

    return {
        props: {
            data : data,
        },
    }
}

export default Home;
