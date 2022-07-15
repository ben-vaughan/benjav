const ListElement = (props) => {
  return(
    <div style={{'padding-bottom': 20, 'padding-left': 5}}>
      <span className='heading-1'> { props.heading } </span> <br/>
      <span className='heading-2'> { props.title } </span> <br/>
      <span className='heading-3'> { props.subtitle } </span> <br/>
      <span className='paragraph'> { props.description } </span> <br/>
    </div>
  )
}

export default ListElement;