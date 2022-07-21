import LinkList from "../components/LinkList";

const computerScience = {
  heading: 'computer science',
  fields: [
    {
      title: 'lorem ipsum',
      uri: 'lorem-ipsum'
    }
  ]
}
const productivity = {
  heading: 'productivity',
  fields: [
    {
      title: 'lorem ipsum',
      uri: 'lorem-ipsum'
    }
  ]
}

function Notes() {
  return(
    <>
      <LinkList data={computerScience}/>
      <LinkList data={productivity}/>
    </>
  )
}

export default Notes;