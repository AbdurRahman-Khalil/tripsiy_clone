import australiaHeroImg from "./images/australia_hero.jpg";
import australiaImg from "./images/australia.jpg";
import baliHeroImg from "./images/bali_hero.jpg";
import baliImg1 from "./images/bali_1.jpg";
import baliImg2 from "./images/bali_2.jpg";
import baliImg3 from "./images/bali_3.jpg";
import baliImg4 from "./images/bali_4.jpg";
import baliImg5 from "./images/bali_5.jpg";
import cappadociaHerpImg from "./images/cappadocia_hero.jpg";
import cappadociaImg1 from "./images/cappadocia_1.jpg";
import cappadociaImg2 from "./images/cappadocia_2.jpg";
import costaRicaHeroImg from "./images/costa_rica_hero.jpg";
import costaRicaImg from "./images/costa_rica.jpg";
import dubaiHeroImg from "./images/dubai_hero.jpg";
import dubaiImg1 from "./images/dubai_1.jpg";
import dubaiImg2 from "./images/dubai_2.jpg";
import dubaiImg3 from "./images/dubai_3.jpg";
import dubaiImg4 from "./images/dubai_4.jpg";
import egyptHeroImg from "./images/egypt_hero.jpg";
import egyptImg from "./images/egypt.jpg";
import greeceHeroImg from "./images/greece_hero.jpg";
import greeceImg1 from "./images/greece_1.jpg";
import greeceImg2 from "./images/greece_2.jpg";
import istanbulHeroImg from "./images/istanbul_hero.jpg";
import istanbulImg from "./images/istanbul.jpg";
import kenyaHeroImg from "./images/kenya_hero.jpg";
import kenyaImg from "./images/kenya.jpg";
import kyotoHeroImg from "./images/kyoto_hero.jpg";
import kyotoImg1 from "./images/kyoto_1.jpg";
import kyotoImg2 from "./images/kyoto_2.jpg";
import maldivesHeroImg from "./images/maldives_hero.jpg";
import maldivesImg1 from "./images/maldives_1.jpg";
import maldivesImg2 from "./images/maldives_2.jpg";
import nepalHeroImg from "./images/nepal_hero.jpg";
import nepalImg from "./images/nepal.jpg";
import newyorkHeroImg from "./images/newyork_hero.jpg";
import newyorkImg from "./images/newyork.jpg";
import newzealndHeroImg from "./images/newzealand_hero.jpg";
import newzealndImg from "./images/newzealand.jpg";
import parisHeroImg from "./images/paris_hero.jpg";
import parisImg1 from "./images/paris_1.jpg";
import parisImg2 from "./images/paris_2.jpg";
import parisImg3 from "./images/paris_3.jpg";
import srilankaHeroImg from "./images/srilanka_hero.jpg";
import srilankaImg from "./images/srilanka.jpg";
import switzerlandHeroImg from "./images/switzerland_hero.jpg";
import switzerlandImg from "./images/switzerland.jpg";
import thailandHeroImg from "./images/thailand_hero.jpg";
import thailandImg1 from "./images/thailand_1.jpg";
import thailandImg2 from "./images/thailand_2.jpg";

import galleryImg1 from "./images/gallery_img_1.jpg";
import galleryImg2 from "./images/gallery_img_2.jpg";
import galleryImg3 from "./images/gallery_img_3.jpg";
import galleryImg4 from "./images/gallery_img_4.jpg";
import galleryImg5 from "./images/gallery_img_5.jpg";


