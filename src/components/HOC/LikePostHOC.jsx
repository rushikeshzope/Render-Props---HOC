import CommonHOC from './CommonHOC';

const LikePostHOC = ({LikeHandle, LikeCount}) => {
    return(
        <>
            <button onClick={LikeHandle}>Like Post {LikeCount}</button>
        </>
    )
}

export default CommonHOC(LikePostHOC)