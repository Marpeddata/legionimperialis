export type BaseModel = {
    name: string;
    movement: string;
    save: string;
    caf: string;
    morale: string;
    wounds: number;
    updatedAt: Date;
}

export type WeaponModel = {
    name: string;
    range: string;
    dice: number;
    toHit: string;
    ap: string;
    traits: string[]; // change to a many to many with a traits table/collection
    updatedAt: Date;
}

export type DatasheetModel = {
    name: string;
    unitType: string;
    defNumberUnit: number;
    info: string;
    pointsValue: number;
    units: string[];
    weapons: string[];
    specialRules: string[];
    updatedAt: Date;
}