import Breadcrumb from '../components/ui/Breadcrumb';
import Card from '../components/ui/Card';
const shopArray = [
	{
		id: Math.random(),
		title: 'Nomad Tumblr',
		linkTo: '#',
		price: 34.99,
		img_src:
			'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
		img_alt:
			'Olive drab green insulated bottle with flared screw lid and flat top.',
	},
	{
		id: Math.random(),
		title: 'Focus Paper Refill',
		linkTo: '#',
		price: 88.99,
		img_src:
			'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
		img_alt:
			'Person using a pen to cross a task off a productivity paper card.',
	},
	{
		id: Math.random(),
		title: 'Machined Mechanical Pencil',
		linkTo: '#',
		price: 34.99,
		img_src:
			'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
		img_alt:
			'Hand holding black machined steel mechanical pencil with brass tip and top.',
	},
];

const breadcrumbs = [
	{
		id: Math.random(),
		name: 'Shop'
	}
]

const RenderShop = () => {
	return shopArray.map((item) => {
		return (
			<Card
				key = {item.id}
				title={item.title}
				linkTo={item.linkTo}
				price={item.price}
				imageMeta={{
					src: item.img_src,
					alt: item.img_alt,
				}}
			/>
		);
	});
};

const Shop = () => {
	return (
		<div className='mx-auto py-20 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
			<h2 className='sr-only'>Shop</h2>
			<Breadcrumb breadcrumbs={breadcrumbs}/>
			<div className='grid grid-cols-1 mt-5 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
				<RenderShop />
			</div>
		</div>
	);
};

export default Shop;
