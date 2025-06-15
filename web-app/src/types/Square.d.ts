type Square = {
    sx: number;
    sy: number;
    ex: number;
    ey: number;
};

type SquareWithId = Square & {
    region_id: string;
};