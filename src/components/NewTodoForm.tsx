interface NewTodoFormProps{
    value: string,
    updateText: (str: string) => void,
    handleAction: ()=> void,
}

const NewTodoForm: React.FC<NewTodoFormProps> = ({ value, updateText, handleAction }) => {
  return (
    <label className="p-5 pt-20 flex justify-center gap-2" >
      <input
        placeholder='new todo'
        value={value}
        onChange={(e) => updateText(e.target.value)}
         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <button onClick={handleAction} className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Add todo</button>
    </label>
  );
};

export default NewTodoForm;