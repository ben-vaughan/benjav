const ListElement = (props) => {
  return(
    <div style={{width: '100%', display:'flex', alignItems: 'center'}}>
      <div style={{display: 'inline-flex', width:'25px', padding: '5px'}}>
        <svg viewBox="0 0 100 100" style={{fill: 'white'}}>
          <path d="M49.6,0.3c-25.4,0-23.8,11-23.8,11l0,11.4h24.2v3.4H16.2c0,0-16.2-1.8-16.2,23.8
          c0,25.6,14.2,24.7,14.2,24.7h8.5V62.7c0,0-0.5-14.2,14-14.2s24,0,24,0s13.5,0.2,13.5-13s0-21.9,0-21.9S76.2,0.3,49.6,0.3z M36.3,7.9
          c2.4,0,4.4,1.9,4.4,4.4s-1.9,4.4-4.4,4.4s-4.4-1.9-4.4-4.4S33.9,7.9,36.3,7.9z"/>
          <path d="M50.4,99.7c25.4,0,23.8-11,23.8-11l0-11.4H49.9v-3.4h33.8c0,0,16.2,1.8,16.2-23.8
            c0-25.6-14.2-24.7-14.2-24.7h-8.5v11.9c0,0,0.5,14.2-14,14.2c-14.4,0-24,0-24,0s-13.5-0.2-13.5,13c0,13.3,0,21.9,0,21.9
            S23.8,99.7,50.4,99.7z M63.7,92.1c-2.4,0-4.4-1.9-4.4-4.4s1.9-4.4,4.4-4.4s4.4,1.9,4.4,4.4C68.1,90.1,66.1,92.1,63.7,92.1z"/>
        </svg>
      </div>
      <div style={{display: 'inline-flex', height: '100%', width: '100%', borderLeft: 'solid 1px #B5B5B5', padding: '0px 5px'}}>
        <span className='heading-3'> { props.description } </span> <br/>
      </div>
    </div>
  )
}

export default ListElement;