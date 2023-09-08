import { Todo } from "@prisma/client";

type TodoItemProps = Pick<Todo, "id" | "title" | "complete"> & {
    toggleTodo: (id: string, complete: boolean) => void;
};

export function TodoItem({ id, title, complete }: TodoItemProps) {
    return (
        <li className="flex gap-1 itees-center">
            <input id={id} type="checkbox" className="cursor-pointer peer" />
            <label htmlFor={id} className="cursor-pointer peer-checked:text-gray-400">{title}</label>
        </li>
    )
}