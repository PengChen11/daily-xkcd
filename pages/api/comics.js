// const getData = async () => {
//     const url = 'http://xkcd.com/info.0.json';
//     const response = await fetch(url);
//     const data = await response.json();

//     const current = data.num;
//     const curr_num = parseInt(current);
//     let lists = [];
//     for (let i = curr_num; i>=curr_num-11; i--){
//         let url = `http://xkcd.com/${i}/info.0.json`;
//         const response_2 = await fetch(url);
//         const data_2 = await response_2.json();
//         lists.push(data_2);
//     };

//     return lists;
// }

// export default (req, res, props) => {
//     res.statusCode = 200;
//     res.json(props);
// }

// export async function getStaticProps () {
//     const url = 'http://xkcd.com/info.0.json';
//     const response = await fetch(url);
//     const data = await response.json();

//     const current = data.num;
//     const curr_num = parseInt(current);
//     let lists = [];
//     for (let i = curr_num; i>=curr_num-11; i--){
//         let url = `http://xkcd.com/${i}/info.0.json`;
//         const response_2 = await fetch(url);
//         const data_2 = await response_2.json();
//         lists.push(data_2);
//     };

//     return {
//         props: lists,
//     };
// }
