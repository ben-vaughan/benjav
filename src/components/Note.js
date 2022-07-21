import ReactMarkdown from 'react-markdown';

function Note(props) {
  return (
    <>
      <div>
        <div style={{paddingTop: '20px'}} className='heading-1'> { props.heading } </div>
      </div>
      <div>
        <ReactMarkdown className="paragraph" children={props.body}/>
      </div>
    </>
  )
}

export default Note;