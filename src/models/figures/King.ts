import { Figure, FigureNames } from "./Figure";

import blackLogo from '../../assets/king_gold.png'
import whiteLogo from '../../assets/king_white.png'
import { Colors } from "../Colors";
import { Cell } from "../Cell";

export class King extends Figure {

    constructor (color: Colors, cell: Cell) {
        super (color, cell)
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo
        this.name = FigureNames.KING
    }

    canMove(target: Cell) : boolean {
        if(!super.canMove(target))
            return false
        if (
            Math.abs(target.x - this.cell.x) <= 1 && // Разница по горизонтали не больше 1
            Math.abs(target.y - this.cell.y) <= 1 && // Разница по вертикали не больше 1
            (this.cell.board.getCell(target.x, target.y).isEmpty() || // Целевая клетка пуста
            this.cell.board.getCell(target.x, target.y).figure?.color !== this.cell.figure?.color) // Или занята фигурой противника
        ) {
            return true;
        }
                
        return false

    }
}