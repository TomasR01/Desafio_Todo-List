const btnAdd = document.querySelector("#btn-add");
const redTareas = document.querySelector(".tareas");
const input = document.querySelector("#nueva-tarea");
const totalTasks = document.querySelector("#total");
const doneTasks = document.querySelector("#realizadas");

const tareas = [
  { id: 1, nombre: "ir al supermercado", realizado: false },
  { id: 2, nombre: "Estudiar para la prueba", realizado: false },
  { id: 3, nombre: "Darle cariño a totoro", realizado: false },
];

const contador = () => {
  const contadorTareas = tareas.length;
  totalTasks.innerHTML = contadorTareas;
};

const contadorRealizadas = () => {
  const realizadas = tareas.filter(
    (tareas) => tareas.realizado === true
  ).length;
  doneTasks.innerHTML = realizadas;
};

const render = () => {
  let template = `
    <p>ID</p>
    <p>Tarea</p>
    <p>Realizadas</p>
    <p>Borrar</p>
    `;
  for (const tarea of tareas) {
    template += `
        <p>${tarea.id}</p>
        <p ${tarea.realizado}>${tarea.nombre}</p>
        <div><input type='checkbox' ${
          tarea.realizado ? "checked" : ""
        } onclick='checkTask(${tarea.id})'></div>
        <div><button onclick ='deleteTask(${
          tarea.id
        })'><i class="fa-solid fa-eraser"></i></button></div>
        `;
  }

  redTareas.innerHTML = template;
  contador();
  contadorRealizadas();
};

btnAdd.addEventListener("click", () => {
  if (input.value !== "") {
    const nombreTarea = input.value;
    const ultimaTarea = tareas[tareas.length - 1];
    const nuevaTarea = {
      id: ultimaTarea ? ultimaTarea.id + 1 : 1,
      nombre: nombreTarea,
      realizado: false,
    };
    tareas.push(nuevaTarea);
    input.value = "";
    render();
  }
});

const deleteTask = (id) => {
  const index = tareas.findIndex((tarea) => tarea.id === id);
  tareas.splice(index, 1);
  render();
};

const checkTask = (id) => {
  const findedTask = tareas.find((tarea) => tarea.id === id);
  findedTask.realizado === false
    ? (findedTask.realizado = true)
    : (findedTask.realizado = false);
  render();
};

render();
