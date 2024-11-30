interface Vehicle {
    id: number;
    chassis_number: string;
    brand: string;
    model: string;
    manufacture_year: number;
    model_year: number;
    color: string;
    value: number;
  }
  
  interface Client {
    name: string;
  }
  
  interface Seller {
    username: string;
  }
  
 export interface SellTransaction {
    id: number;
    date: string;  
    entry_value: number;
    financed_value: number;
    total_value: number;
    vehicle: Vehicle;
    client: Client;
    seller: Seller;
  }

  const transactions: SellTransaction[] = []
