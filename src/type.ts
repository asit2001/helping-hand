export interface AllServices {
    id:       string;
    category: string;
    data:     Datum[];
}

export interface Datum {
    serviceName:    string;
    imgUrl:         string;
    productImages?: ProductImage[];
    bookingNumber:  number;
    ratting?:       number;
    services:       Service[];
    rating?:        number;
}

export interface ProductImage {
    name:   string;
    imgUrl: string;
}

export interface Service {
    imgUrl:          string;
    name:            string;
    price:           number;
    details:         string[];
    discountedPrice: number;
}
