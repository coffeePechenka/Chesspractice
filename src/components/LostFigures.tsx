import React from 'react'
import { Figure } from '../models/figures/Figure';

interface LostFiguresProps {
    title: string;
    figures: Figure[]
}

export default function LostFigures({ title, figures } : LostFiguresProps ) {
  return (
    <div className='lost'>
        <h3>{title}</h3>
        {figures.map(figure => 
            <div key={figure.id}>
            {figure.name} {figure.logo && <img width={20} height={20} src={figure.logo} /> }
            </div>
        )}
    </div>
  )
}
