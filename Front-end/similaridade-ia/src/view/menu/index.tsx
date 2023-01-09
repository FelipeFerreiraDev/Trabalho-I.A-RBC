export function Menu() {
  return (
    <div className="w-full flex flex-col h-screen p-4 justify-center items-center">
       {/*visualização  */} <button className="m-2 w-60 bg-gray-300 duration-500"> Visualizar
        </button>
        {/*cadastro  */} <button className="m-2 w-60 bg-gray-300 duration-500">
        Cadastrar
        </button>
    </div>
  )
}