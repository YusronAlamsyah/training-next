import { List_customer } from "../../customer"

List_customer

export default function handler(req, res) {
    if (List_customer.length > 0){
        res.status(200).json(List_customer)
    }else{
        res.status(404).json({message:'Data not found'})
    }
    
  }
  