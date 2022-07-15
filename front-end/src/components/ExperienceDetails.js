import '../css/Experience.css'

function ExperienceDetails(props) {
  return(
    <div style={{'padding-bottom': 10}}>
      <span style={{'fontWeight': 300, 'fontSize': 'calc(10px + 1vmin)'}}> { props.firm } </span> <br/>
      <span style={{'fontWeight': 300, 'fontSize': 'calc(10px + 0.6vmin)'}}> { props.title } </span> <br/>
      <span style={{'fontWeight': 200, 'fontSize': 'calc(10px + 0.5vmin)'}}> { props.date } </span> <br/>
      <span style={{'fontWeight': 100, 'fontSize': 'calc(10px + 0.5vmin)'}}> { props.description } </span> <br/>
    </div>
  )
}

export default ExperienceDetails;