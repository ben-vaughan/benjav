import '../css/components/CleanList.css';

function CleanList(props) {
  return (
    <>
      <div>
        <div style={{paddingTop: '20px'}} className='heading-2'> { props.data.heading } </div> 
        {props.data.fields.map(f => 
          <>
            <a href={f.link} className='paragraph clean-list-element'> {f.name}: {f.value} </a> <br/>
          </>
        )}
      </div>
    </>
  )
}

export default CleanList;
