import { useToGets } from '../context/ListProvider';

export default function Header() {
  const { togets, handleDeleteAllToGets } = useToGets();

  return (
    <>
      <div>Number of Items: {togets.length}</div>
      <button onClick={handleDeleteAllToGets}>Clear List</button>
    </>
  )
}
