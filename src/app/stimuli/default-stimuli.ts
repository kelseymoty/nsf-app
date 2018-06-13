import { Study, Condition, Trial, Picture, Coordinate } from './stimuli';

export const STUDIES: Study = {
    id: 1,
    conditions: [
        {
            id: 'first',
            trials: [
                {
                    id: '1',
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
                        picture: ["../assets/image/PiDi_2a_Moment.jpg"],
                    },
                    button: ["zarpie", "gorp"]
                },
                {
                    id: "3",
                    picture1: [""],
                    sound1: [""],
                    movie: ["../assets/video/PiDi_2c.mp4"],
                    picture: {
                        picture: ["../assets/image/PiDi_2d_Moment.jpg"],
                        // TODO make correct coordinates
                        coordinate: [
                            {
                                coordinate: "0,0,211,766",
                                disabled: false
                            },
                            {
                                coordinate: "212,0,405,766",
                                disabled: false
                            },
                        ]
                    },
                },
                {
                    id: "4",
                    picture1: [""],
                    sound1: [""],
                    movie: ["../assets/video/PiDi_2d.mp4"],
                    picture: {
                        picture: ["../assets/image/PiDi_2d_Moment.jpg"],
                        // TODO make correct coordinates
                        coordinate: [
                            {
                                coordinate: "0,385,215,660",
                                disabled: false
                            },
                            {
                                coordinate: "216,385,410,660",
                                disabled: false
                            },
                        ]
                    },
                },
            ]
        },
        {
            id: 'familiar',
            trials: [
                {
                    id: 'cheetah',
                    picture1: [""],
                    sound1: [""],
                    movie: ["../assets/video/chintro1.mp4"],
                    picture: {
                        picture: ["../assets/image/cheetahs.jpg"],
                        coordinate: [
                            {
                                coordinate: "0,576,1023,767",
                                disabled: false
                            },
                            {
                                coordinate: "0,441,1023,575",
                                disabled: false
                            },
                            {
                                coordinate: "0,351,1023,440",
                                disabled: false
                            },
                            {
                                coordinate: "0,156,1023,350",
                                disabled: false
                            },
                            {
                                coordinate: "0,0,1023,155",
                                disabled: false
                            }
                        ]
                    },
                    sound: ["../assets/audio/ch_1.m4a"]
                },
                {
                    id: "porcupine",
                    picture1: [""],
                    sound1: [""],
                    movie: ["../assets/video/pointro1.mp4"],
                    picture: {
                        picture: ["../assets/image/porcupines.jpg"],
                        coordinate: [
                            {
                                coordinate: "0,578,224,767",
                                disabled: false
                            },
                            {
                                coordinate: "236,490,440,640",
                                disabled: false
                            },
                            {
                                coordinate: "450,360,640,512",
                                disabled: false
                            },
                            {
                                coordinate: "650,230,830,390",
                                disabled: false
                            },
                            {
                                coordinate: "840,0,1023,270",
                                disabled: false
                            }
                        ]
                    },
                    sound: ["../assets/audio/po_1.m4a"]
                },
                {
                    id: "kangaroo",
                    picture1: [""],
                    sound1: [""],
                    movie: ["../assets/video/kgintro1.mp4"],
                    picture: {
                        picture: ["../assets/image/kangaroos.jpg"],
                        coordinate: [
                            {
                                coordinate: "0,0,211,766",
                                disabled: false
                            },
                            {
                                coordinate: "212,0,405,766",
                                disabled: false
                            },
                            {
                                coordinate: "406,0,600,766",
                                disabled: false
                            },
                            {
                                coordinate: "601,0,795,766",
                                disabled: false
                            },
                            {
                                coordinate: "796,0,1023,766",
                                disabled: false
                            }
                        ]
                    },
                    sound: ["../assets/audio/kg_1.m4a"]
                },
                {
                    id: "skunk",
                    picture1: [""],
                    sound1: [""],
                    movie: ["../assets/video/skintro1.mp4"],
                    picture: {
                        picture: ["../assets/image/skunks.jpg"],
                        coordinate: [
                            {
                                coordinate: "0,385,215,660",
                                disabled: false
                            },
                            {
                                coordinate: "216,385,410,660",
                                disabled: false
                            },
                            {
                                coordinate: "411,385,605,660",
                                disabled: false
                            },
                            {
                                coordinate: "606,385,800,660",
                                disabled: false
                            },
                            {
                                coordinate: "801,385,1023,660",
                                disabled: false
                            }
                        ]
                    },
                    sound: ["../assets/audio/sk_1.m4a"]
                },
            ]
        },
        {
            id: "novel",
            trials: [
                {
                    id: "virdex",
                    picture1: [""],
                    sound1: [""],
                    movie: ["../assets/video/vdintro1.mp4"],
                    picture: {
                        picture: ["../assets/image/virdexes.jpg"],
                        coordinate: [
                            {
                                coordinate: "0,0,244,145",
                                disabled: false
                            },
                            {
                                coordinate: "190,155,425,295",
                                disabled: false
                            },
                            {
                                coordinate: "374,305,600,440",
                                disabled: false
                            },
                            {
                                coordinate: "560,450,785,580",
                                disabled: false
                            },
                            {
                                coordinate: "725,590,1013,740",
                                disabled: false
                            }
                        ]
                    },
                    sound: ["../assets/audio/vd_1.m4a"]
                },
                {
                    id: "tulver",
                    picture1: [""],
                    sound1: [""],
                    movie: ["../assets/video/tvintro1.mp4"],
                    picture: {
                        picture: ["../assets/image/tulvers.jpg"],
                        coordinate: [
                            {
                                coordinate: "770,600,1023,766",
                                disabled: false
                            },
                            {
                                coordinate: "580,460,825,570",
                                disabled: false
                            },
                            {
                                coordinate: "400,325,645,435",
                                disabled: false
                            },
                            {
                                coordinate: "223,180,465,300",
                                disabled: false
                            },
                            {
                                coordinate: "0,0,284,157",
                                disabled: false
                            }
                        ]
                    },
                    sound: ["../assets/audio/tv_1.m4a"]
                },
                {
                    id: "upos",
                    picture1: [""],
                    sound1: [""],
                    movie: ["../assets/video/upintro1.mp4"],
                    picture: {
                        picture: ["../assets/image/uposes.jpg"],
                        coordinate: [
                            {
                                coordinate: "0,0,191,210",
                                disabled: false
                            },
                            {
                                coordinate: "210,175,380,350",
                                disabled: false
                            },
                            {
                                coordinate: "400,306,565,480",
                                disabled: false
                            },
                            {
                                coordinate: "580,435,750,615",
                                disabled: false
                            },
                            {
                                coordinate: "770,550,1020,750",
                                disabled: false
                            }
                        ]
                    },
                    sound: ["../assets/audio/up_1.m4a"]
                },
                {
                    id: "sibu",
                    picture1: [""],
                    sound1: [""],
                    movie: ["../assets/video/sbintro1.mp4"],
                    picture: {
                        picture: ["../assets/image/sibus.jpg"],
                        coordinate: [
                            {
                                coordinate: "0,0,200,195",
                                disabled: false
                            },
                            {
                                coordinate: "220,140,405,328",
                                disabled: false
                            },
                            {
                                coordinate: "420,270,600,460",
                                disabled: false
                            },
                            {
                                coordinate: "620,405,800,600",
                                disabled: false
                            },
                            {
                                coordinate: "815,545,1023,767",
                                disabled: false
                            }
                        ]
                    },
                    sound: ["../assets/audio/sb_1.m4a"]
                },
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