import React, { useState } from 'react';
import './FeaturesInformation.css';
import { FaSpa, FaBed, FaUtensils, FaCalendarAlt } from 'react-icons/fa';

const featureData = {
  "Resort Facilities": {
    icon: <FaSpa />,
    title: "Luxurious Resort Facilities",
    description: "At Chuti Resort, we pride ourselves on offering an array of luxurious facilities designed to provide an unparalleled experience for every guest. Immerse yourself in our magnificent infinity pool, where crystal-clear waters meet breathtaking natural vistas, creating a serene escape. For those seeking rejuvenation, our world-class spa offers a tranquil sanctuary with a wide range of treatments, from soothing massages to invigorating body wraps, all administered by expert therapists. Maintain your wellness routine at our state-of-the-art fitness center, equipped with modern cardio and strength training equipment. Families will appreciate our dedicated Kids Club and extensive playground, ensuring that our younger guests have an exciting and safe environment to play and explore. Beyond these, the resort boasts various recreational activities, including scenic walking trails, bird-watching opportunities, and outdoor sports courts for tennis and basketball, ensuring there's always something to do for guests of all ages. We believe in providing a holistic experience that blends relaxation with engaging activities, all set within the lush, green kingdom of Chuti Resort, making every moment of your stay truly unforgettable and a true embrace of heavenly joy and togetherness.",
    details: [
      "Magnificent Infinity Pool with stunning views, perfect for relaxation and swimming.",
      "Fully equipped State-of-the-art Fitness Center with personal trainers available upon request.",
      "Rejuvenating Spa and Wellness Programs offering a variety of massages, facials, and holistic therapies.",
      "Engaging Kids Club and Playground, providing supervised activities and entertainment for children.",
      "Outdoor Sports Courts including Tennis and Basketball, available for guests to enjoy.",
      "Scenic walking and jogging trails through lush greenery.",
      "Exclusive access to private beach area (if applicable to resort location) with comfortable loungers.",
      "24-hour concierge service to assist with all guest needs and requests.",
      "Complimentary high-speed Wi-Fi across the entire resort property.",
      "Ample parking facilities with valet service for guest convenience."
    ]
  },
  "Room Packages": {
    icon: <FaBed />,
    title: "Comfortable and Elegant Room Packages",
    description: "Discover unparalleled comfort and elegance in our diverse range of room and suite options at Chuti Resort. Each accommodation is meticulously designed with a blend of modern amenities and traditional aesthetics to provide a serene and luxurious retreat. Our Standard Rooms offer cozy yet spacious living, often featuring picturesque garden views and all essential conveniences for a delightful stay. For an elevated experience, our Deluxe Suites provide more expansive living spaces, often boasting stunning panoramic views of the ocean or the resort's natural landscape, perfect for unwinding. Families can indulge in our Family Villas, which come with the added luxury of private pools, offering an exclusive and intimate setting for togetherness. Executive Suites are tailored for discerning guests, providing personalized services, enhanced amenities, and sophisticated interiors. For couples seeking a romantic getaway, our Honeymoon Packages include special amenities and services to make your romantic escape truly magical. All rooms are equipped with plush bedding, state-of-the-art entertainment systems, and spacious bathrooms, ensuring every moment of your stay is marked by utmost comfort and luxury. We ensure that your accommodation serves as your personal haven, allowing you to relax, rejuvenate, and create lasting memories in a tranquil environment.",
    details: [
      "Standard Rooms: Cozy and well-appointed rooms with garden views, perfect for a comfortable stay.",
      "Deluxe Suites: Spacious suites offering breathtaking ocean or lake views, with separate living areas.",
      "Family Villas: Luxurious villas featuring multiple bedrooms and private pools, ideal for families or groups.",
      "Executive Suites: Sophisticated accommodations with personalized concierge services and premium amenities.",
      "Royal Suites: The epitome of luxury, offering expansive spaces, exclusive services, and stunning decor.",
      "Bhawal Cottage: Unique cottages inspired by local heritage, providing a rustic yet luxurious experience.",
      "Wooden Cottage: Charming cottages built with natural wood, offering a cozy and warm ambiance amidst nature.",
      "Oitijjo Cottage: Culturally rich cottages reflecting local traditions with modern comforts.",
      "Duplex Villa: Two-story villas offering ample space and privacy for extended stays.",
      "Premium Twin Suite: Modern twin-bedded suites with enhanced amenities and scenic views.",
      "Platinum King Suite: King-bedded suites with top-tier luxury, spacious layouts, and exclusive access.",
      "Honeymoon Packages: Specially curated packages for couples, including romantic setups and exclusive services."
    ]
  },
  "Dining Options": {
    icon: <FaUtensils />,
    title: "Exquisite Dining Experiences",
    description: "Embark on an exquisite culinary journey at Chuti Resort, where every meal is an celebration of flavor and freshness. Our diverse dining options cater to every palate, from casual bites to gourmet feasts. The Multi-cuisine Buffet Restaurant offers an extensive spread for breakfast, lunch, and dinner, featuring local delicacies and international favorites prepared by our expert chefs. For those seeking a refined ambiance, our Fine Dining restaurant presents an a la carte menu with innovative dishes crafted from the freshest ingredients, accompanied by an impressive wine list. Enjoy refreshing drinks and light snacks at our Poolside Bar & Grill, perfect for a relaxed afternoon. We also provide 24-hour Room Service, allowing you to savor delicious meals in the comfort and privacy of your accommodation. Additionally, explore our Specialty Restaurants, which might include authentic seafood preparations or traditional local cuisine, offering a true taste of the region. We pride ourselves on using locally sourced, organic ingredients whenever possible, ensuring both quality and sustainability. Our talented culinary team is dedicated to creating memorable dining experiences that complement the natural beauty and tranquility of Chuti Resort, making your stay a feast for all senses.",
    details: [
      "Multi-cuisine Buffet Restaurant: A grand buffet spread for breakfast, lunch, and dinner with a variety of international and local dishes.",
      "Fine Dining Restaurant: An elegant setting offering an exquisite à la carte menu with gourmet selections and a curated wine list.",
      "Poolside Bar & Grill: Relaxed outdoor dining with light snacks, refreshing beverages, and grilled specialties by the pool.",
      "24-hour Room Service: Enjoy delicious meals and snacks in the comfort of your room or suite at any time.",
      "Specialty Restaurants: Dedicated restaurants focusing on specific cuisines, such as fresh seafood or authentic local dishes.",
      "Café & Bakery: A charming spot for freshly brewed coffee, teas, pastries, and light bites.",
      "Lounge Bar: A sophisticated bar offering a wide selection of cocktails, spirits, and fine wines in a relaxed atmosphere.",
      "Private Dining: Exclusive dining experiences available for special occasions, with personalized menus and service.",
      "BBQ Nights: Regular themed BBQ nights featuring grilled meats, seafood, and fresh salads under the stars.",
      "Cooking Classes: Participate in interactive cooking classes to learn local culinary secrets from our chefs."
    ]
  },
  "Event Services": {
    icon: <FaCalendarAlt />,
    title: "Host Your Unforgettable Events",
    description: "Chuti Resort offers exceptional venues and comprehensive services to make your special occasions and corporate gatherings truly unforgettable. Our Grand Ballroom is a versatile space, perfect for hosting large weddings, conferences, and gala dinners, accommodating numerous guests with elegance. For more intimate meetings or workshops, we provide well-equipped Meeting Rooms featuring modern audiovisual technology and high-speed internet, ensuring seamless presentations and productive discussions. Our picturesque Outdoor Venues, set against the backdrop of lush gardens or serene lake views, are ideal for breathtaking wedding ceremonies, receptions, and outdoor celebrations. A dedicated Event Planning Team works closely with you from conception to execution, ensuring every detail is meticulously handled, from decor and logistics to entertainment. We also offer Customizable Catering Options, allowing you to design a menu that perfectly suits your event's theme and your guests' preferences, from elaborate buffets to bespoke plated dinners. Whether it's a romantic wedding, a successful corporate retreat, or a joyous family celebration, Chuti Resort provides the perfect blend of natural beauty, luxurious amenities, and professional service to create an event that surpasses all expectations and leaves a lasting impression on everyone involved.",
    details: [
      "Grand Ballroom: A spacious and elegant venue, perfect for large weddings, conferences, and corporate events, with customizable layouts.",
      "Meeting Rooms: Multiple well-equipped rooms with modern audiovisual facilities, ideal for business meetings, workshops, and seminars.",
      "Outdoor Venues: Beautiful garden and lakeside settings for enchanting wedding ceremonies, receptions, and social gatherings.",
      "Dedicated Event Planning Team: Professional planners to assist with every aspect of your event, from conceptualization to execution.",
      "Customizable Catering Options: Tailored menus ranging from gourmet buffets to multi-course plated dinners, featuring diverse cuisines.",
      "Audiovisual Equipment: State-of-the-art sound systems, projectors, and lighting to enhance your presentations and entertainment.",
      "Accommodation Packages: Special rates and packages for event attendees staying at the resort.",
      "Team Building Activities: Organized outdoor and indoor activities to foster teamwork and camaraderie for corporate groups.",
      "Floral & Decor Services: Expert floral arrangements and decor services to create the perfect ambiance for your event.",
      "Photography & Videography: Assistance with arranging professional photographers and videographers to capture your special moments."
    ]
  },
};

const FeaturesInformation = () => {
  const [selectedFeature, setSelectedFeature] = useState("Resort Facilities");

  const handleFeatureChange = (e) => {
    setSelectedFeature(e.target.value);
  };

  const currentFeature = featureData[selectedFeature];

  return (
    <div className="features-information-container" id="features-information">
      <h2 className="features-heading">Our Resort Features</h2>
      <div className="feature-dropdown-wrapper">
        <select value={selectedFeature} onChange={handleFeatureChange} className="feature-dropdown">
          {Object.keys(featureData).map((feature) => (
            <option key={feature} value={feature}>
              {feature}
            </option>
          ))}
        </select>
      </div>

      {currentFeature && (
        <div className="feature-card">
          <div className="feature-icon">{currentFeature.icon}</div>
          <h3>{currentFeature.title}</h3>
          <p>{currentFeature.description}</p>
          <ul className="feature-details-list">
            {currentFeature.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FeaturesInformation;
