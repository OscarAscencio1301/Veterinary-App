

export const Form = () => {
  return (
    <div className="text-center">
      <h2 className="font-black text-3xl">Seguimiento</h2>
      <p className="text-lg my-5">Añade Pacientes y <span className="text-indigo-600 font-bold">Administralos</span></p>
      <form className="bg-white shadow-md rounded-md py-10 px-5">
        <div className="flex flex-col text-left gap-2 py-2">
          <label className="text-gray-700 font-bold"
            htmlFor="mascota">Nombre Mascota</label>
          <input type="text" placeholder="Nombre Mascota" id="mascota" className="p-2 border placeholder-gray-400 rounded-md" />
        </div>
        <div className="flex flex-col text-left gap-2 py-2">
          <label className="text-gray-700 font-bold"
            htmlFor="propietario">Nombre Propietario</label>
          <input type="text" placeholder="Nombre Propietario" id="propietario" className="p-2 border placeholder-gray-400 rounded-md" />
        </div>
        <div className="flex flex-col text-left gap-2 py-2">
          <label className="text-gray-700 font-bold"
            htmlFor="email">Correo Electrónico</label>
          <input type="email" placeholder="Email" id="email" className="p-2 border placeholder-gray-400 rounded-md" />
        </div>
        <div className="flex flex-col text-left gap-2 py-2">
          <label className="text-gray-700 font-bold"
            htmlFor="alta">Alta</label>
          <input type="date" id="alta" className="p-2 border placeholder-gray-400 rounded-md" />
        </div>
        <div className="flex flex-col text-left gap-2 py-2">
          <label className="text-gray-700 font-bold"
            htmlFor="sintomas">Sintomas</label>
          <textarea id="sintomas" className="p-2 border placeholder-gray-400 rounded-md" />
        </div>
        <button type="submit" className="bg-indigo-600 block w-full p-3 rounded-md text-white mt-3 hover:bg-indigo-800 cursor-pointer transition-colors duration-200">Agregar</button>
      </form>
    </div>
  )
}
