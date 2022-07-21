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
    },
    {
      name: 'twitter',
      value: 'benjav01',
      link: 'https://twitter.com/benjav01'
    },
    {
      name: 'linkedin',
      value: 'bendvaughan',
      link: 'https://linkedin.com/in/bendvaughan'
    },
    {
      name: 'leetcode',
      value: 'benjav',
      link: 'https://leetcode.com/benjav/'
    }
  ]
}

function Contact() {
  return(
    <>
      <div className="content-outer">
        <CleanList data={data}/>
      </div>
    </>
  )
}

export default Contact;