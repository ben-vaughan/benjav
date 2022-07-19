import ListElement from './elements/ListElement';

const LineList = (props) => {
  return (
    <>
      <div className='heading-0'> { props.data.title } </div>
      <div style={{paddingTop: 10, display: 'flex', maxWidth: '45vw'}}>
        <div style={{borderLeft: 'solid 1px #B5B5B5', textAlign:'left', padding: 5, width: '85%', maxWidth: '700'}}>
          {props.data.fields.map(f => <ListElement key={f.heading} heading={f.heading} title={f.title} subtitle={f.subtitle} description={f.description}/>)}
        </div>
      </div>
    </>
  )
}

export default LineList;