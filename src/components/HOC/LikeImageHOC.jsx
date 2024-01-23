import CommonHOC from './CommonHOC';

const LikeImageHOC = ({LikeHandle, LikeCount}) => {
    return(
        <>
            <button onClick={LikeHandle}>Like Image {LikeCount}</button>
        </>
    )
}

export default CommonHOC(LikeImageHOC)