import '../css/components/LineList.css'
import ListElement from './elements/ListElement';

const LineList = (props) => {
  return (
    <>
      <div className='heading-0'> { props.data.title } </div>
      <div className='line-list-container'>
        {props.data.fields.map(f => <ListElement key={f.heading} heading={f.heading} title={f.title} subtitle={f.subtitle} description={f.description}/>)}
      </div>
    </>
  )
}

export default LineList;