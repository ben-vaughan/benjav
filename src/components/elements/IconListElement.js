export default function IconListElement(props) {
  return(
    <div className='icon-list-container'>
      <div className='icon-list-element'>
        <div className='icon-list-element-icon'>          
          <img className='colour-filter' alt='' src={require(`../../assets/icons/${props.imageURI}.svg`)}/>
        </div>
        <div className='icon-list-element-text'>
          <span className='paragraph'> { props.description } </span>
        </div>
      </div>
    </div>
  )
}

