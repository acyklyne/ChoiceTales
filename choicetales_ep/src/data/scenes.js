// src/data/scenes.js

export const scenes = {
  // Introduction & Attic Scene
  intro: {
      id: 'intro',
      text: "You and your brother Ben are cleaning the attic when you stumble upon an old, dusty map. The map has strange symbols, a big red 'X', and a mysterious note.",
      backgroundImage: `${process.env.PUBLIC_URL}/images/backgrounds/attic_background.jpg`,
      characters: ['protagonist', 'ben'],
      items: ['old_map'],
      soundEffect: 'paper_rustle',
      characterImages: {
          protagonist: `${process.env.PUBLIC_URL}/images/characters/protagonist.png`,
          ben: `${process.env.PUBLIC_URL}/images/characters/ben.png`
      },
      choices: [
          { 
              text: "Read the note", 
              nextScene: 'readNote' 
          },
          {
              text: "Show the map to Ben",
              nextScene: 'benDiscussion'
          }
      ]
  },

  readNote: {
      id: 'readNote',
      text: '"To those who seek adventure, follow the clues and find the treasure. Beware of the forest\'s secrets!"',
      backgroundImage: `${process.env.PUBLIC_URL}/images/backgrounds/attic_background.jpg`,
      characterImages: {
          protagonist: `${process.env.PUBLIC_URL}/images/characters/protagonist.png`,
          ben: `${process.env.PUBLIC_URL}/images/characters/ben.png`
      },
      items: ['old_map'],
      soundEffect: 'paper_unfold',
      choices: [
          {
              text: "Go to the Library",
              nextScene: 'library'
          },
          {
              text: "Head straight to Forest",
              nextScene: 'forestEntrance'
          }
      ]
  },

  // Library Path
  library: {
      id: 'library',
      text: "The kind librarian examines the map carefully. 'These symbols are ancient,' she says. 'You'll need proper supplies to navigate safely.'",
      backgroundImage: `${process.env.PUBLIC_URL}/images/backgrounds/library_background.jpg`,
      characterImages: {
          protagonist: `${process.env.PUBLIC_URL}/images/characters/protagonist.png`,
          ben: `${process.env.PUBLIC_URL}/images/characters/ben.png`
      },
      items: ['compass'],
      soundEffect: 'library_ambience',
      choices: [
          {
              text: "Pack supplies first",
              nextScene: 'packingSupplies',
              gameStateUpdate: { hasAdvice: true }
          },
          {
              text: "Rush to forest anyway",
              nextScene: 'forestUnprepared'
          }
      ]
  },

  forestEntrance: {
      id: 'forestEntrance',
      text: "You enter the mysterious forest. The trees loom tall above you.",
      backgroundImage: `${process.env.PUBLIC_URL}/images/backgrounds/forest_background.jpg`,
      characterImages: {
          protagonist: `${process.env.PUBLIC_URL}/images/characters/protagonist.png`,
          ben: `${process.env.PUBLIC_URL}/images/characters/ben.png`
      },
      choices: [
          {
              text: "Explore deeper",
              nextScene: 'forestExploration',
              requirement: {
                  items: ['compass']
              }
          },
          {
              text: "Return home for supplies",
              nextScene: 'packingSupplies'
          }
      ]
  },

  packingSupplies: {
      id: 'packingSupplies',
      text: "While gathering supplies, you notice a strange symbol on the map beginning to glow faintly.",
      backgroundImage: `${process.env.PUBLIC_URL}/images/backgrounds/attic_background.jpg`,
      characterImages: {
          protagonist: `${process.env.PUBLIC_URL}/images/characters/protagonist.png`,
          ben: `${process.env.PUBLIC_URL}/images/characters/ben.png`
      },
      items: ['compass'],
      collectibles: ['compass'],
      soundEffect: 'magical_glow',
      choices: [
          {
              text: "Examine the glowing symbol",
              nextScene: 'symbolDiscovery'
          },
          {
              text: "Head to forest",
              nextScene: 'forestPrepared',
              requirement: {
                  items: ['compass']
              }
          }
      ]
  },

  forestExploration: {
      id: 'forestExploration',
      text: "The forest is dense and mysterious. Your compass helps guide the way.",
      backgroundImage: `${process.env.PUBLIC_URL}/images/backgrounds/forest_background.jpg`,
      characterImages: {
          protagonist: `${process.env.PUBLIC_URL}/images/characters/protagonist.png`,
          ben: `${process.env.PUBLIC_URL}/images/characters/ben.png`
      },
      choices: [
          {
              text: "Follow the path",
              nextScene: 'treasureLocation'
          },
          {
              text: "Return to forest entrance",
              nextScene: 'forestEntrance'
          }
      ]
  },

  treasureLocation: {
      id: 'treasureLocation',
      text: "You've found it! The treasure chest lies before you in a magical clearing.",
      backgroundImage: `${process.env.PUBLIC_URL}/images/backgrounds/treasure_background.jpg`,
      characterImages: {
          protagonist: `${process.env.PUBLIC_URL}/images/characters/protagonist.png`,
          ben: `${process.env.PUBLIC_URL}/images/characters/ben.png`
      },
      choices: [
          {
              text: "Open the chest",
              nextScene: 'endingTreasure',
              requirement: {
                  items: ['old_map', 'compass']
              }
          },
          {
              text: "Explore the clearing",
              nextScene: 'endingMagic'
          }
      ]
  },

  endingTreasure: {
      id: 'endingTreasure',
      text: "Congratulations! You've found the treasure and completed your adventure!",
      backgroundImage: `${process.env.PUBLIC_URL}/images/backgrounds/treasure_background.jpg`,
      characterImages: {
          protagonist: `${process.env.PUBLIC_URL}/images/characters/protagonist.png`,
          ben: `${process.env.PUBLIC_URL}/images/characters/ben.png`
      },
      choices: [
          {
              text: "Play Again",
              nextScene: 'intro'
          }
      ]
  },

  endingMagic: {
      id: 'endingMagic',
      text: "You discover the true magic of the forest and decide to keep exploring its mysteries!",
      backgroundImage: `${process.env.PUBLIC_URL}/images/backgrounds/forest_background.jpg`,
      characterImages: {
          protagonist: `${process.env.PUBLIC_URL}/images/characters/protagonist.png`,
          ben: `${process.env.PUBLIC_URL}/images/characters/ben.png`
      },
      choices: [
          {
              text: "Play Again",
              nextScene: 'intro'
          }
      ]
  }
};

// Collectible items configuration
export const items = {
  old_map: {
      id: 'old_map',
      name: "Mysterious Map",
      image: `${process.env.PUBLIC_URL}/images/items/old_map.png`,
      description: "An ancient map with mysterious symbols"
  },
  compass: {
      id: 'compass',
      name: "Navigation Compass",
      image: `${process.env.PUBLIC_URL}/images/items/compass.png`,
      description: "A reliable compass for forest navigation"
  }
};

// Scene requirements
export const sceneRequirements = {
  forestPrepared: ['compass'],
  treasureLocation: ['old_map', 'compass'],
  endingTreasure: ['old_map', 'compass']
};