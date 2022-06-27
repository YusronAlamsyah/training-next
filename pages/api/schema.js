import { gql } from "@apollo/client";

export const GET_CATEGORIES = gql`
  query getCategories {
    categories(filters: {}) {
      items{
        id
        name
        image
      }
    }
  }
`;

export const GET_CATEGORIES_BY_ID = gql`
query getCategoryById($categoryId: Int) {
  category(id: $categoryId) {
    name
    products{
        items{
            sku
            name 
            special_price
            description{
              html
            }
        }
        total_count
    }
  }
}
`;

export const GET_PRODUCT_BY_ID = gql`
query getProductById($sku: String) {
    products(
        search: ""
        filter: {sku: {eq: $sku}}
    ){
        items {
            name
            image{
              url
            }
            special_price
            description{
              html
            }
        }
        total_count
    }
}
`;

export const ADD_SUBCRIBE = gql`
mutation AddSubcribe($email: String) {
    subscribe(input: {email: $email}) {
        status {
          code
          message
          response
        }
      }
}
`;