import { v4 as uuidv4 } from "uuid";

const SHOPPING_LISTS = [
  {
    id: uuidv4(),
    name: "Mac Book",
    price: 1400,
    image: "http://picsum.photos/id/2/1600",
  },
  {
    id: uuidv4(),
    name: "Old Car",
    price: 2400,
    image: "http://picsum.photos/id/111/800",
  },
  {
    id: uuidv4(),
    name: "Shoes",
    price: 1000,
    image: "http://picsum.photos/id/21/800",
  },
  {
    id: uuidv4(),
    name: "Castle",
    price: 10000,
    image: "http://picsum.photos/id/193/800",
  },
  {
    id: uuidv4(),
    name: "Book",
    price: 300,
    image: "http://picsum.photos/id/464/800",
  },
  {
    id: uuidv4(),
    name: "Camera",
    price: 1000,
    image: "http://picsum.photos/id/435/800",
  },
  {
    id: uuidv4(),
    name: "Alarm Click",
    price: 1500,
    image: "http://picsum.photos/id/357/800",
  },
  {
    id: uuidv4(),
    name: "Flower",
    price: 50,
    image: "http://picsum.photos/id/360/800",
  },
];
const CARTLISTS = [
  {
    id: uuidv4(),
    name: "Glen Carrie",
    price: 100,
    image: "http://picsum.photos/id/429/800",
    quantity: 1,
  },
];

export { SHOPPING_LISTS, CARTLISTS };
