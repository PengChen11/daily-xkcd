const Comic = (props) => (
    <div>
        <h3>{props.data.title}</h3>
        <a href={props.data.img}>
            <img src={props.data.img} />
        </a>
    </div>
)

export default Comic;
