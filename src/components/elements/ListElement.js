const ListElement = (props) => {
  return(
    <div className='line-list-element'>
      <span className='heading-3'> { props.heading } </span> <br/>
      <span className='heading-4'> { props.title } </span> <br/>
      <span className='heading-4'> { props.subtitle } </span> <br/>
      <span className='paragraph'> { props.description } </span> <br/>
    </div>
  )
}

export default ListElement;