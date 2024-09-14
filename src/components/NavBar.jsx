import { React, useState } from 'react'
import GelatoLogo from '../assets/gelato_logo_black.svg'
import { PiHeadsetFill, PiGlobeBold } from "react-icons/pi";
import { IoMdCart, IoIosArrowForward, IoIosArrowDown, IoIosMenu, IoIosClose } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import Dropdown from './Dropdown';
import NavDropdown from './NavDropdown';

const NavBar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const dropdownItems = [
    { label: 'Language - IN', href: '#option1' },
    { label: 'Currency - INR', href: '#option2' }
  ];

  const products = [
    { label: 'Bestsellers', href: '#option1', icon: IoIosArrowForward, 
      secondaryItems: [
        { label: 'T-shirt', href: '#option1' },
        { label: 'Wall Art', href: '#option2' },
        { label: 'Canvas', href: '#option3' },
        { label: 'Photo books', href: '#option4' },
        { label: 'Cards', href: '#option5' },
      ] },
    { label: 'Mens clothing', href: '#option2', icon: IoIosArrowForward,
      secondaryItems: [
        { label: 'T-shirt', href: '#option1' },
        { label: 'Tank tops', href: '#option2' },
        { label: '3/4 Sleeve shirts', href: '#option3' },
        { label: 'Longsleeve shirts', href: '#option4' },
        { label: 'Hoodies', href: '#option5' },
        { label: 'Sweat shirts', href: '#option6' },
        { label: 'Organic', href: '#option7' },
        { label: 'Premium', href: '#option8' },
        { label: 'Sportswear', href: '#option9' },
      ]},
      { label: 'Womens clothing', href: '#option3', icon: IoIosArrowForward,
        secondaryItems: [
          { label: 'T-shirt', href: '#option1' },
          { label: 'Tank tops', href: '#option2' },
          { label: '3/4 Sleeve shirts', href: '#option3' },
          { label: 'Longsleeve shirts', href: '#option4' },
          { label: 'Hoodies', href: '#option5' },
          { label: 'Sweat shirts', href: '#option6' },
          { label: 'Organic', href: '#option7' },
          { label: 'Premium', href: '#option8' },
          { label: 'Sportswear', href: '#option9' },
        ]},
        { label: 'Kids & baby clothing', href: '#option4', icon: IoIosArrowForward,
          secondaryItems: [
            { label: 'T-shirt', href: '#option1' },
            { label: 'Hoodies', href: '#option2' },
            { label: 'Sweat shirts', href: '#option3' },
            { label: 'Organic', href: '#option4' },
            { label: 'Premium', href: '#option5' },
            { label: 'Baby clothing', href: '#option6' },
          ]},
          { label: 'Wall art', href: '#option5', icon: IoIosArrowForward,
            secondaryItems: [
              { label: 'Poster', href: "#option1"},
              { label: 'Canvas', href: "#option2"},
              { label: 'Premium wooden framed posters', href: "#option3"},
              { label: 'Wooden framed posters', href: "#option4"},
              { label: 'Metal framed posters', href: "#option5"},
              { label: 'Posters with hangers', href: "#option6"},
              { label: 'Aluminum print', href: "#option7"},
              { label: 'Acrylic print', href: "#option8"},
              { label: 'Foam print', href: "#option9"},
              { label: 'Wood prints', href: "#option10"}
            ]},
          { label: 'Calenders', href: '#option6'},
          { label: 'Cards', href: '#option7'},
          { label: 'Photo books', href: '#option8', icon: IoIosArrowForward,
            secondaryItems: [
              { label: 'Soft cover photo books', href: "#option1"},
              { label: 'Hard cover photo books', href: "#option2"}
            ]},
          { label: 'Hats', href: '#option9', icon: IoIosArrowForward,
            secondaryItems: [
              { label: 'Beanie', href: "#option1"},
              { label: 'Snapback', href: "#option2"},
              { label: 'Bucket Hat', href: "#option3"}
            ]},
          { label: 'Phone cases', href: '#option10'},
          { label: 'Mugs', href: '#option11'},
  ];

  const startSelling = [
    { label: 'Print on demand', href: '#option1'},
    { label: 'Setup your business', href: '#option2', icon: IoIosArrowForward,
      secondaryItems: [
        { label: 'Sell wall art', href: '#option1'},
        { label: 'Sell clothing', href: '#option2'},
        { label: 'Embroidery', href: '#option3'},
        { label: 'Personalized gifts', href: '#option4'},
        { label: 'Sell art online', href: '#option5'},
        { label: 'Printing service', href: '#option6'},
        { label: 'White label products', href: '#option7'},
        { label: 'Create merch for your fans', href: '#option8'},
        { label: 'Print logo on merchandise', href: '#option9'}
      ]},
    { label: 'Sell custom products', href: '#option3', icon: IoIosArrowForward,
      secondaryItems: [
        { label: 'Custom products', href: "#option1"},
        { label: 'Custom wall art', href: "#option2"},
        { label: 'Custom posters', href: "#option3"},
        { label: 'Custom canvas prints', href: "#option4"},
        { label: 'Custom calendars', href: "#option5"},
        { label: 'Custom cards', href: "#option6"},
        { label: 'Custom photo books', href: "#option7"},
        { label: 'Custom clothing', href: "#option8"},
        { label: 'Custom embroidered clothing', href: "#option9"},
        { label: 'Custom hoodies', href: "#option10"},
        { label: 'Custom shirts', href: "#option11"},
        { label: 'Custom children\'s books', href: "#option12"},
        { label: 'Custom hats', href: "#option13"},
        { label: 'Custom mugs', href: "#option14"},
        { label: 'Custom merchandise', href: "#option15"},
      ]},
    { label: 'Integrations', href: '#option4', icon: IoIosArrowForward,
      secondaryItems: [
        { label: 'Integrations overview', href: '#option1'},
        { label: 'Esty', href: '#option2'},
        { label: 'Shopify', href: '#option3'},
        { label: 'WooCommerce', href: '#option4'},
        { label: 'Wix', href: '#option5'},
        { label: 'Squarespace', href: '#option6'},
        { label: 'BigCommerce', href: '#option7'},
      ]},
    { label: 'Shipping and delivery', href: '#option5', icon: IoIosArrowForward,
      secondaryItems: [
        { label: 'Shipping and delivery', href: '#option1'},
        { label: 'Dropshipping products', href: '#option2'},
      ]},
    { label: 'Partner services', href: '#option6'},
    { label: 'Custom packing', href: '#option7'},
    { label: 'Move your products', href: '#option8'}
  ];

  const toolsAndApps = [
    { label: 'Tools and apps overview', href:"#option1"},
    { label: 'Personalization Studio', href:"#option2", icon: IoIosArrowForward, 
      secondaryItems: [
        { label: 'Personalization Studio overview', href: "#option1"},
        { label: 'Esty tools', href: "#option2"},
        { label: 'Shopify tools', href: "#option3"},
        { label: 'Personalized photobook editor', href: "#option4"},
        { label: 'Personalized cards editor', href: "#option5"},
        { label: 'Personalized calendar editor', href: "#option6"},
        { label: 'Personalized apparel editor', href: "#option7"},
      ]},
    { label: 'Auto File Sync', href: '#option3'},
    { label: 'Design maker', href: '#option4'},
    { label: 'Product creation tools', href: '#option5'},
    { label: 'Mockup studio', href: '#option6'},
    { label: 'Price Navigator', href: '#option7'},
    { label: 'Analytics', href: '#option8'},
    { label: 'Gelato App', href: '#option9'},
  ];

  const pricing = [
    { label: 'Payments and pricing', href: '#option1'},
    { label: 'Subscription plans', href: '#option2'},
    { label: 'Gelato', href: '#option3'},
    { label: 'Gelato Gold', href: '#option4'},
    { label: 'Platinum', href: '#option5'},
    { label: 'Offers', href: '#option6'},
  ];

  const resources = [
    { label: 'Resource center', href: '#option1'},
    { label: 'Gelato Academy', href: '#option2'},
    { label: 'Customer stories', href: '#option3'},
    { label: 'Blog', href: '#option4', icon: IoIosArrowForward,
      secondaryItems: [
        { label: 'All blogs', href: '#option1' },
        { label: 'The best dropshipping products', href: '#option2' },
        { label: 'The power of personalized gifts', href: '#option3' },
        { label: 'Profitable dropship niches', href: '#option4' },
        { label: 'Start a profitable t-shirt business', href: '#option5' },
        { label: 'Shopify dropshipping', href: '#option6' },
        { label: 'Best t-shirt fonts', href: '#option7' },
        { label: 'How to sell art online', href: '#option8' },
        { label: 'Best quality t-shirts', href: '#option9' },
        { label: 'Etsy shop ideas', href: '#option10' },
        { label: 'Selling printables on Etsy', href: '#option11'}
      ] },
    { label: 'Whitepapers', href: '#option5', icon: IoIosArrowForward,
      secondaryItems: [
        { label: 'Elevating space-wall art trends 2024', href: '#option1' },
        { label: 'Unveiling the future-Apparel trends 2024', href: '#option2' },
        { label: 'From mass to meaning', href: '#option3' },
      ]},
    { label: 'Newsroom', href: '#option6'},
    { label: 'Sustainability', href: '#option7', icon: IoIosArrowForward,
      secondaryItems: [
        { label: 'Our approach', href: '#option1'},
        { label: 'Sustainability report 2023', href: '#option2'},
        { label: 'Local production', href: '#option3'}
      ]},
    { label: 'Help center', href: '#option8'}
  ];

  const proSellers = [];

  const gelatoConnect = [
    { label: 'Gelato Connect', href: '#option1'},
    { label: 'Logistics', href: '#option2'},
    { label: 'Workflow', href: '#option3'},
    { label: 'Procurement', href: '#option4'}
  ];

  return (
    <div className='sticky top-0 border-b bg-white '>
      <div className='flex justify-around md:justify-between items-center border-b-2 md:px-32 py-[10px]'>
        <button onClick={toggleMenu} className='md:hidden flex items-center' >
          {isMenuOpen ? <IoIosClose className='text-gray-700 text-4xl' /> : <IoIosMenu className='text-gray-700 text-3xl' /> }  
        </button>
        <a href="#">
            <img src={GelatoLogo} alt="Gelato Logo" className='w-32'/>
        </a>
        <a href="#" className='block md:hidden bg-black text-sm text-white hover:text-gray-500 rounded-full px-4 py-[8px] ml-2 '>Sign up for free</a>
        
        <div className='hidden md:flex justify-center items-center gap-1'>
          <a href="#" className='flex justify-center items-center gap-2 text-sm px-3 py-[8px] hover:bg-[#dad9d9] rounded-3xl'><PiHeadsetFill className='text-2xl'/> Contact us</a>
          <a href="#" className='flex justify-center items-center gap-2 text-sm px-3 py-[8px] hover:bg-[#dad9d9] rounded-3xl'>
            <PiGlobeBold className='text-2xl'/>                
            <Dropdown items={dropdownItems} />
          </a>
          <a href="#" className='flex justify-center items-center gap-2 text-sm px-3 py-[8px] hover:bg-[#dad9d9] rounded-3xl'><IoMdCart className='text-2xl'/> Cart </a>
          <a href="#" className='flex justify-center items-center gap-2 text-sm px-3 py-[8px] hover:bg-[#dad9d9] rounded-3xl'><IoPerson className='text-xl'/> Sign in </a>
          <a href="#" className='bg-black text-sm text-white hover:text-gray-500 rounded-full px-4 py-[8px] ml-2 '>Sign up for free</a>
        </div>    
      </div>
      <div className="hidden md:flex justify-start items-center px-28">
        <NavDropdown title="Products" icon={IoIosArrowDown} items={products} label="Menu" />
        <NavDropdown title="Start selling" icon={IoIosArrowDown} items={startSelling} label="Menu" />
        <NavDropdown title="Tools and apps" icon={IoIosArrowDown} items={toolsAndApps} label="Menu" />
        <NavDropdown title="Pricing" icon={IoIosArrowDown} items={pricing} label="Menu" />
        <NavDropdown title="Resources" icon={IoIosArrowDown} items={resources} label="Menu" />
        <NavDropdown title="Pro Sellers" items={proSellers} label="Menu" />
        <NavDropdown title="Gelato Connect" icon={IoIosArrowDown} items={gelatoConnect} label="Menu" />
      </div>
      {isMenuOpen && (
        <div className='md:hidden bg-white shadow-lg'>          
          <div className='grid grid-cols-2 gap-6 p-4 separa'>
            <a href="#" className='flex justify-center items-center gap-2 text-sm px-3 py-[8px] mx-8 hover:bg-[#dad9d9] rounded-3xl'>
              <PiGlobeBold className='text-2xl'/>                
              <Dropdown items={dropdownItems} />
            </a>
            <a href="#" className='flex justify-center items-center gap-2 text-sm px-3 py-[8px] mx-8 hover:bg-[#dad9d9] rounded-3xl'><IoMdCart className='text-2xl'/> Cart </a>
            <a href="#" className='flex justify-center items-center bg-black text-sm text-white hover:text-gray-500 rounded-full px-4 py-[8px] mx-8'>Sign up for free</a>
            <a href="#" className='flex justify-center items-center gap-2 text-sm px-3 py-[8px] mx-8 hover:bg-[#dad9d9] rounded-3xl'><IoPerson className='text-xl'/> Sign in </a>
          </div>
          <div className="flex flex-col pl-10 border-t border-gray-950">
            <NavDropdown title="Products" icon={IoIosArrowForward} items={products} label="Menu" />
            <NavDropdown title="Start selling" icon={IoIosArrowForward} items={startSelling} label="Menu" />
            <NavDropdown title="Tools and apps" icon={IoIosArrowForward} items={toolsAndApps} label="Menu" />
            <NavDropdown title="Pricing" icon={IoIosArrowForward} items={pricing} label="Menu" />
            <NavDropdown title="Resources" icon={IoIosArrowForward} items={resources} label="Menu" />
            <NavDropdown title="Pro Sellers" items={proSellers} label="Menu" />
            <NavDropdown title="Gelato Connect" icon={IoIosArrowForward} items={gelatoConnect} label="Menu" />
          </div>
        </div>
      )}
    </div>
  )
}

export default NavBar
