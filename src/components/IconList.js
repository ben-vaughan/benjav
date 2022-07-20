import IconListElement from './elements/IconListElement';

const IconList = (props) => {
  return (
    <>
      <div className='heading-0'> { props.data.title } </div>
      {props.data.fields.map(f => <IconListElement key={f.heading} heading={f.heading} title={f.title} subtitle={f.subtitle} description={f.description}/>)}
    </>
  )
}

export default IconList;