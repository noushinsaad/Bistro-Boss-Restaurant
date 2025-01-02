import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import orderCover from '../../../assets/shop/banner2.jpg'
import Cover from '../../shared/Cover/Cover';
import { useState } from 'react';
import useMenu from '../../../hooks/useMenu';
import FoodCard from '../../../components/FoodCard/FoodCard';

const Order = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [menu] = useMenu();
    const drinks = menu.filter(item => item.category === 'drinks')
    const dessert = menu.filter(item => item.category === "dessert")
    const soup = menu.filter(item => item.category === "soup")
    const salad = menu.filter(item => item.category === "salad")
    const pizza = menu.filter(item => item.category === "pizza")

    return (
        <div>
            <Cover img={orderCover} title="Order Food"></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)} className="mb-20">
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <div className='grid md:grid-cols-3 gap-4'>
                        {
                            salad.map(item => <FoodCard key={item._is} item={item}></FoodCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid md:grid-cols-3 gap-4'>
                        {
                            pizza.map(item => <FoodCard key={item._is} item={item}></FoodCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid md:grid-cols-3 gap-4'>
                        {
                            soup.map(item => <FoodCard key={item._is} item={item}></FoodCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid md:grid-cols-3 gap-4'>
                        {
                            dessert.map(item => <FoodCard key={item._is} item={item}></FoodCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid md:grid-cols-3 gap-4'>
                        {
                            drinks.map(item => <FoodCard key={item._is} item={item}></FoodCard>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;