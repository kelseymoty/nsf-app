// TODO change Study id to string
export class Study {
  name: string;
  blocks: Block[];
}

export class Block {
  id: string;
  randomize?: boolean;
  pickOne?: boolean; // implies randomize. not yet implemented
  trials: Trial[];
}

// TODO wording is still a bit weird. a group of trials should have
// the option to be randomized. but here it is blocks
// or is that best -- anything within block is randomized? and trial -> task?
// better word for it?

// more -- why is trials a group? everything within the blocks is a block, and
// thus an item within it. as it is now, there's nesting which may not be necessary,
// and at the very least could be labeled better

// or if block -> blocks, and trial -> block, would make sense

export class Trial {
  id: string;
  picture1?: string[];
  sound1?: string[];
  movie?: string[];
  sound?: string[];
  picture?: Picture;
  button?: string[];
  primary?: boolean;
  dependencies?: Trial[]; // not implemented
}

export class Picture {
  picture: string[];
  coordinate?: Coordinate[];
}

export class Coordinate {
  coordinate: string;
  disabled: boolean;
}