export const packagesData = [
    {
        id: 1,
        titles: ["Australia"],
        description: "Explore vibrant cities, wild landscapes, and endless adventure.",
        short_description: "Explore vibrant cities",
        hero_image: australiaHeroImg,
        images: [
            { url: australiaImg },
        ],
        highlightedPlaces: ["Queenstown", "Rotorua", "Milford Sound", "Hobbiton Village"],
        price: 9000,
        about: {
            duration: "8 Days 7 Nights",
            days: [
                {
                    title: "Day 1",
                    description: "Arrival in Auckland, welcome dinner"
                },
                {
                    title: "Day 2",
                    description: "Explore Rotorua geothermal parks"
                },
                {
                    title: "Day 3-4",
                    description: "Adventure in Queenstown"
                },
                {
                    title: "Day 5",
                    description: "Milford Sound cruise"
                },
                {
                    title: "Day 6-7",
                    description: "Hobbiton & cultural tours"
                },
                {
                    title: "Day 8",
                    description: "Departure"
                }
            ]
        },
        ratings: 4.5,
        inclusions: ["Hotel", "Breakfast", "Airport Transfer", "Tours"],
        exclusions: ["Flights", "Personal Expenses", "Tips"],
        gallery: [
            { url: galleryImg1 },
            { url: galleryImg2 },
            { url: galleryImg3 },
            { url: galleryImg4 },
            { url: galleryImg5 }
        ]
    },
    {
        id: 2,
        titles: ["Bali", "Luxury Island Escape"],
        description: "A tropical haven of beaches and tranquility — where every moment feels magical.",
        short_description: "Tropical Bliss Awaits",
        hero_image: baliHeroImg,
        images: [
            { url: baliImg1 },
            { url: baliImg2 },
            { url: baliImg3 },
            { url: baliImg4 },
            { url: baliImg5 }
        ],
        highlightedPlaces: ["Queenstown", "Rotorua", "Milford Sound", "Hobbiton Village"],
        price: 5000,
        about: {
            duration: "8 Days 7 Nights",
            days: [
                {
                    title: "Day 1",
                    description: "Arrival in Auckland, welcome dinner"
                },
                {
                    title: "Day 2",
                    description: "Explore Rotorua geothermal parks"
                },
                {
                    title: "Day 3-4",
                    description: "Adventure in Queenstown"
                },
                {
                    title: "Day 5",
                    description: "Milford Sound cruise"
                },
                {
                    title: "Day 6-7",
                    description: "Hobbiton & cultural tours"
                },
                {
                    title: "Day 8",
                    description: "Departure"
                }
            ]
        },
        ratings: 4,
        inclusions: ["Hotel", "Breakfast", "Airport Transfer", "Tours"],
        exclusions: ["Flights", "Personal Expenses", "Tips"],
        gallery: [
            { url: galleryImg1 },
            { url: galleryImg2 },
            { url: galleryImg3 },
            { url: galleryImg4 },
            { url: galleryImg5 }
        ]
    },
    {
        id: 3,
        titles: ["Cappadocia", "Hot Air Balloon Experience"],
        description: "Elegance Above the Clouds and Elegance Above the Clouds and Elegance Above the Clouds.",
        short_description: "Elegance Above the Clouds",
        hero_image: cappadociaHerpImg,
        images: [
            { url: cappadociaImg1 },
            { url: cappadociaImg2 },
        ],
        highlightedPlaces: ["Queenstown", "Rotorua", "Milford Sound", "Hobbiton Village"],
        price: 6000,
        about: {
            duration: "8 Days 7 Nights",
            days: [
                {
                    title: "Day 1",
                    description: "Arrival in Auckland, welcome dinner"
                },
                {
                    title: "Day 2",
                    description: "Explore Rotorua geothermal parks"
                },
                {
                    title: "Day 3-4",
                    description: "Adventure in Queenstown"
                },
                {
                    title: "Day 5",
                    description: "Milford Sound cruise"
                },
                {
                    title: "Day 6-7",
                    description: "Hobbiton & cultural tours"
                },
                {
                    title: "Day 8",
                    description: "Departure"
                }
            ]
        },
        ratings: 3.75,
        inclusions: ["Hotel", "Breakfast", "Airport Transfer", "Tours"],
        exclusions: ["Flights", "Personal Expenses", "Tips"],
        gallery: [
            { url: galleryImg1 },
            { url: galleryImg2 },
            { url: galleryImg3 },
            { url: galleryImg4 },
            { url: galleryImg5 }
        ]
    },
    {
        id: 4,
        titles: ["Costa Rica"],
        description: "Wild Rainforests & Volcano Thrills and Wild Rainforests & Volcano Thrills and wild Rainforests.",
        short_description: "Wild Rainforests & Volcano Thrills",
        hero_image: costaRicaHeroImg,
        images: [
            { url: costaRicaImg },
        ],
        highlightedPlaces: ["Queenstown", "Rotorua", "Milford Sound", "Hobbiton Village"],
        price: 7500,
        about: {
            duration: "8 Days 7 Nights",
            days: [
                {
                    title: "Day 1",
                    description: "Arrival in Auckland, welcome dinner"
                },
                {
                    title: "Day 2",
                    description: "Explore Rotorua geothermal parks"
                },
                {
                    title: "Day 3-4",
                    description: "Adventure in Queenstown"
                },
                {
                    title: "Day 5",
                    description: "Milford Sound cruise"
                },
                {
                    title: "Day 6-7",
                    description: "Hobbiton & cultural tours"
                },
                {
                    title: "Day 8",
                    description: "Departure"
                }
            ]
        },
        ratings: 4.25,
        inclusions: ["Hotel", "Breakfast", "Airport Transfer", "Tours"],
        exclusions: ["Flights", "Personal Expenses", "Tips"],
        gallery: [
            { url: galleryImg1 },
            { url: galleryImg2 },
            { url: galleryImg3 },
            { url: galleryImg4 },
            { url: galleryImg5 }
        ]
    },
    {
        id: 5,
        titles: ["Dubai", "Dubai City Tour", "Dubai Luxury Tour"],
        description: "From skylines to adventures, experience the perfect blend of luxury and culture.",
        short_description: "Desert Gold and City Lights",
        hero_image: dubaiHeroImg,
        images: [
            { url: dubaiImg1 },
            { url: dubaiImg2 },
            { url: dubaiImg3 },
            { url: dubaiImg4 },
        ],
        highlightedPlaces: ["Queenstown", "Rotorua", "Milford Sound", "Hobbiton Village"],
        price: 5000,
        about: {
            duration: "8 Days 7 Nights",
            days: [
                {
                    title: "Day 1",
                    description: "Arrival in Auckland, welcome dinner"
                },
                {
                    title: "Day 2",
                    description: "Explore Rotorua geothermal parks"
                },
                {
                    title: "Day 3-4",
                    description: "Adventure in Queenstown"
                },
                {
                    title: "Day 5",
                    description: "Milford Sound cruise"
                },
                {
                    title: "Day 6-7",
                    description: "Hobbiton & cultural tours"
                },
                {
                    title: "Day 8",
                    description: "Departure"
                }
            ]
        },
        ratings: 4.5,
        inclusions: ["Hotel", "Breakfast", "Airport Transfer", "Tours"],
        exclusions: ["Flights", "Personal Expenses", "Tips"],
        gallery: [
            { url: galleryImg1 },
            { url: galleryImg2 },
            { url: galleryImg3 },
            { url: galleryImg4 },
            { url: galleryImg5 }
        ]
    },
    {
        id: 6,
        titles: ["Egypt"],
        description: "Journey through ancient wonders, golden deserts, and timeless beauty.",
        short_description: "Journey through ancient",
        hero_image: egyptHeroImg,
        images: [
            { url: egyptImg },
        ],
        highlightedPlaces: ["Queenstown", "Rotorua", "Milford Sound", "Hobbiton Village"],
        price: 5500,
        about: {
            duration: "8 Days 7 Nights",
            days: [
                {
                    title: "Day 1",
                    description: "Arrival in Auckland, welcome dinner"
                },
                {
                    title: "Day 2",
                    description: "Explore Rotorua geothermal parks"
                },
                {
                    title: "Day 3-4",
                    description: "Adventure in Queenstown"
                },
                {
                    title: "Day 5",
                    description: "Milford Sound cruise"
                },
                {
                    title: "Day 6-7",
                    description: "Hobbiton & cultural tours"
                },
                {
                    title: "Day 8",
                    description: "Departure"
                }
            ]
        },
        ratings: 4.5,
        inclusions: ["Hotel", "Breakfast", "Airport Transfer", "Tours"],
        exclusions: ["Flights", "Personal Expenses", "Tips"],
        gallery: [
            { url: galleryImg1 },
            { url: galleryImg2 },
            { url: galleryImg3 },
            { url: galleryImg4 },
            { url: galleryImg5 }
        ]
    },
    {
        id: 7,
        titles: ["Greece", "Romantic Greek Getaway", "Summer in Santorini — 20% Off!"],
        description: "Limited-time offer valid till July 31.",
        short_description: "Limited-time offer valid",
        hero_image: greeceHeroImg,
        images: [
            { url: greeceImg1 },
            { url: greeceImg2 },
        ],
        highlightedPlaces: ["Queenstown", "Rotorua", "Milford Sound", "Hobbiton Village"],
        price: 5700,
        about: {
            duration: "8 Days 7 Nights",
            days: [
                {
                    title: "Day 1",
                    description: "Arrival in Auckland, welcome dinner"
                },
                {
                    title: "Day 2",
                    description: "Explore Rotorua geothermal parks"
                },
                {
                    title: "Day 3-4",
                    description: "Adventure in Queenstown"
                },
                {
                    title: "Day 5",
                    description: "Milford Sound cruise"
                },
                {
                    title: "Day 6-7",
                    description: "Hobbiton & cultural tours"
                },
                {
                    title: "Day 8",
                    description: "Departure"
                }
            ]
        },
        ratings: 4,
        inclusions: ["Hotel", "Breakfast", "Airport Transfer", "Tours"],
        exclusions: ["Flights", "Personal Expenses", "Tips"],
        gallery: [
            { url: galleryImg1 },
            { url: galleryImg2 },
            { url: galleryImg3 },
            { url: galleryImg4 },
            { url: galleryImg5 }
        ]
    },
    {
        id: 8,
        titles: ["Istanbul"],
        description: "Where East meets West — discover rich history, vibrant bazaars, and timeless charm.",
        short_description: "Where East meets West",
        hero_image: istanbulHeroImg,
        images: [
            { url: istanbulImg },
        ],
        highlightedPlaces: ["Queenstown", "Rotorua", "Milford Sound", "Hobbiton Village"],
        price: 8000,
        about: {
            duration: "8 Days 7 Nights",
            days: [
                {
                    title: "Day 1",
                    description: "Arrival in Auckland, welcome dinner"
                },
                {
                    title: "Day 2",
                    description: "Explore Rotorua geothermal parks"
                },
                {
                    title: "Day 3-4",
                    description: "Adventure in Queenstown"
                },
                {
                    title: "Day 5",
                    description: "Milford Sound cruise"
                },
                {
                    title: "Day 6-7",
                    description: "Hobbiton & cultural tours"
                },
                {
                    title: "Day 8",
                    description: "Departure"
                }
            ]
        },
        ratings: 4.5,
        inclusions: ["Hotel", "Breakfast", "Airport Transfer", "Tours"],
        exclusions: ["Flights", "Personal Expenses", "Tips"],
        gallery: [
            { url: galleryImg1 },
            { url: galleryImg2 },
            { url: galleryImg3 },
            { url: galleryImg4 },
            { url: galleryImg5 }
        ]
    },
    {
        id: 9,
        titles: ["Kenya"],
        description: "Witness the wild heart of Africa — safari adventures and sunsets like no other.",
        short_description: "Witness the wild heart",
        hero_image: kenyaHeroImg,
        images: [
            { url: kenyaImg },
        ],
        highlightedPlaces: ["Queenstown", "Rotorua", "Milford Sound", "Hobbiton Village"],
        price: 4500,
        about: {
            duration: "8 Days 7 Nights",
            days: [
                {
                    title: "Day 1",
                    description: "Arrival in Auckland, welcome dinner"
                },
                {
                    title: "Day 2",
                    description: "Explore Rotorua geothermal parks"
                },
                {
                    title: "Day 3-4",
                    description: "Adventure in Queenstown"
                },
                {
                    title: "Day 5",
                    description: "Milford Sound cruise"
                },
                {
                    title: "Day 6-7",
                    description: "Hobbiton & cultural tours"
                },
                {
                    title: "Day 8",
                    description: "Departure"
                }
            ]
        },
        ratings: 3.75,
        inclusions: ["Hotel", "Breakfast", "Airport Transfer", "Tours"],
        exclusions: ["Flights", "Personal Expenses", "Tips"],
        gallery: [
            { url: galleryImg1 },
            { url: galleryImg2 },
            { url: galleryImg3 },
            { url: galleryImg4 },
            { url: galleryImg5 }
        ]
    },
    {
        id: 10,
        titles: ["Kyoto"],
        description: "Experience ancient temples, serene gardens, and timeless beauty.",
        short_description: "Tradition Draped in Tranquility",
        hero_image: kyotoHeroImg,
        images: [
            { url: kyotoImg1 },
            { url: kyotoImg2 },
        ],
        highlightedPlaces: ["Queenstown", "Rotorua", "Milford Sound", "Hobbiton Village"],
        price: 6500,
        about: {
            duration: "8 Days 7 Nights",
            days: [
                {
                    title: "Day 1",
                    description: "Arrival in Auckland, welcome dinner"
                },
                {
                    title: "Day 2",
                    description: "Explore Rotorua geothermal parks"
                },
                {
                    title: "Day 3-4",
                    description: "Adventure in Queenstown"
                },
                {
                    title: "Day 5",
                    description: "Milford Sound cruise"
                },
                {
                    title: "Day 6-7",
                    description: "Hobbiton & cultural tours"
                },
                {
                    title: "Day 8",
                    description: "Departure"
                }
            ]
        },
        ratings: 4.25,
        inclusions: ["Hotel", "Breakfast", "Airport Transfer", "Tours"],
        exclusions: ["Flights", "Personal Expenses", "Tips"],
        gallery: [
            { url: galleryImg1 },
            { url: galleryImg2 },
            { url: galleryImg3 },
            { url: galleryImg4 },
            { url: galleryImg5 }
        ]
    },
    {
        id: 11,
        titles: ["Maldives", "Maldives Honeymoon Escape", "Maldives Honeymoon Escape — 15% Off"],
        description: "Enjoy beachfront villas with romantic private dinners.",
        short_description: "Paradise in Every Wave",
        hero_image: maldivesHeroImg,
        images: [
            { url: maldivesImg1 },
            { url: maldivesImg2 },
        ],
        highlightedPlaces: ["Queenstown", "Rotorua", "Milford Sound", "Hobbiton Village"],
        price: 7500,
        about: {
            duration: "8 Days 7 Nights",
            days: [
                {
                    title: "Day 1",
                    description: "Arrival in Auckland, welcome dinner"
                },
                {
                    title: "Day 2",
                    description: "Explore Rotorua geothermal parks"
                },
                {
                    title: "Day 3-4",
                    description: "Adventure in Queenstown"
                },
                {
                    title: "Day 5",
                    description: "Milford Sound cruise"
                },
                {
                    title: "Day 6-7",
                    description: "Hobbiton & cultural tours"
                },
                {
                    title: "Day 8",
                    description: "Departure"
                }
            ]
        },
        ratings: 4.5,
        inclusions: ["Hotel", "Breakfast", "Airport Transfer", "Tours"],
        exclusions: ["Flights", "Personal Expenses", "Tips"],
        gallery: [
            { url: galleryImg1 },
            { url: galleryImg2 },
            { url: galleryImg3 },
            { url: galleryImg4 },
            { url: galleryImg5 }
        ]
    },
    {
        id: 12,
        titles: ["Nepal"],
        description: "Conquer the Himalayas and there are more to Explore and Conquer the Himalayas.",
        short_description: "Conquer the Himalayas",
        hero_image: nepalHeroImg,
        images: [
            { url: nepalImg },
        ],
        highlightedPlaces: ["Queenstown", "Rotorua", "Milford Sound", "Hobbiton Village"],
        price: 5500,
        about: {
            duration: "8 Days 7 Nights",
            days: [
                {
                    title: "Day 1",
                    description: "Arrival in Auckland, welcome dinner"
                },
                {
                    title: "Day 2",
                    description: "Explore Rotorua geothermal parks"
                },
                {
                    title: "Day 3-4",
                    description: "Adventure in Queenstown"
                },
                {
                    title: "Day 5",
                    description: "Milford Sound cruise"
                },
                {
                    title: "Day 6-7",
                    description: "Hobbiton & cultural tours"
                },
                {
                    title: "Day 8",
                    description: "Departure"
                }
            ]
        },
        ratings: 4.25,
        inclusions: ["Hotel", "Breakfast", "Airport Transfer", "Tours"],
        exclusions: ["Flights", "Personal Expenses", "Tips"],
        gallery: [
            { url: galleryImg1 },
            { url: galleryImg2 },
            { url: galleryImg3 },
            { url: galleryImg4 },
            { url: galleryImg5 }
        ]
    },
    {
        id: 13,
        titles: ["Newyork"],
        description: "The city that never sleeps — iconic landmarks, global flavors, and endless energy.",
        short_description: "The city that never sleeps",
        hero_image: newyorkHeroImg,
        images: [
            { url: newyorkImg },
        ],
        highlightedPlaces: ["Queenstown", "Rotorua", "Milford Sound", "Hobbiton Village"],
        price: 6500,
        about: {
            duration: "8 Days 7 Nights",
            days: [
                {
                    title: "Day 1",
                    description: "Arrival in Auckland, welcome dinner"
                },
                {
                    title: "Day 2",
                    description: "Explore Rotorua geothermal parks"
                },
                {
                    title: "Day 3-4",
                    description: "Adventure in Queenstown"
                },
                {
                    title: "Day 5",
                    description: "Milford Sound cruise"
                },
                {
                    title: "Day 6-7",
                    description: "Hobbiton & cultural tours"
                },
                {
                    title: "Day 8",
                    description: "Departure"
                }
            ]
        },
        ratings: 4.5,
        inclusions: ["Hotel", "Breakfast", "Airport Transfer", "Tours"],
        exclusions: ["Flights", "Personal Expenses", "Tips"],
        gallery: [
            { url: galleryImg1 },
            { url: galleryImg2 },
            { url: galleryImg3 },
            { url: galleryImg4 },
            { url: galleryImg5 }
        ]
    },
    {
        id: 14,
        titles: ["Newzealnd"],
        description: "World’s Adventure Capital and there is more to discover World’s Adventure Capital.",
        short_description: "World’s Adventure Capital",
        hero_image: newzealndHeroImg,
        images: [
            { url: newzealndImg },
        ],
        highlightedPlaces: ["Queenstown", "Rotorua", "Milford Sound", "Hobbiton Village"],
        price: 8500,
        about: {
            duration: "8 Days 7 Nights",
            days: [
                {
                    title: "Day 1",
                    description: "Arrival in Auckland, welcome dinner"
                },
                {
                    title: "Day 2",
                    description: "Explore Rotorua geothermal parks"
                },
                {
                    title: "Day 3-4",
                    description: "Adventure in Queenstown"
                },
                {
                    title: "Day 5",
                    description: "Milford Sound cruise"
                },
                {
                    title: "Day 6-7",
                    description: "Hobbiton & cultural tours"
                },
                {
                    title: "Day 8",
                    description: "Departure"
                }
            ]
        },
        ratings: 4.75,
        inclusions: ["Hotel", "Breakfast", "Airport Transfer", "Tours"],
        exclusions: ["Flights", "Personal Expenses", "Tips"],
        gallery: [
            { url: galleryImg1 },
            { url: galleryImg2 },
            { url: galleryImg3 },
            { url: galleryImg4 },
            { url: galleryImg5 }
        ]
    },
    {
        id: 15,
        titles: ["Paris"],
        description: "Romance, art, and café culture — the timeless beauty of the City of Lights.",
        short_description: "The Art of Love and Luxury",
        hero_image: parisHeroImg,
        images: [
            { url: parisImg1 },
            { url: parisImg2 },
            { url: parisImg3 },
        ],
        highlightedPlaces: ["Queenstown", "Rotorua", "Milford Sound", "Hobbiton Village"],
        price: 7500,
        about: {
            duration: "8 Days 7 Nights",
            days: [
                {
                    title: "Day 1",
                    description: "Arrival in Auckland, welcome dinner"
                },
                {
                    title: "Day 2",
                    description: "Explore Rotorua geothermal parks"
                },
                {
                    title: "Day 3-4",
                    description: "Adventure in Queenstown"
                },
                {
                    title: "Day 5",
                    description: "Milford Sound cruise"
                },
                {
                    title: "Day 6-7",
                    description: "Hobbiton & cultural tours"
                },
                {
                    title: "Day 8",
                    description: "Departure"
                }
            ]
        },
        ratings: 4.25,
        inclusions: ["Hotel", "Breakfast", "Airport Transfer", "Tours"],
        exclusions: ["Flights", "Personal Expenses", "Tips"],
        gallery: [
            { url: galleryImg1 },
            { url: galleryImg2 },
            { url: galleryImg3 },
            { url: galleryImg4 },
            { url: galleryImg5 }
        ]
    },
    {
        id: 16,
        titles: ["Sri Lanka"],
        description: "Golden coasts, lush tea hills, and cultural wonders — an island full of surprises.",
        short_description: "Golden coasts and hills",
        hero_image: srilankaHeroImg,
        images: [
            { url: srilankaImg },
        ],
        highlightedPlaces: ["Queenstown", "Rotorua", "Milford Sound", "Hobbiton Village"],
        price: 6500,
        about: {
            duration: "8 Days 7 Nights",
            days: [
                {
                    title: "Day 1",
                    description: "Arrival in Auckland, welcome dinner"
                },
                {
                    title: "Day 2",
                    description: "Explore Rotorua geothermal parks"
                },
                {
                    title: "Day 3-4",
                    description: "Adventure in Queenstown"
                },
                {
                    title: "Day 5",
                    description: "Milford Sound cruise"
                },
                {
                    title: "Day 6-7",
                    description: "Hobbiton & cultural tours"
                },
                {
                    title: "Day 8",
                    description: "Departure"
                }
            ]
        },
        ratings: 4,
        inclusions: ["Hotel", "Breakfast", "Airport Transfer", "Tours"],
        exclusions: ["Flights", "Personal Expenses", "Tips"],
        gallery: [
            { url: galleryImg1 },
            { url: galleryImg2 },
            { url: galleryImg3 },
            { url: galleryImg4 },
            { url: galleryImg5 }
        ]
    },
    {
        id: 17,
        titles: ["Switzerland"],
        description: "Snowy peaks, serene lakes, and scenic train rides — Europe’s ultimate fairytale escape.",
        short_description: "Snowy peaks and serene lakes",
        hero_image: switzerlandHeroImg,
        images: [
            { url: switzerlandImg },
        ],
        highlightedPlaces: ["Queenstown", "Rotorua", "Milford Sound", "Hobbiton Village"],
        price: 9500,
        about: {
            duration: "8 Days 7 Nights",
            days: [
                {
                    title: "Day 1",
                    description: "Arrival in Auckland, welcome dinner"
                },
                {
                    title: "Day 2",
                    description: "Explore Rotorua geothermal parks"
                },
                {
                    title: "Day 3-4",
                    description: "Adventure in Queenstown"
                },
                {
                    title: "Day 5",
                    description: "Milford Sound cruise"
                },
                {
                    title: "Day 6-7",
                    description: "Hobbiton & cultural tours"
                },
                {
                    title: "Day 8",
                    description: "Departure"
                }
            ]
        },
        ratings: 5,
        inclusions: ["Hotel", "Breakfast", "Airport Transfer", "Tours"],
        exclusions: ["Flights", "Personal Expenses", "Tips"],
        gallery: [
            { url: galleryImg1 },
            { url: galleryImg2 },
            { url: galleryImg3 },
            { url: galleryImg4 },
            { url: galleryImg5 }
        ]
    },
    {
        id: 18,
        titles: ["Thailand", "Phuket Getaway"],
        description: "Discover stunning beaches, rich culture, and vibrant nightlife.",
        short_description: "Discover stunning beaches",
        hero_image: thailandHeroImg,
        images: [
            { url: thailandImg1 },
            { url: thailandImg2 },
        ],
        highlightedPlaces: ["Queenstown", "Rotorua", "Milford Sound", "Hobbiton Village"],
        price: 7500,
        about: {
            duration: "8 Days 7 Nights",
            days: [
                {
                    title: "Day 1",
                    description: "Arrival in Auckland, welcome dinner"
                },
                {
                    title: "Day 2",
                    description: "Explore Rotorua geothermal parks"
                },
                {
                    title: "Day 3-4",
                    description: "Adventure in Queenstown"
                },
                {
                    title: "Day 5",
                    description: "Milford Sound cruise"
                },
                {
                    title: "Day 6-7",
                    description: "Hobbiton & cultural tours"
                },
                {
                    title: "Day 8",
                    description: "Departure"
                }
            ]
        },
        ratings: 4.5,
        inclusions: ["Hotel", "Breakfast", "Airport Transfer", "Tours"],
        exclusions: ["Flights", "Personal Expenses", "Tips"],
        gallery: [
            { url: galleryImg1 },
            { url: galleryImg2 },
            { url: galleryImg3 },
            { url: galleryImg4 },
            { url: galleryImg5 }
        ]
    },

];
