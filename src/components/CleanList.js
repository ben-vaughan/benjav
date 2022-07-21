import '../css/components/CleanList.css'
import '../css/components/LineList.css'

function CleanList(props) {
  return (
    <>
      <div>
      <div style={{paddingTop: '20px'}} className='heading-2'> { props.data.heading } </div>
      </div>
      <div> 
        {props.data.fields.map(f => 
          <>
            <div className='line-list-container'>
              <span className='paragraph'> {f.name}: {f.value} </span> <br/>
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default CleanList;