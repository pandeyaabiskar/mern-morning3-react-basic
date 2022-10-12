export default function Button(props) {
    const {clickHandler, label} = props

  return <button onClick={clickHandler}>{label}</button>;
}
