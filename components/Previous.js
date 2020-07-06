import Link from 'next/link';

class Previous extends React.Component{
    state = {
        title: 'test',
    }

    getLists(){
        const current = this.props.data.num;
        const curr_num = parseInt(current);
        let lists = [];
        for (let i = curr_num-1; i>=curr_num-11; i--){
            let url = `http://xkcd.com/${i}/info.0.json`;
            lists.push(url);
        };

        return lists;
    }

    async getData(){
        let urls = this.getLists();
        let output = [];
        for (let url of urls){
            let response = await fetch(url);
            let data = await response.json();
            output.push(data);
        }
        // const url = 'http://xkcd.com/info.0.json';
        // const response = await fetch(url);
        // const data = await response.json();

        return {
            data: output,
        }
    }

    listItem(item){

        // return (
        //     <li key={item.num}>
        //         <Link href="/comics/[num]" as={`/comics/${item.num}`}>
        //             <a>{item.num}</a>
        //         </Link>
        //     </li>
        // )
        return (
            <li>
                <p>{item}</p>
            </li>
        )
    }

    render(){
        let renderData = this.getLists();
        return (
            <div>
                <h3>Previous 10 comics</h3>
                <ul>
                    {renderData.map(item => this.listItem(item))}
                </ul>

            </div>

        )
    }
}

export default Previous;


// export async function getData() {
//     let urls = Previous.getLists();
//     let output = [];
//     for (url in urls){
//         let response = await fetch(url);
//         let data = await response.json();
//         output.push(data);
//     }
//     // const url = 'http://xkcd.com/info.0.json';
//     // const response = await fetch(url);
//     // const data = await response.json();

//     return {
//         props: output,
//     }
// }
