import { useParams } from "react-router-dom";

const PostItem = (props) => {
    const { id } = useParams();
    console.log(props);

    return (
        <>
            <h1>PostItem</h1>
            <div>{id}</div>
        </>
    );
};

export default PostItem;
