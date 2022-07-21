import CleanList from "../components/CleanList";

const data = {
  heading: 'contact',
  fields: [
    {
      name: 'e-mail',
      value: "vaughabe@gmail.com",
      link: 'mailto:vaughabe@gmail.com'
    },
    {
      name: 'github',
      value:'ben-vaughan',
      link: 'https://github.com/ben-vaughan/'
    }
  ]
}

function Contact() {
  return(
    <>
      <CleanList data={data}/>
    </>
  )
}

export default Contact;