export default function IconListElement(props) {
  return(
    <div style={{'padding': '5px 0px'}}>
      <div style={{width: '100%', display:'flex', alignItems: 'center'}}>
        <div style={{display: 'inline-flex', width:'25px', padding: '5px'}}>
          <img src={props.imageURI}/>
        </div>
        <div style={{display: 'inline-flex', height: '100%', width: '100%', borderLeft: 'solid 1px #B5B5B5', padding: '0px 5px'}}>
          <span className='heading-3'> { props.description } </span> <br/>
        </div>
      </div>
    </div>
  )
}

