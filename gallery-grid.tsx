import { motion } from "framer-motion";

const photos = [
  {
    url: "https://images.unsplash.com/photo-1464750329548-977f9793ca3e",
    alt: "Professional hairstyle by Ayo Ogunseinde"
  },
  {
    url: "https://images.unsplash.com/photo-1507679799987-c73779587ccf",
    alt: "Professional look by Hunters Race"
  },
  {
    url: "https://images.unsplash.com/photo-1484981138541-3d074aa97716",
    alt: "Elegant hairstyle by Brooke Lark"
  },
  {
    url: "https://images.unsplash.com/photo-1491336477066-31156b5e4f35",
    alt: "Modern hairstyle by Ruthson Zimmerman"
  },
  {
    url: "https://images.unsplash.com/photo-1554774853-719586f82d77",
    alt: "Professional cut by Austin Distel"
  },
  {
    url: "https://images.unsplash.com/photo-1521790361543-f645cf042ec4",
    alt: "Stylish look by Cytonn Photography"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function GalleryGrid() {
  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {photos.map((photo) => (
        <motion.div
          key={photo.url}
          variants={item}
          className="aspect-square relative overflow-hidden rounded-lg"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.2 }}
        >
          <img
            src={photo.url}
            alt={photo.alt}
            className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </motion.div>
      ))}
    </motion.div>
  );
}