
const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
];

type Props = {
  
    title: string
}

const ListItem = (props:Props) => {
    return (
        <li >
            {props.title}
        </li>
    );

}

const List = () => {
    return (
        <ul>
            {products.map((item) => {
                return <ListItem key={item.id} title={item.title} />
            })}
        
       </ul>
   )
}

export default List
