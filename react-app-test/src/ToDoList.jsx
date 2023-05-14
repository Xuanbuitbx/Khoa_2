export default function ToDoList() {
    return (
      <div className="flex flex-col space-y-3 border-2 rounded-md p-2">
        <h1 className="text text-xl font-bold">Todo list</h1>
        <ul className="itemList space-y-3">
          <li className="space-x-2 bg-gray-300 flex justify-between items-center p-1 rounded-md hover:shadow-lg">
            <label className="text-black">
              <input type="checkbox" />
              {` Write code for 30 minutes today`}
            </label>
            <button class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full">
  X
</button>
          </li>
          <li className="space-x-2 bg-gray-300 flex justify-between items-center  p-1 rounded-md hover:shadow-lg">
            <label className="text-black">
              <input type="checkbox" />
              {` Learn more about React`}
            </label>
            <button class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full">
  X
</button>
          </li>
        </ul>
      </div>
    );
  }
  