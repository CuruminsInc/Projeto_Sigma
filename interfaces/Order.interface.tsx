interface Manufacturer {
    id: number;
    cnpj: string;
    company_name: string;
    brand: string;
    contact: string;
    business_phone: string;
    cell_phone: string;
  }
  
  interface Client {
    name: string;
  }
  
  interface Seller {
    username: string;
  }
  
  export interface OrderTransiction {
    id: number;
    date: string;  // ISO date string (e.g., "2024-11-30T18:16:20.000Z")
    model: string;
    year: number;
    color: string;
    accessories: string;
    value: number;
    manufacturer: Manufacturer;
    client: Client;
    seller: Seller;
  }
  