export default function Chapter({ chapter }) {
    return (
        <div className='chapter' dangerouslySetInnerHTML={{__html: chapter.html}} />
    )
}
