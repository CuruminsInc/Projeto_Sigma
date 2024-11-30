export interface Vehicle {
    id: number;
    chassis_number: string;
    brand: string;
    model: string;
    manufacture_year: number;
    model_year: number;
    color: string;
    value: number;
  }
  
  export interface Client {
    name: string;
  }
  
  export interface Seller {
    username: string;
  }
  
  export interface BuyTransaction {
    id: number;
    date: string; 
    value: number;
    vehicle: Vehicle;
    client: Client;
    seller: Seller;
  }

  export type Transactions = BuyTransaction[];
  