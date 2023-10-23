const words = [
    {
        word: "addition",
        hint: "The process of adding numbers"
    },
    {
        word: "meeting",
        hint: "Event in which people come together"
    },
    {
        word: "number",
        hint: "Math symbol used for counting"
    },
    {
        word: "exchange",
        hint: "The act of trading"
    },
    {
        word: "canvas",
        hint: "Piece of fabric for oil painting"
    },
    {
        word: "garden",
        hint: "Space for planting flower and plant"
    },
    {
        word: "position",
        hint: "Location of someone or something"
    },
    {
        word: "feather",
        hint: "Hair like outer covering of bird"
    },
    {
        word: "comfort",
        hint: "A pleasant feeling of relaxation"
    },
    {
        word: "tongue",
        hint: "The muscular organ of mouth"
    },
    {
        word: "expansion",
        hint: "The process of increase or grow"
    },
    {
        word: "country",
        hint: "A politically identified region"
    },
    {
        word: "group",
        hint: "A number of objects or persons"
    },
    {
        word: "taste",
        hint: "Ability of tongue to detect flavour"
    },
    {
        word: "store",
        hint: "Large shop where goods are traded"
    },
    {
        word: "field",
        hint: "Area of land for farming activities"
    },
    {
        word: "friend",
        hint: "Person other than a family member"
    },
    {
        word: "pocket",
        hint: "A bag for carrying small items"
    },
    {
        word: "needle",
        hint: "A thin and sharp metal pin"
    },
    {
        word: "expert",
        hint: "Person with extensive knowledge"
    },
    {
        word: "statement",
        hint: "A declaration of something"
    },
    {
        word: "second",
        hint: "One-sixtieth of a minute"
    },
    {
        word: "library",
        hint: "Place containing collection of books"
    },
    {
        word: "computer",
        hint: "Electronic device for processing data"
    },
    {
        word: "guitar",
        hint: "Musical instrument with strings"
    },
    {
        word: "ocean",
        hint: "Vast body of saltwater"
    },
    {
        word: "jungle",
        hint: "Thick, tropical forest"
    },
    {
        word: "puzzle",
        hint: "A game or problem to solve"
    },
    {
        word: "chocolate",
        hint: "Sweet confection made from cocoa"
    },
    {
        word: "adventure",
        hint: "Exciting or risky experience"
    },
    {
        word: "elephant",
        hint: "Large, gray animal with a trunk"
    },
    {
        word: "garden",
        hint: "Outdoor space with plants and flowers"
    },
    {
        word: "mystery",
        hint: "Something unexplained or unknown"
    },
    {
        word: "mountain",
        hint: "High landmass with steep slopes"
    },
    {
        word: "bicycle",
        hint: "Two-wheeled vehicle for riding"
    },
    {
        word: "diamond",
        hint: "Precious gemstone known for its sparkle"
    },
    {
        word: "umbrella",
        hint: "Device used to shield from rain"
    },
    {
        word: "sunshine",
        hint: "Bright and warm sunlight"
    },
    {
        word: "octopus",
        hint: "Sea creature with eight tentacles"
    },
    {
        word: "astronaut",
        hint: "Person who travels in space"
    },
    {
        word: "volcano",
        hint: "Mountain that erupts with lava and ash"
    },
    {
        word: "paradise",
        hint: "Idyllic and beautiful place"
    },
    {
        word: "camera",
        hint: "Device for capturing photographs"
    },
    {
        word: "treasure",
        hint: "Valuables hidden or buried"
    },
    {
        word: "rainbow",
        hint: "Colorful arc in the sky after rain"
    },
    {
        word: "whisper",
        hint: "Speaking softly or quietly"
    },
    {
        word: "fireworks",
        hint: "Explosive display of lights in the sky"
    },
    {
        word: "moonlight",
        hint: "Light from the moon at night"
    },
    {
        word: "telephone",
        hint: "Communication device for talking"
    },
    {
        word: "birthday",
        hint: "Celebration of one's birth"
    },
    {
        word: "butterfly",
        hint: "Colorful insect with wings"
    },
    {
        word: "carousel",
        hint: "Merry-go-round amusement ride"
    },
    {
        word: "waterfall",
        hint: "Flowing water from a height"
    },
    {
        word: "whistle",
        hint: "Sound made by blowing air through lips"
    },
    {
        word: "skyscraper",
        hint: "Tall building in a city"
    },
    {
        word: "concert",
        hint: "Live music performance"
    },
    {
        word: "vacation",
        hint: "Leisure travel or holiday"
    },
    {
        word: "detective",
        hint: "Investigator of mysteries and crimes"
    },
    {
        word: "piano",
        hint: "Musical instrument with keys"
    },
    {
        word: "flower",
        hint: "Blossoming plant with petals"
    },
    {
        word: "island",
        hint: "Land surrounded by water"
    },
    {
        word: "robot",
        hint: "Mechanical device with programmable functions"
    },
    {
        word: "magic",
        hint: "Supernatural or unexplained phenomena"
    },
    {
        word: "zoo",
        hint: "Place with various animals on display"
    },
    {
        word: "bouquet",
        hint: "Arrangement of fresh flowers"
    },
    {
        word: "telescope",
        hint: "Optical instrument for distant viewing"
    },
    {
        word: "harmony",
        hint: "Agreement or pleasing combination"
    },
    {
        word: "gourmet",
        hint: "Connoisseur of fine food and drink"
    },
    {
        word: "captain",
        hint: "Leader of a ship or team"
    },
    {
        word: "puzzle",
        hint: "A game or problem to solve"
    },
    {
        word: "carnival",
        hint: "Festive event with games and rides"
    },
    {
        word: "enchanted",
        hint: "Magical or under a spell"
    },
    {
        word: "explorer",
        hint: "Person who travels to discover new places"
    },
    {
        word: "fascinate",
        hint: "To attract or deeply interest"
    },
    {
        word: "horizon",
        hint: "Line where the sky meets the Earth"
    },
    {
        word: "marvelous",
        hint: "Wonderful or extraordinary"
    },
    {
        word: "nostalgia",
        hint: "Sentimental longing for the past"
    },
    {
        word: "optimistic",
        hint: "Having a positive outlook"
    },
    {
        word: "umbrella",
        hint: "Device used to shield from rain"
    },
    {
        word: "wanderlust",
        hint: "Strong desire to travel and explore"
    },
    {
        word: "xylophone",
        hint: "Musical instrument with wooden bars"
    },
    {
        word: "celebration",
        hint: "Public or social festivities"
    },
    {
        word: "elegance",
        hint: "Refined beauty and grace"
    },
    {
        word: "illuminate",
        hint: "To light up or make clear"
    },
    {
        word: "magnificent",
        hint: "Grand, splendid, or impressive"
    },
    {
        word: "reflection",
        hint: "Image seen in a mirror or water"
    },
    {
        word: "symphony",
        hint: "Complex musical composition"
    },
    {
        word: "benevolent",
        hint: "Kind and generous"
    },
    {
        word: "gratitude",
        hint: "Thankfulness and appreciation"
    },
    {
        word: "innovation",
        hint: "Introduction of something new"
    },
    {
        word: "majestic",
        hint: "Dignified and impressive"
    },
    {
        word: "serenity",
        hint: "Peaceful and calm state"
    },
    {
        word: "adventure",
        hint: "Exciting or risky experience"
    },
    {
        word: "brilliant",
        hint: "Exceptionally bright or talented"
    },
    {
        word: "enthusiasm",
        hint: "Intense interest and passion"
    },
    {
        word: "inspiration",
        hint: "Creative or motivating influence"
    },
    {
        word: "melody",
        hint: "Tune or sequence of musical notes"
    },
    {
        word: "tranquil",
        hint: "Calm and peaceful"
    },
    {
        word: "affectionate",
        hint: "Loving and tender"
    },
    {
        word: "charming",
        hint: "Delightful and attractive"
    },
    {
        word: "graceful",
        hint: "Elegant and poised"
    },
    {
        word: "mysterious",
        hint: "Unclear or enigmatic"
    },
    {
        word: "vibrant",
        hint: "Full of energy and life"
    },
    {
        word: "captivating",
        hint: "Holding one's attention"
    },
    {
        word: "heartwarming",
        hint: "Warm and touching"
    },
    {
        word: "optimism",
        hint: "Positive outlook on life"
    },
    {
        word: "wonderful",
        hint: "Exceptionally good or pleasing"
    },
    {
        word: "charismatic",
        hint: "Compelling and charming personality"
    },
    {
        word: "inspirational",
        hint: "Motivating and encouraging"
    },
    {
        word: "passionate",
        hint: "Intense and enthusiastic"
    },
    {
        word: "captivating",
        hint: "Fascinating and enchanting"
    },
    {
        word: "harmonious",
        hint: "Peaceful and balanced"
    },
    {
        word: "majesty",
        hint: "Dignity and grandeur"
    },
    {
        word: "reflection",
        hint: "Deep thought or consideration"
    },
    {
        word: "serendipity",
        hint: "Finding something fortunate by chance"
    },
    {
        word: "wanderlust",
        hint: "Strong desire to travel and explore"
    },
    {
        word: "illumination",
        hint: "Lighting or enlightenment"
    },
    {
        word: "insightful",
        hint: "Showing deep understanding"
    },
    {
        word: "melodic",
        hint: "Having a pleasant tune"
    },
    {
        word: "refreshing",
        hint: "Reinvigorating and revitalizing"
    },
    {
        word: "sincere",
        hint: "Genuine and heartfelt"
    },
    {
        word: "virtuoso",
        hint: "Highly skilled performer or artist"
    },
    {
        word: "ambition",
        hint: "Strong desire to achieve goals"
    },
    {
        word: "charity",
        hint: "Act of giving to those in need"
    },
    {
        word: "grateful",
        hint: "Thankful and appreciative"
    },
    {
        word: "innovative",
        hint: "Introducing new ideas or methods"
    },
    {
        word: "mesmerizing",
        hint: "Hypnotic and captivating"
    },
    {
        word: "resplendent",
        hint: "Dazzling and magnificent"
    }     
]