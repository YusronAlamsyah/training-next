import { List_customer } from "../../customer";


export default function handler({query:{id}}, res) {
    const filtered = List_customer.filter((customer) => customer.id == id);
    if (filtered.length > 0){
        res.status(200).json(filtered)
    }else{
        res.status(404).redirect("/404")
    }
    
  }
  