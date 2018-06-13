// TODO change Study id to string 
export class Study {
    id: number; 
    conditions: Condition[];
}

export class Condition {
    id: string;
    trials: Trial[];
}

export class Trial {
    id: string; 
    picture1?: string[];
    sound1?: string[];
    movie?: string[]; 
    sound?: string[];
    picture?: Picture;
    button?: string[]; 
}

export class Picture {
    picture: string[];
    coordinate?: Coordinate[];
}

export class Coordinate {
    coordinate: string;
    disabled: boolean;
}

// DEPRECATED for this study
// export class AttnCheck {
//     sound: string[];
// }

