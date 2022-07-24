const html = document.querySelector(".propiedades");
const button = document.querySelector(".btn");
const MinMeters = document.querySelector(".MinMeters");
const MaxMeters = document.querySelector(".MaxMeters");
const rooms = document.querySelector(".rooms");
const total = document.querySelector(".py-3");
let code = "";
let totally = 0;

const data = function (src, name, rooms, meters, description) {
  code += `<div class="propiedad"><div class="img" style=" background-image: url('${src}');"></div>
    <section>
    <h5>${name}</h5>
    <div class="d-flex justify-content-between">
    <p>Cuartos: ${rooms}</p>
    <p>Metros: ${meters}</p>
    </div>
    <p class="my-3">${description}</p>
    <button class="btn btn-info">Ver más</button>
    </section>
    </div>`;
};

const search = function (click, habitations, mtsMin, mtsMax) {
  if (
    click === "change" &&
    (habitations.value === "" || mtsMin.value === "" || mtsMax === "")
  ) {
    alert("faltan campos por rellenar");
    return;
  } else if (Number(mtsMin) > Number(mtsMax)) {
    alert("los metros minimos no pueden ser mayores al máximo de metros");
    return;
  } else {
    code = "";
    html.innerHTML = "";
    totally = 0;
    let Properties = propiedadesJSON.filter(
      ({ rooms, m }) =>
        Number(rooms) >= Number(habitations) &&
        Number(m) >= Number(mtsMin) &&
        Number(m) <= Number(mtsMax)
    );
    for (let prop of Properties) {
      totally = totally + 1;
      data(prop.src, prop.name, prop.rooms, prop.m, prop.description);
    }
    html.innerHTML = code;
    total.innerHTML = `Total: ${totally}`;
  }
};
button.addEventListener("click", () => {
  search("change", rooms.value, MinMeters.value, MaxMeters.value);
  console.log("soy el boton");
});
search("inquire", -Infinity, -Infinity, Infinity);
