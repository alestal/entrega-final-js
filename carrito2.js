const tituloproyecto = document.getElementById("tituloheader")
tituloproyecto.innerHTML = "BIENVENIDOS A VINERIA OLIVIA"

// FUNCION CONSTRUCTORA
const Producto = function (id,nombre,precio,stock,imagen) {
 
    this.id = id
    this.nombre = nombre
    this.precio = precio
    this.stock = stock
    this.imagen = imagen;
}


let producto1 = new Producto (1, "Vino CONCHA Y TORO Reservado Tinto Cabernet Sauvignon",300,100,"imagenes/vino-conchaytoro-reservado-750ml.jpg" )
let producto2 = new Producto (2, "Vino GARZÓN Tinto Estate Cabernet de Corte", 550,150,"imagenes/Vino-GARZÓN-Tinto-Estate-Cabernet-de-Corte-750ml.webp")
let producto3 = new Producto (3, "Vino LUIGI BOSCA Tinto Malbec", 965,200,"imagenes/Vino-LUIGI-BOSCA-Tinto-Malbec-750ml.webp")
let producto4 = new Producto (4, "Vino CONCHA Y TORO Reservado Tinto Carmenere",350,100,"imagenes/Vino- CONCHAYTORO-Reservado-Tinto-Carmenere-750 ml.webp")
let producto5 = new Producto (5, "Vino GARZÓN Rosado Pinot Rose de Corte",550,200, "imagenes/Vino-GARZÓN-Rosado-Pinot-Rose-de-Corte-750 ml.webp")
let producto6 = new Producto (6, "Vino GIMENEZ MENDEZ Cómplice Reserva Tinto Malbec",399,90,"imagenes/Vino-GIMENE-MENDEZ-Cómplice-Reserva-Tinto-Malbec-750 ml.webp")
let producto7 = new Producto (7, "Vino CONVENTO VIEJO Reserva Tinto Carmenere",299,500,"imagenes/Vino-CONVENTO-VIEJO-Reserva-Tinto-Carmenere-750-ml.webp")
let producto8 = new Producto (8,"Vino DON PASCUAL Blanco Brut Blanc de Blancs",350,490,"imagenes/Vino-DON-PASCUAL-Blanco-Brut-Blanc-de-Blancs-750-ml.webp")
let producto9 = new Producto (9,"Vino GARZÓN Sauvignon Blanc De Corte",700,300,"imagenes/Vino-GARZÓN-Sauvignon-Blanc-De-Corte-750ml.jpg")
let producto10 = new Producto (10,"Vino LUIGI BOSCA Sauvignon Blanc",960,150,"imagenes/Vino-LUIGI-BOSCA-Sauvignon-Blanc.webp")
let producto11 = new Producto (11,"Vino RUTINI Trumpeter Blanco Chardonnay",1040,500,"imagenes/Vino-RUTINI-Trumpeter-Blanco-Chardonnay-750ml.jpg")
let producto12 = new Producto (12,"Vino Single Vineyard Sauvignon Blanc GARZÓN", 1460,500,"imagenes/Vino-Single-Vineyard-Sauvignon-Blanc-GARZÓN-750ml.jpg")
let producto13 = new Producto (13,"Vino CASTEL PUJOL Trebbiano Blanco",990,700,"imagenes/Vino-CASTEL-PUJOL-Trebbiano-Blanco-750ml.jpg")
let producto14 =new Producto (14,"Vino Rose CASTEL PUJOL",990,650,"imagenes/Vino-CASTEL-PUJOL-Trebbiano-Blanco-750ml.jpg")
let producto15 = new Producto (15,"Vino CASTEL PUJOL Tinto Cabernet Merlot",990,650,"imagenes/Vino-CASTEL-PUJOL-Tinto-Cabernet-Merlot-750ml.jpg")
let producto16 = new Producto (16,"Vino CASTEL PUJOL Tinto Tannat",990,650,"imagenes/Vino-CASTEL-PUJOL-Tinto-Tannat-750ml.webp")
let producto17 = new Producto (17,"Vino Tinto MELINI Chianti",1040,650,"imagenes/vino-tinto-melinichiani-750-ml.webp")
let producto18 = new Producto (18,"Vino Tinto MONTES TOSCANINI Criado en Roble Tannat",800,700,"imagenes/Vino-Tinto-MONTES-TOSCANINI-Criado-en-Roble-Tannat-750ml.webp")
let producto19 = new Producto (19,"Vino FAMILIA DEICAS E. Vineyard Guazuvira",1620,450,"imagenes/Vino-FAMILIA-DEICAS-E-Vineyard-Guazuvira.jpg")
let producto20 = new Producto (20,"Vino CLOS DE LOS SIETE Tinto Malbec",1960,300,"imagenes/Vino-CLOS-DE-LOS-SIETE-Tinto-Malbec-750-ml.jpg")
let producto21 = new Producto (21,"Vino RUTINI Dominio Cabernet Sauvignon",1750,329,"imagenes/Vino-RUTINI-Dominio-Cabernet-Sauvignon-750ml.jpg")
let producto22 = new Producto (22,"Vino CERRO CHAPEU 1752 Gran Tradición Tinto Tannat Cabernet Sauvignon",1579,300,"imagenes/Vino-CERRO-CHAPEU-1752- Gran-Tradición-Tinto-Tannat-Cabernet-Sauvignon-750ml.jpg")
let producto23 = new Producto (23,"Vino EL ENEMIGO Bonarda",1909,200,"imagenes/Vino-EL-ENEMIGO-Bonarda-750ml.jpg")
let producto24 = new Producto (24,"Vino BOUZA Parcela Única Tinto Merlot B9",2490,300,"imagenes/Vino-BOUZA-Parcela-Unica-Tinto-Merlot-B9-750ml.jpg")
let producto25 = new Producto (25,"Vino JUAN CARRAU Tinto Bodegas Amat Tannat",2705,150,"imagenes/Vino-JUAN-CARRAU-Tinto-Bodegas-Amat-Tannat-750ml.jpg")
let producto26 = new Producto (26,"Vino JOSÉ IGNACIO Pinot Rose",1099,500,"imagenes/Vino-JOSÉ-IGNACIO-Pinot-Rose-750ml.jpg")
let producto27 = new Producto (27,"Vino DANTE ROBINO Gran Dante Malbec",2070,300,"imagenes/Vino-DANTE-ROBINO-Gran-Dante-Malbec-750ml.jpg")
let producto28 = new Producto (28,"Vino TARAPACÁ Gran Reserva Etiqueta Negra Cabernet",1810,300,"imagenes/Vino-TARAPACÁ-Gran-Reserva-Etiqueta-Negra-Cabernet-750ml.jpg")



