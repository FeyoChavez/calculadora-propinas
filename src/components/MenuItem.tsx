import type { MenuItem } from '../types';

type MenuItemProps = { 
  item : MenuItem, // recibir el item como prop
  addItem : (item : MenuItem) => void // pasar la función como prop
 }


export default function MenuItem({item, addItem} : MenuItemProps) {
  return (
    <button className='border-2 border-teal-400 hover:bg-teal-200 w-full text-lg rounded-lg p-3 flex justify-between'
    onClick={() => addItem(item)}
    >
      <p>{item.name}</p>
      <p className='font-black'>${item.price}</p>
    </button>
  )
}
