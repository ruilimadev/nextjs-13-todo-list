'use client'
import { format } from 'date-fns';

type TodoItemProps = {
  id: string;
  title: string;
  complete: boolean;
  createdAt: Date;
  toggleTodo: (id: string, complete: boolean) => void;
  toggleDelete: (id: string) => void;
};

export function TodoItem({ id, title, complete, createdAt, toggleTodo, toggleDelete }: TodoItemProps) {
  
  const formattedCreatedAt = format(createdAt, 'MM/dd/yyyy, hh:mm:ss a');

  return <li className="flex gap-1 items-center">
    <input
      id={id}
      type="checkbox"
      className="cursor-pointer peer"
      defaultChecked={complete}
      onChange={ e => toggleTodo(id, e.target.checked)}
    />
    <label
      htmlFor="{id}"
      className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500"
    >
      {title}
    </label> 
    {/* when was it made */}
      <div className="text-right text-xs">
        Created - {formattedCreatedAt}
      </div>
      {/* delete option */}
      <div className="flex items-center">
        <div>
          <p className="text-xs cursor-pointer peer border border-slate-300 px-2 py-1 rounded mb-1" onClick={() => toggleDelete(id)}>Delete</p>
        </div>
      </div>
  </li>
}