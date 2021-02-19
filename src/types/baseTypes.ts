export interface ObjectOfNumbers {
    [key: string]: number;
}

export interface ObjectOfStrings {
    [key: string]: string;
}

export interface ObjectOfColorGetters {
    [key: string]: (opacity: number) => string;
}
