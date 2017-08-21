import { Post } from './post.model';


//POST CONSTRUCTOR
//title :string, content :string, price :number,
//image :string, category :string, id :number
export const POSTS: Post[] = [
  new Post("Bicycle For Sale", "Not stolen and cheap", 100, "none", "bicycles",1),
  new Post("Coffee Beans", "Found em in my attic, smell alright", 0, "none", "food",2),
  new Post("Black Backpack", "Served me well, but s.o wants it gone", 0, "none","bags",3)
]
