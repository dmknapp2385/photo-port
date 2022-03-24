import React, { useState } from "react";
import Modal from '../Modal';


function PhotoList ({category}) {
    const [photos] = useState([
        {
            name: 'Grocery aisle', 
            category:'commercial', 
            description: 'Lorem ipsum dolar sit ame, conesit ad'
        },
        {
            name: 'Grocery booth', 
            category:'commercial', 
            description: 'Lorem ipsum dolar sit ame, conesit ad'
        },
        {
            name: 'Building exterior', 
            category:'commercial', 
            description: 'Lorem ipsum dolar sit ame, conesit ad'
        },
        {
            name: 'Restaurant table', 
            category:'commercial', 
            description: 'Lorem ipsum dolar sit ame, conesit ad'
        },
        {
            name: 'Cafe interior', 
            category:'commercial', 
            description: 'Lorem ipsum dolar sit ame, conesit ad'
        },
        {
            name: 'Cat green eyes', 
            category:'portraits', 
            description: 'Lorem ipsum dolar sit ame, conesit ad'
        },
        {
            name: 'Green parrot', 
            category:'portraits', 
            description: 'Lorem ipsum dolar sit ame, conesit ad'
        },
        {
            name: 'Yellow macaw', 
            category:'portraits', 
            description: 'Lorem ipsum dolar sit ame, conesit ad'
        },
        {
            name: 'Pug smile', 
            category:'portraits', 
            description: 'Lorem ipsum dolar sit ame, conesit ad'
        },
        {
            name: 'Pancakes', 
            category:'food', 
            description: 'Lorem ipsum dolar sit ame, conesit ad'
        },
        {
            name: 'Burrito', 
            category:'food', 
            description: 'Lorem ipsum dolar sit ame, conesit ad'
        },
        {
            name: 'Burger', 
            category:'food', 
            description: 'Lorem ipsum dolar sit ame, conesit ad'
        },
        {
            name: 'Scallop pasta', 
            category:'food', 
            description: 'Lorem ipsum dolar sit ame, conesit ad'
        },
        {
            name: 'Fruit bowl', 
            category:'food', 
            description: 'Lorem ipsum dolar sit ame, conesit ad'
        },
        {
            name: 'Green river', 
            category:'landscape', 
            description: 'Lorem ipsum dolar sit ame, conesit ad'
        },
        {
            name: 'Docks ', 
            category:'landscape', 
            description: 'Lorem ipsum dolar sit ame, conesit ad'
        },
        {
            name: 'Panoramic village by the sea' , 
            category:'landscape', 
            description: 'Lorem ipsum dolar sit ame, conesit ad'
        },
        {
            name: 'Domestic landscape' , 
            category:'landscape', 
            description: 'Lorem ipsum dolar sit ame, conesit ad'
        },
        {
            name: 'Park bench' , 
            category:'landscape', 
            description: 'Lorem ipsum dolar sit ame, conesit ad'
        },
    
    ]);

     const currentPhotos = photos.filter((photo) => photo.category === category);
    
     const [currentPhoto, setCurrentPhoto] = useState();

     const [isModalOpen, setIsModalOpen] = useState(false);

     const toggleModal = (image, i) => {
        setCurrentPhoto({...image, index: i});
        setIsModalOpen(true);
     }

    return(
    
      <div className="flex-row">
          {isModalOpen && <Modal currentPhoto={currentPhoto}/>}
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/small/${category}/${i}.jpg`)}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    )
}
export default PhotoList;
