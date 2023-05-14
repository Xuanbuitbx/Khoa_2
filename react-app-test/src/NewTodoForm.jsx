export default function NewTodoForm() {
  return (
    <div className="inputForm flex items-center justify-between  h-10 rounded-sm border border-gray-400 ">
    <input
      type="text"
      className="w-full h-full outline-none pl-3"
      placeholder="input text..."
    />
    <button className="bg-gray-400 rounded-sm px-3 h-full text-white">
      SUBMIT
    </button>
  </div>
  
  
  );
}
