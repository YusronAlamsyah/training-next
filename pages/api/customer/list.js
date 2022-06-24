import { list_customer } from "../../customer";

export default function handler(req, res) {
    if (list_customer.length > 0){
        res.status(200).json(list_customer)
    }else{
        res.status(404).json({message:'Data not found'})
    }
    
  }
  