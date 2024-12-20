import { Figure, FigureNames } from "./Figure";

import blackLogo from '../../assets/queen_gold.png'
import whiteLogo from '../../assets/queen_white.png'
import { Colors } from "../Colors";
import { Cell } from "../Cell";

export class Queen extends Figure {


    constructor (color: Colors, cell: Cell) {
        super (color, cell)
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo
        this.name = FigureNames.QUEEN 
    }

    canMove(target: Cell) : boolean {
        if(!super.canMove(target))
            return false
        if(this.cell.isEmptyVertical(target))
            return true
        if(this.cell.isEmptyHorizontal(target))
            return true
        if(this.cell.isEmptyDiagonal(target))
            return true
        return false
    }
}