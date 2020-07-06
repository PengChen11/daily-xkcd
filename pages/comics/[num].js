import Layout from '../../components/Layout';
import Comic from '../../components/Comic';

const Comics = (props) => (
    <Layout>
        <div>
            <Comic data={props.data}/>
        </div>
    </Layout>
);

export default Comics;

export async function getServerSideProps(context){
    const num = context.query.num;

    const response = await fetch(`http://xkcd.com/${num}/info.0.json`);

    const data = await response.json();

    return {
        props: {
            data:data
        }
    }
}
