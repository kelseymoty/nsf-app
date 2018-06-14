import { Study, Block, Trial, Picture, Coordinate } from "./stimuli";

export const STUDIES: Study = {
  // make it so database records string for study name instead of number, so we can separate study names.
  name: "pidi",
  // conditions won't be best word to use here in future. Tasks?
  blocks: [
    {
      id: "first",
      trials: [
        {
          id: "1",
          movie: ["../assets/video/PiDi_1.mp4", "../assets/video/PiDi_2a.mp4"],
          picture: {
            picture: ["../assets/image/PiDi_2a_Moment.jpg"]
          },
          button: ["zarpie", "gorp"]
        },
        {
          id: "2",
          movie: ["../assets/video/PiDi_2b.mp4"],
          picture: {
            picture: ["../assets/image/PiDi_2a_Moment.jpg"]
          },

          button: ["zarpie", "gorp"]
        },
        {
          id: "3",
          movie: ["../assets/video/PiDi_2c.mp4"],
          picture: {
            picture: ["../assets/image/PiDi_2d_Moment.jpg"],
            coordinate: [
              {
                coordinate: "475,270,780,850",
                disabled: false
              },
              {
                coordinate: "1130,270,1400,850",
                disabled: false
              }
            ]
          }
        },
        {
          id: "4",
          movie: ["../assets/video/PiDi_2d.mp4"],
          picture: {
            picture: ["../assets/image/PiDi_2d_Moment.jpg"],
            coordinate: [
              {
                coordinate: "475,270,780,850",
                disabled: false
              },
              {
                coordinate: "1130,270,1400,850",
                disabled: false
              }
            ]
          }
        },
        {
          id: "5",
          movie: ["../assets/video/PiDi_2e.mp4"]
        }
      ]
    },
    {
      id: "specific1",
      randomize: true,
      // pickOne: true, // NOTE: pickOne implies randomized; setting 'randomized: true' is redundant
      trials: [
        {
          id: "pizza1",
          movie: [
            "../assets/video/PiDi_3_1a_sg.mp4",
            "../assets/video/PiDi_3_1b.mp4"
          ],
          // instead of primary, what about if it were a property called order and it took a number? that way it could be
          // more flexible to handle instances where maybe you want an order for first two or more trials but latter to be random?
          primary: true // run first regardless of randomize property
        },
        {
          id: "pizza2",
          movie: ["../assets/video/PiDi_3_1c.mp4"],
          picture: {
            picture: ["../assets/image/PiDi_3_1c_gf_Moment.jpg"],
            coordinate: [
              {
                coordinate: "405,730,610,995",
                disabled: false
              },
              {
                coordinate: "1300,730,1510,995",
                disabled: false
              }
            ]
          }
        },
        {
          id: "pizza3",
          movie: ["../assets/video/PiDi_3_1d.mp4"],
          picture: {
            picture: ["../assets/image/PiDi_3_1d_gf_Moment.jpg"],
            coordinate: [
              {
                coordinate: "405,730,610,995",
                disabled: false
              },
              {
                coordinate: "1300,730,1510,995",
                disabled: false
              }
            ]
          }
        }
      ]
    },
    {
      id: "specific2",
      randomize: true,
      // pickOne: true, // NOTE: pickOne implies randomized; setting 'randomized: true' is redundant
      trials: [
        {
          id: "paint1",
          movie: [
            "../assets/video/PiDi_3_2a_sg.mp4",
            "../assets/video/PiDi_3_2b.mp4"
          ],
          // instead of primary, what about if it were a property called order and it took a number? that way it could be
          // more flexible to handle instances where maybe you want an order for first two or more trials but latter to be random?
          primary: true // run first regardless of randomize property
        },
        {
          id: "paint2",
          movie: ["../assets/video/PiDi_3_2c.mp4"],
          picture: {
            picture: ["../assets/image/PiDi_3_2c_gf_Moment.jpg"],
            coordinate: [
              {
                coordinate: "405,730,610,995",
                disabled: false
              },
              {
                coordinate: "1300,730,1510,995",
                disabled: false
              }
            ]
          }
        },
        {
          id: "paint3",
          movie: ["../assets/video/PiDi_3_2d.mp4"],
          picture: {
            picture: ["../assets/image/PiDi_3_2d_gf_Moment.jpg"],
            coordinate: [
              {
                coordinate: "405,730,610,995",
                disabled: false
              },
              {
                coordinate: "1300,730,1510,995",
                disabled: false
              }
            ]
          }
        }
      ]
    },
    {
      id: "specific3",
      randomize: true,
      // pickOne: true, // NOTE: pickOne implies randomized; setting 'randomized: true' is redundant
      trials: [
        {
          id: "piano1",
          movie: [
            "../assets/video/PiDi_3_3a_sg.mp4",
            "../assets/video/PiDi_3_3b.mp4"
          ],
          // instead of primary, what about if it were a property called order and it took a number? that way it could be
          // more flexible to handle instances where maybe you want an order for first two or more trials but latter to be random?
          primary: true // run first regardless of randomize property
        },
        {
          id: "piano2",
          movie: ["../assets/video/PiDi_3_3c.mp4"],
          picture: {
            picture: ["../assets/image/PiDi_3_3c_gf_Moment.jpg"],
            coordinate: [
              {
                coordinate: "405,730,610,995",
                disabled: false
              },
              {
                coordinate: "1300,730,1510,995",
                disabled: false
              }
            ]
          }
        },
        {
          id: "piano3",
          movie: ["../assets/video/PiDi_3_3d.mp4"],
          picture: {
            picture: ["../assets/image/PiDi_3_3d_gf_Moment.jpg"],
            coordinate: [
              {
                coordinate: "405,730,610,995",
                disabled: false
              },
              {
                coordinate: "1300,730,1510,995",
                disabled: false
              }
            ]
          }
        }
      ]
    },
    {
      id: "specific4",
      randomize: true,
      // pickOne: true, // NOTE: pickOne implies randomized; setting 'randomized: true' is redundant
      trials: [
        {
          id: "tree1",
          movie: [
            "../assets/video/PiDi_3_4a_sg.mp4",
            "../assets/video/PiDi_3_4b.mp4"
          ],
          // instead of primary, what about if it were a property called order and it took a number? that way it could be
          // more flexible to handle instances where maybe you want an order for first two or more trials but latter to be random?
          primary: true // run first regardless of randomize property
        },
        {
          id: "tree2",
          movie: ["../assets/video/PiDi_3_4c.mp4"],
          picture: {
            picture: ["../assets/image/PiDi_3_4c_gf_Moment.jpg"],
            coordinate: [
              {
                coordinate: "405,730,610,995",
                disabled: false
              },
              {
                coordinate: "1300,730,1510,995",
                disabled: false
              }
            ]
          }
        },
        {
          id: "tree3",
          movie: ["../assets/video/PiDi_3_4d.mp4"],
          picture: {
            picture: ["../assets/image/PiDi_3_4d_gf_Moment.jpg"],
            coordinate: [
              {
                coordinate: "405,730,610,995",
                disabled: false
              },
              {
                coordinate: "1300,730,1510,995",
                disabled: false
              }
            ]
          }
        }
      ]
    },
    {
      id: "last",
      trials: [
        {
          id: "1",
          movie: ["../assets/video/PiDi_4.mp4"],
          picture: {
            picture: ["../assets/image/PiDi_4_Moment.jpg"],
            // TODO make correct coordinates
            coordinate: [
              {
                coordinate: "0,0,211,766",
                disabled: false
              },
              {
                coordinate: "212,0,405,766",
                disabled: false
              }
            ]
          }
        },
        {
          id: "2",
          movie: ["../assets/video/PiDi_5a.mp4"],
          picture: {
            picture: ["../assets/image/PiDi_5a_Moment.jpg"],
            // TODO make correct coordinates
            coordinate: [
              {
                coordinate: "0,0,211,766",
                disabled: false
              },
              {
                coordinate: "212,0,405,766",
                disabled: false
              }
            ]
          }
        },
        {
          id: "3",
          movie: ["../assets/video/PiDi_5b.mp4"],
          picture: {
            picture: ["../assets/image/PiDi_5b_Moment.jpg"],
            // TODO make correct coordinates
            coordinate: [
              {
                coordinate: "0,0,211,766",
                disabled: false
              },
              {
                coordinate: "212,0,405,766",
                disabled: false
              }
            ]
          }
        },
        {
          id: "4",
          movie: ["../assets/video/PiDi_5c.mp4"],
          picture: {
            picture: ["../assets/image/PiDi_5c_Moment.jpg"],
            // TODO make correct coordinates
            coordinate: [
              {
                coordinate: "0,385,215,660",
                disabled: false
              },
              {
                coordinate: "216,385,410,660",
                disabled: false
              }
            ]
          }
        },
        {
          id: "5",
          movie: ["../assets/video/PiDi_5d.mp4"],
          picture: {
            picture: ["../assets/image/PiDi_5d_Moment.jpg"],
            // TODO make correct coordinates
            coordinate: [
              {
                coordinate: "0,385,215,660",
                disabled: false
              },
              {
                coordinate: "216,385,410,660",
                disabled: false
              }
            ]
          }
        },
        {
          id: "6",
          movie: ["../assets/video/PiDi_5e.mp4"],
          picture: {
            picture: ["../assets/image/PiDi_5e_Moment.jpg"],
            // TODO make correct coordinates
            coordinate: [
              {
                coordinate: "0,385,215,660",
                disabled: false
              },
              {
                coordinate: "216,385,410,660",
                disabled: false
              }
            ]
          }
        }
      ]
    }
  ]
};

// export const ATTENTIONCHECK: AttnCheck = {
//     sound: ["../assets/audio/cow.mp3",
//         "../assets/audio/chick.mp3",
//         "../assets/audio/dog.mp3",
//         "../assets/audio/horse.mp3"]
// };

// rename this condition because this should be the stimuli grouped by condition??
// export const STIMULIGROUPED = [
//     {id: "group1", stimuli: ["cheetah1", "porcupine1", "kangaroo1"]},
//     {id: "group2", stimuli: ["cheetah2", "porcupine2", "kangaroo2"]},
//     {id: "group3", stimuli: ["cheetah3", "porcupine3", "kangaroo3"]},
// ];
