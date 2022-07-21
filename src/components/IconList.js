import IconListElement from './elements/IconListElement';
import '../css/components/IconList.css'

const IconList = (props) => {
  return (
    <>
      <div className='heading-0'> { props.data.title } </div>
      <div>
        {props.data.fields.map(f => <IconListElement description={f.description} imageURI={f.imageURI}/>)}
      </div>
    </>
  )
}

export default IconList;
