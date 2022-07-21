import Note from "../../components/Note";

const data = {
  heading: 'Lorem Ipsum',
  body: `

  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum cursus, ipsum nec faucibus ornare, mi metus dapibus nibh, in viverra nulla nibh aliquam augue. Vestibulum quis arcu vitae ex posuere porta. Nullam efficitur metus id placerat cursus. Aenean nec pellentesque arcu. Maecenas eu ante nec felis blandit volutpat. Praesent imperdiet pulvinar nisl, ac dictum elit. Fusce at scelerisque nulla. Nunc eget pharetra elit. Ut urna lectus, feugiat vel iaculis vitae, ultricies quis orci. Phasellus ut tellus risus. Vestibulum nec finibus neque, nec consectetur urna.
  
  Donec sodales pretium dui a laoreet. Sed lobortis varius ornare. Aliquam fermentum tortor in massa sodales sollicitudin. Proin sapien eros, convallis in dui at, euismod aliquam erat. Nullam vitae pulvinar augue. Aliquam tristique eros odio, vitae pulvinar orci cursus quis. Sed sollicitudin congue tempor.
  
  In ultrices magna dapibus tristique suscipit. Donec elementum tempor ipsum, sit amet euismod nisi commodo id. Pellentesque a mollis arcu. Morbi quis risus id neque eleifend ornare. In ipsum sapien, feugiat luctus rutrum non, venenatis sed tortor. Vestibulum venenatis convallis sem, quis cursus nibh ullamcorper egestas. Nunc elementum ut ante ut consectetur. Nunc vehicula mauris justo, id laoreet odio porta in. Vestibulum commodo, risus nec scelerisque tempor, diam eros maximus lorem, eget sollicitudin nisl quam in augue. Fusce ut arcu ex. Vivamus dapibus urna quis sapien sollicitudin, quis eleifend nisl auctor. Donec ullamcorper magna quis purus accumsan rutrum. Quisque quam ipsum, fringilla at sagittis nec, consequat euismod erat. Vivamus ut arcu risus. Mauris lobortis placerat risus, eu egestas orci lacinia ut.
  
  Donec id ex viverra, tincidunt neque ut, volutpat ex. Pellentesque dolor nibh, ornare eget sagittis ac, tempor tempus augue. Ut volutpat, dui et suscipit tristique, nunc mauris maximus tortor, vitae cursus lacus tellus ut lorem. Fusce et turpis tempor, egestas nulla a, auctor erat. Aenean vestibulum hendrerit odio, sed porta nibh ultrices quis. Etiam feugiat at nisl et vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum mi ut ipsum suscipit, eu dignissim quam venenatis. Aliquam neque lacus, viverra et mauris vitae, aliquet bibendum nibh. Donec congue suscipit ex nec pellentesque. Nunc pretium et nisi ac finibus. Fusce rhoncus neque massa, nec lacinia leo mattis at. Integer hendrerit ante a cursus pharetra. Phasellus pulvinar, tortor in blandit interdum, justo urna elementum eros, vitae sagittis nibh lorem iaculis lectus. Vestibulum malesuada dolor in mauris blandit, id sodales metus euismod.
  
  Donec vehicula sem a mauris laoreet, et pretium lacus placerat. Donec quis pulvinar sapien, eget mattis justo. Proin efficitur mauris ac elit convallis, ut dignissim mauris convallis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc sed odio velit. Suspendisse sapien odio, congue placerat mattis dictum, eleifend ac dolor. Nulla imperdiet leo vel arcu tristique, sit amet hendrerit lorem tristique. Sed eu dolor interdum dolor efficitur tempus sit amet eget enim. Nullam dui velit, vestibulum a fermentum quis, efficitur quis nibh. Etiam et turpis vel mauris vestibulum congue. Nam vel velit eget ex molestie vehicula. Sed porttitor dignissim fringilla. Proin feugiat diam rutrum magna rhoncus ullamcorper. Fusce leo nisl, porta efficitur molestie a, consequat sed dolor. `
}

function BigONotation() {
  return (
    <>
      <Note heading={data.heading} body={data.body}/>
    </>
  )
}

export default BigONotation;