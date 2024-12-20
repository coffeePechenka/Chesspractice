import React, { useEffect, useRef, useState } from 'react'
import { Player } from '../models/Player'
import { Colors } from '../models/Colors'

interface TimeProps {
    currentPlayer: Player | null
    restart: () => void
}

export default function Timer({ currentPlayer, restart } : TimeProps) {
    const [blackTime, setBlackPlayer] = useState(300)
    const [whiteTime, setwhitePlayer] = useState(300)
    const timer = useRef<null | ReturnType<typeof setInterval>>(null)

    useEffect(() => {
        startTimer()
    }, [currentPlayer])

    function startTimer(){
        if(timer.current) {
            clearInterval(timer.current)
        }
        const callback = currentPlayer?.color === Colors.WHITE ? decrementWhiteTimer
        : decrementBlackTimer
        timer.current = setInterval(callback, 1000)
    }

    function decrementBlackTimer() {
        setBlackPlayer(prev => prev - 1)
    }

    function decrementWhiteTimer() {
        setwhitePlayer(prev => prev - 1)
    }

    const handleRestart = () => {
        setwhitePlayer(300)
        setBlackPlayer(300)
        restart()
    }

  return (
    <div>
        <div>
            <button onClick={handleRestart}>Restart game</button>
        </div>
        <h2>Черные - {blackTime}</h2>
        <h2>Белые - {whiteTime}</h2>
    </div>
  )
}
