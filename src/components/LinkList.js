import { Link } from 'react-router-dom';
import '../css/components/CleanList.css';

function LinkList(props) {
  return (
    <>
      <div>
        <div style={{paddingTop: '20px'}} className='heading-2'> { props.data.heading } </div>
      </div>
      <div>
      {props.data.fields.map(f => <Link className='paragraph clean-list-element' to={'/notes/' + f.uri }> {f.title} </Link>)}
      </div>
    </>
  )
}

export default LinkList;