let lista = [producto1,producto2,producto3,producto4,producto5,producto6,producto7,producto8,producto9,producto10,producto11,
    producto12,producto13,producto14,producto15,producto16,producto17,producto18,producto19,producto20,producto21,producto22,producto23,
    producto24,producto25,producto26,producto27,producto28] 
   

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function guardarelCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
    for (const producto of producto){
      guardarLocal(carrito.id,JSON.stringify(carrito));
  }
}





// SE CREA LAS CARDS EN EL HTML
const container = document.getElementById("container");

lista.forEach((producto) => {
    let contenedor = document.createElement("div");
    contenedor.classList.add("card");

    contenedor.innerHTML = `
    <img src="${producto.imagen}" alt="${producto.nombre}">
        <h2>${producto.nombre}</h2>
        <p>Precio: $${producto.precio}</p>
        <button id="comprar-${producto.id}" class="btn">Comprar</button>
    `;
    
    container.appendChild(contenedor);


    // SE CREA EL CARRTIO DE COMPRAS, USO DE  EVENTOS Y BIBLIOTECAS
    document.getElementById(`comprar-${producto.id}`).addEventListener("click", (e) => {
        e.preventDefault();
        agregarAlCarrito(producto);
    });
});

function agregarAlCarrito(producto) {
    const index = carrito.findIndex(p => p.id === producto.id);
    if (index > -1) {
        carrito[index].cantidad += 1; 
    } else {
        carrito.push({ ...producto, cantidad: 1 }); 
    }

    mostrarCarrito();
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Producto agregado al carrito",
        showConfirmButton: false,
        timer: 1500
      });
}

function eliminarDelCarrito(id) {
    carrito = carrito.filter(producto => producto.id !== id);
    mostrarCarrito();
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
      });
      swalWithBootstrapButtons.fire({
        title: "Esta seguro que desea eliminarlo del carrito?",
      
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Si, eliminar del carrito",
        cancelButtonText: "Cancelar!",
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire({
            title: "Eliminado!",
            text: "Su producto ha sido eliminado del carrito de compras.",
            icon: "success"
          });
        } else if (
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelado",
            text: "",
            icon: "error"
          });
        }
      });
}

function mostrarCarrito() {
    const productosCarrito = document.getElementById("productos-carrito");
    productosCarrito.innerHTML = '';
    let total = 0;

    carrito.forEach((producto) => {
        let item = document.createElement("div");
        item.innerHTML = `
            ${producto.nombre} - $${producto.precio} x ${producto.cantidad}
            <button onclick="eliminarDelCarrito(${producto.id})" class="btn">Eliminar</button>
        `;
        productosCarrito.appendChild(item);
        total += producto.precio * producto.cantidad; 
    });

    document.getElementById("total").textContent = total;
}

mostrarCarrito();

// FORMULARIO PARA FINALIZAR LA COMP[RA]
  

      
      const formulario = document.getElementById('registroForm');
      const mensajeDiv = document.getElementById('mensaje');
      
      
      formulario.addEventListener('submit', function(event) {
          event.preventDefault(); 
      
          const nombre = document.getElementById('nombre').value;
          const direccion = document.getElementById('direccion').value;
      
              if (nombre === '' || direccion === '') {
              mensajeDiv.textContent = 'Por favor, completa todos los campos.';
            return;
          }
         Swal.fire({
            title: "Felicidades",
            text: "Tu compra ha sido finalizada con exito, estara llegando a la brevedad!",
            icon: "success"
          });    
        
          formulario.reset();
      });
      
      
      
      
      