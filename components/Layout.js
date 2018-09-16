import Meta from '../components/Meta'

export default (props) =>
  <main className="Layout">
    <Meta/>
    {props.children}
  </main>
