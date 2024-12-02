const products = [
    {
      id: "Grt223",
      name: "Mancuerna",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit doloremque earum, non provident consequatur labore ratione iure cumque? Ex architecto ipsum reprehenderit aperiam vel, harum deleniti excepturi dicta accusamus ut!",
      price: 37.700,
      stock: 15,
      image: ["/img/mancuerna.png"],
      category: "Accesorios"
    },
    {
      id: "Grt224",
      name: "Kettlebell",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit doloremque earum, non provident consequatur labore ratione iure cumque? Ex architecto ipsum reprehenderit aperiam vel, harum deleniti excepturi dicta accusamus ut!",
      price: 125.600,
      stock: 10,
      image: ["/img/kettlebell.png"],
      category: "Accesorios"
    },
    {
      id: "Hff556",
      name: "Soga Crossfit",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit doloremque earum, non provident consequatur labore ratione iure cumque? Ex architecto ipsum reprehenderit aperiam vel, harum deleniti excepturi dicta accusamus ut!",
      price: 15.500,
      stock: 8,
      image: ["/img/soga-crossfit"],
      category: "Funcional"
    },
    {
      id: "Hff557",
      name: "Colchoneta",
      description: "Colchoneta Gimnasia Alta Densidad C/ Cierre 1 * 50 * 5",
      price: 11.500,
      stock: 17,
      image: ["/img/colchoneta.png"],
      category: "Funcional"
    },
    {
      id: "Wre442",
      name: "Colchoneta Yoga",
      description: "Colchoneta Yoga Mat Fitness Pilates Gym Antideslizante 10 Mm",
      price: 24.800,
      stock: 6,
      image: ["/img/colchoneta-yoga"],
      category: "Yoga y Pilates"
    },
    {
      id: "Wre443",
      name: "Fitball",
      description: "Pelota Yoga Esferodinamia Suiza 75 Cm Gym Pilates + Inflador",
      price: 25.900,
      stock: 6,
      image: ["/img/fitball"],
      category: "Yoga y Pilates"
    },
  ]
  //Obtener productos
  const getProducts = () => {
    return new Promise((resolve, reject) => {
    
      setTimeout( ()=>{
        resolve(products)
      }, 2000 )
    })
  }
  
  export { getProducts }