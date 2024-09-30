import Link from 'next/link';

const products = [
    { id: 1, name: 'Silk Glamor High Sheen', price: '', image: 'https://d3f1ozwy5sre8y.cloudfront.net/2024-01/product_silk_glamor_high_sheen_0.jpg', link: '/products/1' },
    { id: 2, name: 'Easy Clean', price: '', image: 'https://d3f1ozwy5sre8y.cloudfront.net/2024-01/product_easy_clean.jpg', link: '/products/2' },
    { id: 3, name: 'Silk Glamor Matt', price: '', image: 'https://d3f1ozwy5sre8y.cloudfront.net/2024-01/product_silk_glamour_matt.jpg', link: '/products/3' },
    { id: 4, name: 'Bison Emulsion', price: '', image: 'https://d3f1ozwy5sre8y.cloudfront.net/2024-04/bison_emulsion-2272x1280.png', link: '/products/4' },
    { id: 5, name: 'Silk Glamor Soft Sheen', price: '', image: 'https://d3f1ozwy5sre8y.cloudfront.net/2024-04/silk_glamor_soft_sheen-2272x1280_0.png', link: '/products/5' },
];

const Products = () => {
    return (
        <div className="bg-black min-h-screen py-8 px-36 relative">
            <h1 className="text-4xl font-bold text-center mb-4 text-white">Our Products</h1>
            <div className="absolute top-4 right-4 bg-black bg-opacity-75 p-4 rounded-lg shadow-lg">
                <ul className="flex flex-col space-y-2">
                    <li className="navItem">
                        <Link href="/works">
                            <span className="text-white hover:underline">Our Works</span>
                        </Link>
                    </li>
                    <li className="navItem">
                        <Link href="/designs">
                            <span className="text-white hover:underline">Designs</span>
                        </Link>
                    </li>
                    <li className="navItem">
                        <Link href="/products">
                            <span className="text-white hover:underline">Products</span>
                        </Link>
                    </li>
                    <li className="navItem">
                        <Link href="/about">
                            <span className="text-white hover:underline">About Us</span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-4">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white shadow-md p-0 rounded-lg transform hover:scale-105 transition duration-300 ease-in-out"
                        >
                            <div className="flex justify-center mb-4">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-auto object-cover rounded-lg"
                                />
                            </div>
                            <div className="text-center">
                                <Link href={product.link || '/products'} legacyBehavior>
                                    <span className="text-blue-500 hover:underline text-lg font-semibold">
                                        {product.name}
                                    </span>
                                </Link>
                                <p className="text-gray-700 mt-2">{product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Products;
