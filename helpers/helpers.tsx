import {FirstLevelMenuItem} from "../interfaces/menu.interface";
import CousesIcon from "../layout/Menu/icons/courses.svg";
import {TopLevelCategory} from "../interfaces/page.interface";
import ServicesIcon from "../layout/Menu/icons/services.svg";
import BooksIcon from "../layout/Menu/icons/books.svg";
import ProductsIcon from "../layout/Menu/icons/products.svg";

export const firstLevelMenu: FirstLevelMenuItem[] = [
    {route: 'courses', name: 'Курсы', icon: <CousesIcon/>, id: TopLevelCategory.Courses},
    {route: 'services', name: 'Сервисы', icon: <ServicesIcon/>, id: TopLevelCategory.Services},
    {route: 'books', name: 'Книги', icon: <BooksIcon/>, id: TopLevelCategory.Books},
    {route: 'products', name: 'Товары', icon: <ProductsIcon/>, id: TopLevelCategory.Products},
];

export const priceRu = (price: number | undefined): string | undefined => price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ').concat(' ₽');

export const devlOfNum = (number: number, titles: [string, string, string]): string => {
    const cases = [2,0,1,1,1,2];
    return titles[(number % 100 > 4 && number < 100 % 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
};