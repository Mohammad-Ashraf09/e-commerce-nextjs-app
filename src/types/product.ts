export interface Review {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
}

export interface Product {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    rating: number;
    brand: string;
    returnPolicy: string;
    thumbnail: string;
    images: string[];
    reviews: Review[];
    stock: number;
    availabilityStatus: string;
    shippingInformation: string;
    warrantyInformation: string;
}
