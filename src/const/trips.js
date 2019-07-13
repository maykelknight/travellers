import img1 from '../assets/img/trips/img-1.jpg'
import img2 from '../assets/img/trips/img-2.jpg'
import img3 from '../assets/img/trips/img-3.jpg'
import img4 from '../assets/img/trips/img-4.jpg'
import img5 from '../assets/img/trips/img-5.jpg'
import img6 from '../assets/img/trips/img-6.jpg'

export default [
    {
        id: 1,
        place: "Turkey",
        cost: 1500,
        periodInDays: 5,
        description: "Turkey , officially the Republic of Turkey, is a transcontinental country located mainly in Western Asia, with a smaller portion on the Balkan Peninsula in Southeast Europe. East Thrace, located in Europe, is separated from Anatolia by the Sea of Marmara, the Bosphorous strait and the Dardanelles (collectively called the Turkish Straits).[7] Turkey is bordered by Greece and Bulgaria to its northwest; Georgia to its northeast; Armenia, the Azerbaijani exclave of Nakhchivan and Iran to the east; and Iraq and Syria to the south. Istanbul is the largest city, but more central Ankara is the capital. Approximately 70 to 80 per cent of the country's citizens identify as Turkish.[8][9] Kurds are the largest minority; the size of the Kurdish population is a subject of dispute with estimates placing the figure at anywhere from 12 to 25 per cent of the population.",
        rating: 2,
        mealsInTheHotel: true,
        travelInsurance: true,
        privateCar: true,
        extras: [
            'Meals in the Hotel',
            'Car usage beyond hours or route specified in our itinerary',
            'Travel Insurance',
            'Toll Charges',
            'Car Parking Charges at Monuments/Tourist Sites',
            'Entrance Fees at Monuments, Camera, videography charges or any other such charges.',
            'Personal Expenses such as laundry, porterage, telephone calls etc',
            'Any cost arising due to accidents, landslides, earthquakes, fire, riots or any other such incident',
            'Any other charges',
        ],
        images: [
            img1, img2
        ]
    },
    {
        id: 2,
        place: "Bali",
        cost: 3500,
        periodInDays: 10,
        description: "Bali is Indonesia's main tourist destination, which has seen a significant rise in tourists since the 1980s.[6] Tourism-related business makes up 80% of its economy.[7] It is renowned for its highly developed arts, including traditional and modern dance, sculpture, painting, leather, metalworking, and music. The Indonesian International Film Festival is held every year in Bali. In March 2017, TripAdvisor named Bali as the world's top destination in its Traveller's Choice award.[8]",
        rating: 3,
        mealsInTheHotel: true,
        travelInsurance: true,
        privateCar: false,
        extras: [
            "Meals in the Hotel",
            "Car usage beyond hours or route specified in our itinerary",
            "Travel Insurance",
            "Toll Charges",
            "Car Parking Charges at Monuments/Tourist Sites",
            "Entrance Fees at Monuments, Camera, videography charges or any other such charges.",
            "Personal Expenses such as laundry, porterage, telephone calls etc",
            "Any cost arising due to accidents, landslides, earthquakes, fire, riots or any other such incident",
            "Any other charges",
        ],
        images: [
            img3, img4
        ]
    },
    {
        id: 3,
        place: "Dubai",
        cost: 2500,
        periodInDays: 7,
        description: "Dubai is located on the Eastern coast of the Arabian Peninsula, in the south west corner of the Arabian Gulf. It is extremely well known for its warm hospitality and rich cultural heritage, and the Emirati people are welcoming and generous in their approach to visitors. With year-round sunshine, intriguing deserts, beautiful beaches, luxurious hotels and shopping malls, fascinating heritage attractions and a thriving business community, Dubai receives millions of leisure and business visitors each year from around the world.",
        rating: 5,
        mealsInTheHotel: false,
        travelInsurance: false,
        privateCar: false,
        extras: [
            'Meals in the Hotel',
            'Car usage beyond hours or route specified in our itinerary',
            'Travel Insurance',
            'Toll Charges',
            'Car Parking Charges at Monuments/Tourist Sites',
            'Entrance Fees at Monuments, Camera, videography charges or any other such charges.',
            'Personal Expenses such as laundry, porterage, telephone calls etc',
            'Any cost arising due to accidents, landslides, earthquakes, fire, riots or any other such incident',
            'Any other charges',
        ],
        images: [
            img5, img6
        ]
    }
]
