import '../css/LineList.css'
import ListElement from './elements/ListElement';

const LineList = (props) => {
  return (
    <div className='list-container'>
      <div className='heading-0'> { props.data.title } </div>
      <div className='list-outer'>
        <div className='list-details'>
          {props.data.fields.map(f => <ListElement heading={f.heading} title={f.title} subtitle={f.subtitle} description={f.description}/>)}
        </div>
      </div>
    </div>
  )
}

export default LineList;