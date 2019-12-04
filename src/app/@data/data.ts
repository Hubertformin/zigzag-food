/*
* Author: Hubert Formin
* Date: 26-11-2019 at 2:30 AM
*/

export interface UserModel {
    id?: string;
    name?: string;
    email?: string;
    phoneNumber: string;
    password?: string;
    address?: string;
    location?: string;
}

export interface CategoryModel {
    id: string;
    name: string;
    imageUrl: string;
    items: number;
}

export interface ItemsModel {
    id: string;
    name: string;
    unitPrice: number;
    units: string;
    imageUrl: string;
}

export interface CartItems {
    id: string;
    name: string;
    imageUrl: string;
    unitPrice: number;
    quantity: number;
    units: string;
    totalAmount: number;
}

export interface SaleModel {
    id: string;
    customer: UserModel;
    items: CartItems[];
    totalAmount: number;
    date: string;
}

export const CATEGORIES_DATA: CategoryModel[] = [
    {
        id: 'a',
        name: 'Food',
        imageUrl: 'assets/images/products/Fruits.jpg',
        items: 50
    },
    {
        id: 'b',
        name: 'Cheese',
        imageUrl: 'assets/images/products/eggs.jpg',
        items: 20
    },
    {
        id: 'c',
        name: 'Beverages',
        imageUrl: 'assets/images/products/drinks.jpg',
        items: 25
    },
    {
        id: 'd',
        name: 'Perishables',
        imageUrl: 'assets/images/products/cooking-ingredients.jpg',
        items: 75
    },
    {
        id: 'e',
        name: 'Salt',
        imageUrl: 'assets/images/products/salt.jpg',
        items: 55
    },
    {
        id: 'f',
        name: 'Tomatoes',
        imageUrl: 'assets/images/products/tomatoes.jpg',
        items: 30
    },
    {
        id: 'g',
        name: 'Eggs',
        imageUrl: 'assets/images/products/eggs.jpg',
        items: 125
    },
    {
        id: 'h',
        name: 'Vegetables',
        imageUrl: 'assets/images/products/vegetables.jpg',
        items: 10
    },
    {
        id: 'i',
        name: 'Bread',
        imageUrl: 'assets/images/products/burgers.jpg',
        items: 2
    },
];

export const ITEMS_DATA: ItemsModel[] = [
    {
        id: 'a',
        name: 'Plantains',
        unitPrice: 400,
        units: 'EA',
        imageUrl: 'assets/images/products/food.jpg'
    },
    {
        id: 'b',
        name: 'Salts',
        unitPrice: 200,
        units: 'KG',
        imageUrl: 'assets/images/products/salt.jpg'
    },
    {
        id: 'c',
        name: 'Bin Beer',
        unitPrice: 600,
        units: 'EA',
        imageUrl: 'assets/images/products/drinks.jpg'
    },
    {
        id: 'd',
        name: 'Eggs',
        unitPrice: 1200,
        units: 'EA',
        imageUrl: 'assets/images/products/eggs.jpg'
    },
    {
        id: 'e',
        name: 'B.Bread',
        unitPrice: 700,
        units: 'EA',
        imageUrl: 'assets/images/products/burgers.jpg'
    }
];
