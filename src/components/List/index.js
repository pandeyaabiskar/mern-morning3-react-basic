export default function List(props) {
    const {listItems} = props;

  return listItems.map((listItem, index) => {
    return <h3 key={index}>{listItem}</h3>;
  });
}
